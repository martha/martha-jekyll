var d = document;

d.addEventListener("DOMContentLoaded", function(event) {
  var links = d.getElementById('nav').getElementsByTagName('A');
  var len = links.length;

  if (window.location.pathname == "/") {
    toggleClass(links[0], "selected-link");
  } else {
    for (var i = 0; i < len; i++) {
      if (links[i].innerHTML.toLowerCase() == window.location.pathname.replace("/", "")) {
        links[i].className += " selected-link";
      }
    }
  }

  d.getElementById("veggie-burger").addEventListener("click", function() {
    var navMenu = d.getElementById("nav");
    toggleClass(navMenu, "mobile-open");
  })
});

// hasClass
function hasClass(elem, className) {
  return new RegExp(' ' + className + ' ').test(' ' + elem.className + ' ');
}

// toggleClass
function toggleClass(elem, className) {
  var newClass = ' ' + elem.className.replace(/[\t\r\n]/g, ' ') + ' ';
    if (hasClass(elem, className)) {
      while (newClass.indexOf(' ' + className + ' ') >= 0 ) {
        newClass = newClass.replace(' ' + className + ' ', ' ');
      }
      elem.className = newClass.replace(/^\s+|\s+$/g, '');
    } else {
      elem.className += ' ' + className;
    }
}
