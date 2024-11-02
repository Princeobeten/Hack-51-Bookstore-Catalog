// Array of banner images
const bannerImages = [
  '/img/book1.jpg',
  'https://img.freepik.com/free-vector/professional-business-book-cover_23-2149490317.jpg?ga=GA1.1.1453227866.1719862211&semt=ais_hybrid',
  'https://img.freepik.com/free-vector/minimalist-book-cover-template_23-2148899519.jpg?ga=GA1.1.1453227866.1719862211&semt=ais_hybrid',
  'https://img.freepik.com/free-vector/good-paper-wattpad-book-cover_23-2149452379.jpg?ga=GA1.1.1453227866.1719862211&semt=ais_hybrid',
  'https://img.freepik.com/free-vector/annual-report-business-brochure-flyer-clean-design_1017-33573.jpg?ga=GA1.1.1453227866.1719862211&semt=ais_hybrid',
  'https://img.freepik.com/free-vector/abstract-business-book-cover-template_23-2148726776.jpg?ga=GA1.1.1453227866.1719862211&semt=ais_hybrid',
];

let currentImageIndex = 0;
const bannerImageElement = document.getElementById('banner-image');

function changeBannerImage() {
  bannerImageElement.classList.add('fade-out');

  setTimeout(() => {
    currentImageIndex = (currentImageIndex + 1) % bannerImages.length;
    bannerImageElement.src = bannerImages[currentImageIndex];
    bannerImageElement.classList.remove('fade-out');
    bannerImageElement.classList.add('fade-in');
  }, 500);

  setTimeout(() => {
    bannerImageElement.classList.remove('fade-in');
  }, 1000);
}

setInterval(changeBannerImage, 3000);


// Fetch and process books data
const bookGrid = document.querySelector('.book-grid');
const searchInput = document.querySelector('.search-input');
const genreFilter = document.querySelector('.genre-filter');
const themeToggle = document.querySelector('.theme-toggle');

let books = [];

async function fetchBooks() {
  try {
    // Replace this with your actual JSON file path
    const response = await fetch('json/hack51_sample_book.json');
    books = await response.json();

    // Populate genres dropdown
    const genres = [...new Set(books.map(book => book.genre))].sort();
    genres.forEach(genre => {
      const option = document.createElement('option');
      option.value = genre;
      option.textContent = genre;
      genreFilter.appendChild(option);
    });

    // Initial render
    filterBooks();
  } catch (error) {
    console.error('Error loading books:', error);
    bookGrid.innerHTML = '<div class="no-results">Error loading books. Please try again later.</div>';
  }
}

// Render books
function renderBooks(booksToRender) {
  if (booksToRender.length === 0) {
    bookGrid.innerHTML = '<div class="no-results">No books found matching your criteria.</div>';
    return;
  }

  bookGrid.innerHTML = '';
  booksToRender.forEach(book => {
    const bookCard = document.createElement('div');
    bookCard.className = 'book-card';
    bookCard.innerHTML = `
          <img src="${book.imageUrl}" alt="${book.title}" class="book-cover">
          <div class="book-info">
              <h3 class="book-title">${book.title}</h3>
              <p class="book-author">${book.author}</p>
              <span class="book-genre">${book.genre}</span>
          </div>
      `;
    bookGrid.appendChild(bookCard);
  });
}

// Filter books
function filterBooks() {
  const searchTerm = searchInput.value.toLowerCase();
  const selectedGenre = genreFilter.value;

  const filteredBooks = books.filter(book => {
    const matchesSearch = book.title.toLowerCase().includes(searchTerm) ||
      book.author.toLowerCase().includes(searchTerm);
    const matchesGenre = !selectedGenre || book.genre === selectedGenre;
    return matchesSearch && matchesGenre;
  });

  renderBooks(filteredBooks);
}

// Theme toggle
function toggleTheme() {
  document.body.classList.toggle('light-mode');
  const icon = themeToggle.querySelector('i');
  if (document.body.classList.contains('light-mode')) {
    icon.classList.replace('bx-moon', 'bx-sun');
  } else {
    icon.classList.replace('bx-sun', 'bx-moon');
  }
}

// Event listeners with debouncing for search
let searchTimeout;
searchInput.addEventListener('input', () => {
  clearTimeout(searchTimeout);
  searchTimeout = setTimeout(filterBooks, 300);
});
genreFilter.addEventListener('change', filterBooks);
themeToggle.addEventListener('click', toggleTheme);

// Initialize
fetchBooks();
