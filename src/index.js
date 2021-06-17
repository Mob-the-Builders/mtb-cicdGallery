import './styles/main.scss';
import navbar from './layout/navbar';
import imageList from './layout/gallery';
import createSearchbar from './layout/input';
import generateSuggestions from './layout/suggestions';
import buttons from './layout/pages';
// I am just a comment :D
// Create header node
const header = document.createElement('header');
header.appendChild(navbar);

// Create main node
const main = document.createElement('main');
// When we have time rename the imageList
const section = document.createElement('section');
main.appendChild(section);
// imageList('')
//   .then(section => main.appendChild(section));

// Append search bar and buttons to main
main.appendChild(createSearchbar());
main.appendChild(buttons());

// Append nodes to the DOM
const app = document.querySelector('#root');
app.append(header, main);

// Input search
const submitSearch = () => {
  const { value } = document.getElementById('value');
  localStorage.setItem('lastSearch', value);
  main.removeChild(main.childNodes[2]);

  imageList(value).then(res => {
    main.appendChild(res);
  });
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

    main.removeChild(main.childNodes[2]);
    imageList(currentSearch, nextPage)
      .then(res => {
        main.appendChild(res);
      });
  }
});

prev.addEventListener('click', () => {
  const currentSearch = localStorage.getItem('lastSearch');
  const currentPage = parseInt(localStorage.getItem('currentPage'), 10);

  if (currentPage >= 2) {
    const prevPage = currentPage - 1;

    main.removeChild(main.childNodes[2]);
    imageList(currentSearch, prevPage)
      .then(res => {
        main.appendChild(res);
      });
  }
});
