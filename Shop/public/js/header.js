window.addEventListener("load", () => {
  const menuBar = document.querySelector(".ti-menu");
  const navBar = document.querySelector(".nav-main ");

  const showDrop = document.querySelector(".open-drop");
  const dropDow = document.querySelector(".drop-dow");
  showDrop.addEventListener("click", () => {
    dropDow.style.height = `${dropDow.scrollHeight + 20}px`;
    dropDow.classList.toggle("show-child");
    if (!dropDow.classList.contains("show-child")) {
      dropDow.style.height = "0px";
    }
  });
  document.addEventListener("click", (e) => {
    if (!navBar.contains(e.target) && !e.target.matches(".ti-menu")) {
      navBar.classList.remove("nav-show");
    }
    if (!dropDow.contains(e.target) && !e.target.matches(".open-drop")) {
      dropDow.classList.remove("show-child");
      dropDow.style.height = "0px";
    }
  });
  menuBar.addEventListener("click", () => {
    navBar.classList.toggle("nav-show");
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
  // const toTop = document.querySelector(".back-to-top i");
  const header = document.querySelector(".header");
  let heightHeader = header.offsetHeight;
  // toTop.addEventListener("click", () => {
  //   window.scrollTo({ top: 0, behavior: "smooth" });
  // });
  window.addEventListener(
    "scroll",
    debounceFn(() => {
      if (pageYOffset > heightHeader) {
        //   toTop.classList.add("back-active");
        header.classList.add("fixed");
        document.body.style.paddingTop = `${heightHeader}px`;
      } else {
        if (header.matches(".fixed")) {
          // toTop.classList.remove("back-active");
          header.classList.remove("fixed");
          document.body.style.paddingTop = 0;
        }
      }
    }, 50)
  );
  const controlPage = document.querySelectorAll(".drop-dow a");
  [...controlPage].forEach((item) => {
    item.addEventListener("click", (e) => {
      console.log(e.target);
      const pageId = e.target.dataset.id;
      console.log(pageId);
      localStorage.setItem("new", pageId);
    });
  });
});
