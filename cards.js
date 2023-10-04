// burger
const buttonBurger = document.querySelector(".burger");

const burgerMenu = document.querySelector(".burgerMenu");

const body = document.querySelector("body");

const headerLogo = document.querySelector(".header__image");

buttonBurger.addEventListener("click", function () {
  burgerMenu.classList.toggle("burgerMenuOpen");
  buttonBurger.classList.toggle("burgerActive");
  body.classList.toggle("antiscroll");
  headerLogo.classList.toggle("logoBurger");
});

//
const socMedImg = document.querySelector(".socialMedias__images");

const socMedAttributes = [
  { link: "#", imgSrc: "public/images/img--hover.png", alt: "image" },
  { link: "#", imgSrc: "public/images/gallery__image.png", alt: "image" },
  { link: "#", imgSrc: "public/images/gallery__image (1).png", alt: "image" },
  { link: "#", imgSrc: "public/images/gallery__image (2).png", alt: "image" },
  { link: "#", imgSrc: "public/images/gallery__image (3).png", alt: "image" },
  { link: "#", imgSrc: "public/images/Rectangle 8.png", alt: "image" },
];

socMedAttributes.forEach((item) => {
  const newImageContain = document.createElement("a");
  newImageContain.classList.add(".socialMedias__images_container");
});

// отображение кнопок product
const product__buttons = document.querySelector(".product__buttons");

const buttons = [
  { title: "свадьба" },
  { title: "мужу" },
  { title: "жене" },
  { title: "партнеру" },
  { title: "колекции" },
  { title: "редкость" },
];

buttons.forEach((object) => {
  const newButton = document.createElement("button");
  newButton.classList.add("product__buttons-item");
  newButton.textContent = object.title;
  product__buttons.append(newButton);
});

console.log(product__buttons);

// отображение картинок product
const productImgHolder = document.querySelector(".product__images");

const productCards = [
  {
    cardLink: "#",
    imgSrc: "images/colco.png",
    title: "кольца",
  },
  {
    cardLink: "#",
    imgSrc: "images/colco.png",
    title: "серьги",
  },
  {
    cardLink: "#",
    imgSrc: "images/colco.png",
    title: "подвески",
  },
  {
    cardLink: "#",
    imgSrc: "images/colco.png",
    title: "запонки",
  },
  {
    cardLink: "#",
    imgSrc: "images/colco.png",
    title: "браслеты",
  },
  { cardLink: "#", imgSrc: "images/colco.png", title: "часы" },
];

productCards.forEach((object) => {
  const newImage = `
  <a class="product__images_container" href="${object.cardLink}">
    <img src="${object.imgSrc}" alt="" />
    <p class="product__images_title">${object.title}</p>
  </a>`;

  productImgHolder.innerHTML += newImage;
});

// картинки
const artImgHolder = document.querySelector(".usefoolArticles__images");

const artCards = [
  {
    artLink: "1",
    artImgSrc: "images/bumaga.png",
    artAlt: "#",
    title: "Как выбрать<br/> часы для своей<br/> будущей жены",
  },
  {
    artLink: "2",
    artImgSrc: "images/bumaga.png",
    artAlt: "#",
    title: "Запонки для мужа:<br/> 7 ключевых правил<br/> покупки аксессуара",
  },
  {
    artLink: "3",
    artImgSrc: "images/bumaga.png",
    artAlt: "#",
    title: "Как выбрать<br/> обручальные кольца<br/> молодоженам",
  },
];

artCards.forEach((item) => {
  const newArtCard = `
    <a class="usefoolArticles__images_container" href="${item.artLink}">
      <img class='usefoolArticles__images-image' src="${item.artImgSrc}" alt="${item.artAlt}" />
      <div class='usefoolArticles-title'>${item.title}</div>
    </a>`;

  artImgHolder.innerHTML += newArtCard;
});
