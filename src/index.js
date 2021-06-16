import './styles/main.scss';
import { navbar } from './layout/navbar';
import { imageList } from './layout/gallery';
import { input } from './layout/input';
import { suggestions } from './layout/suggestions';
import { buttons } from './layout/pages';

localStorage.setItem('lastSearch', 'london');

const app = document.querySelector('#root');

// imageList.then(res => console.log(res));

// Create header node
const header = document.createElement('header');
header.appendChild(navbar);

// Create main node
const main = document.createElement('main');
imageList('london').then(res => main.appendChild(res));

main.appendChild(input());
main.appendChild(buttons());

// Append nodes to the DOM
app.append(header, main);

// local storage

// Input search

const submitSearch = () => {
  const value = document.getElementById('value').value;
  localStorage.setItem('lastSearch', value);
  main.removeChild(main.childNodes[2]);
  //main.childNodes[1].innerHTML = '';
  // This is the gateway to get a search going
  // pagination would need to be a para to this searchyboi
  // prolly need default value 
  // need to create the buttons as well on load
  // make sure not to delete the buttons 
  // buttons needs to have onClick imageList or something and pass the page as 2nd para.
  imageList(value).then(res => {
    main.appendChild(res)
  });
  suggestions();
}

// Adds listeners for click and pressing the enter key
const submitClick = document.getElementById('submit');
const submitEnter = document.getElementById('value');

submitClick.addEventListener('click', () => submitSearch());
submitEnter.addEventListener('keydown', () => {
  if (event.keyCode === 13) {
    submitSearch();
  }
});

// Add listener for pagination
const next = document.getElementById('next');
const prev = document.getElementById('prev');

next.addEventListener('click', () => {
  const currentSearch = localStorage.getItem('lastSearch');
  const currentPage = parseInt(localStorage.getItem('currentPage'));
  const lastPage = parseInt(localStorage.getItem('maxPage'));

  if ( lastPage >= currentPage) {
    const nextPage = currentPage + 1;
  
  
    main.removeChild(main.childNodes[2]);
    imageList(currentSearch, nextPage)
      .then(res => {
        main.appendChild(res)
    });
  }
})

prev.addEventListener('click', () => {
  const currentSearch = localStorage.getItem('lastSearch');
  const currentPage = parseInt(localStorage.getItem('currentPage'));

  if (currentPage >= 2) {
    const prevPage = currentPage - 1;
  
    main.removeChild(main.childNodes[2]);
    imageList(currentSearch, prevPage)
      .then(res => {
        main.appendChild(res)
    });
  }
})



 

