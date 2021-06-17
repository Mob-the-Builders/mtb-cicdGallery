
const input = () => {
  const section = document.createElement('section');
  section.id = 'searchBar';
  section.className = "search-bar__container-flex"
  section.innerHTML = '<input type="search" results=5 autosave=some_unique_value name="s" id="value" value="london"><input type="submit" id="submit">'
  return section;
}

export { input };