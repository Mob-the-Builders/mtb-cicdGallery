
const input = () => {
  const section = document.createElement('section');
  section.id = 'searchBar';
  section.innerHTML = '<input type="text" id="value" value="london"><input type="submit" id="submit">'
  return section;
}

export { input };