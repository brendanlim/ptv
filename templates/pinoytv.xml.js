videoEntry: function(url, imageURL, title) { return `
  <lockup videoURL="${url}">
     <img src="${imageURL}" width="308" height="308" />
     <title class="showTextOnHighlight">${title}</title>
  </lockup>`
}

audioEntry: function(url, title) { return `
  <lockup audioURL="${url}">
     <img src="${this.BASEURL}images/radio.png" width="308" height="308" />
     <title class="showTextOnHighlight">${title}</title>
  </lockup>`
}


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
          ${videoEntry("http://livestream01.untvweb.com:1935/public/untvwebstream/playlist.m3u8",
            this.BASEURL + "images/tv/untv.png",
            "UNTV")}
          
          <lockup videoURL="http://livestream01.untvweb.com:1935/public/untvwebstream/playlist.m3u8">
             <img src="${this.BASEURL}images/tv/untv.png" width="308" height="308" />
             <title class="showTextOnHighlight">UNTV</title>
          </lockup>

          <lockup videoURL="http://stream3.news5.ph/aksyon/aksyonplayout/playlist.m3u8">
             <img src="${this.BASEURL}images/tv/aksyon.png" width="308" height="308" />
             <title class="showTextOnHighlight">Aksyon News 5</title>
          </lockup>
        </section>
      </shelf>
      <shelf>
        <header>
          <title>Radio</title>
        </header>
        <section>
          <lockup audioURL="http://icecast.eradioportal.com:8000/easy_rock.m3u">
             <img src="${this.BASEURL}images/radio.png" width="308" height="308" />
             <title class="showTextOnHighlight">96.3 Easy Rock, Manila</title>
          </lockup>
          <lockup audioURL="http://icecast.eradioportal.com:8000/monsterrx.m3">
             <img src="${this.BASEURL}images/radio.png" width="308" height="308" />
             <title class="showTextOnHighlight">93.1 Monster Radio, Manila</title>
          </lockup>
        </section>
      </shelf>
    </collectionList>
  </stackTemplate>
</document>`
}
