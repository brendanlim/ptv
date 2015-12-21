var Template = function() { return `<?xml version="1.0" encoding="UTF-8" ?>
<document>
  <head>
    <style>
    .showTextOnHighlight {
      tv-labels-state: show-on-highlight;
    }
    @media -tv-template and (-tv-uber) {
      .darkBackgroundColor {
        background-color: rgb(4, 27, 97);
      }
    }
    </style>
  </head>
  <stackTemplate class="darkBackgroundColor" theme="dark">
    <banner>
      <background>
        <img src="${this.BASEURL}resources/images/header.jpg" width="1920" height="360" />
      </background>
      <description>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</description>
    </banner>
    <collectionList>
      <shelf>
        <header>
          <title>Television</title>
        </header>
        <section>
          <lockup videoURL="http://livestream01.untvweb.com:1935/public/untvwebstream/playlist.m3u8">
             <img src="${this.BASEURL}images/tv/untv.pnh" width="308" height="308" />
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
             <img src="${this.BASEURL}images/tv/untv.pnh" width="308" height="308" />
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
