window.addEventListener('scroll',
   function () {
      if (window.scrollY > 400) {
         this.document.getElementById("to-top").style.display = "block";
      } else {
         this.document.getElementById("to-top").style.display = "none";
      }
   }
);