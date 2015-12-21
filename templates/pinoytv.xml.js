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
      <description>An always updating collection of Filipino TV and music across the internet. Check often for new TV and music selections.</description>
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
    </collectionList>
  </stackTemplate>
</document>`
}
