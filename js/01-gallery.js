import { galleryItems } from "./gallery-items.js";
// Change code below this line

console.log(galleryItems);

const galleryContainerEl = document.querySelector(".gallery");
const cardsMurkup = createImageCardsMurkup(galleryItems);
galleryContainerEl.insertAdjacentHTML("beforeend", cardsMurkup);
galleryContainerEl.addEventListener("click", handleImageClick);

// створюю розмітку
function createImageCardsMurkup(galleryItems) {
	return galleryItems
		.map(({ preview, original, description }) => {
			return `<div class="gallery__item">
  <a class="gallery__link" href="${original}">
    <img
      class="gallery__image"
      src="${preview}"
      data-source="${original}"
      alt="${description}"
    />
  </a>
</div>`;
		})
		.join("");
}
console.log(createImageCardsMurkup(galleryItems));

// створюю функцію слухача подій
function handleImageClick(event) {
	// заборона стандартних дій
	event.preventDefault();
	// перевірка на картинку
	if (event.target.nodeName !== "IMG") {
		return;
	}
	// перезапис src і відкриття модалки
	const instance = basicLightbox.create(`
    <img src="${event.target.dataset.source}" width="800" height="600">
`);

	instance.show();
	// функція закриття модалки
	galleryContainerEl.addEventListener("keydown", (event) => {
		const ESC_KEY_CODE = "Escape";
		const isEscKey = event.code === ESC_KEY_CODE;

		if (isEscKey) {
			instance.close();
			galleryContainerEl.removeEventListener("keydown", (event) => {
				const ESC_KEY_CODE = "Escape";
				const isEscKey = event.code === ESC_KEY_CODE;
			})
		}
	});
};
