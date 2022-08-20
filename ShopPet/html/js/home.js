window.addEventListener("load", function () {
  const sliderMain = document.querySelector(".slider-main");
  const sliderItems = document.querySelectorAll(".slider-item");
  const nextBtn = document.querySelector(".slider-next");
  const prevBtn = document.querySelector(".slider-prev");
  const dotItems = document.querySelectorAll(".slider-dot-item");
  const dotItems2 = document.querySelectorAll(".slider-dot-2");
  const sliderItemWidth = sliderItems[0].offsetWidth * 2;
  const slidesLength = sliderItems.length - 2;
  let postionX = 0;
  let index = 0;
  nextBtn.addEventListener("click", function () {
    handleChangeSlide(1);
  });
  prevBtn.addEventListener("click", function () {
    handleChangeSlide(-1);
  });

  [...dotItems].forEach((item) =>
    item.addEventListener("click", function (e) {
      [...dotItems].forEach((el) => el.classList.remove("active"));
      e.target.classList.add("active");
      const slideIndex = parseInt(e.target.dataset.index);
      index = slideIndex;
      postionX = -1 * index * sliderItemWidth;
      sliderMain.style = `transform: translateX(${postionX}px)`;
    })
  );
  function handleChangeSlide(direction) {
    if (direction === 1) {
      if (index >= slidesLength - 5) {
        index = slidesLength - 5;
        return;
      }
      postionX = postionX - sliderItemWidth;
      sliderMain.style = `transform: translateX(${postionX}px)`;
      index++;
      console.log(index);
    } else if (direction === -1) {
      if (index <= 0) {
        index = 0;
        return;
      }
      postionX = postionX + sliderItemWidth;
      sliderMain.style = `transform: translateX(${postionX}px)`;
      index--;
    }
    [...dotItems].forEach((el) => el.classList.remove("active"));
    dotItems[index].classList.add("active");
  }
  [...dotItems2].forEach((item) =>
    item.addEventListener("click", function (e) {
      [...dotItems2].forEach((el) => el.classList.remove("active"));
      e.target.classList.add("active");
    })
  );

  let rangeVal = document.getElementById("range-value");
  let rangeInp = document.querySelector(".input-range");
  const handleChangeRanger = (e) => {
    rangeVal.innerHTML = e.target.value;
    rangeVal.style.left = e.target.value - (e.target.value > 50 ? 5 : 3) + "%";
    rangeInp.style = "filter: hue-rotate(282deg);";
  };
  rangeInp.addEventListener("input", handleChangeRanger);
  (() => {
    rangeVal.innerHTML = rangeInp.value;
    rangeVal.style.left = rangeInp.value - (rangeInp.value > 50 ? 5 : 3) + "%";
  })();

  //animate-text-hero
  let i = 0;
  const hedding = this.document.querySelector(".home-hero-headding");
  const text = "Taking care of your pets.";
  (function typeWriter() {
    if (i < text.length) {
      hedding.innerHTML += text.charAt(i);
      i++;
      setTimeout(typeWriter, 100);
    }
  })();
});
