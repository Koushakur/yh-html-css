"use strict";

function initMap() {
   const myLatLng = {
      lat: 59.33659362792969,
      lng: 18.062021255493164
   };
   const map = new google.maps.Map(document.getElementById("gmp-map"), {
      zoom: 15,
      center: myLatLng,
      fullscreenControl: false,
      zoomControl: true,
      streetViewControl: false,
   });
   new google.maps.Marker({
      position: myLatLng,
      map,
      title: "Base of operations"
   });
}