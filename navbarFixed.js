window.onscroll = () => {
  const navbar = document.querySelector("nav");
  const fixedNav = navbar.offsetTop;
  if (window.pageYOffset > fixedNav) {
    navbar.style.position = "fixed";
  }
};
