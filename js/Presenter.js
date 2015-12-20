var Presenter = {
  defaultPresenter: function(xml) {
    if(this.loadingIndicatorVisible) {
        navigationDocument.replaceDocument(xml, this.loadingIndicator);
        this.loadingIndicatorVisible = false;
    } else {
        navigationDocument.pushDocument(xml);
    }
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

	makeDocument: function(resource) {
		if (!Presenter.parser) {
			Presenter.parser = new DOMParser();
		}
		alert('hi')
		var doc = Presenter.parser.parseFromString(resource, "application/xml");
		alert('wtf')
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

	load: function(event) {
  	var self = this,
      	ele = event.target,
        templateURL = ele.getAttribute("template"),
        presentation = ele.getAttribute("presentation"),
      	videoURL = ele.getAttribute("videoURL");

  	if(videoURL) {
	    var player = new Player();
	    var playlist = new Playlist();
	    var mediaItem = new MediaItem("video", videoURL);
	    
	    player.playlist = playlist;
	    player.playlist.push(mediaItem);
	    player.present();
  	}

  	if (templateURL) {
  		self.showLoadingIndicator(presentation);

      resourceLoader.loadResource(templateURL,
        function(resource) {
          if (resource) {
            var doc = self.makeDocument(resource);
            doc.addEventListener("select", self.load.bind(self));
            doc.addEventListener("highlight", self.load.bind(self));

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
}