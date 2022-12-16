/*=============== Show Menu =============== */
const navMenu = document.getElementById('nav-menu'),
    navToggle = document.getElementById('nav-toggle'),
    navClose = document.getElementById('nav-close');

/*===== Menu Show =====*/
/* Validate if constant exists */
if (navToggle) {
    navToggle.addEventListener('click', () => {
        navMenu.classList.add('show-menu');
    });
}

/*===== Hide Show =====*/
/* Validate if constant exists */
if (navClose) {
    navClose.addEventListener('click', () => {
        navMenu.classList.remove('show-menu');
    });
}


/*=============== Remove Menu Mobile =============== */
const navLink = document.querySelectorAll('.nav__link');

function linkAction() {
    const navMenu = document.getElementById('nav-menu');
    navMenu.classList.remove('show-menu');
}

navLink.forEach((n) => n.addEventListener('click', linkAction));

/*=============== Background Header =============== */
function scrollHeader() {
    const header = document.getElementById('header');
    //scroll
    if (this.scrollY >= 50) header.classList.add('scroll-header');
    else header.classList.remove('scroll-header');
}

window.addEventListener('scroll', scrollHeader);


/*=============== contact form =============== */
const contactForm = document.getElementById('contact-form'),
    contactName = document.getElementById('contact-name'),
    contactEmail = document.getElementById('contact-email'),
    Message = document.getElementById('message'),
    contactMessage = document.getElementById('contact-message');

const sendEmail = (e) => {
    e.preventDefault();

    if (contactName.value === '' || contactEmail.value === '' || Message.value === '') {
        //add and remove
        contactMessage.classList.remove('color-light');
        contactMessage.classList.add('color-dark');

        //show msg
        contactMessage.textContent = 'Write all the input fields';

    } else {
        //service id - temp =#form - public key
        emailjs.sendForm(
            'service_gd0w285',
            'template_8t68jkb',
            '#contact-form',
            'y740m8LUwSNGKOapK'
        )
            .then(() => {
                //show message
                contactMessage.classList.add('color-light');
                contactMessage.textContent = 'Message sent✅';

                //remove msg after 5sec
                setTimeout(() => {
                    contactMessage.textContent = '';
                }, 5000);
            },
                (error) => {
                    alert('OOPs SOMETHING WENT WRONG...', error);
                }
            );

        //clear input fields
        contactName.value = '';
        contactEmail.value = '';
        Message.value = '';

    }
};

contactForm.addEventListener('submit', sendEmail);


/*=============== Style Switcher =============== */
const styleSwitcherToggle = document.querySelector('.style__switcher-toggler'),
    styleSwitcher = document.querySelector('.style__switcher');

styleSwitcherToggle.addEventListener('click', () => {
    styleSwitcher.classList.toggle('open');
});

//hide switcher on scroll
window.addEventListener('scroll', () => {
    if (styleSwitcher.classList.contains('open')) {
        styleSwitcher.classList.remove('open');
    }
});

const alternateStyle = document.querySelectorAll('.alternate-style');
function setActiveStyle(color) {
    alternateStyle.forEach((style) => {
        if (color === style.getAttribute('title')) {
            style.removeAttribute('disabled');
        }

        else{
            style.setAttribute('disabled', 'true');
        }

    });
}
