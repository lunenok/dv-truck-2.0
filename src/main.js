'use strict';

//menu
const menuButton = document.querySelector('.header__button');
const nav = document.querySelector('.header__nav');
const mailHtml = document.querySelector('html');

const menuButtonHandler = () => {
    if (nav.classList.contains('header__nav--close')) {
        nav.classList.remove('header__nav--close');
        nav.classList.add('header__nav--open');
        mailHtml.classList.add('hystmodal__opened')
    } else {
        nav.classList.remove('header__nav--open');
        nav.classList.add('header__nav--close');
        mailHtml.classList.remove('hystmodal__opened');
    };
};

menuButton.addEventListener('click', menuButtonHandler);

//popup
const requestButton = document.querySelector('.header__item--button');
const promoButton = document.querySelector('.promo__button');
const serviceButton = document.querySelector('.services__button');
const helpButton = document.querySelector('.help__button');
const offerButton = document.querySelector('.offers__button');
const popupButtons = [requestButton, promoButton, serviceButton, helpButton, offerButton];
const shadowBox = document.querySelector('.modal__shadow');
const popup = document.querySelector('.modal__container');
const popupForm = popup.querySelector('.modal__form');
const popupCloseButton = document.querySelector('.modal__close-button');

const openPopup = () => {
    if (!popup.classList.contains('modal__container--active')) {
        popup.classList.add('modal__container--active');
        shadowBox.classList.add('modal__shadow--active');
    }
};

const closePopup = () => {
    popup.classList.remove('modal__container--active');
    shadowBox.classList.remove('modal__shadow--active')
};

for (var i = 0; i < popupButtons.length; i++) {
    popupButtons[i].addEventListener('click', openPopup);
};

popupCloseButton.addEventListener('click', () => {
    closePopup();
    popupCloseButton.removeEventListener('click', closePopup);
});

const getDataFromForm = (formNode) => {
    const data = new FormData(formNode);
    console.log(Array.from(data.entries()));
    return data;
};

popupForm.addEventListener('submit', (evt) => {
    evt.preventDefault();
    getDataFromForm(popupForm);
})