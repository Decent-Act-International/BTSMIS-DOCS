"use strict";
function fetchData(file) {
  let display = document.getElementById("display");
  fetch(file)
    .then((x) => x.text())
    .then((y) => (display.innerHTML = y));
}

function display(params) {
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
