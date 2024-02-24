"use strict";

/* ----------------
hamburgermenu
---------------- */

const nav = document.querySelector("#nav-hambuger");
const hamburgerBtn = document.querySelector(".toggle-btn");
const jsNav = document.querySelectorAll(".js__nav");

hamburgerBtn.onclick = () => {
    nav.classList.toggle("open");
};
jsNav.forEach((item) => {
    item.onclick = () => {
        nav.classList.toggle("open");
    };
});

/* ----------------
inview
---------------- */

const inviewElements = document.querySelectorAll(".js__inview");

const inviewObserver = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
        if (entry.isIntersecting && !entry.target.classList.contains("visible")) {
            entry.target.classList.add("visible");
            inviewObserver.unobserve(entry.target);
        }
    });
});

inviewElements.forEach((element) => {
    inviewObserver.observe(element);
});
