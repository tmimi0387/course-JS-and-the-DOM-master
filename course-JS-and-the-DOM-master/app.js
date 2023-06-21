const nanodegreeCard = document.querySelector('.card');
const programName = document.querySelector('.card__content--h5.slate.strong');
programName.innerHTML = '<strong><em>Everything </em>You Need To Know About Data</strong>'

const testimonies = document.querySelector('.testimonials');
const adviceHeader = document.createElement('h2');

adviceHeader.textContent = 'Advice for New Udacity Students';
testimonies.appendChild(adviceHeader);

const advice ='<p>Study in a distraction free area. Nothing stops momentum quicker than a distraction.</p>'
testimonies.insertAdjacentHTML('beforeend', advice);

const startButton = document.querySelector('#start-now');
startButton.setAttribute('style', 'background: #2015ff; border-radius: 5rem');

const newHeroHompage = document.querySelector('.hero--homepage');
newHeroHompage.classList.add('new-hero');

const listOfCards = document.querySelectorAll('.card');
for (let i = 0; i < listOfCards.length; i++) {
  listOfCards[i].classList.add('new-card');
}