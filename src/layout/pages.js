
const pagination = () => {

}

const buttons = () => {
  const section = document.createElement('section');
  const prev = document.createElement('button');
  const next = document.createElement('button');
  prev.id = 'prev';
  next.id = 'next';
  section.appendChild(prev);
  section.appendChild(next);
  return section;
}

export { buttons };