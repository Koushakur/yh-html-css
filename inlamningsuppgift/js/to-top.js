window.addEventListener('scroll',
   function () {
      var elmnt = this.document.getElementById("to-top");

      if (elmnt.style.display != "block" && window.scrollY > 400) {
         elmnt.style.display = "block";

      } else if (elmnt.style.display != "none" && window.scrollY < 400) {
         elmnt.style.display = "none";
      }
   }
);