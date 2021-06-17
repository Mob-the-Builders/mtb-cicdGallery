import { fetchImages } from '../api/api';

const createFront = image => {
  const div = document.createElement('div');
  const img = document.createElement('img');
  img.src = image;
  img.className = 'card__image'
  div.appendChild(img);
  return div;
};

const createBack = description => {
  const div = document.createElement('div');
  const p = document.createElement('p');
  p.textContent = description;
  div.appendChild(p);
  return div;
};

const createCard = (image, description) => {
  const article = document.createElement('article');
  article.className = 'card';
  
  const cardInner = document.createElement('div');
  cardInner.className = 'card__inner';

  const front = createFront(image);
  front.className = 'card__front';

  const back = createBack(description);
  back.className = 'card__back';

  cardInner.appendChild(front);
  cardInner.appendChild(back);
  article.appendChild(cardInner);
  return article;
}

const imageList = (input, id) => {
return fetchImages(input, id)
  .then(res => {
    const section = document.createElement('section');
    section.id = 'cities';
    res.forEach(element => {
      const card = createCard(element.urls.small, element.alt_description);
      section.appendChild(card);
    });
    return section;
  });
}

export { imageList };
