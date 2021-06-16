import './styles/main.scss'
import mtb from './images/Mob_The_Builders.png'
import font from './images/BigShouldersStencilText-Black.ttf'


// Create a class property without a constructor
class Game {
  name = 'Violin Charades'
}
const myGame = new Game()

// Create paragraph node
const p = document.createElement('p')
p.textContent = `I like ${myGame.name}.`

// Create heading node
const heading = document.createElement('h1')
heading.textContent = 'Interesting! 🤔'

// Create image node
const image = document.createElement('img');
image.src = mtb;
// Append heading node to the DOM
const app = document.querySelector('#root')
app.append(heading, p, image);


console.log(typeof mtb);
console.log(mtb);