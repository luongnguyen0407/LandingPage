window.addEventListener("load", () => {
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
  const toTop = document.querySelector(".back-to-top i");
  const header = document.querySelector(".header");
  const progress = document.querySelector(".progress");
  let heightHeader = header.offsetHeight;
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
      console.log(scrollTop);
      const width = (scrollTop / height) * 100;
      progress.style.width = `${width}%`;
      if (pageYOffset > heightHeader) {
        toTop.classList.add("back-active");
        header.classList.add("fixed");
        document.body.style.paddingTop = `${heightHeader}px`;
      } else {
        if (header.matches(".fixed")) {
          toTop.classList.remove("back-active");
          header.classList.remove("fixed");
          document.body.style.paddingTop = 0;
        }
      }
    }, 50)
  );
});
