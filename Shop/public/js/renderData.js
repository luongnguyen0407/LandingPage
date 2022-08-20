import { tuGo, tuBep, banGhe, keGo } from "./data.js";

const idPage = Number(localStorage.getItem("new")) || 1;
localStorage.removeItem("new");
window.addEventListener("load", () => {
  const productH = document.querySelector(".product-he");
  const wrapItem = document.querySelector(".wrap-item");
  const formatNumber = (num) => {
    return num.toString().replace(/(\d)(?=(\d{3})+(?!\d))/g, "$1.");
  };
  const renderList = (arr) => {
    arr.forEach((item, index) => {
      let newCost = formatNumber(item.cost);
      let oldCost = formatNumber(Number(item.cost) + 5000);
      console.log(index);
      const template = `<a href="./detail.html" class="latest-item" >
        <div class="item-img ">
            <img src="${item.imgAv}" alt="">
            <p class="sale">sale</p>
        </div>
        <div class="infor-item">
            <span class="small-i">Ghế, Gỗ</span>
            <div class="start">
                <i class="fa-solid fa-star"></i>
                <i class="fa-solid fa-star"></i>
                <i class="fa-solid fa-star"></i>
                <i class="fa-solid fa-star"></i>
                <i class="fa-solid fa-star"></i>
            </div>
            <h4 class="name-item">
                ${item.name}
            </h4>
            <div class="cost">
                <p>${newCost}đ</p>
                <del>${oldCost}đ</del>
            </div>
        </div>
        </a>`;
      wrapItem.insertAdjacentHTML("beforeend", template);
    });
  };
  switch (idPage) {
    case 1:
      productH.textContent = "Bàn Ăn Gỗ Cao Cấp";
      renderList(banGhe);
      break;
    case 2:
      productH.textContent = "Tủ Bếp Gỗ Cao Cấp";
      renderList(tuBep);
      break;
    case 3:
      productH.textContent = "Kệ Gỗ Cao Cấp";

      renderList(keGo);
      break;
    case 4:
      productH.textContent = "Tủ Gỗ Gỗ Cao Cấp";

      renderList(tuGo);
      break;

    default:
      break;
  }
});
