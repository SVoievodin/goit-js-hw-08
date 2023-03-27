import SimpleLightbox from "simplelightbox";
import "simplelightbox/dist/simple-lightbox.min.css";
// Add imports above this line
import { galleryItems } from './gallery-items';
// Change code below this line

const galleryRef = document.querySelector("ul.gallery");
const imgListRef = galleryItems.map(image => `
    <li class="gallery__item">
   <a class="gallery__link" href="${image.original}">
      <img class="gallery__image" src="${image.preview}" alt="${image.description}" />
   </a>
</li>
`).join('');

galleryRef.insertAdjacentHTML("afterbegin", imgListRef);
galleryRef.addEventListener('click', onClickImage);

function onClickImage(event) {
    event.preventDefault();
    if (event.target.nodeName !== "IMG") { return; }
}
const lightbox = new SimpleLightbox('ul.gallery a', { captionsData: 'alt', captionDelay: 250 });

console.log(galleryItems);
