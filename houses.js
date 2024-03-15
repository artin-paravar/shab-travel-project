let inputnameShahrchecked2 = document.querySelector(".name-shahr-checked2");

let jostejoinput = document.getElementById("jostejo-input");
jostejoinput.addEventListener("click", () => {
  inputnameShahrchecked2.classList.toggle("hidden");
});
////////////////////////
// button
let btn = document.querySelectorAll(".plus-mines");
let input = document.getElementById("tedad");
let adad = 1;
btn.forEach((plusANDmines) => {
  plusANDmines.addEventListener("click", (item) => {
    if (item.target.innerText === "+") {
      input.innerText = `${adad++} نفر`;
    } else {
      input.innerText = `${adad--} نفر`;
    }
    if (adad <= 0) {
      let mines = document.getElementById("mines");
      mines.style.backgroundColor = "var(--lightgray)";
      mines.style.color = "var(--gray)";
      adad = 0;
    } else if (adad >= 6) {
      let plus = document.getElementById("plus");
      plus.style.backgroundColor = "var(--lightgray)";
      plus.style.color = "var(--gray)";
      adad = 6;
    } else {
      let mines = document.getElementById("mines");
      let plus = document.getElementById("plus");
      mines.style.backgroundColor = "#f0efff";
      mines.style.color = "var(--abisite)";
      plus.style.backgroundColor = "#f0efff";
      plus.style.color = "var(--abisite)";
    }
  });
});
// button
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

window.addEventListener("scroll", () => {
  if (window.pageYOffset <= 519) {
    aha();
    active[0].classList.add("active");
  } else if (window.pageYOffset >= 519 && window.pageYOffset <= 2245) {
    aha();
    active[1].classList.add("active");
  } else if (window.pageYOffset >= 2245 && window.pageYOffset <= 2795) {
    aha();
    active[2].classList.add("active");
  } else if (window.pageYOffset >= 2795 && window.pageYOffset <= 3140) {
    aha();
    active[3].classList.add("active");
  } else if (window.pageYOffset >= 3140 && window.pageYOffset <= 3689) {
    aha();
    active[4].classList.add("active");
  } else if (window.pageYOffset >= 3809 && window.pageYOffset <= 4200) {
    aha();
    active[5].classList.add("active");
  } else {
    aha();
  }
});

function aha() {
  active.forEach((a) => {
    a.classList.remove("active");
  });
}

/////// kojaySafhe
/////// commentha

let dataCommentha = [
  {
    id: 1,
    name: "حمید اسماعیلی",
    pishnahad: true,
    zaman: "13 روز پیش",
    Star: 5,
    text: "خونه قشنگی بود میزبان محترمی داشت",
  },
  {
    id: 2,
    name: "امیرحسین",
    pishnahad: true,
    zaman: "21 روز پیش",
    Star: 4,
    text: "درکل همه چی خوب بود و رفتار میزبان بسیار عالی",
  },
  {
    id: 3,
    name: "لعیا توکلی",
    pishnahad: false,
    zaman: "10 روز پیش",
    Star: 3,
    text: "خونه خیلی تمیز بود و نظافتش مشکلی نداشت ولی میزبان برخورد خوبی نداشتند و اصلا مودب نبودند.",
  },
  {
    id: 4,
    name: "محسن اسماعیلی",
    pishnahad: false,
    zaman: "15 روز پیش",
    Star: 2,
    text: "خونه اصلا تمیز نبود و خیلی هم سر و صدا بود یعنی خیلی سکوت و ارامش نداشت و نظافتش هم واقعا مورد رضایت نبود.",
  },
];
let commentha = document.getElementById("commentha");
dataCommentha.forEach((data) => {
  let divAsli = document.createElement("div");
  divAsli.className = "comment";
  //
  let divNameANDpishnahadANDimg = document.createElement("div");
  divNameANDpishnahadANDimg.className = "divNameANDpishnahadANDimg";
  //
  let img = document.createElement("img");
  img.src = "img/icon/user-default.webp";
  //
  let tanzimZamanANDpishnahad = document.createElement("div");
  tanzimZamanANDpishnahad.className = "flex-decoration";
  //
  let divNameANDpishnahad = document.createElement("div");
  divNameANDpishnahad.className = "divNameANDpishnahad";
  //
  let name = document.createElement("p");
  name.innerText = data.name;
  //
  let pishnahadTRUEORFALSE = document.createElement("span");
  data.pishnahad === true
    ? (pishnahadTRUEORFALSE.innerHTML = `<i class="fa-solid fa-thumbs-up"></i> پیشنهاد می‌کنم `) &&
      (pishnahadTRUEORFALSE.className = "pishnahadTRUE")
    : (pishnahadTRUEORFALSE.innerHTML = `<i class="fa-solid fa-thumbs-down"></i> پیشنهاد نمی‌کنم  `) &&
      (pishnahadTRUEORFALSE.className = "pishnahadFALSE");
  //
  let startANDzaman = document.createElement("div");
  startANDzaman.className = "startANDzaman";
  //
  let zaman = document.createElement("span");
  zaman.innerText = data.zaman;
  zaman.style.fontSize = "12px";
  zaman.style.color = "var(--lightblack)";
  //
  let star = document.createElement("div");
  for (let i = 0; i < data.Star; i++) {
    star.innerHTML += `<i class="fa-solid fa-star"></i>`;
  }
  star.style.color = "var(--gray)";
  star.style.fontSize = "12px";
  //
  let TEXT = document.createElement("span");
  TEXT.className = "TEXTcomment";
  TEXT.innerText = data.text;
  commentha.appendChild(divAsli);
  divAsli.append(divNameANDpishnahadANDimg);
  divNameANDpishnahadANDimg.append(img);
  divNameANDpishnahadANDimg.append(tanzimZamanANDpishnahad);
  tanzimZamanANDpishnahad.append(divNameANDpishnahad);
  divNameANDpishnahad.append(name);
  divNameANDpishnahad.append(pishnahadTRUEORFALSE);
  tanzimZamanANDpishnahad.append(startANDzaman);
  startANDzaman.append(zaman);
  startANDzaman.append(star);
  divAsli.append(TEXT);
});
/////// commentha
/////// daysha
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
/////// daysha

////////////////////////
///////footer
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
///////footer

// slider
var swiper = new Swiper(".swiper", {
  navigation: {
    nextEl: ".swiper-button-next7",
    prevEl: ".swiper-button-prev7",
  },
});
let imgclick = document.querySelectorAll("#imgha-click");
let swiperWrapper = document.getElementById("img-houses-slider");
let imgSlider = document.querySelectorAll("#img-slider");
let slider = document.getElementById("slider");
imgSlider.forEach((click) => {
  click.addEventListener("click", () => {
    slider.style.transform = "translateY(0)";
  });
});
let Close = document.getElementById("close");
Close.addEventListener("click", () => {
  slider.style.transform = "translateY(100%)";
});
//
imgclick.forEach((imgha) => {
  imgha.addEventListener("click", () => {
    remove();
    imgha.style.border = "3px lightgray solid";
    imgha.style.transition = "0.1s all ";
    imgha.style.padding = "2px";

    if (imgha.src === imgSlider[0].src) {
      swiperWrapper.style.transform = "translate3d(0, 0, 0)";
      swiperWrapper.style.transition = "0.3s all";
      imgSlider[0].className = "swiper-slide tanzim-slider swiper-slide-active";
      imgSlider[1].className = "swiper-slide tanzim-slider swiper-slide-next";
      imgSlider[2].className = "swiper-slide tanzim-slider";
      imgSlider[3].className = "swiper-slide tanzim-slider";
      imgSlider[4].className = "swiper-slide tanzim-slider";
    } else if (imgha.src === imgSlider[1].src) {
      swiperWrapper.style.transition = "0.3s all";
      swiperWrapper.style.transform = "translate3d(768px, 0, 0)";

      imgSlider[0].className = "swiper-slide tanzim-slider swiper-slide-prev";
      imgSlider[1].className = "swiper-slide tanzim-slider swiper-slide-active";
      imgSlider[2].className = "swiper-slide tanzim-slider swiper-slide-next";
      imgSlider[3].className = "swiper-slide tanzim-slider";
      imgSlider[4].className = "swiper-slide tanzim-slider";
    } else if (imgha.src === imgSlider[2].src) {
      swiperWrapper.style.transform = "translate3d(1536px, 0, 0)";
      swiperWrapper.style.transition = "0.3s all";
      imgSlider[0].className = "swiper-slide tanzim-slider";
      imgSlider[1].className = "swiper-slide tanzim-slider swiper-slide-prev";
      imgSlider[2].className = "swiper-slide tanzim-slider swiper-slide-active";
      imgSlider[3].className = "swiper-slide tanzim-slider swiper-slide-next";
      imgSlider[4].className = "swiper-slide tanzim-slider";
    } else if (imgha.src === imgSlider[3].src) {
      swiperWrapper.style.transform = "translate3d(2304px, 0, 0)";
      swiperWrapper.style.transition = "0.3s all";

      imgSlider[0].className = "swiper-slide tanzim-slider";
      imgSlider[1].className = "swiper-slide tanzim-slider";
      imgSlider[2].className = "swiper-slide tanzim-slider swiper-slide-prev";
      imgSlider[3].className = "swiper-slide tanzim-slider swiper-slide-active";
      imgSlider[4].className = "swiper-slide tanzim-slider swiper-slide-next";
    } else if (imgha.src === imgSlider[4].src) {
      swiperWrapper.style.transform = "translate3d(3072px, 0, 0)";
      swiperWrapper.style.transition = "0.3s all";

      imgSlider[0].className = "swiper-slide tanzim-slider";
      imgSlider[1].className = "swiper-slide tanzim-slider";
      imgSlider[2].className = "swiper-slide tanzim-slider";
      imgSlider[3].className = "swiper-slide tanzim-slider swiper-slide-prev";
      imgSlider[4].className = "swiper-slide tanzim-slider swiper-slide-active";
    }
  });
});
let next = document.querySelector(".swiper-button-next7");
let prev = document.querySelector(".swiper-button-prev7");
next.addEventListener("click", () => {
  remove();
});
prev.addEventListener("click", () => {
  remove();
});
function remove() {
  imgclick.forEach((imgha) => {
    imgha.style.border = "none";
    imgha.style.padding = "0px";
  });
}
// slider
