let inputnameShahrchecked2 = document.querySelector(".name-shahr-checked2");

let jostejoinput = document.getElementById("jostejo-input");
jostejoinput.addEventListener("click", () => {
  inputnameShahrchecked2.classList.toggle("hidden");
});

let khoneha = document.getElementById("khoneha");
let khoneha2 = document.getElementById("khoneha2");
let khoneha3 = document.getElementById("khoneha3");
let khoneha4 = document.getElementById("khoneha4");
let peidaShode = document.getElementById("peida-shode");
// filter animation

let filterha = document.querySelectorAll("#filter");
filterha.forEach((text) => {
  text.addEventListener("click", (e) => {
    remove();
    text.classList.add("active");
    //
    //
    //
    //
    if (e.target.innerText === "محبوب‌ترین") {
      khoneha2.style.display = "flex";
      khoneha.style.display = "none";
      khoneha3.style.display = "none";
      peidaShode.innerText = `${mahbobtarin.length} اقامتگاه پیدا شد`;
      khoneha4.style.display = "none";
    } else if (e.target.innerText === "ارزان‌ترین") {
      khoneha2.style.display = "none";
      khoneha.style.display = "none";
      peidaShode.innerText = `${arzontarin.length} اقامتگاه پیدا شد`;
      khoneha3.style.display = "flex";
      khoneha4.style.display = "none";
    } else {
      khoneha2.style.display = "none";
      khoneha.style.display = "flex";
      khoneha3.style.display = "none";
      peidaShode.innerText = `${data.length} اقامتگاه پیدا شد`;

      khoneha4.style.display = "none";
    }
  });
});
function remove() {
  filterha.forEach((text) => {
    text.classList.remove("active");
  });
}
// filter animation
// khoneha data
let data = [
  {
    id: 1,
    img: [
      {
        img: "img/eghamtghah/house1.webp",
      },
      {
        img: "img/eghamtghah/house2.webp",
      },
      {
        img: "img/eghamtghah/house3.webp",
      },
      {
        img: "img/eghamtghah/house4.webp",
      },
    ],
    h2: "یاس مبله صادقیه (10)",
    iLocation: '<i class="fa-solid fa-location-dot"></i>',
    location: "تهران، فلکه اول صادقیه",
    iHouse: '<i class="fa-solid fa-house"></i>',
    otaghAndTeadad: "آپارتمان، 1 خواب تا 2 نفر",
    nazar: "(15) نظر",
    star: '<i class="fa-solid fa-star"></i>',
    emtiaz: 4.84,
    geymat: "2,150,000",
    geymatNUM: 2150000,
  },
  {
    id: 2,
    img: [
      {
        img: "img/eghamtghah/house4.webp",
      },
      {
        img: "img/eghamtghah/house5.png",
      },
      {
        img: "img/eghamtghah/house6.webp",
      },
      {
        img: "img/eghamtghah/house7.webp",
      },
    ],
    h2: "میهمانسرای زرین سوئیت (1) ",
    iLocation: '<i class="fa-solid fa-location-dot"></i>',
    location: "تهران، خیابان کمیل",
    iHouse: '<i class="fa-solid fa-house"></i>',
    otaghAndTeadad: "آپارتمان، بدون اتاق خواب تا 3 نفر",
    nazar: "(13)نظر",
    star: '<i class="fa-solid fa-star"></i>',
    emtiaz: 4.29,
    geymat: "670,000",
    geymatNUM: 670000,
  },
  {
    id: 3,

    img: [
      {
        img: "img/eghamtghah/house8.webp",
      },
      {
        img: "img/eghamtghah/house9.webp",
      },
      {
        img: "img/eghamtghah/house10.webp",
      },
      {
        img: "img/eghamtghah/house11.png",
      },
    ],
    h2: "مبله دوخواب تهرانپارس غربی (واحد 7)",
    iLocation: '<i class="fa-solid fa-location-dot"></i>',
    location: "تهران، تهرانپارس غربی",
    iHouse: '<i class="fa-solid fa-house"></i>',
    otaghAndTeadad: "آپارتمان، 2 خواب تا 6 نفر",
    nazar: "(22) نظر",
    star: '<i class="fa-solid fa-star"></i>',
    emtiaz: 4.15,
    geymat: "1,550,000",
    geymatNUM: 1550000,
  },
  {
    id: 4,

    img: [
      {
        img: "img/eghamtghah/house12.webp",
      },
      {
        img: "img/eghamtghah/house13.webp",
      },
      {
        img: "img/eghamtghah/house14.webp",
      },
      {
        img: "img/eghamtghah/house15.jpg",
      },
    ],

    h2: "یاس مبله صادقیه (16)",
    iLocation: '<i class="fa-solid fa-location-dot"></i>',
    location: "تهران، فلکه اول صادقیه",
    iHouse: '<i class="fa-solid fa-house"></i>',
    otaghAndTeadad: "آپارتمان، 1 خواب تا 2 نفر",
    nazar: "(114) نظر",
    star: '<i class="fa-solid fa-star"></i>',
    emtiaz: 4.76,
    geymat: "2,150,000",
    geymatNUM: 2150000,
  },
  {
    id: 5,

    img: [
      {
        img: "img/eghamtghah/house16.webp",
      },
      {
        img: "img/eghamtghah/house17.webp",
      },
      {
        img: "img/eghamtghah/house18.jpg",
      },
      {
        img: "img/eghamtghah/house19.png",
      },
    ],

    h2: "یاس مبله صادقیه (4)",
    iLocation: '<i class="fa-solid fa-location-dot"></i>',
    location: "تهران، فلکه اول صادقیه",
    iHouse: '<i class="fa-solid fa-house"></i>',
    otaghAndTeadad: "آپارتمان، 1 خواب تا 2 نفر",
    nazar: "(55) نظر",
    star: '<i class="fa-solid fa-star"></i>',
    emtiaz: 4.83,
    geymat: "1,750,000",
    geymatNUM: 1750000,
  },
  {
    id: 6,

    img: [
      {
        img: "img/eghamtghah/house20.webp",
      },
      {
        img: "img/eghamtghah/house21.webp",
      },
      {
        img: "img/eghamtghah/house22.jpg",
      },
      {
        img: "img/eghamtghah/house23.jpg",
      },
    ],
    h2: "یاس مبله صادقیه (18)",
    iLocation: '<i class="fa-solid fa-location-dot"></i>',
    location: "تهران، فلکه اول صادقیه",
    iHouse: '<i class="fa-solid fa-house"></i>',
    otaghAndTeadad: "آپارتمان، 1 خواب تا 2 نفر",
    nazar: "(37) نظر",
    star: '<i class="fa-solid fa-star"></i>',
    emtiaz: 4.82,
    geymat: "2,100,000",
    geymatNUM: 2100000,
  },
  {
    id: 7,
    img: [
      {
        img: "img/eghamtghah/house24.jpg",
      },
      {
        img: "img/eghamtghah/house2.webp",
      },
      {
        img: "img/eghamtghah/house3.webp",
      },
      {
        img: "img/eghamtghah/house4.webp",
      },
    ],
    h2: "واحد مبله‌ی دوخوابه در شهرک صدف کیش",
    iLocation: '<i class="fa-solid fa-location-dot"></i>',
    location: "جزیره هرمز",
    iHouse: '<i class="fa-solid fa-house"></i>',
    otaghAndTeadad: "آپارتمان، 2 خواب تا 8 نفر",
    nazar: "(11) نظر",
    star: '<i class="fa-solid fa-star"></i>',
    emtiaz: 4.58,
    geymat: "2,500,000",
    geymatNUM: 2500000,
  },
  {
    id: 8,
    img: [
      {
        img: "img/eghamtghah/house24.jpg",
      },
      {
        img: "img/eghamtghah/house5.png",
      },
      {
        img: "img/eghamtghah/house6.webp",
      },
      {
        img: "img/eghamtghah/house7.webp",
      },
    ],
    h2: "خانه ویلایی دو خوابه دربست در جزیره هرمز",
    iLocation: '<i class="fa-solid fa-location-dot"></i>',
    location: "کیش، شهرک صدف",
    iHouse: '<i class="fa-solid fa-house"></i>',
    otaghAndTeadad: "ویلا، 2 خواب تا 18 نفر",
    nazar: "(2) نظر",
    star: '<i class="fa-solid fa-star"></i>',
    emtiaz: 3.08,
    geymat: "4,800,000",
    geymatNUM: 4800000,
  },
  {
    id: 9,
    img: [
      {
        img: "img/eghamtghah/house1.webp",
      },
      {
        img: "img/eghamtghah/house9.webp",
      },
      {
        img: "img/eghamtghah/house10.webp",
      },
      {
        img: "img/eghamtghah/house11.png",
      },
    ],

    h2: "مجموعه بومگردی استاله اتاق بادیل",
    iLocation: '<i class="fa-solid fa-location-dot"></i>',
    location: "قشم، روستای دهخدا",
    iHouse: '<i class="fa-solid fa-house"></i>',
    otaghAndTeadad: "بوم‌گردی، بدون اتاق خواب تا 4 نفر",
    nazar: "(3) نظر",
    star: '<i class="fa-solid fa-star"></i>',
    emtiaz: 4.89,
    geymat: "1,600,000",
    geymatNUM: 1600000,
  },
  {
    id: 10,
    img: [
      {
        img: "img/eghamtghah/house12.webp",
      },
      {
        img: "img/eghamtghah/house13.webp",
      },
      {
        img: "img/eghamtghah/house14.webp",
      },
      {
        img: "img/eghamtghah/house15.jpg",
      },
    ],
    h2: "اقامتگاه دربست قنبرنژاد",
    iLocation: '<i class="fa-solid fa-location-dot"></i>',
    location: "جزیره هرمز، شهرک پویان",
    iHouse: '<i class="fa-solid fa-house"></i>',
    otaghAndTeadad: "ویلا، بدون اتاق خواب تا 6 نفر",
    nazar: "(5) نظر",
    star: '<i class="fa-solid fa-star"></i>',
    emtiaz: 4.37,
    geymat: "425,000",
    geymatNUM: 425000,
  },
  {
    id: 11,
    img: [
      {
        img: "img/eghamtghah/house16.webp",
      },
      {
        img: "img/eghamtghah/house17.webp",
      },
      {
        img: "img/eghamtghah/house18.jpg",
      },
      {
        img: "img/eghamtghah/house19.png",
      },
    ],

    h2: "ویلای یک خوابه با دسترسی مطلوب",
    iLocation: '<i class="fa-solid fa-location-dot"></i>',
    location: "جزیره هرمز",
    iHouse: '<i class="fa-solid fa-house"></i>',
    otaghAndTeadad: "ویلا، 1 خواب تا 12 نفر",
    nazar: "(7) نظر",
    star: '<i class="fa-solid fa-star"></i>',
    emtiaz: 4.98,
    geymat: "850,000",
    geymatNUM: 850000,
  },
  {
    id: 12,
    img: [
      {
        img: "img/eghamtghah/house20.webp",
      },
      {
        img: "img/eghamtghah/house21.webp",
      },
      {
        img: "img/eghamtghah/house22.jpg",
      },
      {
        img: "img/eghamtghah/house23.jpg",
      },
    ],
    h2: "واحد تک خواب در قشم",
    iLocation: '<i class="fa-solid fa-location-dot"></i>',
    location: "قشم، شهرک بوستان",
    iHouse: '<i class="fa-solid fa-house"></i>',
    otaghAndTeadad: "آپارتمان، 1 خواب تا 6 نفر",
    nazar: "(6) نظر",
    star: '<i class="fa-solid fa-star"></i>',
    emtiaz: 4.89,
    geymat: "1,790,000",
    geymatNUM: 1790000,
  },
  {
    id: 13,

    img: [
      {
        img: "img/eghamtghah/house24.jpg",
      },
      {
        img: "img/eghamtghah/house1.webp",
      },
      {
        img: "img/eghamtghah/house2.webp",
      },
      {
        img: "img/eghamtghah/house3.webp",
      },
    ],
    h2: "ویلای دنج دو خوابه دربست",
    iLocation: '<i class="fa-solid fa-location-dot"></i>',
    location: "لواسان، روستای برگ جهان",
    iHouse: '<i class="fa-solid fa-house"></i>',
    otaghAndTeadad: "ویلا، 2 خواب تا 4 نفر",
    nazar: "(4) نظر",
    star: '<i class="fa-solid fa-star"></i>',
    emtiaz: 4.25,
    geymat: "1,650,000",
    geymatNUM: 1650000,
  },
  {
    id: 14,
    img: [
      {
        img: "img/eghamtghah/house4.webp",
      },
      {
        img: "img/eghamtghah/house5.png",
      },
      {
        img: "img/eghamtghah/house6.webp",
      },
      {
        img: "img/eghamtghah/house7.webp",
      },
    ],
    h2: "واحد نوساز مبله دونفره (قصر سه)",
    iLocation: '<i class="fa-solid fa-location-dot"></i>',
    location: "کردان",
    iHouse: '<i class="fa-solid fa-house"></i>',
    otaghAndTeadad: "آپارتمان، بدون اتاق خواب تا 2 نفر",
    nazar: "(28) نظر",
    star: '<i class="fa-solid fa-star"></i>',
    emtiaz: 4.54,
    geymat: "770,000",
    geymatNUM: 770000,
  },
  {
    id: 15,
    img: [
      {
        img: "img/eghamtghah/house8.webp",
      },
      {
        img: "img/eghamtghah/house9.webp",
      },
      {
        img: "img/eghamtghah/house10.webp",
      },
      {
        img: "img/eghamtghah/house11.png",
      },
    ],
    h2: "باغ ویلای نوساز ",
    iLocation: '<i class="fa-solid fa-location-dot"></i>',
    location: "شهریار، روستای بکه",
    iHouse: '<i class="fa-solid fa-house"></i>',
    otaghAndTeadad: "ویلا، 2 خواب تا 20 نفر",
    nazar: "(16) نظر",
    star: '<i class="fa-solid fa-star"></i>',
    emtiaz: 4.49,
    geymat: "2,500,000",
    geymatNUM: 2500000,
  },
  {
    id: 16,
    img: [
      {
        img: "img/eghamtghah/house12.webp",
      },
      {
        img: "img/eghamtghah/house13.webp",
      },
      {
        img: "img/eghamtghah/house14.webp",
      },
      {
        img: "img/eghamtghah/house15.jpg",
      },
    ],
    h2: "واحد ویلایی دو خوابه",
    iLocation: '<i class="fa-solid fa-location-dot"></i>',
    location: "کردان",
    iHouse: '<i class="fa-solid fa-house"></i>',
    otaghAndTeadad: "ویلا، 2 خواب تا 8 نفر",
    nazar: "(86) نظر",
    star: '<i class="fa-solid fa-star"></i>',
    emtiaz: 4.63,
    geymat: "1,300,000",
    geymatNUM: 1300000,
  },
];

data.forEach((item) => {
  //divasli
  let divasli = document.createElement("a");
  divasli.href = "houses.html";
  divasli.className = "khoneha-slider cursor";
  //divasli

  //sliderKhoneha
  let sliderKhoneha = document.createElement("div");
  sliderKhoneha.className = "swiper mySwiper";
  //
  let swiperWrapper = document.createElement("div");
  swiperWrapper.className = "swiper-wrapper";
  //

  //
  item.img.forEach((imgha) => {
    let swiperSlide = document.createElement("div");
    let imgslider = document.createElement("img");
    swiperSlide.className = "swiper-slide";
    imgslider.src = imgha.img;
    imgslider.className = "imgha-cover";
    swiperSlide.appendChild(imgslider);
    swiperWrapper.appendChild(swiperSlide);
    sliderKhoneha.appendChild(swiperWrapper);
  });
  //
  //sliderKhoneha

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
  let divaval = document.createElement("div");

  divotagh.className = "divotagh";
  let pHouse = document.createElement("p");
  pHouse.innerHTML = `${item.iHouse} ${item.otaghAndTeadad} `;
  //
  let divdovom = document.createElement("div");

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
  khoneha.appendChild(divasli);
  let arrownext = document.createElement("div");
  let arrowprev = document.createElement("div");
  let pagination = document.createElement("div");
  arrownext.className = "swiper-button-next8";
  arrowprev.className = "swiper-button-prev8";
  pagination.className = "swiper-pagination";
  sliderKhoneha.append(arrownext);
  sliderKhoneha.append(arrowprev);
  sliderKhoneha.append(pagination);
  divasli.appendChild(sliderKhoneha);
  divasli.appendChild(h2);
  divLoaction.appendChild(pLocation);
  divasli.appendChild(divLoaction);
  divaval.appendChild(pHouse);
  divdovom.appendChild(nazar);
  divdovom.appendChild(emtiaz);
  divotagh.appendChild(divaval);
  divotagh.appendChild(divdovom);
  divasli.appendChild(divotagh);

  ///
  geymatText.appendChild(toman);
  geymat.appendChild(geymatText);
  geymat.appendChild(text);
  divasli.appendChild(geymat);
  /////tanzim
});

////////////////////////////
////////////////////////////
////////////////////////////
////////////////////////////
////////////////////////////
////////////////////////////
////////////////////////////
////////////////////////////
////////////////////////////
////////////////////////////

//mahbob tarin

let mahbobtarin = data.filter((khonha) => {
  return khonha.emtiaz >= 4.5;
});

mahbobtarin.forEach((item) => {
  khoneha2.style.display = "none";
  //divasli
  let divasli = document.createElement("a");
  divasli.href = "houses.html";
  divasli.className = "khoneha-slider cursor";
  //divasli

  //sliderKhoneha
  let sliderKhoneha = document.createElement("div");
  sliderKhoneha.className = "swiper mySwiper";
  //
  let swiperWrapper = document.createElement("div");
  swiperWrapper.className = "swiper-wrapper";
  //

  //
  item.img.forEach((imgha) => {
    let swiperSlide = document.createElement("div");
    let imgslider = document.createElement("img");
    swiperSlide.className = "swiper-slide";
    imgslider.src = imgha.img;
    imgslider.className = "imgha-cover";
    swiperSlide.appendChild(imgslider);
    swiperWrapper.appendChild(swiperSlide);
    sliderKhoneha.appendChild(swiperWrapper);
  });
  //
  //sliderKhoneha

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
  let divaval = document.createElement("div");

  divotagh.className = "divotagh";
  let pHouse = document.createElement("p");
  pHouse.innerHTML = `${item.iHouse} ${item.otaghAndTeadad} `;
  //
  let divdovom = document.createElement("div");

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
  khoneha2.appendChild(divasli);
  let arrownext = document.createElement("div");
  let arrowprev = document.createElement("div");
  let pagination = document.createElement("div");
  arrownext.className = "swiper-button-next8";
  arrowprev.className = "swiper-button-prev8";
  pagination.className = "swiper-pagination";
  sliderKhoneha.append(arrownext);
  sliderKhoneha.append(arrowprev);
  sliderKhoneha.append(pagination);
  divasli.appendChild(sliderKhoneha);
  divasli.appendChild(h2);
  divLoaction.appendChild(pLocation);
  divasli.appendChild(divLoaction);
  divaval.appendChild(pHouse);
  divdovom.appendChild(nazar);
  divdovom.appendChild(emtiaz);
  divotagh.appendChild(divaval);
  divotagh.appendChild(divdovom);
  divasli.appendChild(divotagh);
  ///
  geymatText.appendChild(toman);
  geymat.appendChild(geymatText);
  geymat.appendChild(text);
  divasli.appendChild(geymat);
  /////tanzim
});
////////////////////////////
////////////////////////////
////////////////////////////
////////////////////////////
////////////////////////////
////////////////////////////
////////////////////////////
////////////////////////////
////////////////////////////
////////////////////////////

//arzontarin

let arzontarin = data.filter((khonha) => {
  return khonha.geymatNUM <= 1500000;
});

arzontarin.forEach((item) => {
  khoneha3.style.display = "none";
  //divasli
  let divasli = document.createElement("a");
  divasli.href = "houses.html";
  divasli.className = "khoneha-slider cursor";
  //divasli

  //sliderKhoneha
  let sliderKhoneha = document.createElement("div");
  sliderKhoneha.className = "swiper mySwiper";
  //
  let swiperWrapper = document.createElement("div");
  swiperWrapper.className = "swiper-wrapper";
  //

  //
  item.img.forEach((imgha) => {
    let swiperSlide = document.createElement("div");
    let imgslider = document.createElement("img");
    swiperSlide.className = "swiper-slide";
    imgslider.src = imgha.img;
    imgslider.className = "imgha-cover";
    swiperSlide.appendChild(imgslider);
    swiperWrapper.appendChild(swiperSlide);
    sliderKhoneha.appendChild(swiperWrapper);
  });
  //
  //sliderKhoneha

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
  let divaval = document.createElement("div");

  divotagh.className = "divotagh";
  let pHouse = document.createElement("p");
  pHouse.innerHTML = `${item.iHouse} ${item.otaghAndTeadad} `;
  //
  let divdovom = document.createElement("div");

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
  khoneha3.appendChild(divasli);
  let arrownext = document.createElement("div");
  let arrowprev = document.createElement("div");
  let pagination = document.createElement("div");
  arrownext.className = "swiper-button-next8";
  arrowprev.className = "swiper-button-prev8";
  pagination.className = "swiper-pagination";
  sliderKhoneha.append(arrownext);
  sliderKhoneha.append(arrowprev);
  sliderKhoneha.append(pagination);
  divasli.appendChild(sliderKhoneha);
  divasli.appendChild(h2);
  divLoaction.appendChild(pLocation);
  divasli.appendChild(divLoaction);
  divaval.appendChild(pHouse);
  divdovom.appendChild(nazar);
  divdovom.appendChild(emtiaz);
  divotagh.appendChild(divaval);
  divotagh.appendChild(divdovom);
  divasli.appendChild(divotagh);
  ///
  geymatText.appendChild(toman);
  geymat.appendChild(geymatText);
  geymat.appendChild(text);
  divasli.appendChild(geymat);
  /////tanzim
});
peidaShode.innerText = `${data.length} اقامتگاه پیدا شد`;
