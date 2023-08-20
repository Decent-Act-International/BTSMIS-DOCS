"use strict";
function fetchData(file) {
  let display = document.getElementById("display");
  fetch(file)
    .then((x) => x.text())
    .then((y) => (display.innerHTML = y));
}

function display(params) {
  console.log(`I am in ${params}`);
  sessionStorage.setItem("key", params);

  let file = `./data/${params}.txt`;

  switch (params) {
    case "Dashboard":
      fetchData(file);
      break;
    case "Worker":
      fetchData(file);
      break;
    case "Factory":
      fetchData(file);
      break;
    case "Union":
      fetchData(file);
      break;
    case "Association":
      fetchData(file);
      break;
    case "Settings":
      fetchData(file);
      break;
    case "Users":
      fetchData(file);
      break;
    default:
      break;
  }
}
// for main page
function overview() {
  sessionStorage.removeItem("key");
  window.location.href = "index.html";
}
// for image open in new tab
function openImageInNewTab(img) {
  window.open(img, '_blank');
}
