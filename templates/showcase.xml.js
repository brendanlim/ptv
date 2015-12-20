var Template = function() { return `<?xml version="1.0" encoding="UTF-8" ?>
  <document>
   <showcaseTemplate mode="showcase">
      // <background>
      //    <img src="path to images on your server/Car_Movie_1920x1080.png" />
      // </background>
      <banner>
         <title>Pinoy TV</title>
         // <row>
         //    <button>
         //       <text>Slideshow</text>
         //    </button>
         // </row>
      </banner>
      <carousel>
         <section>
            <lockup videoURL="http://livestream01.untvweb.com:1935/public/untvwebstream/playlist.m3u8">
               <img src="${this.BASEURL}images/untv.jpg" width="600" height="360" />
               <title>UNTV</title>
            </lockup>
         </section>
      </carousel>
   </showcaseTemplate>
</document>`
}