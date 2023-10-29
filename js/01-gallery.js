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
        data-source=${original}
        alt=${description}
        />
    </a>`
    return galleryItem
}
const galleryContent = galleryItems.map(({preview, original, description}) => createGalleryItem(preview, original, description))

const galleryElement = document.getElementsByClassName ("gallery")[0];
galleryElement.append (...galleryContent);

// Gallery click
galleryElement.addEventListener ("click", handleGalleryClick);

function handleGalleryClick (event) {
    if (event.target === event.currentTarget) {
        return;
    }
    event.preventDefault();
    const urlBigImage = event.target.dataset.source;

    instance = basicLightbox.create(
    `<div class="modal">
        <img
        src=${urlBigImage}
        />
    </div>`
    )

    instance.show()
}

// Big image Esc
document.addEventListener("keydown", handleKeyDown);

function handleKeyDown (event) {
    if (!instance.visible()) return;
    if (event.code !== "Escape") return;
    instance.close();
}
