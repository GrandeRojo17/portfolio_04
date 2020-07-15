var toggle = document.getElementById("toggle");
const close = document.getElementById("close");
const open = document.getElementById("open");
const modal = document.getElementById("modal");
const notification = document.getElementById("notification-container");
const banner = document.getElementById("banner");
var boody = document.getElementById("boody");

if (screen.width >= 500) {
  boody.classList.add("show-nav");
} else {
  boody.classList.remove("show-nav");
}

//toggle the nav
toggle.addEventListener("click", () =>
  document.body.classList.toggle("show-nav")
);

//show modal
open.addEventListener("click", () => modal.classList.add("show-modal"));

//hide modal
close.addEventListener("click", () => modal.classList.remove("show-modal"));
//hide modal on outside click
window.addEventListener("click", (e) =>
  e.target == modal ? modal.classList.remove("show-modal") : false
);

//  #banner.addEventListener("click", () => {
//     showNotification();
//  });

function showNotification() {
  notification.classList.add("show");
  setTimeout(() => {
    notification.classList.remove("show");
  });
}
//I want to show the nav on any screen larger than 600px across

//
