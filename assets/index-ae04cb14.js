(function(){const r=document.createElement("link").relList;if(r&&r.supports&&r.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))n(e);new MutationObserver(e=>{for(const i of e)if(i.type==="childList")for(const c of i.addedNodes)c.tagName==="LINK"&&c.rel==="modulepreload"&&n(c)}).observe(document,{childList:!0,subtree:!0});function o(e){const i={};return e.integrity&&(i.integrity=e.integrity),e.referrerPolicy&&(i.referrerPolicy=e.referrerPolicy),e.crossOrigin==="use-credentials"?i.credentials="include":e.crossOrigin==="anonymous"?i.credentials="omit":i.credentials="same-origin",i}function n(e){if(e.ep)return;e.ep=!0;const i=o(e);fetch(e.href,i)}})();const a=document.querySelector(".burger"),s=document.querySelector(".burgerMenu"),g=document.querySelector("body"),u=document.querySelector(".header__image");a.addEventListener("click",function(){s.classList.toggle("burgerMenuOpen"),a.classList.toggle("burgerActive"),g.classList.toggle("antiscroll"),u.classList.toggle("logoBurger")});document.querySelector(".socialMedias__images");const m=[{link:"#",imgSrc:"public/images/img--hover.png",alt:"image"},{link:"#",imgSrc:"public/images/gallery__image.png",alt:"image"},{link:"#",imgSrc:"public/images/gallery__image (1).png",alt:"image"},{link:"#",imgSrc:"public/images/gallery__image (2).png",alt:"image"},{link:"#",imgSrc:"public/images/gallery__image (3).png",alt:"image"},{link:"#",imgSrc:"public/images/Rectangle 8.png",alt:"image"}];m.forEach(t=>{document.createElement("a").classList.add(".socialMedias__images_container")});const l=document.querySelector(".product__buttons"),d=[{title:"свадьба"},{title:"мужу"},{title:"жене"},{title:"партнеру"},{title:"колекции"},{title:"редкость"}];d.forEach(t=>{const r=document.createElement("button");r.classList.add("product__buttons-item"),r.textContent=t.title,l.append(r)});console.log(l);const p=document.querySelector(".product__images"),f=[{cardLink:"1",imgSrc:"images/colco.png",title:"кольца"},{cardLink:"2",imgSrc:"/images/bumaga.png",title:"серьги"},{cardLink:"3",imgSrc:"/images/girl.png",title:"подвески"},{cardLink:"4",imgSrc:"images/girl.png",title:"запонки"},{cardLink:"5",imgSrc:"public/images/girl.png",title:"браслеты"},{cardLink:"6",imgSrc:"public/images/Rectangle 5.png",title:"часы"}];f.forEach(t=>{const r=`
  <a class="product__images_container" href="${t.cardLink}">
    <img src="${t.imgSrc}" alt="" />
    <p class="product__images_title">${t.title}</p>
  </a>`;p.innerHTML+=r});const _=document.querySelector(".usefoolArticles__images"),b=[{artLink:"1",artImgSrc:"public/images/Rectangle 5 (1).png",artAlt:"#",title:"Как выбрать<br/> часы для своей<br/> будущей жены"},{artLink:"2",artImgSrc:"public/images/Rectangle 5 (7).png",artAlt:"#",title:"Запонки для мужа:<br/> 7 ключевых правил<br/> покупки аксессуара"},{artLink:"3",artImgSrc:"public/images/Rectangle 5 (8).png",artAlt:"#",title:"Как выбрать<br/> обручальные кольца<br/> молодоженам"}];b.forEach(t=>{const r=`
    <a class="usefoolArticles__images_container" href="${t.artLink}">
      <img class='usefoolArticles__images-image' src="${t.artImgSrc}" alt="${t.artAlt}" />
      <div class='usefoolArticles-title'>${t.title}</div>
    </a>`;_.innerHTML+=r});