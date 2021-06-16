const loop = (nodes, lastSearch) => {
  let output = true;
  nodes.forEach(node => {
    if (node.innerHTML === lastSearch) {
      output = false;
    }
  });
  return output;
};


const suggestions = () => {
  const searchBar = document.getElementById('searchBar');
  const lastSearch = localStorage.getItem('lastSearch');
  const div = document.createElement('div');
  div.className = 'suggestion';
  div.innerHTML = lastSearch; 

  const test = loop(searchBar.childNodes, lastSearch);

  if (test) {
    if (searchBar.childNodes.length >= 6) {
      searchBar.removeChild(searchBar.childNodes[2]);
    }
    searchBar.appendChild(div);
  }
}

export { suggestions }; 