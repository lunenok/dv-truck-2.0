'use strict';

const menuButton = document.querySelector('.header__button');
const nav = document.querySelector('.header__nav');
const mailHtml = document.querySelector('html');

menuButton.addEventListener('click', () => {
    if (nav.classList.contains('header__nav--close')) {
        nav.classList.remove('header__nav--close');
        nav.classList.add('header__nav--open');
        mailHtml.classList.add('hystmodal__opened')
    } else {
        nav.classList.remove('header__nav--open');
        nav.classList.add('header__nav--close');
        mailHtml.classList.remove('hystmodal__opened')
    };
});