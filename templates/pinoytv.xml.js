//http://alaska.watchkodi.com/philippines.xml

var Entry = {
  video: function(url, imageURL, title) { return `
    <lockup videoURL="${url}" title="${title}">
       <img src="${imageURL}" width="542" height="305" />
       <title class="showTextOnHighlight">${title}</title>
    </lockup>`
  },

  audio: function(url, imageURL, title) { return `
    <lockup audioURL="${url}" title="${title}">
       <img src="${imageURL}" width="308" height="308" />
       <title class="showTextOnHighlight">${title}</title>
    </lockup>`
  }
};

var Template = function() { return `<?xml version="1.0" encoding="UTF-8" ?>
  <document onload="GoogleAnalytics.screenview('Listing');">
    <head>
      <style>
      .showTextOnHighlight {
        tv-labels-state: show-on-highlight;
      }
      .titleColor {
        color: #FFFFFF;
        margin-bottom: 10px;
      }
      @media -tv-template and (-tv-uber) {
        .darkBackgroundColor {
          background-color: #240A3A;
        }
      }
      </style>
    </head>
    <stackTemplate class="darkBackgroundColor" theme="dark">
      <banner>
        <background>
          <img src="${this.BASEURL}images/header.png" width="1920" height="360" />
        </background>
        <description>Watch and listen to live Filipino television and radio</description>
      </banner>
      <collectionList>
        <grid>
          <header>
            <title>Television</title>
          </header>
          <section>
            // GMA
            ${Entry.video(
              "http://iphone-streaming.ustream.tv/ustreamVideo/21475190/streams/live/playlist.m3u8",
              this.BASEURL + "images/tv/gma.png", 
              "GMA 7")}

            // News
            ${Entry.video(
              "http://livestream01.untvweb.com:1935/public/untvwebstream/playlist.m3u8",
              this.BASEURL + "images/tv/untv.png", 
              "UNTV")}

            // News
            ${Entry.video(
              "http://stream3.news5.ph/aksyon/aksyonplayout/playlist.m3u8",
              this.BASEURL + "images/tv/aksyon.png", 
              "Aksyon News 5")}

            // Religious
            ${Entry.video(
              "http://churchrus2-lh.akamaihd.net/i/COCTesting_1@57550/master.m3u8",
              this.BASEURL + "images/tv/inctv.png", 
              "INCTV HD")}

            // Religious
            ${Entry.video(
              "http://iphone-streaming.ustream.tv/ustreamVideo/10646391/streams/live/playlist.m3u8",
              this.BASEURL + "images/tv/tvmaria.png", 
              "TV Maria")}
          </section>
        </grid>        

        <shelf>
          <header>
            <title>Television Shows</title>
          </header>
          <section>
            ${Entry.video(
              "http://www.dailymotion.com/cdn/manifest/video/x3j8oy1.m3u8?auth=1451507706-2562-f2dmvybh-6d85d75c990c5a57a8fa57ba94bf0c29",
              this.BASEURL + "images/tv/tvmaria.png",
              "Eat Bulaga")}
          </section>
        </shelf>

        <shelf>
          <header>
            <title>Radio</title>
          </header>
          <section>
            ${Entry.audio(
              "http://radyosingko.news5.ph:8000/stream",
              this.BASEURL + "images/radio.png",
              "Radyo 5, Manila")}

            ${Entry.audio(
              "http://icecast.eradioportal.com:8000/monsterrx.m3u",
              this.BASEURL + "images/radio.png",
              "93.1 Monster Radio, Manila")}
          </section>
        </shelf>
      </collectionList>
    </stackTemplate>
  </document>`
}
