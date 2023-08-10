window.onload = function() {
    var reloaded = sessionStorage.getItem("reloaded");
    if (reloaded) {
        // Page was reloaded
        myPostReloadFunction();
        sessionStorage.removeItem("reloaded");
    }
};

window.onbeforeunload = function() {
    sessionStorage.setItem("reloaded", "true");
};

function myPostReloadFunction() {
    console.log("Page was reloaded. Running post-reload function.");
    // Add your function's code here
    var presetValue = "Union";
    if (presetValue != null) {
        display(presetValue);
        console.log(presetValue)
        presetValue = null;
    } else {
        console.log(presetValue)
    }
}
