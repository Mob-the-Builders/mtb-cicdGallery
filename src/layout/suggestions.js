const isValidSearch = (nodes, lastSearch) => {
  let output = true;
  nodes.forEach(node => {
    if (node.innerHTML === lastSearch) {
      output = false;
    }
  });
  return output;
};

const generateSuggestions = () => {
  const searchBar = document.getElementById('searchBar');
  const lastSearch = localStorage.getItem('lastSearch');
  const div = document.createElement('div');
  div.className = 'suggestion';
  div.innerHTML = lastSearch; 
  
  if (isValidSearch(searchBar.childNodes, lastSearch)) {
    if (searchBar.childNodes.length >= 6) {
      searchBar.removeChild(searchBar.childNodes[2]);
    }
    searchBar.appendChild(div);
  }
}

export { generateSuggestions }; 