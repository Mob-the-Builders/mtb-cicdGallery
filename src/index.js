import './styles/main.scss';
import { navbar } from './layout/navbar';
import imageList from './layout/gallery';
import createSearchbar from './layout/input';
import generateSuggestions from './layout/suggestions';
import buttons from './layout/pages';
import { clearGalleryContainer } from './helpers/clear';

// Create main node
const main = document.createElement('main');

// Append search bar and buttons to main
main.appendChild(createSearchbar());

// When we have time rename the imageList
const section = document.createElement('section');
section.id = 'searchResult';
main.appendChild(section);

// Create the gallery container
const galleryContainer = document.createElement('section');
galleryContainer.className = 'gallery__container-grid';

// Append nodes to the DOM
const app = document.querySelector('#root');
app.append(navbar, main);
main.appendChild(galleryContainer);
main.appendChild(buttons());

// Input search
const submitSearch = () => {
  const { value } = document.getElementById('value');
  localStorage.setItem('lastSearch', value);
  clearGalleryContainer();
  imageList(value, 1, galleryContainer);
  generateSuggestions();
};

// Adds listeners for search bar
const submitClick = document.getElementById('submit');
const submitEnter = document.getElementById('value');

// Add listener for click
submitClick.addEventListener('click', () => submitSearch());
// Add listener for enter
submitEnter.addEventListener('keydown', event => {
  if (event.keyCode === 13) {
    submitSearch();
  }
});

// Add listener for pagination
const next = document.getElementById('next');
const prev = document.getElementById('prev');

next.addEventListener('click', () => {
  const currentSearch = localStorage.getItem('lastSearch');
  const currentPage = parseInt(localStorage.getItem('currentPage'), 10);
  const lastPage = parseInt(localStorage.getItem('maxPage'), 10);

  if (lastPage >= currentPage) {
    const nextPage = currentPage + 1;
    clearGalleryContainer();
    imageList(currentSearch, nextPage, galleryContainer);
  }
});

prev.addEventListener('click', () => {
  const currentSearch = localStorage.getItem('lastSearch');
  const currentPage = parseInt(localStorage.getItem('currentPage'), 10);
  if (currentPage >= 2) {
    const prevPage = currentPage - 1;
    clearGalleryContainer();
    imageList(currentSearch, prevPage, galleryContainer);
  }
});
