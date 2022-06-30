import { Fancybox } from "@fancyapps/ui";
import "@fancyapps/ui/dist/fancybox.css";

window.onload = function () {
    const $links = document.querySelectorAll('.header__link');


    $links.forEach(element => {
        if (element.href === document.URL) element.classList.add('_active');
    });

    let params = (new URL(document.location)).searchParams;
    const isScroll = params.get("scroll")
    if (isScroll) {
        const block = document.getElementById(`${isScroll}`)
        window.scroll(0, block.offsetTop)
    }
}

let isMobile = {
    Android: function () { return navigator.userAgent.match(/Android/i); },
    BlackBerry: function () { return navigator.userAgent.match(/BlackBerry/i); },
    iOS: function () { return navigator.userAgent.match(/iPhone|iPad|iPod/i); },
    Opera: function () { return navigator.userAgent.match(/Opera Mini/i); },
    Windows: function () { return navigator.userAgent.match(/IEMobile/i); },
    any: function () { return (isMobile.Android() || isMobile.BlackBerry() || isMobile.iOS() || isMobile.Opera() || isMobile.Windows()); }
};
let body = document.querySelector('body');
if (isMobile.any()) {
    body.classList.add('touch');
    let arrow = document.querySelectorAll('.arrow');
    const headerDropdownLink = document.querySelector('.header__dropdown-link')
    for (let i = 0; i < arrow.length; i++) {
        let thisLink = arrow[i].previousElementSibling;
        let subMenu = arrow[i].nextElementSibling;
        let thisArrow = arrow[i];

        thisLink.classList.add('parent');
        arrow[i].addEventListener('click', function () {
            subMenu.classList.toggle('open');
            thisArrow.classList.toggle('active');
        });
        headerDropdownLink.addEventListener('click', function () {
            subMenu.classList.toggle('open');
            thisArrow.classList.toggle('active');
        });
    }
} else {
    body.classList.add('mouse');
}