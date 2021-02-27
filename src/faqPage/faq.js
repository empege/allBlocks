const faqData = {
  accordionData: [
    {
      id: '0',
      title: 'What\'s this all about?',
      text: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Quia possimus eveniet pariatur voluptates tempora, officiis a facilis, corrupti numquam at cum temporibus beatae earum natus amet vero ratione excepturi nam?'
    },
    {
      id: '1',
      title: 'Question 1?',
      text: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Quia possimus eveniet pariatur voluptates tempora, officiis a facilis, corrupti numquam at cum temporibus beatae earum natus amet vero ratione excepturi nam?'
    },
    {
      id: '2',
      title: 'Question 2?',
      text: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Quia possimus eveniet pariatur voluptates tempora, officiis a facilis, corrupti numquam at cum temporibus beatae earum natus amet vero ratione excepturi nam? Lorem ipsum dolor sit amet consectetur adipisicing elit. Quia possimus eveniet pariatur voluptates tempora, officiis a facilis, corrupti numquam at cum temporibus beatae earum natus amet vero ratione excepturi nam?'
    },
    {
      id: '3',
      title: 'Question 3?',
      text: 'Lorem ipsum dolor sit amet consectetur adipisicing elit.'
    }
  ]
};
const sidebarData = {
  accordionData: [
    {
      id: '0',
      title: 'What\'s this all about?',
      text: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Quia possimus eveniet pariatur voluptates tempora, officiis a facilis, corrupti numquam at cum temporibus beatae earum natus amet vero ratione excepturi nam?'
    },
    {
      id: '1',
      title: 'Question 1?',
      text: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Quia possimus eveniet pariatur voluptates tempora, officiis a facilis, corrupti numquam at cum temporibus beatae earum natus amet vero ratione excepturi nam?'
    },
    {
      id: '2',
      title: 'Question 2?',
      text: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Quia possimus eveniet pariatur voluptates tempora, officiis a '
    }
  ]
};
const modalData = {
  title: 'Warning',
  text: 'Some text here... Some text here... Some text here... Some text here... Some text here... Some text here...',
  themes: {
    default: 'modal--theme--default',
    warning: 'modal--theme--warning',
    dark: 'modal--theme--dark',
  }
}

const renderAccordion = (rootElement, data, theme = 'accordion--theme--primary') => {
  const template = Handlebars.templates.accordion; // . || ['']
  data.theme = theme;
  const ourGeneratedHTML = template(data);
  const parent = document.querySelector(rootElement);
  parent.innerHTML += ourGeneratedHTML;
}

const renderSidebar = (rootElement) => {
  const template = Handlebars.templates['sidebar'];
  const ourGeneratedHTML = template();
  const parent = document.querySelector(rootElement);
  parent.innerHTML += ourGeneratedHTML;
}

const renderModal = (rootElement, data, theme = 'modal--theme--default', enterMode = 'modal--active--default') => {
  const template = Handlebars.templates.modal;
  data.theme = theme;
  data.enterMode = enterMode;
  const ourGeneratedHTML = template(data);
  const parent = document.querySelector(rootElement);
  parent.innerHTML += ourGeneratedHTML;
}
renderModal('#faq-page', modalData, 'modal--theme--dark', 'modal--active--fadein');
renderAccordion('.faq-page-wrapper', faqData, 'accordion--theme--primary');
renderSidebar('#faq-page');
renderAccordion('.sidebar', sidebarData, 'accordion--theme--secondary');