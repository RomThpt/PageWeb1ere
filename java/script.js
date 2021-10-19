import throttle from "https://cdn.skypack.dev/lodash@4/throttle";

function onScroll() {
    if (window.pageYOffset) {
        $$header.classList.add("est-actif");
    } else {
        $$header.classList.remove("est-actif");
    }
}

const $$header = document.querySelector(".js-header");

window.addEventListener("scroll", throttle(onScroll, 300));