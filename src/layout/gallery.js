import { fetchImages } from '../api/api'

const imageList = fetchImages().then(res => res);

// const gallery = document.createElement('li')



export { imageList };
