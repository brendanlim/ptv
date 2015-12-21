var Template = function() { return `<?xml version="1.0" encoding="UTF-8" ?>
<document>
  <menuBarTemplate theme="extraLight">
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