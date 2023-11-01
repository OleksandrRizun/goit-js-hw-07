import { galleryItems } from './gallery-items.js';

// Change code below this line

let instance;

// Gallery markup
function createGalleryItem (preview, original, description) {
    const galleryItem =
    `<li class="gallery__item">
        <a class="gallery__link" href=${original}>
            <img
            class="gallery__image"
            src=${preview}
            data-source=${original}
            alt=${description}
            />
        </a>
    </li>`
    return galleryItem
}
const galleryContent = galleryItems.map(({preview, original, description}) => createGalleryItem(preview, original, description)).join("\n");

const galleryElement = document.querySelector (".gallery");
galleryElement.insertAdjacentHTML ("beforeend", galleryContent);

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
    );

    instance.show();

    document.addEventListener("keydown", handleKeyDown);
}

// Big image Esc
function handleKeyDown (event) {
    if ((!instance.visible()) || (event.code !== "Escape")) return;
    instance.close();
    document.removeEventListener("keydown", handleKeyDown);
}

