var Presenter = {
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

	load: function(event) {
  	var self = this,
      	ele = event.target,
      	videoURL = ele.getAttribute("videoURL")

  	if(videoURL) {
	    var player = new Player();
	    var playlist = new Playlist();
	    var mediaItem = new MediaItem("video", videoURL);
	    
	    player.playlist = playlist;
	    player.playlist.push(mediaItem);
	    player.present();
  	}
	},
}