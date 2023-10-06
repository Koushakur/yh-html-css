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

// Used for loading the footer and header on page load
function loadHTML(docName) {
   var xhttp = new XMLHttpRequest();
   xhttp.onreadystatechange =
      function () {
         if (this.readyState == 4 && this.status == 200) {
            document.getElementById(docName).innerHTML = this.responseText;

            // If the header, check which page and set its nav item as current
            if (docName == "header") {
               var fileName = location.pathname.split("/").slice(-1).toString().split('.')[0];
               var tElem = document.getElementById(fileName);
               if (tElem != null) { tElem.classList.add("current"); }
            }
         }
      };
   xhttp.open("GET", docName + ".html", true);
   xhttp.send();
}

document.addEventListener("DOMContentLoaded", loadHTML("header"));
document.addEventListener("DOMContentLoaded", loadHTML("footer"));
//