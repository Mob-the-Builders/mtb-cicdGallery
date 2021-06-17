const jsdom = require('jsdom');

const { JSDOM } = jsdom

let navbar;

test('Make me pass - green', () => {
  expect(3).toBe(3);
});

test('Make me fail - red', () => {
  expect(3).toBe(3);
});

beforeAll(() => {
  const mockedWindow = new JSDOM (`
  <!DOCTYPE html>
  <html lang="en">
    <head>
      <title><%= htmlWebpackPlugin.options.title %></title>
    </head>
    <body>
      <div id="root"></div>
    </body>
  </html>`).window;
  global.document = mockedWindow.document;
  navbar = require('./src/layout/navbar').navbar;
});

describe('DOM Tester', () =>  {
  test('Check if header has correct class', () => {
    const header = global.document.createElement('header');
    header.appendChild(navbar);
    const app = document.querySelector('#root');
    app.append(header);
    expect(navbar.classList.contains('navbar')).toBe(true);
  });

  test('Check if header has correct class', () => {
    const header = global.document.createElement('header');
    header.appendChild(navbar);
    const app = document.querySelector('#root');
    app.append(header);
    expect(navbar.classList.contains('navbar')).toBe(true);
  });
});