let inputnameShahrchecked2 = document.querySelector(".name-shahr-checked2");

let jostejoinput = document.getElementById("jostejo-input");
jostejoinput.addEventListener("click", () => {
  inputnameShahrchecked2.classList.toggle("hidden");
});
////////////////////////

/////// kojaySafhe
let kojaySafhe = document.getElementById("kojay-safhe");
window.addEventListener("scroll", () => {
  if (window.pageYOffset >= 519) {
    kojaySafhe.style.position = "fixed";
  } else {
    kojaySafhe.style.position = "static";
  }
});
///
let active = document.querySelectorAll(".kojay-safhe > a");
active.forEach((tagA) => {
  tagA.addEventListener("click", () => {
    aha();
    tagA.classList.add("active");
  });
});

function aha() {
  active.forEach((a) => {
    a.classList.remove("active");
  });
}
/////// kojaySafhe

////////////////////////
