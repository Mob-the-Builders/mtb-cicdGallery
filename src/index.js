import './styles/main.scss';
import { navbar } from './layout/navbar';
import { imageList } from './layout/gallery';

const app = document.querySelector('#root')


imageList.then(res => console.log(res));

// Create heading node
const heading = document.createElement('h1')
heading.textContent = 'Interesting! 🤔'

// Append nodes to the DOM
app.append(navbar, heading);



//results[0].urls.full