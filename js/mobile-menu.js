var tabletWidth=768,mainNav=document.querySelector(".main-nav"),menuButton=document.querySelector(".main-nav__menu-button"),menuIsClosed=document.querySelector(".main-nav--closed");mainNav.classList.remove("main-nav--nojs"),window.outerWidth<tabletWidth&&(mainNav.classList.add("main-nav--closed"),console.log("Мобильная версия меню")),menuButton.addEventListener("click",(function(n){n.preventDefault(),mainNav.classList.toggle("main-nav--closed"),console.log("Переключили состояние меню")})),window.addEventListener("resize",(function(){window.outerWidth<tabletWidth&&(mainNav.classList.add("main-nav--closed"),console.log("Мобильная версия меню")),window.outerWidth>=tabletWidth&&mainNav.classList.contains("main-nav--closed")&&(mainNav.classList.remove("main-nav--closed"),console.log("Отключили мобильную версию меню"))}));