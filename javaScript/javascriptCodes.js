
function myFunction() {
    var x = document.getElementById("myNavbar");
    if (x.className === "botnav") {
      x.className += " responsive";
    } else {
      x.className = "botnav";
    }
  }
  function myFunctionTop() {
    var x = document.getElementById("myTopNavbar");
    if (x.className === "topnav") {
      x.className += " responsive";
    } else {
      x.className = "topnav";
    }
  }