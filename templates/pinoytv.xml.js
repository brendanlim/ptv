//http://alaska.watchkodi.com/philippines.xml

var Entry = {
  video: function(url, imageURL, title) { return `
    <lockup videoURL="${url}">
       <img src="${imageURL}" width="308" height="308" />
       <title class="showTextOnHighlight">${title}</title>
    </lockup>`
  },

  audio: function(url, title) { return `
    <lockup audioURL="${url}">
       <img src="${this.BASEURL}images/radio.png" width="308" height="308" />
       <title class="showTextOnHighlight">${title}</title>
    </lockup>`
  }
};

var Template = function() { return `<?xml version="1.0" encoding="UTF-8" ?>
  <document>
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
          background-color: #090014;
        }
      }
      </style>
    </head>
    <stackTemplate class="darkBackgroundColor" theme="dark">
      <banner>
        <background>
          <img src="${this.BASEURL}images/header.png" width="1920" height="360" />
        </background>
        <description>An always updating collection of Filipino TV and radio</description>
      </banner>
      <collectionList>
        <shelf>
          <header>
            <title>Television</title>
          </header>
          <section>
            ${Entry.video(
              "http://livestream01.untvweb.com:1935/public/untvwebstream/playlist.m3u8",
              this.BASEURL + "images/tv/untv.png", 
              "UNTV")}

            ${Entry.video(
              "http://stream3.news5.ph/aksyon/aksyonplayout/playlist.m3u8",
              this.BASEURL + "images/tv/aksyon.png", 
              "Aksyon News 5")}

            ${Entry.video(
              "http://churchrus2-lh.akamaihd.net/i/COCTesting_1@57550/master.m3u8",
              this.BASEURL + "images/tv/inctv.png", 
              "INCTV HD")}

            ${Entry.video(
              "http://iphone-streaming.ustream.tv/ustreamVideo/10646391/streams/live/playlist.m3u8",
              this.BASEURL + "images/tv/tvmaria.png", 
              "TV Maria")}
          </section>
        </shelf>
        <shelf>
          <header>
            <title>Radio</title>
          </header>
          <section>
            ${Entry.audio(
              "http://icecast.eradioportal.com:8000/easy_rock.m3u",
              "96.3 Easy Rock, Manila")}

            ${Entry.audio(
              "http://icecast.eradioportal.com:8000/monsterrx.m3u",
              "93.1 Monster Radio, Manila")}
          </section>
        </shelf>
      </collectionList>
    </stackTemplate>
  </document>`
}
