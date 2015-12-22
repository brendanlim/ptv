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
          <lockup audioURL="http://www.surfmusic.de/m3u/102-7-star-fm-manila,14588.m3u">
             <img src="${this.BASEURL}images/radio.png" width="308" height="308" />
             <title class="showTextOnHighlight">102.7 Star FM Manila</title>
          </lockup>
          <lockup audioURL="http://www.surfmusic.de/m3u/105-1-crossover-fm-manila,5254.m3u">
             <img src="${this.BASEURL}images/radio.png" width="308" height="308" />
             <title class="showTextOnHighlight">105.1 Crossover FM Manila</title>
          </lockup>
          <lockup audioURL="http://www.surfmusic.de/m3u/90-7-love-radio-manila,11791.m3u">
             <img src="${this.BASEURL}images/radio.png" width="308" height="308" />
             <title class="showTextOnHighlight">90.7 Love Radio Manila</title>
          </lockup>
          <lockup audioURL="http://www.surfmusic.de/m3u/90-7-love-radio-manila,11791.m3u">
             <img src="${this.BASEURL}images/radio.png" width="308" height="308" />
             <title class="showTextOnHighlight">Aksyon Radio Iloilo 720</title>
          </lockup>
        </section>
      </shelf>
    </collectionList>
  </stackTemplate>
</document>`
}
