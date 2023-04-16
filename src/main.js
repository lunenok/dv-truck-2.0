'use strict';

//menu
const menuButton = document.querySelector('.header__button');
const nav = document.querySelector('.header__nav');
const menuLink = document.querySelectorAll('.header__item-link');
const mailHtml = document.querySelector('html');
const ESC_KEYCODE = 27

const onMenuEscPress = (evt) => {
    if (evt.key === 'Escape') {
        closeMenu();
        document.removeEventListener('keydown', onMenuEscPress);
    };
};

const openMenu = () => {
    nav.classList.remove('header__nav--close');
    nav.classList.add('header__nav--open');
    mailHtml.classList.add('hystmodal__opened');
    document.addEventListener('keydown', onMenuEscPress);
};

const closeMenu = () => {
    nav.classList.remove('header__nav--open');
    nav.classList.add('header__nav--close');
    mailHtml.classList.remove('hystmodal__opened');
    document.removeEventListener('keydown', onMenuEscPress);
};

const menuButtonHandler = () => {
    if (nav.classList.contains('header__nav--close')) {
        openMenu();
    } else {
        closeMenu();
    };
};

menuButton.addEventListener('click', menuButtonHandler);

menuLink.forEach((link) => {
    link.addEventListener('click', menuButtonHandler);
});

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
const popupCloseButton = popup.querySelector('.modal__close-button');

const onPopupEscPress = (evt) => {
    if (evt.key === 'Escape') {
        closePopup();
        document.removeEventListener('keydown', onPopupEscPress);
    }
}

const openPopup = () => {
    if (!popup.classList.contains('modal__container--active')) {
        popup.classList.add('modal__container--active');
        shadowBox.classList.add('modal__shadow--active');
        document.addEventListener('keydown', onPopupEscPress);
        closeMenu();
    }
};

const closePopup = () => {
    popup.classList.remove('modal__container--active');
    shadowBox.classList.remove('modal__shadow--active');
    popupForm.reset();
    document.removeEventListener('keydown', onPopupEscPress);
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
    closePopup();
    openThanksPopup();
})

//thanks popup

const thanksPopup = document.querySelector('.thanks__container');
const thanksPopupCloseButton = thanksPopup.querySelector('.thanks__close-button');

const onThanksEscPress = (evt) => {
    if (evt.key === 'Escape') {
        closeThanksPopup();
        document.removeEventListener('keydown', onMenuEscPress);
    };
};

const openThanksPopup = () => {
    if (!thanksPopup.classList.contains('thanks__container--active')) {
        thanksPopup.classList.add('thanks__container--active');
        shadowBox.classList.add('modal__shadow--active');
        document.addEventListener('keydown', onThanksEscPress);
    }
};

const closeThanksPopup = () => {
    thanksPopup.classList.remove('thanks__container--active');
    shadowBox.classList.remove('modal__shadow--active');
    document.removeEventListener('keydown', onThanksEscPress);
};

thanksPopupCloseButton.addEventListener('click', closeThanksPopup);

// feedback form

const feedbackForm = document.querySelector('.feedback__form');

feedbackForm.addEventListener('submit', (evt) => {
    evt.preventDefault();
    getDataFromForm(feedbackForm);
    feedbackForm.reset();
    openThanksPopup();
});