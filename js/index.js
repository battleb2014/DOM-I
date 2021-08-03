const siteContent = {
  "nav": {
    "nav-item-1": "Services",
    "nav-item-2": "Product",
    "nav-item-3": "Vision",
    "nav-item-4": "Features",
    "nav-item-5": "About",
    "nav-item-6": "Contact",
    "img-src": "img/logo.png"
  },
  "cta": {
    "h1": "DOM Is Awesome",
    "button": "Get Started",
    "img-src": "img/header-img.png"
  },
  "main-content": {
    "features-h4":"Features",
    "features-content": "Features content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
    "about-h4":"About",
    "about-content": "About content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
    "middle-img-src": "img/mid-page-accent.jpg",
    "services-h4":"Services",
    "services-content": "Services content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
    "product-h4":"Product",
    "product-content": "Product content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
    "vision-h4":"Vision",
    "vision-content": "Vision content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
  },
  "contact": {
    "contact-h4" : "Contact",
    "address" : "123 Way 456 Street Somewhere, USA",
    "phone" : "1 (888) 888-8888",
    "email" : "sales@greatidea.io",
  },
  "footer": {
    "copyright" : "Copyright Great Idea! 2018"
  },
};

// Example: Update the img src for the logo
let logo = document.getElementById("logo-img");
logo.setAttribute('src', siteContent["nav"]["img-src"])

const headerNav = document.querySelector('header nav');

const links = headerNav.children;

links[0].textContent = siteContent.nav["nav-item-1"];
links[1].textContent = siteContent.nav["nav-item-2"];
links[2].textContent = siteContent.nav["nav-item-3"];
links[3].textContent = siteContent.nav["nav-item-4"];
links[4].textContent = siteContent.nav["nav-item-5"];
links[5].textContent = siteContent.nav["nav-item-6"];

const ctaImg = document.querySelector('#cta-img');
ctaImg.src = siteContent.cta['img-src'];

const ctaH1 = document.querySelector('.cta-text h1');
const brk = document.createElement('br');
ctaH1.textContent = `Dom ${brk} is ${brk} Awesome`;

const btn = document.querySelector('.cta-text button');
btn.textContent = siteContent.cta.button;

// const topContent = document.querySelector('.top-content');
const mainContent = document.querySelector('.main-content');

const topContent = mainContent.firstElementChild;

const features = topContent.firstElementChild;
const featuresH4 = features.firstElementChild;
featuresH4.textContent = siteContent['main-content']['features-h4'];
const featuresP = featuresH4.nextElementSibling;
featuresP.textContent = siteContent['main-content']['features-content'];


const about = features.nextElementSibling;

const aboutH4 = about.firstElementChild;
aboutH4.textContent = siteContent['main-content']['about-h4'];

const aboutP = aboutH4.nextElementSibling;
aboutP.textContent = siteContent['main-content']['about-content'];


const middleImg = document.querySelector('.middle-img');
middleImg.src = siteContent['main-content']['middle-img-src'];


const bottomContent = mainContent.lastElementChild;


const services = bottomContent.firstElementChild;

const servicesH4 = services.firstElementChild;
servicesH4.textContent = siteContent['main-content']['services-h4'];

const servicesP = services.lastElementChild;
servicesP.textContent = siteContent['main-content']['services-content'];


const product = services.nextElementSibling;

const productH4 = product.firstElementChild;
productH4.textContent = siteContent['main-content']['product-h4'];

const productP = productH4.nextElementSibling;
productP.textContent = siteContent['main-content']['product-content'];


const vision = bottomContent.lastElementChild;

const visionH4 = vision.firstElementChild;
visionH4.textContent = siteContent['main-content']['vision-h4'];

const visionP = visionH4.nextElementSibling;
visionP.textContent = siteContent['main-content']['vision-content'];


// contact
const contact = document.querySelector('.contact');

const contactH4 = contact.firstElementChild;
contactH4.textContent = siteContent.contact['contact-h4'];

const address = contactH4.nextElementSibling;
address.textContent = siteContent.contact.address;

const phone = address.nextElementSibling;
phone.textContent = siteContent.contact.phone;

const email = phone.nextElementSibling;
email.textContent = siteContent.contact.email;

const footerP = document.querySelector('footer p');
footerP.textContent = siteContent.footer.copyright;