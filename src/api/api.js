const access_key = '88BvEHIlVDgry0Z99SYgU6Nda9fGe52NRISco4u4HJE'
const secret_key = 'HggveNkuuUPrEJ-m7QY0dMq6NTNTG-omsGB01PN9gvU'

const fetchImages = query => {
  return fetch(`https://api.unsplash.com/search/photos?query=${query}&client_id=88BvEHIlVDgry0Z99SYgU6Nda9fGe52NRISco4u4HJE`)
    .then(res => res.json())
    .then(res => res.results);
};

export { fetchImages };
