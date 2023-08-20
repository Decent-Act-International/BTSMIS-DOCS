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
  let value = constructUrl[1];

  // conditional statement for table of content

  if (value === "add_workers" || value === "workers_list") {
    try {
      value = "Worker";
    } catch (error) {
      console.log(error);
    }
  } else if (value === "add_factory" || value === "factory_list") {
    value = "Factory";
  } else if (value === "add_union" || value === "union_list") {
    value = "Union";
  } else if (value === "add_association" || value === "association_list") {
    value = "Association";
  } else if (value === "add_users" || value === "users_list") {
    value = "Users";
  } else if (value === "national_federation" || value === "sectoral_federation" || value === "department" || value === "designation" || value === "sector" || value === "education" || value === "religion" || value === "employment_contract") {
    value = "Settings";
  } else if (value === "user-role" || value === "approval_list") {
    value = "Users";
  }

  display(value);
};
