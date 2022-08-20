const FDate = new Date("2022-10-14T19:00:26");

document.addEventListener("DOMContentLoaded", () => {
  let nodeDays = document.querySelector(".number-days");
  let nodeHour = document.querySelector(".number-hrs");
  let nodeMin = document.querySelector(".number-min");
  let nodeSec = document.querySelector(".number-sec");
  const lightboxImg = document.querySelector(".lightbox-image");
  const lightboxName = document.querySelector(".name-sp");
  const listSize = document.querySelectorAll(".choseSize span");
  const listTym = document.querySelectorAll(".icon-ab .ti-heart");
  function calculator() {
    let today = new Date();
    let timeq = FDate - today;
    nodeDays.textContent = Math.floor(
      Math.floor((FDate - today) / 1000) / 60 / 60 / 24
    );
    let hrs = Math.floor(Math.floor(timeq / 1000) / 60 / 60) % 24;
    let min = Math.floor(Math.floor(timeq / 1000) / 60) % 60;
    let sec = Math.floor(timeq / 1000) % 60;
    nodeHour.textContent = `${hrs > 9 ? hrs : "0" + hrs}`;
    nodeMin.textContent = `${min > 9 ? min : "0" + min}`;
    nodeSec.textContent = `${sec > 9 ? sec : "0" + sec}`;
  }
  calculator();
  let timer = setInterval(() => {
    calculator();
  }, 1000);

  // Light box
  const modal = document.querySelector(".lightbox");
  const contenModal = document.querySelector(".introl-sp");
  const body = document.querySelector("body");
  const btnShow = document.querySelectorAll(".ti-eye");
  const btnClose = document.querySelector(".ti-close");
  [...listSize].forEach((item) => {
    item.addEventListener("click", (e) => {
      [...listSize].forEach((item) => {
        item.classList.remove("active");
      });
      e.target.classList.add("active");
    });
  });
  [...listTym].forEach((item) => {
    item.addEventListener("click", (e) => {
      e.target.classList.toggle("active");
    });
  });

  const callClass = (remove, add) => {
    modal.classList.add(add);
    modal.classList.remove(remove);
    checkScroll();
  };
  btnClose.addEventListener("click", () => {
    callClass("show", "out");
  });
  [...btnShow].forEach((item) => {
    item.addEventListener("click", (e) => {
      callClass("out", "show");
      const parentImg = e.target.parentNode.parentNode;
      const nameItem =
        parentImg.nextElementSibling.querySelector(".name-item").textContent;
      const imgUrl = parentImg.querySelector("img").getAttribute("src");
      lightboxImg.setAttribute("src", imgUrl);
      lightboxName.textContent = nameItem.trim();
    });
  });

  document.addEventListener("click", (e) => {
    if (!contenModal.contains(e.target) && !e.target.matches(".ti-eye")) {
      callClass("show", "out");
    }
  });
  window.addEventListener;
  const checkScroll = () => {
    if (modal.matches(".show")) {
      // Disable scroll
      body.style.overflow = "hidden";
    } else {
      // Enable scroll
      body.style.overflow = "auto";
    }
  };
});
