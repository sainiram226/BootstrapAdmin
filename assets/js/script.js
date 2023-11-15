function showsearch() {
  const element = document.getElementById("searchbar");
  element.classList.toggle("showsearch");
}

function activesidebar() {
  const main = document.getElementById("main");
  main.classList.toggle("activesidebar");
}

// SIDEBAR PROFILE UPLOAD SCRIPT
let loadFile = function (event) {
  let image = document.querySelector("#output");
  image.src = URL.createObjectURL(event.target.files[0]);
  
};
let loadFile02 = function (event) {
  let image = document.querySelector("#output02");
  image.src = URL.createObjectURL(event.target.files[0]);
  
};
let loadFile03 = function (event) {
  let image = document.querySelector("#output03");
  image.src = URL.createObjectURL(event.target.files[0]);
  
};
