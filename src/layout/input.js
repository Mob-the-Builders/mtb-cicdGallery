const createSearchbar = () => {
  const section = document.createElement('section');
  section.id = 'searchBar';
  section.className = 'search-bar__container-flex';
  section.innerHTML = '<input type="search" results=5 id="value" placeholder="Search here..."><input type="submit" id="submit">';
  return section;
};

export default createSearchbar;
