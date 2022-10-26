let liItems = document.querySelectorAll("aside ul li");
let active = document.querySelector(".active");
let logo = document.querySelector("aside h1");

for (let i = 0; i < liItems.length; i++) {
  const item = liItems[i];
  item.onmouseenter = () => {
    if (!item.classList.contains("active")) {
      active.style = "background-color: transparent;";
      item.onmouseleave = () => {
        active.style = "background-color: #eee;";
      };
    }
  };
}
window.onresize = () => {
  if (window.innerWidth <= 767) {
    logo.innerHTML = "E";
  } else logo.innerHTML = "Elzero";
};
