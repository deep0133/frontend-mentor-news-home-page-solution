const hideMenu = () => {
  console.log("hide menu clicked");
  const menu = document.getElementById("hideMenu");
  const menuBarOpen = document.getElementById("menuBarOpen");
  const menuBarClose = document.getElementById("menuBarClose");

  const classList = menu.classList;
  if (classList.contains("hidden")) {
    menu.classList.remove("hidden");
    menu.classList.add("flex");

    // MenuBar
    menuBarOpen.classList.remove("flex");
    menuBarOpen.classList.add("hidden");

    menuBarClose.classList.remove("hidden");
    menuBarClose.classList.add("flex");

    // body height fixing
    document.body.classList.add("bg-blue-200");
    document.body.classList.add("h-screen");
    document.body.classList.add("overflow-y-hidden");
  } else {
    menu.classList.add("hidden");
    menu.classList.remove("flex");
    // MenuBar
    menuBarOpen.classList.remove("hidden");
    menuBarOpen.classList.add("flex");

    menuBarClose.classList.remove("flex");
    menuBarClose.classList.add("hidden");

    // body height removing
    document.body.classList.remove("bg-blue-200");
    document.body.classList.remove("h-screen");
    document.body.classList.remove("overflow-y-hidden");
  }
};
