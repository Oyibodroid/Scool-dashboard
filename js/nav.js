const hamBurger = document.querySelector("#hamburger");
const sideNav = document.querySelector("#side-nav");
const mainBody = document.querySelector("#bodyContainer");
const burg = document.querySelectorAll(".burg");
const linkHolder = document.querySelector(".links ul");
const linkText = document.querySelectorAll(".link span");

// console.log(linkText);
if (sideNav.classList !== "open") {
  linkHolder.style.padding = "0";
  linkText.forEach((l) => {
    l.style.display = "none";
  });
} else {
  linkText.forEach((l) => {
    l.style.display = " ";
  });
  linkHolder.style.padding = "1rem";
}

hamBurger.addEventListener("click", function () {
  sideNav.classList.toggle("open");
  mainBody.classList.toggle("shrink");

  burg.forEach((b) => {
    if ((sideNav.classList != "open") & (mainBody.classList != "shrink")) {
      b.classList.remove("active");
      hamBurger.classList.remove("shift");
    } else {
      b.classList.add("active");
      hamBurger.classList.add("shift");
    }
  });

  // console.log(sideNav.classList);
});

// accordion

const accordion = document.querySelector(".accordion");
const accordionTrigger = document.querySelector("#acc-trig");

accordionTrigger.addEventListener("click", () => {
  accordion.classList.toggle("show");

  if (accordion.style.maxHeight) {
    accordion.style.maxHeight = null;
  } else {
    accordion.style.maxHeight = accordion.scrollHeight + "px";
  }
});
