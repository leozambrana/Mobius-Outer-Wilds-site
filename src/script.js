const images = ['./img/ow-ashtwin.png', './img/ow-escapepod.png', './img/ow-giantsdeepruins.png' , './img/ow-shipinterior.png',
'./img/ow-skeleton.png', './img/ow-village.png'];

function setOverlayVisible() {
   document.querySelector('.overlay').classList.remove('invisible');

   const handleOutsideClick = (event) => {
       if (!document.querySelector('.btn-previous').contains(event.target) && !document.querySelector('.btn-next').contains(event.target) && !document.querySelector('.dynamic-img').contains(event.target)) {
           document.querySelector('.overlay').classList.add('invisible');
           document.removeEventListener('click', handleOutsideClick);
       }
   };
   setTimeout(() => document.addEventListener('click', handleOutsideClick), 1000)
}

function nextImage() {
   const imgElem = document.querySelector('.dynamic-img');
   const currentIndex = images.findIndex((img) => img === imgElem.getAttribute('src'));
   imgElem.setAttribute('src', images[currentIndex + 1] || images[0]);
}

function previousImage() {
   const imgElem = document.querySelector('.dynamic-img');
   const currentIndex = images.findIndex((img) => img === imgElem.getAttribute('src'));
   imgElem.setAttribute('src', images[currentIndex - 1] || images[images.length - 1]);
}

function goToTop() {
   document.querySelector('.top').scrollIntoView({ behavior: 'smooth' });

   let isScrolling;

   const handleAutoScrollEnd = () => {
       window.clearTimeout(isScrolling);

       isScrolling = setTimeout(function() {
           document.querySelector('.go-to-top-btn').classList.add('invisible')
           window.removeEventListener('scroll', handleAutoScrollEnd);
       }, 66);
   };

   window.addEventListener('scroll', handleAutoScrollEnd, false);
}

function handleSendEmailBtn() {
   const subject = document.querySelector('#subject').value;
   const message = document.querySelector('#message').value;
   document.querySelector('.send-email-link').setAttribute('href', `mailto:support@mobiusdigitalgames.com?subject=${subject}&body=${message}`);
}

document.addEventListener('scroll', () => {
   document.querySelector('.go-to-top-btn').classList.remove('invisible');
})