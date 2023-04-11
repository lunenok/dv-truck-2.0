'use strict';

const menuButton = document.querySelector('.header__button');
const nav = document.querySelector('.header__nav');
const mailHtml = document.querySelector('html');
const requestButton = document.querySelector('.header__item--button');
const shadowBox = document.querySelector('.modal__shadow');
const popup = document.querySelector('.modal__container');
const popupCloseButton = document.querySelector('.modal__close-button');

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

const openPopup = () => {
    popup.classList.add('modal__container--active');
    shadowBox.classList.add('modal__shadow--active');
};

const closePopup = () => {
    popup.classList.remove('modal__container--active');
    shadowBox.classList.remove('modal__shadow--active')
};

requestButton.addEventListener('click', () => {
    if (!popup.classList.contains('modal__container--active')) {
        openPopup();
    }
});

popupCloseButton.addEventListener('click', () => {
    closePopup();
    popupCloseButton.removeEventListener('click', closePopup);
});