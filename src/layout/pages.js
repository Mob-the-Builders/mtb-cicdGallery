
const buttons = () => {
  const section = document.createElement('section');
  const prev = document.createElement('button');
  const next = document.createElement('button');
  prev.id = 'prev';
  next.id = 'next';
  prev.textContent = 'Previous'
  next.textContent = 'Next'
  section.appendChild(prev);
  section.appendChild(next);
  return section;
}

export { buttons };