import logo from '../images/Mob_The_Builders.png';

const navbar = document.createElement('header');
navbar.className = 'navbar';

const img = document.createElement('img');
img.src = logo;
img.className = 'navbar__logo';

navbar.appendChild(img);

export default navbar;
