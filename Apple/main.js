document.addEventListener("DOMContentLoaded", () => {
  AOS.init();
  const bar = document.querySelector(".bar");
  const menu = document.querySelector(".menu-main");
  bar.addEventListener("click", () => {
    menu.classList.toggle("active");
  });
  window.addEventListener("click", (e) => {
    if (!menu.contains(e.target) && !e.target.matches(".bar")) {
      menu.classList.remove("active");
    }
  });
  function debounceFn(func, wait, immediate) {
    let timeout;
    return function () {
      let context = this,
        args = arguments;
      let later = function () {
        timeout = null;
        if (!immediate) func.apply(context, args);
      };
      let callNow = immediate && !timeout;
      clearTimeout(timeout);
      timeout = setTimeout(later, wait);
      if (callNow) func.apply(context, args);
    };
  }
  const header = document.querySelector(".header");
  let heightHeader = header.offsetHeight;
  window.addEventListener(
    "scroll",
    debounceFn(() => {
      if (pageYOffset > heightHeader) {
        header.classList.add("fixed");
        document.body.style.paddingTop = `${heightHeader}px`;
      } else {
        if (header.matches(".fixed")) {
          header.classList.remove("fixed");
          document.body.style.paddingTop = 0;
        }
      }
    }, 50)
  );
});
