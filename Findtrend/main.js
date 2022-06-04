window.addEventListener("load", () => {
  const btn = document.querySelector(".bar");
  const menu = document.querySelector(".menu");
  btn.addEventListener("click", () => {
    menu.classList.toggle("fixed");
  });
  window.addEventListener("click", (e) => {
    if (!menu.contains(e.target) && !e.target.matches(".bar")) {
      menu.classList.remove("fixed");
    }
  });
});
