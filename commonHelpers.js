import{S as c,i as u}from"./assets/vendor-9310f15c.js";(function(){const n=document.createElement("link").relList;if(n&&n.supports&&n.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))s(e);new MutationObserver(e=>{for(const t of e)if(t.type==="childList")for(const a of t.addedNodes)a.tagName==="LINK"&&a.rel==="modulepreload"&&s(a)}).observe(document,{childList:!0,subtree:!0});function o(e){const t={};return e.integrity&&(t.integrity=e.integrity),e.referrerpolicy&&(t.referrerPolicy=e.referrerpolicy),e.crossorigin==="use-credentials"?t.credentials="include":e.crossorigin==="anonymous"?t.credentials="omit":t.credentials="same-origin",t}function s(e){if(e.ep)return;e.ep=!0;const t=o(e);fetch(e.href,t)}})();const d=document.querySelector(".form"),l=document.querySelector(".gallery"),f=document.querySelector(".text-input"),p=new c(".gallery a",{captionsData:"alt",captionDelay:250}),i=document.querySelector(".loader");i.style.display="none";d.addEventListener("submit",r=>{r.preventDefault(),l.innerHTML="",i.style.display="block";const n=f.value,o=new URLSearchParams({key:"41485835-9295c11e9848689b047a2c35a",q:n,image_type:"photo",orientation:"horizontal",safesearch:!0});fetch(`https://pixabay.com/api/?${o}`).then(s=>{if(i.style.display="none",!s.ok)throw new Error(s.status);return s.json()}).then(s=>{if(s.hits.length===0){u.error({message:"Sorry, there are no images matching your search query. Please try again!",messageColor:"#FAFAFB",backgroundColor:"#EF4040"});return}s.hits.forEach(e=>{const t=m(e);l.appendChild(t)}),p.refresh()}).catch(s=>{console.error(s)})});function m(r){const n=document.createElement("div");return n.innerHTML=`
    <a href="${r.largeImageURL}">
    <img src="${r.webformatURL}" alt="${r.tags}"></a>
    <div class="info">
    <div class="image-info">
    <span>Likes</span>
    <span class="image-value">${r.likes}</span></div>
    <div class="image-info">
    <span>Views</span>
    <span class="image-value">${r.views}</span></div>
    <div class="image-info">
    <span>Comments</span>
    <span class="image-value">${r.comments}</span></div>
    <div class="image-info">
    <span>Downloads</span>
    <span class="image-value">${r.downloads}</span></div>
    </div>
  `,n}
//# sourceMappingURL=commonHelpers.js.map
