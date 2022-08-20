window.addEventListener("load", () => {
  const menu = document.querySelector(".menu");
  const btn = document.querySelector(".bar");
  const progress = document.querySelector(".progress");
  const toTop = document.querySelector(".back-to-top i");

  btn.addEventListener("click", () => {
    menu.classList.toggle("active1");
  });
  window.addEventListener("click", (e) => {
    if (!menu.contains(e.target) && !e.target.matches(".bar")) {
      menu.classList.remove("active1");
    }
  });

  const header = document.querySelector(".header");
  let heightHeader = header.offsetHeight;

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

  toTop.addEventListener("click", () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  });

  window.addEventListener(
    "scroll",
    debounceFn(() => {
      const scrollTop = window.pageYOffset;
      const height =
        document.documentElement.scrollHeight -
        document.documentElement.clientHeight;
      const width = (scrollTop / height) * 100;
      progress.style.width = `${width}%`;

      if (pageYOffset > heightHeader) {
        toTop.classList.add("back-active");
        header.classList.add("fixed");
        document.body.style.paddingTop = `${heightHeader}px`;
      } else {
        toTop.classList.remove("back-active");
        header.classList.remove("fixed");
        document.body.style.paddingTop = 0;
      }
    }, 100)
  );
});
