///////swiper

var splide = new Splide(".splide", {
  type: "loop",
  perPage: 3,
  focus: "center",
});

splide.mount();
var swiper = new Swiper(".porbazdid", {
  slidesPerView: 6,
  spaceBetween: 15,
  freeMode: true,
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },
});
var swiper = new Swiper(".tehran", {
  slidesPerView: 4,
  spaceBetween: 15,
  freeMode: true,
  navigation: {
    nextEl: ".swiper-button-next2",
    prevEl: ".swiper-button-prev2",
  },
});
var swiper = new Swiper(".jonob", {
  slidesPerView: 4,
  spaceBetween: 15,
  freeMode: true,
  navigation: {
    nextEl: ".swiper-button-next3",
    prevEl: ".swiper-button-prev3",
  },
});
var swiper = new Swiper(".vilaTehran", {
  slidesPerView: 4,
  spaceBetween: 15,
  freeMode: true,
  navigation: {
    nextEl: ".swiper-button-next4",
    prevEl: ".swiper-button-prev4",
  },
});
var swiper = new Swiper(".vilaShomal", {
  slidesPerView: 4,
  spaceBetween: 15,
  freeMode: true,
  navigation: {
    nextEl: ".swiper-button-next5",
    prevEl: ".swiper-button-prev5",
  },
});
var swiper = new Swiper(".majale", {
  slidesPerView: 5,
  spaceBetween: 15,
  freeMode: true,
  navigation: {
    nextEl: ".swiper-button-next6",
    prevEl: ".swiper-button-prev6",
  },
});
///////swiper

const body = document.querySelector("body");
//////click inputha

body.addEventListener("click", function (event) {
  if (
    event.target.id === "input-nameshahr" ||
    event.target.className === "tarikh-safar cursor" ||
    event.target.id === "teadad-nafarat" ||
    event.target.tagName === "SPAN" ||
    event.target.tagName === "I" ||
    event.target.className === "teadad-nafarat-checked" ||
    event.target.innerHTML === "+" ||
    event.target.innerHTML === "-" ||
    event.target.id === "teadad-nafarat-input-checked"
  ) {
    return null;
  } else if (
    event.target.id === "input-nameshahr" ||
    event.target.id === "teadad-nafarat" ||
    event.target.className === "tarikh-safar cursor" ||
    event.target.tagName === "SPAN" ||
    event.target.tagName === "I" ||
    event.target.className === "esm-shahrhaAsli" ||
    event.target.tagName === "H3" ||
    event.target.tagName === "H5" ||
    event.target.className == "name-shahr-checked" ||
    event.target.className == "location"
  ) {
    return null;
  } else if (
    event.target.id === "input-nameshahr" ||
    event.target.id === "teadad-nafarat" ||
    event.target.className === "tarikh-safar cursor" ||
    event.target.tagName === "SPAN" ||
    event.target.tagName === "I" ||
    event.target.className === "border" ||
    event.target.className === "mah-sal" ||
    event.target.className === "hafte" ||
    event.target.className === "days" ||
    event.target.className === "target" ||
    event.target.className === "daysha2" ||
    event.target.className === "daysha" ||
    event.target.className === "daysadad" ||
    event.target.className === ""
  ) {
    return null;
  } else {
    inputTeadadchecked.classList.add("hidden");
    inputnameShahrchecked.classList.add("hidden");
    tanzimTarikhchecked.classList.add("hidden");
    inputTeadadchecked.classList.add("hidden");
    inputTeadad.style.border = "none";
    tanzimTarikh.style.border = "none";
    inputnameShahr.style.border = "none";
    body.style.overflow = "auto";
  }

  {
  }
});
////

//////click inputha
//////header
let header = document.querySelector("header");
let jostejo = document.querySelector(".jostejo");
let textTagA = document.querySelector(".sabtnam > a");

window.addEventListener("scroll", () => {
  if (window.pageYOffset >= 250) {
    header.classList.add("header-scroll");
    textTagA.style.color = "black";
    jostejo.classList.remove("hidden");
  } else {
    textTagA.style.color = "white";
    inputnameShahrchecked2.classList.add("hidden");
    jostejo.classList.add("hidden");
    header.classList.remove("header-scroll");
  }
});
//
let inputnameShahrchecked2 = document.querySelector(".name-shahr-checked2");

let jostejoinput = document.getElementById("jostejo-input");
jostejoinput.addEventListener("click", () => {
  inputnameShahrchecked2.classList.toggle("hidden");
});

//////header

//////checked item
let inputnameShahr = document.getElementById("nameshahr");
let inputnameShahrchecked = document.getElementById("name-shahr-checked");
inputnameShahr.addEventListener("click", () => {
  inputnameShahrchecked.classList.toggle("hidden");
  if (inputnameShahrchecked.className === "name-shahr-checked hidden") {
    inputnameShahr.style.border = "none";
    body.style.overflow = "auto";
  } else {
    inputnameShahr.style.border = "1px solid #4156d9";
    inputTeadadchecked.classList.add("hidden");
    tanzimTarikhchecked.classList.add("hidden");
    inputTeadad.style.border = "none";
    tanzimTarikh.style.border = "none";
    body.style.overflow = "hidden";
  }
});

let inputTeadad = document.getElementById("teadad-nafarat");
let inputTeadadchecked = document.getElementById("teadad-nafarat-checked");
inputTeadad.addEventListener("click", () => {
  inputTeadadchecked.classList.toggle("hidden");
  if (inputTeadadchecked.className === "teadad-nafarat-checked hidden") {
    body.style.overflow = "auto";
    inputTeadad.style.border = "none";
  } else {
    inputTeadad.style.border = "1px solid #4156d9";
    inputnameShahrchecked.classList.add("hidden");
    tanzimTarikhchecked.classList.add("hidden");
    inputnameShahr.style.border = "none";
    tanzimTarikh.style.border = "none";
    body.style.overflow = "hidden";
  }
});
//////

let tanzimTarikh = document.getElementById("tarikh-safar");
let tanzimTarikhchecked = document.getElementById("tanzim-tarikh");
tanzimTarikh.addEventListener("click", () => {
  tanzimTarikhchecked.classList.toggle("hidden");
  if (tanzimTarikhchecked.className === "tanzim-tarikh hidden") {
    body.style.overflow = "auto";
    tanzimTarikh.style.border = "none";
  } else {
    tanzimTarikh.style.border = "1px solid #4156d9";
    inputTeadadchecked.classList.add("hidden");
    inputnameShahrchecked.classList.add("hidden");
    body.style.overflow = "hidden";
    inputnameShahr.style.border = "none";
    inputTeadad.style.border = "none";
  }
});

let inputTeadadnafarat = document.getElementById(
  "teadad-nafarat-input-checked"
);
let spanteadadnafarat = document.getElementById("teadad-nafarat-span");
let btnha = document.querySelectorAll(".teadad-nafarat-checked > button");
let adad = 1;
let adad2 = 1;
btnha.forEach((btn) => {
  btn.addEventListener("click", (e) => {
    if (e.currentTarget.innerHTML === "+") {
      inputTeadadnafarat.value = adad++;
      spanteadadnafarat.innerText = adad2++ + " نفر";
    } else {
      inputTeadadnafarat.value = adad--;
      spanteadadnafarat.innerText = adad2-- + " نفر";
    }

    if (adad && adad2 <= 0) {
      adad = 0;
      adad2 = 0;
      inputTeadadnafarat.value = "";
      spanteadadnafarat.innerText = "تعداد نفرات";
    }
  });
});

////////

let daysNum = document.getElementById("daysha");
for (let i = 1; i < 30; i++) {
  let div = document.createElement("div");
  div.innerHTML += i;
  div.className = "daysadad";
  daysNum.appendChild(div);
  if (i <= 19) {
    div.style.backgroundColor = "rgba(168, 168, 168, 0.166";
    div.style.color = "rgba(168, 168, 168, 0.966";
  }
  if (i === 25) {
    div.style.color = "rgb(189, 25, 25)";
  }
}
let daysNum2 = document.getElementById("daysha2");
for (let i = 1; i < 32; i++) {
  let div = document.createElement("div");
  div.innerHTML += i;
  div.className = "daysadad";
  daysNum2.appendChild(div);
  if (i === 3 || i === 10 || i === 17 || i === 24 || i === 31) {
    div.style.color = "rgb(189, 25, 25)";
  }
}
//////checked item
/////////////////esm shahr

let esmshahr = document.querySelectorAll(".esm-shahrhaAsli");
esmshahr.forEach((div) => {
  div.addEventListener("click", (event) => {
    let inputnameshahrINPUT = document.getElementById("input-nameshahr");
    inputnameshahrINPUT.value = event.target.innerText;
    inputnameShahrchecked.classList.add("hidden");
    inputnameShahr.style.border = "none";
    body.style.overflow = "auto";
  });
});
/////////////////esm shahr
///////data for swiper
let dataSwiper = [
  {
    id: 1,
    img: "img/eghamtghah/house1.webp",
    h2: "یاس مبله صادقیه (10)",
    iLocation: '<i class="fa-solid fa-location-dot"></i>',
    location: "تهران، فلکه اول صادقیه",
    iHouse: '<i class="fa-solid fa-house"></i>',
    otaghAndTeadad: "آپارتمان، 1 خواب تا 2 نفر",
    nazar: "(15) نظر",
    star: '<i class="fa-solid fa-star"></i>',
    emtiaz: "4.84",
    geymat: "2,150,000",
  },
  {
    id: 2,
    img: "img/eghamtghah/house2.webp",
    h2: "میهمانسرای زرین سوئیت (1) ",
    iLocation: '<i class="fa-solid fa-location-dot"></i>',
    location: "تهران، خیابان کمیل",
    iHouse: '<i class="fa-solid fa-house"></i>',
    otaghAndTeadad: "آپارتمان، بدون اتاق خواب تا 3 نفر",
    nazar: "(13)نظر",
    star: '<i class="fa-solid fa-star"></i>',
    emtiaz: "4.29",
    geymat: "670,000",
  },
  {
    id: 3,
    img: "img/eghamtghah/house3.webp",
    h2: "مبله دوخواب تهرانپارس غربی (واحد 7)",
    iLocation: '<i class="fa-solid fa-location-dot"></i>',
    location: "تهران، تهرانپارس غربی",
    iHouse: '<i class="fa-solid fa-house"></i>',
    otaghAndTeadad: "آپارتمان، 2 خواب تا 6 نفر",
    nazar: "(22) نظر",
    star: '<i class="fa-solid fa-star"></i>',
    emtiaz: "4.15",
    geymat: "1,550,000",
  },
  {
    id: 4,
    img: "img/eghamtghah/house4.webp",
    h2: "یاس مبله صادقیه (16)",
    iLocation: '<i class="fa-solid fa-location-dot"></i>',
    location: "تهران، فلکه اول صادقیه",
    iHouse: '<i class="fa-solid fa-house"></i>',
    otaghAndTeadad: "آپارتمان، 1 خواب تا 2 نفر",
    nazar: "(114) نظر",
    star: '<i class="fa-solid fa-star"></i>',
    emtiaz: "4.76",
    geymat: "2,150,000",
  },
  {
    id: 5,
    img: "img/eghamtghah/house5.png",
    h2: "یاس مبله صادقیه (4)",
    iLocation: '<i class="fa-solid fa-location-dot"></i>',
    location: "تهران، فلکه اول صادقیه",
    iHouse: '<i class="fa-solid fa-house"></i>',
    otaghAndTeadad: "آپارتمان، 1 خواب تا 2 نفر",
    nazar: "(55) نظر",
    star: '<i class="fa-solid fa-star"></i>',
    emtiaz: "4.83",
    geymat: "1,750,000",
  },
  {
    id: 6,
    img: "img/eghamtghah/house6.webp",
    h2: "یاس مبله صادقیه (18)",
    iLocation: '<i class="fa-solid fa-location-dot"></i>',
    location: "تهران، فلکه اول صادقیه",
    iHouse: '<i class="fa-solid fa-house"></i>',
    otaghAndTeadad: "آپارتمان، 1 خواب تا 2 نفر",
    nazar: "(37) نظر",
    star: '<i class="fa-solid fa-star"></i>',
    emtiaz: "4.82",
    geymat: "2,100,000",
  },
  {
    id: 7,
    img: "img/eghamtghah/house7.webp",
    h2: "واحد مبله‌ی دوخوابه در شهرک صدف کیش",
    iLocation: '<i class="fa-solid fa-location-dot"></i>',
    location: "جزیره هرمز",
    iHouse: '<i class="fa-solid fa-house"></i>',
    otaghAndTeadad: "آپارتمان، 2 خواب تا 8 نفر",
    nazar: "(11) نظر",
    star: '<i class="fa-solid fa-star"></i>',
    emtiaz: "4.58",
    geymat: "2,500,000",
  },
  {
    id: 8,
    img: "img/eghamtghah/house8.webp",
    h2: "خانه ویلایی دو خوابه دربست در جزیره هرمز",
    iLocation: '<i class="fa-solid fa-location-dot"></i>',
    location: "کیش، شهرک صدف",
    iHouse: '<i class="fa-solid fa-house"></i>',
    otaghAndTeadad: "ویلا، 2 خواب تا 18 نفر",
    nazar: "(2) نظر",
    star: '<i class="fa-solid fa-star"></i>',
    emtiaz: "3.08",
    geymat: "4,800,000",
  },
  {
    id: 9,
    img: "img/eghamtghah/house9.webp",
    h2: "مجموعه بومگردی استاله اتاق بادیل",
    iLocation: '<i class="fa-solid fa-location-dot"></i>',
    location: "قشم، روستای دهخدا",
    iHouse: '<i class="fa-solid fa-house"></i>',
    otaghAndTeadad: "بوم‌گردی، بدون اتاق خواب تا 4 نفر",
    nazar: "(3) نظر",
    star: '<i class="fa-solid fa-star"></i>',
    emtiaz: "4.89",
    geymat: "1,600,000",
  },
  {
    id: 10,
    img: "img/eghamtghah/house10.webp",
    h2: "اقامتگاه دربست قنبرنژاد",
    iLocation: '<i class="fa-solid fa-location-dot"></i>',
    location: "جزیره هرمز، شهرک پویان",
    iHouse: '<i class="fa-solid fa-house"></i>',
    otaghAndTeadad: "ویلا، بدون اتاق خواب تا 6 نفر",
    nazar: "(5) نظر",
    star: '<i class="fa-solid fa-star"></i>',
    emtiaz: "4.37",
    geymat: "425,000",
  },
  {
    id: 11,
    img: "img/eghamtghah/house11.png",
    h2: "ویلای یک خوابه با دسترسی مطلوب",
    iLocation: '<i class="fa-solid fa-location-dot"></i>',
    location: "جزیره هرمز",
    iHouse: '<i class="fa-solid fa-house"></i>',
    otaghAndTeadad: "ویلا، 1 خواب تا 12 نفر",
    nazar: "(7) نظر",
    star: '<i class="fa-solid fa-star"></i>',
    emtiaz: "4.98",
    geymat: "850,000",
  },
  {
    id: 12,
    img: "img/eghamtghah/house12.webp",
    h2: "واحد تک خواب در قشم",
    iLocation: '<i class="fa-solid fa-location-dot"></i>',
    location: "قشم، شهرک بوستان",
    iHouse: '<i class="fa-solid fa-house"></i>',
    otaghAndTeadad: "آپارتمان، 1 خواب تا 6 نفر",
    nazar: "(6) نظر",
    star: '<i class="fa-solid fa-star"></i>',
    emtiaz: "4.89",
    geymat: "1,790,000",
  },
  {
    id: 13,
    img: "img/eghamtghah/house13.webp",
    h2: "ویلای دنج دو خوابه دربست",
    iLocation: '<i class="fa-solid fa-location-dot"></i>',
    location: "لواسان، روستای برگ جهان",
    iHouse: '<i class="fa-solid fa-house"></i>',
    otaghAndTeadad: "ویلا، 2 خواب تا 4 نفر",
    nazar: "(4) نظر",
    star: '<i class="fa-solid fa-star"></i>',
    emtiaz: "4.25",
    geymat: "1,650,000",
  },
  {
    id: 14,
    img: "img/eghamtghah/house14.webp",
    h2: "واحد نوساز مبله دونفره (قصر سه)",
    iLocation: '<i class="fa-solid fa-location-dot"></i>',
    location: "کردان",
    iHouse: '<i class="fa-solid fa-house"></i>',
    otaghAndTeadad: "آپارتمان، بدون اتاق خواب تا 2 نفر",
    nazar: "(28) نظر",
    star: '<i class="fa-solid fa-star"></i>',
    emtiaz: "4.54",
    geymat: "770,000",
  },
  {
    id: 15,
    img: "img/eghamtghah/house15.jpg",
    h2: "باغ ویلای نوساز ",
    iLocation: '<i class="fa-solid fa-location-dot"></i>',
    location: "شهریار، روستای بکه",
    iHouse: '<i class="fa-solid fa-house"></i>',
    otaghAndTeadad: "ویلا، 2 خواب تا 20 نفر",
    nazar: "(16) نظر",
    star: '<i class="fa-solid fa-star"></i>',
    emtiaz: "4.49",
    geymat: "2,500,000",
  },
  {
    id: 16,
    img: "img/eghamtghah/house16.webp",
    h2: "واحد ویلایی دو خوابه",
    iLocation: '<i class="fa-solid fa-location-dot"></i>',
    location: "کردان",
    iHouse: '<i class="fa-solid fa-house"></i>',
    otaghAndTeadad: "ویلا، 2 خواب تا 8 نفر",
    nazar: "(86) نظر",
    star: '<i class="fa-solid fa-star"></i>',
    emtiaz: "4.63",
    geymat: "1,300,000",
  },
  {
    id: 17,
    img: "img/eghamtghah/house17.webp",
    h2: "ویلای تک خواب دربست (شقایق دماوند)",
    iLocation: '<i class="fa-solid fa-location-dot"></i>',
    location: "دماوند، جیلارد",
    iHouse: '<i class="fa-solid fa-house"></i>',
    otaghAndTeadad: "ویلا، 1 خواب تا 8 نفر",
    nazar: "(258) نظر",
    star: '<i class="fa-solid fa-star"></i>',
    emtiaz: "4.4",
    geymat: "900,000",
  },
  {
    id: 18,
    img: "img/eghamtghah/house18.jpg",
    h2: "ویلای مدرن دو خوابه با استخر آب‌گرم",
    iLocation: '<i class="fa-solid fa-location-dot"></i>',
    location: "کردان، روستای سعید آباد",
    iHouse: '<i class="fa-solid fa-house"></i>',
    otaghAndTeadad: "ویلا، 2 خواب تا 8 نفر",
    nazar: "(15) نظر",
    star: '<i class="fa-solid fa-star"></i>',
    emtiaz: "4.78",
    geymat: "4,400,000",
  },
  {
    id: 19,
    img: "img/eghamtghah/house19.png",
    h2: "کلبه باغ چوبی دوبلکس",
    iLocation: '<i class="fa-solid fa-location-dot"></i>',
    location: "لاهیجان، بیدرون",
    iHouse: '<i class="fa-solid fa-house"></i>',
    otaghAndTeadad: "ویلا، 2 خواب تا 5 نفر",
    nazar: "(70) نظر",
    star: '<i class="fa-solid fa-star"></i>',
    emtiaz: "4.86",
    geymat: "2,200,000",
  },
  {
    id: 20,
    img: "img/eghamtghah/house20.webp",
    h2: "ویلا دو خوابه با منظره جنگلی در جوارم",
    iLocation: '<i class="fa-solid fa-location-dot"></i>',
    location: "سواد کوه، روستای جوارم",
    iHouse: '<i class="fa-solid fa-house"></i>',
    otaghAndTeadad: "ویلا، 2 خواب تا 10 نفر",
    nazar: "(46) نظر",
    star: '<i class="fa-solid fa-star"></i>',
    emtiaz: "4.88",
    geymat: "1,300,000",
  },
  {
    id: 21,
    img: "img/eghamtghah/house21.webp",
    h2: "واحد تک خواب نقلی و اقتصادی",
    iLocation: '<i class="fa-solid fa-location-dot"></i>',
    location: "بابلسر، روستای شورک",
    iHouse: '<i class="fa-solid fa-house"></i>',
    otaghAndTeadad: "ویلا، 2 خواب تا 4 نفر",
    nazar: "(28) نظر",
    star: '<i class="fa-solid fa-star"></i>',
    emtiaz: "4.93",
    geymat: "469,000",
  },
  {
    id: 22,
    img: "img/eghamtghah/house22.jpg",
    h2: "محمود آباد، کرچک",
    iLocation: '<i class="fa-solid fa-location-dot"></i>',
    location: "سواد کوه، روستای جوارم",
    iHouse: '<i class="fa-solid fa-house"></i>',
    otaghAndTeadad: "ویلا، 2 خواب تا 7 نفر",
    nazar: "(52) نظر",
    star: '<i class="fa-solid fa-star"></i>',
    emtiaz: "4.84",
    geymat: "1,760,000",
  },
  {
    id: 23,
    img: "img/eghamtghah/house23.jpg",
    h2: "واحد دنج و تمیز با دسترسی مطلوب",
    iLocation: '<i class="fa-solid fa-location-dot"></i>',
    location: "رشت، منظریه",
    iHouse: '<i class="fa-solid fa-house"></i>',
    otaghAndTeadad: "ویلا، 2 خواب تا 4 نفر",
    nazar: "(61) نظر",
    star: '<i class="fa-solid fa-star"></i>',
    emtiaz: "4.82",
    geymat: "990,000",
  },
  {
    id: 24,
    img: "img/eghamtghah/house24.jpg",
    h2: "ویلای مبله بهار شماره (1)",
    iLocation: '<i class="fa-solid fa-location-dot"></i>',
    location: "رویان، سی سنگان",
    iHouse: '<i class="fa-solid fa-house"></i>',
    otaghAndTeadad: "ویلا، 2 خواب تا 6 نفر",
    nazar: "(23) نظر",
    star: '<i class="fa-solid fa-star"></i>',
    emtiaz: "4.95",
    geymat: "1,500,000",
  },
];
////1
let tehranEghamtgah = dataSwiper.filter((a) => {
  return a.id <= 6;
});

tehranEghamtgah.forEach((item) => {
  let tehran = document.getElementById("tehran");
  //divasli
  let divasli = document.createElement("div");
  divasli.className = "swiper-slide tehran-slider cursor";
  //divasli

  //img
  let img = document.createElement("img");
  img.src = item.img;
  //img

  //h2
  let h2 = document.createElement("h2");
  h2.innerText = item.h2;
  //h2

  //location
  let divLoaction = document.createElement("div");
  divLoaction.className = "divLoaction";
  let pLocation = document.createElement("p");
  pLocation.innerText = item.location;
  divLoaction.innerHTML = `${item.iLocation}`;
  //location

  //nazar&otagh
  let divotagh = document.createElement("div");
  divotagh.innerHTML = `${item.iHouse}`;
  divotagh.className = "divotagh";
  let pHouse = document.createElement("p");
  pHouse.innerText = item.otaghAndTeadad;
  //
  let nazar = document.createElement("span");
  nazar.innerText = item.nazar;
  let emtiaz = document.createElement("div");
  emtiaz.className = "emtiazha";
  emtiaz.innerHTML = `${item.emtiaz} ${item.star}`;
  //nazar&otagh

  //geymat
  let geymat = document.createElement("div");
  //
  let text = document.createElement("p");
  text.innerText = "هرشب از";
  //
  let toman = document.createElement("span");
  toman.innerText = "تومان";
  toman.className = "toman";
  //
  let geymatText = document.createElement("div");
  geymatText.innerHTML = item.geymat;
  geymatText.className = "geymatText";
  geymat.className = "geymat";

  //geymat

  /////tanzim
  tehran.appendChild(divasli);
  divasli.appendChild(img);
  divasli.appendChild(h2);
  divLoaction.appendChild(pLocation);
  divasli.appendChild(divLoaction);
  divotagh.appendChild(pHouse);
  divotagh.appendChild(nazar);
  divotagh.appendChild(emtiaz);
  divasli.appendChild(divotagh);
  ///
  geymatText.appendChild(toman);
  geymat.appendChild(geymatText);
  geymat.appendChild(text);
  divasli.appendChild(geymat);
  /////tanzim
});
////1
/////////////////////////////////////////////////
////2
let jonobEghamtgah = dataSwiper.filter((a) => {
  return a.id > 6 && a.id <= 12;
});
jonobEghamtgah.forEach((item) => {
  let jonob = document.getElementById("jonob");
  //divasli
  let divasli = document.createElement("div");
  divasli.className = "swiper-slide tehran-slider cursor";
  //divasli

  //img
  let img = document.createElement("img");
  img.src = item.img;
  //img

  //h2
  let h2 = document.createElement("h2");
  h2.innerText = item.h2;
  //h2

  //location
  let divLoaction = document.createElement("div");
  divLoaction.className = "divLoaction";
  let pLocation = document.createElement("p");
  pLocation.innerText = item.location;
  divLoaction.innerHTML = `${item.iLocation}`;
  //location

  //nazar&otagh
  let divotagh = document.createElement("div");
  divotagh.innerHTML = `${item.iHouse}`;
  divotagh.className = "divotagh";
  let pHouse = document.createElement("p");
  pHouse.innerText = item.otaghAndTeadad;
  //
  let nazar = document.createElement("span");
  nazar.innerText = item.nazar;
  let emtiaz = document.createElement("div");
  emtiaz.className = "emtiazha";
  emtiaz.innerHTML = `${item.emtiaz} ${item.star}`;
  //nazar&otagh

  //geymat
  let geymat = document.createElement("div");
  //
  let text = document.createElement("p");
  text.innerText = "هرشب از";
  //
  let toman = document.createElement("span");
  toman.innerText = "تومان";
  toman.className = "toman";
  //
  let geymatText = document.createElement("div");
  geymatText.innerHTML = item.geymat;
  geymatText.className = "geymatText";
  geymat.className = "geymat";

  //geymat

  /////tanzim
  jonob.appendChild(divasli);
  divasli.appendChild(img);
  divasli.appendChild(h2);
  divLoaction.appendChild(pLocation);
  divasli.appendChild(divLoaction);
  divotagh.appendChild(pHouse);
  divotagh.appendChild(nazar);
  divotagh.appendChild(emtiaz);
  divasli.appendChild(divotagh);
  ///
  geymatText.appendChild(toman);
  geymat.appendChild(geymatText);
  geymat.appendChild(text);
  divasli.appendChild(geymat);
  /////tanzim
});
////2
////////////////////
////3
let vilaTehran = dataSwiper.filter((a) => {
  return a.id > 12 && a.id <= 18;
});
vilaTehran.forEach((item) => {
  let vilaTehran = document.getElementById("vilaTehran");
  //divasli
  let divasli = document.createElement("div");
  divasli.className = "swiper-slide tehran-slider cursor";
  //divasli

  //img
  let img = document.createElement("img");
  img.src = item.img;
  //img

  //h2
  let h2 = document.createElement("h2");
  h2.innerText = item.h2;
  //h2

  //location
  let divLoaction = document.createElement("div");
  divLoaction.className = "divLoaction";
  let pLocation = document.createElement("p");
  pLocation.innerText = item.location;
  divLoaction.innerHTML = `${item.iLocation}`;
  //location

  //nazar&otagh
  let divotagh = document.createElement("div");
  divotagh.innerHTML = `${item.iHouse}`;
  divotagh.className = "divotagh";
  let pHouse = document.createElement("p");
  pHouse.innerText = item.otaghAndTeadad;
  //
  let nazar = document.createElement("span");
  nazar.innerText = item.nazar;
  let emtiaz = document.createElement("div");
  emtiaz.className = "emtiazha";
  emtiaz.innerHTML = `${item.emtiaz} ${item.star}`;
  //nazar&otagh

  //geymat
  let geymat = document.createElement("div");
  //
  let text = document.createElement("p");
  text.innerText = "هرشب از";
  //
  let toman = document.createElement("span");
  toman.innerText = "تومان";
  toman.className = "toman";
  //
  let geymatText = document.createElement("div");
  geymatText.innerHTML = item.geymat;
  geymatText.className = "geymatText";
  geymat.className = "geymat";

  //geymat

  /////tanzim
  vilaTehran.appendChild(divasli);
  divasli.appendChild(img);
  divasli.appendChild(h2);
  divLoaction.appendChild(pLocation);
  divasli.appendChild(divLoaction);
  divotagh.appendChild(pHouse);
  divotagh.appendChild(nazar);
  divotagh.appendChild(emtiaz);
  divasli.appendChild(divotagh);
  ///
  geymatText.appendChild(toman);
  geymat.appendChild(geymatText);
  geymat.appendChild(text);
  divasli.appendChild(geymat);
  /////tanzim
});
////3
////////////////////
////4
let vilaShomal = dataSwiper.filter((a) => {
  return a.id > 18 && a.id <= dataSwiper.length;
});
vilaShomal.forEach((item) => {
  let vilaShomal = document.getElementById("vilaShomal");
  //divasli
  let divasli = document.createElement("div");
  divasli.className = "swiper-slide tehran-slider cursor";
  //divasli

  //img
  let img = document.createElement("img");
  img.src = item.img;
  //img

  //h2
  let h2 = document.createElement("h2");
  h2.innerText = item.h2;
  //h2

  //location
  let divLoaction = document.createElement("div");
  divLoaction.className = "divLoaction";
  let pLocation = document.createElement("p");
  pLocation.innerText = item.location;
  divLoaction.innerHTML = `${item.iLocation}`;
  //location

  //nazar&otagh
  let divotagh = document.createElement("div");
  divotagh.innerHTML = `${item.iHouse}`;
  divotagh.className = "divotagh";
  let pHouse = document.createElement("p");
  pHouse.innerText = item.otaghAndTeadad;
  //
  let nazar = document.createElement("span");
  nazar.innerText = item.nazar;
  let emtiaz = document.createElement("div");
  emtiaz.className = "emtiazha";
  emtiaz.innerHTML = `${item.emtiaz} ${item.star}`;
  //nazar&otagh

  //geymat
  let geymat = document.createElement("div");
  //
  let text = document.createElement("p");
  text.innerText = "هرشب از";
  //
  let toman = document.createElement("span");
  toman.innerText = "تومان";
  toman.className = "toman";
  //
  let geymatText = document.createElement("div");
  geymatText.innerHTML = item.geymat;
  geymatText.className = "geymatText";
  geymat.className = "geymat";

  //geymat

  /////tanzim
  vilaShomal.appendChild(divasli);
  divasli.appendChild(img);
  divasli.appendChild(h2);
  divLoaction.appendChild(pLocation);
  divasli.appendChild(divLoaction);
  divotagh.appendChild(pHouse);
  divotagh.appendChild(nazar);
  divotagh.appendChild(emtiaz);
  divasli.appendChild(divotagh);
  ///
  geymatText.appendChild(toman);
  geymat.appendChild(geymatText);
  geymat.appendChild(text);
  divasli.appendChild(geymat);
  /////tanzim
});
////4

//////////////data for swiper
//////////////////////////////////////////
////////////// data for majale
let majale = [
  {
    id: 1,
    img: "img/majale/majale1.webp",
    tozih: "سوالات پر تکرار",
  },
  {
    id: 2,
    img: "img/majale/majale2.jpg",
    tozih: "پارک ملت مشهد؛ یک تفرجگاه تمام عیار برای گشت‌...",
  },
  {
    id: 3,
    img: "img/majale/majale3.jpg",
    tozih: "پارک پردیسان کجاست و چه امکاناتی دارد؟",
  },
  {
    id: 4,
    img: "img/majale/majale4.jpg",
    tozih: "0 تا 100 معرفی پارک جمشیدیه تهران",
  },
  {
    id: 5,
    img: "img/majale/majale5.jpg",
    tozih: "گشتی کوتاه در زیباترین پارک شمال تهران، پارک ...",
  },
  {
    id: 6,
    img: "img/majale/majale6.jpg",
    tozih: "راهنمای سفر به تنگ دار + صفر تا 100 معرفی این...",
  },
  {
    id: 7,
    img: "img/majale/majale7.jpg",
    tozih: "همه چیز درباره روستای رویایی گیلان؛ روستای اس...",
  },
];

majale.forEach((item) => {
  let majale = document.getElementById("majale");
  //
  let divasli = document.createElement("div");
  divasli.className = "swiper-slide majale-slider cursor";
  //
  let img = document.createElement("img");
  img.src = item.img;
  //
  let h2 = document.createElement("h2");
  h2.innerText = item.tozih;
  divasli.appendChild(img);
  divasli.appendChild(h2);
  majale.appendChild(divasli);
});
////////////// data for majale
//////////////////////////////////////////
////////////// data for ashnaei
let DATAashnaei = [
  {
    id: 1,
    LI: "تماس با ما",
  },
  {
    id: 2,
    LI: "تماس با ما",
  },
  {
    id: 3,
    LI: "سوالات متداول",
  },
  {
    id: 4,
    LI: "حقوق کاربران",
  },
  {
    id: 5,
    LI: "قوانین استفاده از شب",
  },
  {
    id: 6,
    LI: "قواعد باز پرداخت وجه",
  },
  {
    id: 7,
    LI: "وبلاگ شب",
  },
  {
    id: 8,
    LI: "میزبان شوید",
  },
  {
    id: 9,
    LI: "نحوه کار شب",
  },
  {
    id: 10,
    LI: " همکاری سازمانی ",
  },
  {
    id: 11,
    LI: " فرصت های شغلی ",
  },
];

let UL1 = DATAashnaei.filter((IDha) => {
  return IDha.id <= 4;
});

UL1.forEach((item) => {
  let ul = document.getElementById("data-ashnaei1");
  let li = document.createElement("li");
  li.innerText = item.LI;
  ul.appendChild(li);
});
let UL2 = DATAashnaei.filter((IDha) => {
  return IDha.id > 4 && IDha.id <= 8;
});
//////////////////
UL2.forEach((item) => {
  let ul = document.getElementById("data-ashnaei2");
  let li = document.createElement("li");
  li.innerText = item.LI;
  ul.appendChild(li);
});
let UL3 = DATAashnaei.filter((IDha) => {
  return IDha.id > 8 && IDha.id <= DATAashnaei.length;
});
//////////////////
UL3.forEach((item) => {
  let ul = document.getElementById("data-ashnaei3");
  let li = document.createElement("li");
  li.innerText = item.LI;
  ul.appendChild(li);
});
////////////// data for ashnaei
//////////////////////////
////////////// data for EJARE
let Ejare = [
  {
    id: 1,
    text: "اجاره ویلا در چالوس",
  },
  {
    id: 2,
    text: "اجاره ویلا در کلاردشت",
  },
  {
    id: 3,
    text: "اجاره ویلا در تالش",
  },
  {
    id: 4,
    text: "اجاره ویلا در فومن",
  },
  {
    id: 5,
    text: "اجاره ویلا در بابلسر",
  },
  {
    id: 6,
    text: "اجاره ویلا در محمود اباد",
  },
  {
    id: 7,
    text: "اجاره ویلا در فریدون کنار",
  },
  {
    id: 8,
    text: "اجاره ویلا در نوشهر",
  },
  {
    id: 9,
    text: "اجاره ویلا در رامسر",
  },
  {
    id: 10,
    text: "اجاره ویلا در شیراز",
  },
  {
    id: 11,
    text: "اجاره ویلا در بندرعباس",
  },
  {
    id: 12,
    text: "اجاره ویلا در هرمزگان",
  },
  {
    id: 13,
    text: "اجاره ویلا در قشم",
  },
  {
    id: 14,
    text: "اجاره ویلا در کیش",
  },
  {
    id: 15,
    text: "اجاره ویلا در جزیره هرمز",
  },
  {
    id: 16,
    text: "اجاره ویلا در یزد",
  },
  {
    id: 17,
    text: "اجاره ویلا در همدان",
  },
  {
    id: 18,
    text: "اجاره ویلا در تهران",
  },
  {
    id: 19,
    text: "اجاره ویلا در بومهن",
  },
  {
    id: 20,
    text: "اجاره ویلا در دماوند",
  },
  {
    id: 21,
    text: "اجاره ویلا در لواسان",
  },
  {
    id: 22,
    text: "اجاره ویلا در طالقان",
  },
  {
    id: 23,
    text: "اجاره ویلا در کردان",
  },
  {
    id: 24,
    text: "اجاره ویلا در فیروزکوه",
  },
];
let EjarevilaShomal = Ejare.filter((item) => {
  return item.id <= 9;
});
EjarevilaShomal.forEach((item) => {
  let divasli = document.getElementById("EjarevilaShomal");
  let a = document.createElement("a");
  a.className = "tagA";
  a.href = "#";
  a.innerText = item.text;
  divasli.appendChild(a);
});
///////////
let EjarevilaJonob = Ejare.filter((item) => {
  return item.id > 9 && item.id <= 17;
});
EjarevilaJonob.forEach((item) => {
  let divasli = document.getElementById("EjarevilaJonob");
  let a = document.createElement("a");
  a.className = "tagA";
  a.href = "#";
  a.innerText = item.text;
  divasli.appendChild(a);
});
let EjarevilaTehran = Ejare.filter((item) => {
  return item.id > 17 && item.id <= Ejare.length;
});
EjarevilaTehran.forEach((item) => {
  let divasli = document.getElementById("EjarevilaTehran");
  let a = document.createElement("a");
  a.className = "tagA";
  a.href = "#";
  a.innerText = item.text;
  divasli.appendChild(a);
});
let DIVsamtChap = Ejare.filter((item) => {
  return item.id <= 17;
});
DIVsamtChap.forEach((itemha) => {
  let divasli = document.getElementById("samtChap");
  let a = document.createElement("a");
  a.href = "#";

  a.innerText = itemha.text;
  divasli.appendChild(a);
});
////////////// data for EJARE
