(function () {

   function simplboxConstructorCall(strId) {
      var preLoadIconOn = function () {
           var newE = document.createElement("div"),
               newB = document.createElement("div");
           newE.setAttribute("id", "simplbox-loading");
           newE.appendChild(newB);
           document.body.appendChild(newE);
      },
      preLoadIconOff = function () {
           var elE = document.getElementById("simplbox-loading");
           elE.parentNode.removeChild(elE);
      },
      overlayOn = function () {
           var newA = document.createElement("div");
           newA.setAttribute("id", "simplbox-overlay");
           document.body.appendChild(newA);
      },
      overlayOff = function () {
           var elA = document.getElementById("simplbox-overlay");
           elA.parentNode.removeChild(elA);
      };
      var img = new SimplBox(document.querySelectorAll("[data-simplbox='" + strId + "']"), {
           quitOnImageClick: true,
           quitOnDocumentClick: false,
           onStart: overlayOn,
           onEnd: overlayOff,
           onImageLoadStart: preLoadIconOn,
           onImageLoadEnd: preLoadIconOff
      });
      img.init();
   }

   /**
   * Creates a new instance of the ImageLightbox
   *
   * @param {Object} options Options of the ImageLightbox
   * @param {String} options.instanceId=1 Id of the ADC instance
   */
   function ImageLightbox(options) {
      this.options = options;
      this.instanceId = options.instanceId || 1;

      if (!document.querySelectorAll) return;
      
      simplboxConstructorCall("adc_" + this.instanceId);

   }

   /**
   * Attach the ImageLightbox to the window object
   */
   window.ImageLightbox = ImageLightbox;

}());
