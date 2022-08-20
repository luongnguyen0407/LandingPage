// var x = Array.from(new Set(arrItems.map(JSON.stringify))).map(JSON.parse);
window.addEventListener("load", () => {
  const data = JSON.parse(localStorage.getItem("cart"));
  const empty = document.querySelector(".cart-empty");
  const tableWrap = document.querySelector(".table-cart");
  const tableMain = document.querySelector(".add-data");
  if (!data) {
    empty.style.display = "block";
    return;
  } else {
    tableWrap.style.display = "table";
    randerData(data);
  }
  function randerData(arr) {
    arr.forEach((element) => {
      const { name, img, cost } = element;
      let template = `<tr class="row">
        <td class="col-img-item">
            <img src="${img}" alt="">
            <p>${name}</p>
        </td>
        <td class="col-cost-item">
            <span>$</span>
            <span class="one-cost">${cost}</span>
        </td>
        <td class="col-sl-item">
            <div class="wrap-input-co">
                <input class ="input-number" type="number" min="1" value="1">
                <div class="control">
                    <div class="control">
                        <p class ="raise" style="border-top-right-radius: 3px;">+</p>
                        <p class ="reduce" style=" border-bottom-right-radius: 3px;">-</p>
                    </div>
                </div>
            </div>
        </td>
        <td class="col-total">
            <span>$</span>
            <span class="one-total">${cost}</span>
        </td>
        <td class="col-close-item">
            <i class="fa-solid fa-xmark remove-item"></i>
        </td>
        </tr>`;
      tableMain.insertAdjacentHTML("beforeend", template);
    });
  }
  //chage value input
  const tangBtn = document.querySelectorAll(".raise");
  const giamBtn = document.querySelectorAll(".reduce");
  if (giamBtn.length === 0 || tangBtn.length === 0) return;
  const handleChageInput = (node, control) => {
    let nodeValue = parseInt(node.value);
    const oneCostNode = node.parentNode.parentNode.previousElementSibling;
    const oneTotalNode = node.parentNode.parentNode.nextElementSibling;
    const oneCost = oneCostNode.querySelector(".one-cost");
    const oneToal = oneTotalNode.querySelector(".one-total");
    if (control === 1) {
      node.value = nodeValue + 1;
      totalItem(node.value, oneCost.textContent, oneToal);
    } else if (control === -1) {
      if (nodeValue <= 0) return;
      node.value = nodeValue - 1;
      totalItem(node.value, oneCost.textContent, oneToal);
      sum();
    }
  };
  [...tangBtn].forEach((item) =>
    item.addEventListener("click", (e) => {
      const nodeInput = e.target.parentNode.parentNode.previousElementSibling;
      handleChageInput(nodeInput, 1);
      sum();
    })
  );
  [...giamBtn].forEach((item) =>
    item.addEventListener("click", (e) => {
      const nodeInput = e.target.parentNode.parentNode.previousElementSibling;
      handleChageInput(nodeInput, -1);
    })
  );

  //   tinh tong tung mat hang
  const cost1 = document.querySelector(".cost-1");
  const cost2 = document.querySelector(".cost-2");
  const cost3 = document.querySelector(".cost-3");
  function totalItem(node, nodeCost, nodeToal) {
    const newCost = parseInt(nodeCost);
    console.log(node, newCost, nodeToal);
    nodeToal.textContent = node * newCost;
  }
  function sum() {
    const totals = document.querySelectorAll(".one-total");
    cost1.textContent = 0;
    for (const total of totals) {
      cost1.textContent =
        parseInt(cost1.textContent) + parseInt(total.textContent);
    }
    cost3.textContent =
      parseInt(cost2.textContent) + parseInt(cost1.textContent);
    if (cost1.textContent == 0) {
      empty.style.display = "block";
      localStorage.removeItem("cart");
      tableWrap.style.display = "none";
    }
  }
  //remove item
  const btnRemove = document.querySelectorAll(".remove-item");
  const addCart = document.querySelector(".add-data");
  for (const oneX of [...btnRemove]) {
    oneX.addEventListener("click", (e) => {
      const parentNode = e.target.parentNode.parentNode;
      addCart.removeChild(parentNode);
      sum();
    });
  }
  sum();
});
