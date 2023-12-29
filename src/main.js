import SimpleLightbox from "simplelightbox";
import "simplelightbox/dist/simple-lightbox.min.css";
import iziToast from "izitoast";
import "izitoast/dist/css/iziToast.min.css";

const fetchUsersBtn = document.querySelector(".form");
const gallery = document.querySelector(".gallery");
const textInput = document.querySelector('.text-input')
const modal = new SimpleLightbox('.gallery a', {
  captionsData: 'alt',
  captionDelay: 250,
});

const loader = document.querySelector('.loader');
  loader.style.display = 'none';


fetchUsersBtn.addEventListener('submit', (event) => {
  event.preventDefault();
  gallery.innerHTML = '';
  loader.style.display = 'block';
  const usersValue = textInput.value;

  const searchParams = new URLSearchParams({
  key: '41485835-9295c11e9848689b047a2c35a',
  q: usersValue,
  image_type: 'photo',
  orientation: 'horizontal',
  safesearch: true
});

  fetch(`https://pixabay.com/api/?${searchParams}`)
    .then((response) => {
    loader.style.display = 'none';
    
      if (!response.ok) {
        throw new Error(response.status);
      }
      return response.json();
    })
  .then((data) => {
      if (data.hits.length === 0) {
        iziToast.error({
          message: 'Sorry, there are no images matching your search query. Please try again!',
          messageColor: '#FAFAFB',
          backgroundColor: '#EF4040'
        });
        return;
    };
      data.hits.forEach(image => {
        const card = imageCard(image);
        gallery.appendChild(card);
      });
    
      modal.refresh();
    })
  .catch((error) => {
		console.error(error);
  })
});

function imageCard(image) {
  const card = document.createElement('div');

  card.innerHTML = `
    <a href="${image.largeImageURL}">
    <img src="${image.webformatURL}" alt="${image.tags}"></a>
    <div class="info">
    <div class="image-info">
    <span>Likes</span>
    <span class="image-value">${image.likes}</span></div>
    <div class="image-info">
    <span>Views</span>
    <span class="image-value">${image.views}</span></div>
    <div class="image-info">
    <span>Comments</span>
    <span class="image-value">${image.comments}</span></div>
    <div class="image-info">
    <span>Downloads</span>
    <span class="image-value">${image.downloads}</span></div>
    </div>
  `;

  return card;
};