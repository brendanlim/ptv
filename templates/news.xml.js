var Template = function() { return `<?xml version="1.0" encoding="UTF-8" ?>
  <document>
    <catalogTemplate> 
      <list> 
        <section> 
           <listItemLockup> 
             <title>News</title>
             <decorationLabel>2</decorationLabel>
             <relatedContent> 
               <grid>
                 <section>                  
                  // <lockup videoURL="http://stream3.news5.ph/aksyon/aksyonplayout/playlist.m3u8">
                  //    <img src="${this.BASEURL}images/aksyon-news-5.jpg" width="362" height="267" />
                  //    <title>Aksyon News 5</title>
                  // </lockup>
                  <lockup videoURL="http://livestream01.untvweb.com:1935/public/untvwebstream/playlist.m3u8">
                     <img src="${this.BASEURL}images/untv.jpg" width="600" height="360" />
                     <title>UNTV</title>
                  </lockup>
                 </section>
               </grid>
             </relatedContent>
           </listItemLockup>
        </section>
      </list>
    </catalogTemplate>
  </document>`
}