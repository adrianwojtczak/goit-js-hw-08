// Add imports above this line
import { galleryItems } from './gallery-items';
// Change code below this line

console.log(galleryItems);

// Opisany w dokumentacji
import SimpleLightbox from 'simplelightbox';
// Dodatkowy import stylów
import 'simplelightbox/dist/simple-lightbox.min.css';

// Add gallery to html
const galleryWrapper = document.querySelector('.gallery');

galleryItems.forEach(({ preview, original, description }) => {
  const galleryItem = document.createElement('div');
  galleryItem.classList.add('gallery__item');

  const galleryLink = document.createElement('a');
  galleryLink.classList.add('gallery__link');
  galleryLink.href = original;

  const galleryImage = document.createElement('img');
  galleryImage.classList.add('gallery__image');
  galleryImage.src = preview;
  galleryImage.alt = description;

  galleryWrapper.append(galleryItem);
  galleryItem.append(galleryLink);
  galleryLink.append(galleryImage);
});

// Simple Lightbox
const lightbox = new SimpleLightbox('.gallery a', {
  captionsData: 'alt',
  captionDelay: 250,
});
