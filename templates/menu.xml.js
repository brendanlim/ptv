var Template = function() { return `<?xml version="1.0" encoding="UTF-8" ?>
  <document>
      <menuBarTemplate>
         <menuBar>
            <menuItem template="${this.BASEURL}templates/pinoytv.xml.js" presentation="menuBarItemPresenter">
                <title>News</title>
            </menuItem>
            <menuItem template="${this.BASEURL}templates/news.xml.js"  presentation="menuBarItemPresenter">
               <title>Music</title>
            </menuItem>
            <menuItem template="${this.BASEURL}templates/news.xml.js" 
              presentation="menuBarItemPresenter">
               <title>About</title>
            </menuItem>
         </menuBar>
      </menuBarTemplate>
   </document>`
}
