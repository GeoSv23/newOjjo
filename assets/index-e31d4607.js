(function(){const r=document.createElement("link").relList;if(r&&r.supports&&r.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))o(e);new MutationObserver(e=>{for(const i of e)if(i.type==="childList")for(const c of i.addedNodes)c.tagName==="LINK"&&c.rel==="modulepreload"&&o(c)}).observe(document,{childList:!0,subtree:!0});function s(e){const i={};return e.integrity&&(i.integrity=e.integrity),e.referrerPolicy&&(i.referrerPolicy=e.referrerPolicy),e.crossOrigin==="use-credentials"?i.credentials="include":e.crossOrigin==="anonymous"?i.credentials="omit":i.credentials="same-origin",i}function o(e){if(e.ep)return;e.ep=!0;const i=s(e);fetch(e.href,i)}})();const a=document.querySelector(".burger"),l=document.querySelector(".burgerMenu"),g=document.querySelector("body"),m=document.querySelector(".header__image");a.addEventListener("click",function(){l.classList.toggle("burgerMenuOpen"),a.classList.toggle("burgerActive"),g.classList.toggle("antiscroll"),m.classList.toggle("logoBurger")});document.querySelector(".socialMedias__images");const u=[{link:"#",imgSrc:"public/images/img--hover.png",alt:"image"},{link:"#",imgSrc:"public/images/gallery__image.png",alt:"image"},{link:"#",imgSrc:"public/images/gallery__image (1).png",alt:"image"},{link:"#",imgSrc:"public/images/gallery__image (2).png",alt:"image"},{link:"#",imgSrc:"public/images/gallery__image (3).png",alt:"image"},{link:"#",imgSrc:"public/images/Rectangle 8.png",alt:"image"}];u.forEach(t=>{document.createElement("a").classList.add(".socialMedias__images_container")});const n=document.querySelector(".product__buttons"),d=[{title:"свадьба"},{title:"мужу"},{title:"жене"},{title:"партнеру"},{title:"колекции"},{title:"редкость"}];d.forEach(t=>{const r=document.createElement("button");r.classList.add("product__buttons-item"),r.textContent=t.title,n.append(r)});console.log(n);const p=document.querySelector(".product__images"),f=[{cardLink:"#",imgSrc:"images/colco.png",title:"кольца"},{cardLink:"#",imgSrc:"images/colco.png",title:"серьги"},{cardLink:"#",imgSrc:"images/colco.png",title:"подвески"},{cardLink:"#",imgSrc:"images/colco.png",title:"запонки"},{cardLink:"#",imgSrc:"images/colco.png",title:"браслеты"},{cardLink:"#",imgSrc:"images/colco.png",title:"часы"}];f.forEach(t=>{const r=`
  <a class="product__images_container" href="${t.cardLink}">
    <img src="${t.imgSrc}" alt="" />
    <p class="product__images_title">${t.title}</p>
  </a>`;p.innerHTML+=r});const _=document.querySelector(".usefoolArticles__images"),b=[{artLink:"1",artImgSrc:"images/bumaga.png",artAlt:"#",title:"Как выбрать<br/> часы для своей<br/> будущей жены"},{artLink:"2",artImgSrc:"images/bumaga.png",artAlt:"#",title:"Запонки для мужа:<br/> 7 ключевых правил<br/> покупки аксессуара"},{artLink:"3",artImgSrc:"images/bumaga.png",artAlt:"#",title:"Как выбрать<br/> обручальные кольца<br/> молодоженам"}];b.forEach(t=>{const r=`
    <a class="usefoolArticles__images_container" href="${t.artLink}">
      <img class='usefoolArticles__images-image' src="${t.artImgSrc}" alt="${t.artAlt}" />
      <div class='usefoolArticles-title'>${t.title}</div>
    </a>`;_.innerHTML+=r});