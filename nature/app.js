const popup = document.querySelector('.popup');
const popupButtonOne = document.querySelector('.section-tours .row .col .card .card__side .card__cta .one');
const popupButtonTwo = document.querySelector('.section-tours .row .col .card .card__side .card__cta .two');
const popupButtonThree = document.querySelector('.section-tours .row .col .card .card__side .card__cta .three');
const popupClose = document.querySelector('.popup__close');
const popupContent = document.querySelector('.popup .popup__box-content');

popupButtonOne.addEventListener('click', () => {

    // popup
    popup.style.opacity = '1';
    popup.style.visibility = 'visible';

    // content
    popupContent.style.transform = 'translate(-50%, -50%) scale(1)';
    popupContent.style.opacity = '1';
})

popupButtonTwo.addEventListener('click', () => {

    // popup
    popup.style.opacity = '1';
    popup.style.visibility = 'visible';

    // content
    popupContent.style.transform = 'translate(-50%, -50%) scale(1)';
    popupContent.style.opacity = '1';
})

popupButtonThree.addEventListener('click', () => {

    // popup
    popup.style.opacity = '1';
    popup.style.visibility = 'visible';

    // content
    popupContent.style.transform = 'translate(-50%, -50%) scale(1)';
    popupContent.style.opacity = '1';
})

popup.addEventListener('click', () => {

    // popup
    popup.style.opacity = '0';
    popup.style.visibility = 'hidden';
    popupContent.style.transform = 'translate(-50%, -50%) scale(.3)';
})

popupClose.addEventListener('click', () => {

    //popup
    popup.style.opacity = '0';
    popup.style.visibility = 'hidden'; 
    
    //Content
    popupContent.style.transform = 'translate(-50%, -50%) scale(.3)';
})