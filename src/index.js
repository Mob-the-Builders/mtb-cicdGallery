import './styles/main.scss';
import { navbar } from './layout/navbar';
import { imageList } from './layout/gallery';
import { input } from './layout/input';
import { fetchImages } from './api/api';

// import { cli } from 'webpack';
const app = document.querySelector('#root');

// imageList.then(res => console.log(res));

// Create header node
const header = document.createElement('header');
header.appendChild(navbar);

// Create main node
const main = document.createElement('main');
imageList('london').then(res => main.appendChild(res));

main.appendChild(input());

// Append nodes to the DOM
app.append(header, main);

// Input search

const submitSearch = () => {
  const value = document.getElementById('value').value;
  main.lastChild.innerHTML = '';
  // This is the gateway to get a search going
  // pagination would need to be a para to this searchyboi
  // prolly need default value 
  // need to create the buttons as well on load
  // make sure not to delete the buttons 
  // buttons needs to have onClick imageList or something and pass the page as 2nd para.
  imageList(value).then(res => {
    console.log(res);
    main.appendChild(res)
  });
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



 

