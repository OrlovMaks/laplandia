import { Fancybox } from "@fancyapps/ui";
import "@fancyapps/ui/dist/fancybox.css";

window.onload = function () {
    const $links = document.querySelectorAll('.header__link');

    $links.forEach(element => {
        if (element.href === document.URL) element.classList.add('_active');
    });

    // setTimeout(() => {
    document.body.classList.add('loaded_hiding');
    // }, 1500)

    window.setTimeout(() => {
        document.body.classList.add('loaded');
        document.body.classList.remove('loaded_hiding');
    }, 1500);
}