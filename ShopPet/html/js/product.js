window.addEventListener("load", () => {
  const rangeInput = document.querySelectorAll(".range-input input"),
    priceInput = document.querySelectorAll(".price-input input"),
    range = document.querySelector(".slider-product .progress"),
    btnFilter = document.querySelector(".btn-filter");
  let newArr;
  let priceGap = 100;
  priceInput.forEach((input) => {
    input.addEventListener("input", (e) => {
      let minPrice = parseInt(priceInput[0].value),
        maxPrice = parseInt(priceInput[1].value);
      if (maxPrice - minPrice >= priceGap && maxPrice <= rangeInput[1].max) {
        if (e.target.className === "input-min") {
          rangeInput[0].value = minPrice;
          range.style.left = (minPrice / rangeInput[0].max) * 100 + "%";
        } else {
          rangeInput[1].value = maxPrice;
          range.style.right = 100 - (maxPrice / rangeInput[1].max) * 100 + "%";
        }
      }
    });
  });

  rangeInput.forEach((input) => {
    input.addEventListener("input", (e) => {
      let minVal = parseInt(rangeInput[0].value),
        maxVal = parseInt(rangeInput[1].value);
      if (maxVal - minVal < priceGap) {
        if (e.target.className === "range-min") {
          rangeInput[0].value = maxVal - priceGap;
        } else {
          rangeInput[1].value = minVal + priceGap;
        }
      } else {
        priceInput[0].value = minVal;
        priceInput[1].value = maxVal;
        range.style.left = (minVal / rangeInput[0].max) * 100 + "%";
        range.style.right = 100 - (maxVal / rangeInput[1].max) * 100 + "%";
      }
    });
  });

  // loc san pham
  const arrItems = [
    {
      id: 0,
      name: "Eatmeet food",
      cost: 50,
      img: "../img/imgproduct/doan.png",
      data: 1,
      sl: 1,
    },
    {
      id: 1,
      name: "Pet natural lysine",
      cost: 150,
      img: "../img/imgproduct/doan2.png",
      data: 2,
      sl: 1,
    },
    {
      id: 2,
      name: "Reflex lamb rice",
      cost: 200,
      img: "../img/imgproduct/doan3.png",
      data: 2,
      sl: 1,
    },
    {
      id: 3,
      name: "Natural food pik",
      cost: 550,
      img: "../img/imgproduct/doan4.png",
      data: 1,
      sl: 1,
    },
    {
      id: 4,
      name: "Gray sweater",
      cost: 1050,
      img: "../img/imgproduct/doan5.png",
      data: 3,
      sl: 1,
    },
    {
      id: 5,
      name: "Get speacil food",
      cost: 450,
      img: "../img/imgproduct/doan6.png",
      data: 1,
      sl: 1,
    },
    {
      id: 6,
      name: "Ball on rope toy",
      cost: 850,
      img: "../img/imgproduct/doan7.png",
      data: 3,
      sl: 1,
    },
    {
      id: 7,
      name: "Multipatel pet food",
      cost: 50,
      img: "../img/imgproduct/doan8.png",
      data: 2,
      sl: 1,
    },
    {
      id: 8,
      name: "Interactive toy",
      cost: 650,
      img: "../img/imgproduct/doan9.png",
      data: 3,
      sl: 1,
    },
  ];
  const wrapItem = document.querySelector(".product-wrapper-item");
  const renderItem = (arr) => {
    if (!arr.length > 0) return;
    wrapItem.textContent = "";
    let i = 0;
    arr.forEach((item) => {
      const { name, cost, img } = item;
      const template = `<div data-id="${i}" class="product-item-one">
      <div class="-img">
          <img src=${img} alt="">
          <span class="add-cart">Add to cart</span>
          <i class="fa-regular fa-heart icon-it"></i>
          <i class="fa-regular fa-eye icon-it"></i>
      </div>
      <div class="product-item-text">
          <div class="product-icon">
              <i class="fa-solid fa-star"></i>
              <i class="fa-solid fa-star"></i>
              <i class="fa-solid fa-star"></i>
              <i class="fa-solid fa-star"></i>
              <i class="fa-solid fa-star"></i>
          </div>
          <p class="name-sp">${name}</p>
          <div class="cost-sp">
              <p class="number-cost">${cost}</p>
              <span>$</span>
          </div>
      </div>
  </div>`;
      wrapItem.insertAdjacentHTML("beforeend", template);
      i++;
    });
  };
  renderItem(arrItems);
  // renderItem(arrItems)
  let newSp = [];
  btnFilter.addEventListener("click", () => {
    newSp = [];
    myArray = newArr && newArr.length > 0 ? newArr : arrItems;
    if (myArray.length > 0) {
      myArray.forEach((item) => {
        const { cost } = item;
        if (cost >= priceInput[0].value && cost <= priceInput[1].value) {
          newSp = [...newSp, item];
        } else if (newSp.length === 0) {
          wrapItem.textContent = "";
          return;
        }
      });
      renderItem(newSp);
      setNewBtnAdd && setNewBtnAdd();
    }
  });

  //chose type
  const listType = document.querySelectorAll(".categories-item");
  [...listType].forEach((item) => {
    item.addEventListener("click", (e) => {
      [...listType].forEach((i) => i.classList.remove("select-ac"));
      e.target.classList.add("select-ac");
      if (parseInt(e.target.dataset.type) === 10) {
        renderItem(arrItems);
        return;
      }
      console.log("ka");
      newArr = [...arrItems].filter(check);
      function check(ite) {
        return ite.data === parseInt(e.target.dataset.type);
      }
      renderItem(newArr);
      setNewBtnAdd && setNewBtnAdd();
    });
  });
  //menu res
  const fliterMenu = document.querySelector(".product-item-filter");
  const btn = document.querySelector(".bar-filter");
  btn.addEventListener("click", () => {
    fliterMenu.classList.toggle("global-active");
  });
  window.addEventListener("click", (e) => {
    if (!fliterMenu.contains(e.target) && !e.target.matches(".bar-filter")) {
      fliterMenu.classList.remove("global-active");
    }
  });

  //add cart
  const cartFixed = document.querySelector(".cart-th");
  const slCart = document.querySelector(".sl");
  let dataCart = [];
  const handleAddCart = (e) => {
    let sl = parseInt(slCart.textContent);
    if (sl === 0) {
      cartFixed.style.display = "block";
    }
    let index = e.target.parentNode.parentNode.dataset.id;
    slCart.textContent = sl + 1;
    e.target.classList.add("disible");
    e.target.textContent = "Added";

    dataCart = [...dataCart, arrItems[index]];

    localStorage.setItem("cart", JSON.stringify(dataCart));
    // // localStorage.getItem("cart");
    // let test = JSON.parse(localStorage.getItem("cart"));
  };
  function setNewBtnAdd() {
    let btnAdd = document.querySelectorAll(".add-cart");
    [...btnAdd].forEach((item) =>
      item.addEventListener("click", handleAddCart)
    );
  }
  setNewBtnAdd();
});
