var Template = function() { return `<?xml version="1.0" encoding="UTF-8" ?>
  <document>
    <catalogTemplate> 
      <banner> 
        <title>Pinoy TV</title>
      </banner>
      <list> 
        <section> 
           <listItemLockup> 
             <title>Networks</title>
             <decorationLabel>13</decorationLabel>
                  //1. add from here
             <relatedContent> 
               <grid>
                 <section> 
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