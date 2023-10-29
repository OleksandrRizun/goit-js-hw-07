import { galleryItems } from './gallery-items.js';

// Change code below this line

let instance;

// Gallery markup
function createGalleryItem (preview, original, description) {
    const galleryItem = document.createElement ("li");
    galleryItem.classList.add("gallery__item");
    galleryItem.innerHTML=
    `<a class="gallery__link" href=${original}>
        <img
        class="gallery__image"
        src=${preview}
        alt=${description} />
    </a>`
    return galleryItem
}
const galleryContent = galleryItems.map(({preview, original, description}) => createGalleryItem(preview, original, description))

const galleryElement = document.getElementsByClassName ("gallery")[0];
galleryElement.append (...galleryContent);

instance = new SimpleLightbox('.gallery a', {
    captionsData: "alt",
    captionDelay: 250,
    captionClass: "image-caption"
});


