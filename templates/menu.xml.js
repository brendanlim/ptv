var Template = function() { return `<?xml version="1.0" encoding="UTF-8" ?>
<document>
  <head>
    <style>
      .darkBackgroundColor {
        background-color: #140C0A;
      }
    </style>
  </head>
  <menuBarTemplate theme="dark" class="darkBackgroundColor">
    <menuBar>
      <menuItem template="${this.BASEURL}templates/news.xml.js" presentation="menuBarItemPresenter">
        <title>Live TV</title>
      </menuItem>
      <menuItem template="${this.BASEURL}templates/news.xml.js" presentation="menuBarItemPresenter">
        <title>Live Radio</title>
      </menuItem>
      <menuItem template="${this.BASEURL}templates/news.xml.js" presentation="menuBarItemPresenter">
        <title>About</title>
      </menuItem>
    </menuBar>
  </menuBarTemplate>
</document>`
}