const accessKey = '88BvEHIlVDgry0Z99SYgU6Nda9fGe52NRISco4u4HJE';

const fetchImages = (query, id = 1) => fetch(`https://api.unsplash.com/search/photos?page=${id}&query=${query}&client_id=${accessKey}`)
  .then(res => res.json())
  .then(res => {
    localStorage.setItem('currentPage', id);
    localStorage.setItem('maxPage', res.total_pages);
    return res;
  })
  .then(res => res.results);

export default fetchImages;
