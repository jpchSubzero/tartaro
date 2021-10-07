let div1 = document.querySelector('#div1');
let options = {
      childList: true
    };
let observer = new MutationObserver(mCallback);

var elem = document.createElement("img");
elem.setAttribute("src", "https://www.webyempresas.com/wp-content/uploads/2016/03/image.jpg");
elem.setAttribute("height", "100");
elem.setAttribute("width", "100");
elem.setAttribute("alt", "Flower");
    
var elem1 = document.createElement("img");
elem1.setAttribute("src", "https://www.webyempresas.com/wp-content/uploads/2016/03/image.jpg");
elem1.setAttribute("height", "100");
elem1.setAttribute("width", "100");
elem1.setAttribute("alt", "Flower");

var elem2 = document.createElement("img");
elem2.setAttribute("src", "https://www.webyempresas.com/wp-content/uploads/2016/03/image.jpg");
elem2.setAttribute("height", "100");
elem2.setAttribute("width", "100");
elem2.setAttribute("alt", "Flower");

function mCallback(mutations) {
  for (let mutation of mutations) {
      console.log('validaciones');
  }
  observer.disconnect();

}

setTimeout(function() {
    div1.appendChild(elem);
}, 1000);

setTimeout(function() {
    div1.appendChild(elem1);
}, 3000);

setTimeout(function() {
    div1.removeChild(elem1);
}, 5000);

setTimeout(function() {
    div1.appendChild(elem2);
    // observer.disconnect();
}, 7000);

observer.observe(div1, options);
