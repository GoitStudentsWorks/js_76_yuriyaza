function e(e){return e&&e.__esModule?e.default:e}var t="undefined"!=typeof globalThis?globalThis:"undefined"!=typeof self?self:"undefined"!=typeof window?window:"undefined"!=typeof global?global:{},n={},i={},s=t.parcelRequirecb2a;null==s&&((s=function(e){if(e in n)return n[e].exports;if(e in i){var t=i[e];delete i[e];var s={id:e,exports:{}};return n[e]=s,t.call(s.exports,s,s.exports),s.exports}var a=new Error("Cannot find module '"+e+"'");throw a.code="MODULE_NOT_FOUND",a}).register=function(e,t){i[e]=t},t.parcelRequirecb2a=s),s("kyEFX").register(JSON.parse('{"7nZc1":"shopping.5f0318fa.js","1yVwl":"amazon.15190360.png","bYYsk":"appleshop.1347d55f.png","hiPvQ":"boockshop.96bb4e3e.png","lp5u4":"sprite.9905b075.svg"}'));var a={};a=new URL(s("kyEFX").resolve("1yVwl"),import.meta.url).toString();var l={};l=new URL(s("kyEFX").resolve("bYYsk"),import.meta.url).toString();var o={};o=new URL(s("kyEFX").resolve("hiPvQ"),import.meta.url).toString();var r={};r=new URL(s("kyEFX").resolve("lp5u4"),import.meta.url).toString();const c=document.querySelector(".shopping-list"),d=document.querySelector(".shopping-list-empty"),p=({items:e,rows:t=10,handlePaginatedItems:n,buttonsWrapper:i,buttonsContainerClass:s="pagination",buttonClass:a="page-link",nextClass:l="page-link",prevClass:o="page-link",nextText:r=">",prevText:c="<",firstClass:d="page-link",firstText:p="<<",lastClass:u="page-link",lastText:g=">>",activeClass:v="active"})=>{if(!e)return console.error("items not defined. Send {items: ...} as a parameter."),!1;const h=()=>document.querySelector(`.${"pagination-"+m} button.active`),m=(f=46656*Math.random()|0,b=46656*Math.random()|0,(f=("000"+f.toString(36)).slice(-3))+(b=("000"+b.toString(36)).slice(-3)));var f,b;t=parseInt(t);let k=1,L=Math.ceil(e.length/t);const y=void 0!==i,E={paginate:(l=1,o=!0)=>{l--;let d=t*l,p=d+t,u=e.slice(d,p);if(o&&i&&(({wrapper:e})=>{let t=document.createElement("div");t.classList.add("pagination-"+m,s);let n=e=>{let t=document.createElement("button");return t.setAttribute("type","button"),t.classList.add(a),k===e&&t.classList.add(v),t.innerHTML=e,t.addEventListener("click",(function(){k=e,E.paginate(k,!1),h().classList.remove("active"),t.classList.add("active")})),t};const{prevBtn:i,nextBtn:l}=(()=>{let e=document.createElement("button");e.setAttribute("type","button"),e.classList.add("page-link"),e.classList.add("prevClass"),e.innerHTML=c;let t=document.createElement("button");return t.setAttribute("type","button"),t.classList.add("page-link"),t.classList.add("nextClass"),t.innerHTML=r,e.addEventListener("click",(()=>{E.prev()})),t.addEventListener("click",(()=>{E.next()})),{prevBtn:e,nextBtn:t}})();t.appendChild(i);for(let e=1;e<L+1;e++){let i=n(e);t.appendChild(i)}t.appendChild(l),e.appendChild(t)})({wrapper:document.querySelector(i)}),!n)return u;n(u)},next:()=>{if(k>=L)return;k++;let i=t*(k-1),s=i+t,a=e.slice(i,s);if(y){let e=h();e.classList.remove("active"),e.nextElementSibling.classList.add("active")}if(!n)return a;n(a)},prev:()=>{if(1===k)return;k--;let i=t*(k-1),s=i+t,a=e.slice(i,s);if(y){let e=h();e.classList.remove("active"),e.previousElementSibling.classList.add("active")}if(!n)return a;n(a)},changeRows:(e=10)=>{t=parseInt(e),document.querySelector(".pagination-"+m).remove(),E.paginate(k)},changeItems:n=>{if(!n)return!1;document.querySelector(".pagination-"+m)?.remove(),e=n,L=Math.ceil(e.length/t),k=1,E.paginate(1)}};return E},u=document.getElementById("pagination");let g=JSON.parse(localStorage.getItem("shopping-trash"));function v(){let t=g;u.innerHTML="";const n=p({items:t,rows:3,buttonsWrapper:"#pagination",handlePaginatedItems:t=>{const n=document.getElementById("list");n.innerHTML=" ",n.innerHTML=t.reduce(((t,n)=>t+` <div class="book-card" id="${n._id}">\n        <div class="shopping-list-img">\n        <img\n          class="book-img"\n          src="${n.book_image}"\n          alt="${n.title}"\n          loading="lazy"\n        />\n      </div>\n      <div class="info">\n        <div class="first-info-div">\n          <div>\n            <p class="book-name">${n.title}</p>\n            <p class="book-category">${n.list_name}</p>\n          </div>\n          <button class="remove-book">\n            <svg class="trash-icon" width="16" height="16"><use href="${e(r)}#trash"></use></svg>\n          </button>\n        </div>\n        <div class="second-info-div">\n          <p class="book-description">\n           ${n.description}\n          </p>\n        </div>\n        <div class="third-info-div">\n          <div>\n            <p class="book-author">\n            ${n.author}\n            </p>\n          </div>\n          <div class="shop-list-div">\n          <ul class="shop-list">\n               <li class="shop-item">\n              <a class="shop-link" href="${n.buy_links[0].url}" target="_blank"><img class="shop-icon amazon-icon" src="${e(a)}" alt="amazon" width="32" height="11"></a>\n              </li>\n                <li class="shop-item">\n                    <a class="shop-link" href="${n.buy_links[1].url}" target="_blank"><img class="shop-icon" src="${e(l)}" alt="apple shop" width="16" height="16"></a>\n                  </li>\n                    <li class="shop-item">\n                        <a class="shop-link" href="${n.buy_links[4].url}" target="_blank" ><img class="shop-icon book-shop-icon" src="${e(o)}" alt="book shop" width="16" height="16"></a>\n                      </li>\n            </ul>\n          </div>\n        </div>\n      </div>\n    </div>`),"")}});n.paginate()}function h(){0!==g.length?(v(),d.classList.add("shopping-list-filled")):(c.innerHTML="",u.innerHTML="",m())}function m(){d.classList.remove("shopping-list-filled")}h(),c.addEventListener("click",(function(e){if("BUTTON"===e.target.nodeName){let t=e.target.closest(".book-card").id;g.splice(g.findIndex((e=>e._id===t)),1),document.getElementById(t).remove(),localStorage.setItem("shopping-trash",JSON.stringify(g)),0===g.length&&m(),h()}}));
//# sourceMappingURL=shopping.5f0318fa.js.map
