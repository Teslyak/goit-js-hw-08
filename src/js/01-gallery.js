// Add imports above this line
import { galleryItems } from './gallery-items';
import SimpleLightbox from "simplelightbox";
import "simplelightbox/dist/simple-lightbox.min.css";
// Change code below this line

console.log(galleryItems);
console.log(SimpleLightbox);
const refs = {
  ul: document.querySelector('.gallery'),
  
}

const createGallery = makeTagsGallery(galleryItems);

function makeTagsGallery(img) {
    return img.map(({ preview, original, description }) => { 
      return `<li class="gallery__item">
        <a class="gallery__link" href="${original}">
    <img
      class="gallery__image"
      src="${preview}"
      alt="Image ${description}"
    />
  </a>
  </li>
`
    }).join('');
   
};
 
refs.ul.insertAdjacentHTML('beforeend', createGallery);

const gallery = new SimpleLightbox('.gallery a', {captionsData: `alt`, captionDelay: 250});