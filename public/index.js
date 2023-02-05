const close = document.querySelector('.close');
const contactForm = document.querySelector('.contact-form');
const contactButton = document.querySelector('#contact-button');
const porfolioButton = document.querySelector('#portfolio-button');
const portfolioPopup = document.querySelector('.portfolio-popup');
const closeContact = document.querySelector('.close-contact');
const menu = document.querySelector('.ham');
const nav = document.querySelector('.nav');
//conctact popuo
contactButton.addEventListener('click', () => {
    contactForm.classList.add('active');
});
closeContact.addEventListener('click', () => {
    contactForm.classList.remove('active');
});

//portfolio popup

porfolioButton.addEventListener('click', () => {
    portfolioPopup.classList.add('active');
});
close.addEventListener('click', () => {
    portfolioPopup.classList.remove('active');
});

//menu popup

menu.addEventListener('click', () => {
    nav.classList.toggle('active');

})