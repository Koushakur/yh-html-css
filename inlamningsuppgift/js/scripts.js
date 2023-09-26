// Fixed 'to top' button hiding and showing
window.addEventListener('scroll',
   function () {

      if (window.scrollY > 400) {
         this.document.getElementById("to-top").style.display = "block";

      } else {
         this.document.getElementById("to-top").style.display = "none";
      }
   }
);
//

// Loading the footer on page load
async function loadFooter() {
   var xhttp = new XMLHttpRequest();
   xhttp.onreadystatechange = function () {
      if (this.readyState == 4 && this.status == 200) {
         document.getElementById("footer").innerHTML = this.responseText;
      }
   };
   xhttp.open("GET", "footer.html", true);
   xhttp.send();
}

document.addEventListener("loadstart", loadFooter());
//