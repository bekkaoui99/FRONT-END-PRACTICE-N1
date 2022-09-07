const bar = document.getElementsByClassName("bar");

bar[0].onclick = function () {
  const navBar = document.getElementsByClassName("navBar");

  const test = navBar[0].classList.contains("navBarActive");

  navBar[0].classList.toggle("navBarActive");
};
