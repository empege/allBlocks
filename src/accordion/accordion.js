// Selectors
const accordion = {};
accordion.selectors = {
  header: '.js-accordion-header',
  content: '.js-accordion-content',
  paragraph: '.js-accordion-paragraph',
  icon: '.js-acordion-icon',
}

//Elements
const accordionHeaders = document.querySelectorAll(accordion.selectors.header);
const accordionContents = document.querySelectorAll(accordion.selectors.content);

//AddEventListeners
accordionHeaders.forEach(header => header.addEventListener('click', (e) => toggleSlideAccordionItem(e)));

//Functions
/*
* Handles opening and closing of accordion items
* returns {void}
*/
const toggleSlideAccordionItem = (e) => {
  const article = e.currentTarget.parentElement;
  const header = e.currentTarget;
  const content = article.querySelector(accordion.selectors.content);
  const paragraph = content.querySelector(accordion.selectors.paragraph);
  const paragraphHeight = paragraph.offsetHeight;
  const icons = article.querySelectorAll(accordion.selectors.icon);
  if ([...header.classList].includes('accordion__header--active')) {
    header.classList.remove('accordion__header--active');
    content.style.maxHeight = 0;
    icons[0].classList.remove('display-none')
    icons[1].classList.add('display-none')
  } else {
    header.classList.add('accordion__header--active');
    content.style.maxHeight = `${paragraphHeight + 40}px`; // Ovde mi treba neki size koji je default za padding, a ne ovako da zakucavam.
    icons[0].classList.add('display-none')
    icons[1].classList.remove('display-none')
  }
}