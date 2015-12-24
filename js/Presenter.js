var Presenter = {
  defaultPresenter: function(xml) {
    if(this.loadingIndicatorVisible) {
        navigationDocument.replaceDocument(xml, this.loadingIndicator);
        this.loadingIndicatorVisible = false;
    } else {
        navigationDocument.pushDocument(xml);
    }
  },

	makeDocument: function(resource) {
		if (!Presenter.parser) {
			Presenter.parser = new DOMParser();
		}
		var doc = Presenter.parser.parseFromString(resource, "application/xml");
		return doc;
	},

	modalDialogPresenter: function(xml) {
		navigationDocument.presentModal(xml);
	},

	menuBarItemPresenter: function(xml, ele) {
	  var feature = ele.parentNode.getFeature("MenuBarDocument");
	  if (feature) {
	    var currentDoc = feature.getDocument(ele);
	    if (!currentDoc) {
	      feature.setDocument(xml, ele);
	    }
	  }
	},

	pushDocument: function(xml) {
		navigationDocument.pushDocument(xml);
	},

  showLoadingIndicator: function(presentation) {
    if (!this.loadingIndicator) {
        this.loadingIndicator = this.makeDocument(this.loadingTemplate);
    }
      
    if (!this.loadingIndicatorVisible && presentation != "modalDialogPresenter" && presentation != "menuBarItemPresenter") {
      navigationDocument.pushDocument(this.loadingIndicator);
      this.loadingIndicatorVisible = true;
    }
  },

  removeLoadingIndicator: function() {
    if (this.loadingIndicatorVisible) {
      navigationDocument.removeDocument(this.loadingIndicator);
      this.loadingIndicatorVisible = false;
    }
  },

  createMediaItem: function(type, url, title) {
	    var mediaItem = new MediaItem(type, url)
	    if(title) {
	    	mediaItem.title = title;
	    }

	    return mediaItem;
  },

  createPlayer: function(mediaItem, title) {
	    var player = new Player();
	    var playlist = new Playlist();
	    
	    player.playlist = playlist;
	    player.playlist.push(mediaItem);

    	player.addEventListener("stateDidChange", function(ev) {
  	    GoogleAnalytics.event(title, ev.state);
	    }, false);  

	    return player;
  },

  playVideo: function(videoURL, title) {
  	GoogleAnalytics.event(title, "selected"); 

  	var mediaItem = this.createMediaItem("video", videoURL)
  	var player = this.createPlayer(mediaItem, title);
    player.present();
  },

  playAudio: function(audioURL, title) {
  	GoogleAnalytics.event(title, "selected"); 

  	var mediaItem = this.createMediaItem("audio", audioURL, title)
  	var player = this.createPlayer(mediaItem, title);
    player.present();
  },

	load: function(event) {
		console.log(event);

  	var self = this,
      	ele = event.target,
        templateURL = ele.getAttribute("template"),
        presentation = ele.getAttribute("presentation"),
      	videoURL = ele.getAttribute("videoURL"),
      	audioURL = ele.getAttribute("audioURL"),
      	title = ele.getAttribute("title");

  	if(videoURL) {
  		self.playVideo(videoURL, title);

  	} else if (audioURL) {
  		self.playAudio(audioURL, title);

  	} else if (templateURL) {

			self.showLoadingIndicator(presentation);
      resourceLoader.loadResource(templateURL,
        function(resource) {
          if (resource) {
            var doc = self.makeDocument(resource);
            doc.addEventListener("select", self.load.bind(self));

            if (self[presentation] instanceof Function) {
                self[presentation].call(self, doc, ele);
            } else {
                self.defaultPresenter.call(self, doc);
            }
          }
        }
      );
    }
	},

  loadingTemplate: `<?xml version="1.0" encoding="UTF-8" ?>
  <document>
    <loadingTemplate>
      <activityIndicator>
        <text>Loading...</text>
      </activityIndicator>
    </loadingTemplate>
  </document>`
}