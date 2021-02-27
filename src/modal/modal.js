const modal = {};
modal.selectors = {
  modal: '.js-modal',
  exitBtn: '.js-modal-exit-btn',
  modalBackground: '.js-modal-background',
}

// Elements
const exitBtn = document.querySelector(modal.selectors.exitBtn);
const modalBackground = document.querySelector(modal.selectors.modalBackground);

// Event Listeners
exitBtn.addEventListener('click', (e) => exitModal(e));
modalBackground.addEventListener('click', (e) => exitModal(e));

// Functions
const removeClassByPrefix = (prefix) => {

}
const exitModal = (e) => {
  const modal = e.target.closest('.modal');
  // Remove class with prefix 'modal--active--'
  const regex = new RegExp('\\bmodal--active--\\w*\\b', 'gi');
  modal.className = modal.className.replace(regex, '');
}