document.addEventListener("DOMContentLoaded", function () {
  // smooth scrolling for anchor links
  document.querySelectorAll('a[href^="#"]').forEach((anchor) => {
    anchor.addEventListener("click", function (e) {
      e.preventDefault();

      document.querySelector(this.getAttribute("href")).scrollIntoView({
        behavior: "smooth",
      });
    });
  });
});

window.addEventListener("load", function () {});

const cards = document.querySelectorAll('.card');
const smallPages = document.querySelectorAll('.small-page');
const closeButtons = document.querySelectorAll('.close-button');

cards.forEach((card, index) => {
  card.addEventListener('click', () => {
    smallPages.forEach((smallPage, i) => {
      if (i !== index) {
        smallPage.classList.remove('show');
      }
    });
    smallPages[index].classList.toggle('show');
    document.body.style.overflow = 'hidden'; 
  });
});

document.addEventListener('click', (event) => {
  if (!event.target.closest('.card') && !event.target.closest('.small-page')) {
    smallPages.forEach((smallPage) => {
      smallPage.classList.remove('show');
    });
  }
});
closeButtons.forEach((closeButton, index) => {
  closeButton.addEventListener('click', () => {
    smallPages[index].classList.remove('show');
    document.body.style.overflow = 'auto';
  });
});



