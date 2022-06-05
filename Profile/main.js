AOS.init();
window.addEventListener("load", () => {
  const listItems = document.querySelectorAll(".slider-item");
  const listDot = document.querySelectorAll(".slider-dot-item");
  const sliderMain = document.querySelector(".slider-main");
  const menu = document.querySelector(".wrapper-i");
  const bar = document.querySelector(".bar");
  // const slider = document.querySelector(".slider");
  let itemWidth = listItems[0].offsetWidth + 50; //cộng thêm 50 css gap
  const slidesLength = listItems.length;
  let postionX = 0;
  let index = 1;
  [...listDot].forEach((dot) => {
    dot.addEventListener("click", (e) => {
      [...listDot].forEach((item) => item.classList.remove("active"));
      e.target.classList.add("active");
      const dataSet = parseInt(e.target.dataset.index);
      index = dataSet + 1;
      postionX = -1 * dataSet * itemWidth;
      sliderMain.style = `transform: translateX(${postionX}px)`;
    });
  });
  const sliderAuto = () => {
    itemWidth = listItems[0].offsetWidth + 50;
    postionX = postionX - itemWidth;
    sliderMain.style = `transform: translateX(${postionX}px)`;
    if (postionX < (slidesLength - 1) * -itemWidth) {
      postionX = 0;
      sliderMain.style = `transform: translateX(${postionX}px)`;
      index = 0;
    }
    [...listDot].forEach((el) => el.classList.remove("active"));
    listDot[index].classList.add("active");
    index++;
  };
  setInterval(sliderAuto, 3000);

  //menu responsive
  bar.addEventListener("click", () => {
    menu.classList.toggle("fixed");
  });
  window.addEventListener("click", (e) => {
    if (!menu.contains(e.target) && !e.target.matches(".bar")) {
      menu.classList.remove("fixed");
    }
  });
});
