    // Add an event listener to the 'beforeunload' event
    window.addEventListener("beforeunload", function (event) {
        // Cancel the event to prevent the page from being reloaded
        event.preventDefault();
        // Set a custom message in the dialog box
        event.returnValue =
          "Are you sure you want to leave this page? Your changes may not be saved.";
      });