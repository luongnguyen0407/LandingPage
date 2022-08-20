window.addEventListener("load", () => {
  const avatar = document.querySelectorAll(".wrap-img-avatar img");
  const dot = document.querySelectorAll(".slider-dot-item1");
  const nd = document.querySelector(".library-content");
  const useName = document.querySelector(".name-gd");
  const title = [
    {
      content:
        "Aliquam erat volutpat. Suspendisse suscipit vestibulum leo a aliquam. In risus di pharetra sed felis nec, euismod faucibus velit. Fusce id laoreet nisl. Duis lacinia eleifend",
      name: "- Christine eve",
    },
    {
      content:
        "You've gotta dance like there's nobody watching, love like you'll never be hurt, sing like there's nobody listening, and live like it's heaven on earth.",
      name: "- Oscar Wilde",
    },
    {
      content:
        "Insanity is doing the same thing, over and over again, but expecting different results. ― Narcotics Anonymous",
      name: "- Robert Frost",
    },
  ];
  const handleClick = (e) => {
    let index = e.target.dataset.index;
    index && displayActive(index);
  };
  const displayActive = (index) => {
    const { content, name } = title[index];
    console.log(name);
    nd.textContent = content;
    useName.textContent = name;
    [...avatar].forEach((item) => item.classList.remove("iactive"));
    [...dot].forEach((item) => item.classList.remove("s-active"));
    avatar[index].classList.add("iactive");
    dot[index].classList.add("s-active");
  };
  [...avatar].forEach((item) => item.addEventListener("click", handleClick));
  [...dot].forEach((item) => item.addEventListener("click", handleClick));

  //
  const accordionHeaders = document.querySelectorAll(".accordion-header");
  [...accordionHeaders].forEach((item) =>
    item.addEventListener("click", handleClickAccordion)
  );
  const activeStr = "is-active";
  function handleClickAccordion(e) {
    e.target.style.color = "#ff5528";
    const content = e.target.nextElementSibling;
    content.style.height = `${content.scrollHeight}px`;
    content.classList.toggle(activeStr);
    if (!content.classList.contains("is-active")) {
      content.style.height = "0px";
      e.target.style.color = "#222222";
    }
    const icon = e.target.querySelector(".icon");
    icon.classList.toggle("fa-plus");
    icon.classList.toggle("fa-minus");
  }
});
