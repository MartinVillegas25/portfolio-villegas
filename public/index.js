const close = document.querySelector('.close');
const contactForm = document.querySelector('.contact-form');
const contactButton = document.querySelector('#contact-button-nav');
const contactButton2 = document.querySelector('#contact-button-opening');
const porfolioButton = document.querySelector('#portfolio-button');
const portfolioPopup = document.querySelector('.portfolio-popup');
const closeContact = document.querySelector('.close-contact');
const wwu = document.querySelector('#wwu');
const menu = document.querySelector('.ham');

const nav = document.querySelector('.nav');
//conctact popuo
contactButton.addEventListener('click', () => {
    contactForm.classList.add('active');
});
closeContact.addEventListener('click', () => {
    contactForm.classList.remove('active');
});

contactButton2.addEventListener('click', () => {
    contactForm.classList.add('active');
});
closeContact.addEventListener('click', () => {
    contactForm.classList.remove('active');
});
wwu.addEventListener('click', () => {
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

//form alert

const form = document.querySelector('#form');
const message = document.querySelector('.success');

form.addEventListener('submit', handleSubmit);

async function handleSubmit(event) {
    event.preventDefault();
    const formInfo = new FormData(this)
    const response = await fetch(this.action, {
        method: this.method,
        body:formInfo,
        headers:{
            'Accept':'application/json'
        }
    })
    if(response.ok){
        this.reset()
        message.classList.add('active');
    }
}

//loader

const loader = document.querySelector('#loader');

window.addEventListener('load', () => {
    setTimeout(() => {
        loader.style.display = 'none';
        
    }, 1000);
});


//validar email
const email = document.querySelector('#email');

// form.addEventListener('submit', ()=>{
    
//     const validEmail =  /^\w+([.-_+]?\w+)*@\w+([.-]?\w+)*(\.\w{2,10})+$/;
//     if(validEmail.test(email)){
//         console.log('el email esta bien guacho');
//     }
//     else{
//         console.log('hasta las manos');
//     }
// });

