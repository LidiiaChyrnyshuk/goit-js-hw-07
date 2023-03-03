import { galleryItems } from "./gallery-items.js";
// Change code below this line

console.log(galleryItems);

const galleryContainerEl = document.querySelector(".gallery");
const cardsMurkup = createImageCardsMurkup(galleryItems);
galleryContainerEl.insertAdjacentHTML("beforeend", cardsMurkup);

// створюю розмітку
function createImageCardsMurkup(galleryItems) {
	return galleryItems
		.map(({ preview, original, description }) => {
			return `<li><a class="gallery__item" href="${original}">
  <img class="gallery__image" src="${preview}" alt="${description}" />
</a></li>`;
		})
		.join("");
}
console.log(createImageCardsMurkup(galleryItems));

const lightbox = new SimpleLightbox(".gallery a", {
	captionPosition: "bottom",
	captionDelay: 250,
	captionsData: "alt",
});

lightbox.on("show.simplelightbox");
