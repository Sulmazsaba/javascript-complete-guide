"use strict";
if (navigator)
  navigator.geolocation.getCurrentPosition(
    function (position) {
      console.log(position);
    },
    function () {
      console.log("could not get current location");
    }
  );
