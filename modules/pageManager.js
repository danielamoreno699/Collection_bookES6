import { DateTime } from '../node_modules/luxon/src/luxon.js';

class PageManager {
  constructor() {
    this.formSection = document.getElementById('add-book-section');
    this.listSection = document.getElementById('table-books');
    this.contactSection = document.getElementById('contact');
    this.span = document.getElementById('date');
    this.links = document.querySelectorAll('a');
    this.currentPage = this.getCurrentPage();
    this.sections = document.querySelectorAll('section');

    this.date = DateTime.local();
  }

  displayList() {
    this.listSection.classList.remove('hidden');
    this.formSection.classList.add('hidden');
    this.contactSection.classList.add('hidden');
  }

  displayForm() {
    this.formSection.classList.remove('hidden');
    this.listSection.classList.add('hidden');
    this.contactSection.classList.add('hidden');
  }

  displayContact() {
    this.contactSection.classList.remove('hidden');
    this.listSection.classList.add('hidden');
    this.formSection.classList.add('hidden');
  }

  linkList() {
    this.displayList();
  }

  linkForm() {
    this.displayForm();
  }

  linkContact() {
    this.displayContact();
  }

  displayPage = (currentPage) => {
    const sections = document.querySelectorAll('section');

    // eslint-disable-next-line no-restricted-syntax
    for (const section of sections) {
      if (section.id === currentPage) {
        section.classList.remove('hidden');
      } else {
        section.classList.add('hidden');
      }
    }
  }

  getCurrentPage =() => {
    const currentPage = localStorage.getItem('currentPage');
    if (currentPage) {
      return currentPage;
    }

    return 'add-book-section';
  }

  handleLinkClick(event) {
    event.preventDefault();
    const currentPage = event.target.getAttribute('href').substring(1);
    localStorage.setItem('currentPage', currentPage);
    this.displayPage(currentPage);
  }

  displayCurrentPage() {
    this.displayPage(this.currentPage);
  }

  init() {
    this.span.innerHTML = this.date;
    this.links.forEach((link) => {
      link.addEventListener('click', this.handleLinkClick.bind(this));
    });
    window.addEventListener('load', this.displayCurrentPage.bind(this));
  }
}

const pageManager = new PageManager();
pageManager.init();

export default PageManager;