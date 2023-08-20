window.onload = function () {
  
  var key = sessionStorage.getItem("key");
  console.log(key);
  if (key) {
    // Page was reloaded
    // myPostReloadFunction();
    console.log(key);
    // var presetValue = reloaded;
    if (key != null) {
      display(key);
      console.log(key);
      key = null;
    } else {
      console.log(key);
    }
    // sessionStorage.removeItem("reloaded");
  }

  // for new tab issue;
  const currentUrl = window.location.href;
  const constructUrl = currentUrl.split("#");
  const value = constructUrl[1];
  display(value);
};
