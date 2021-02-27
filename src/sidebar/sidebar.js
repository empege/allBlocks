const sidebar = {};
sidebar.selectors = {
  sidebar: '.js-sidebar',
  show: '.js-sidebar-show',
  hide: '.js-sidebar-hide'
}
const sidebarElement = document.querySelector(sidebar.selectors.sidebar);
const sidebarHideIcon = document.querySelector(sidebar.selectors.hide);
const sidebarShowIcon = document.querySelector(sidebar.selectors.show);

sidebarHideIcon.addEventListener('click', () => hideSidebar());
sidebarShowIcon.addEventListener('click', () => showSidebar());

const hideSidebar = () => {
  sidebarElement.classList.remove('sidebar--active');
  sidebarShowIcon.classList.remove('display-none');
}
const showSidebar = () => {
  sidebarElement.classList.add('sidebar--active');
  sidebarShowIcon.classList.add('display-none');
}
