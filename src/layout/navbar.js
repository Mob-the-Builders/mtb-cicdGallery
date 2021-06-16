import logo from '../images/Mob_The_Builders.png';

/*
Need to import an image here
----
1. Create a navbar with JS
    a. Use the image in the navbar
2. Export the navbar 
3. Import it / inject it to index.js 
*/

const navbar = document.createElement('header');
navbar.className = 'navbar'

const img = document.createElement('img');
img.src = logo;
img.className = 'navbar__logo';

navbar.appendChild(img);



export { navbar };