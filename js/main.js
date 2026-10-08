// Diwan Coffee — main JS. Likes only (no cart).

let likes = [];

function saveLikes() {
  localStorage.setItem('diwan_likes', JSON.stringify(likes));
}

function loadLikes() {
  const stored = localStorage.getItem('diwan_likes');
  if (stored) {
    try { likes = JSON.parse(stored); } catch (e) { likes = []; }
  }
}

window.isLiked = function (id) {
  return likes.includes(id);
};

window.toggleLike = function (id) {
  const index = likes.indexOf(id);
  if (index > -1) likes.splice(index, 1);
  else likes.push(id);
  saveLikes();
  updateLikesUI();
  if (typeof renderMenu === 'function') renderMenu(
    document.querySelector('#filter-buttons .active')?.dataset.filter || 'all',
    document.querySelector('#menu-search')?.value || ''
  );
  renderFavoritesDrawer();
};

function updateLikesUI() {
  const countEl = document.querySelector('#favorites-count');
  if (countEl) countEl.textContent = likes.length;

  const mobileCount = document.querySelector('#mobile-fav-count');
  if (mobileCount) {
    mobileCount.textContent = likes.length;
    mobileCount.style.display = likes.length > 0 ? 'grid' : 'none';
  }
}

function renderFavoritesDrawer() {
  const favItemsEl = document.querySelector('#favorites-items');
  if (!favItemsEl) return;

  if (likes.length === 0) {
    favItemsEl.innerHTML = `
      <div class="empty-state">
        <div class="empty-state-icon"><i data-lucide="heart"></i></div>
        <h3>No likes yet</h3>
        <p>Tap the heart on menu items to save them here.</p>
      </div>`;
    if (window.lucide) lucide.createIcons();
    return;
  }

  const favProducts = menuItems.filter(m => likes.includes(m.id));

  favItemsEl.innerHTML = favProducts.map(item => `
    <div class="favorite-item">
      <div class="favorite-item-image">
        <img src="${item.image}" alt="${item.name}" onerror="this.src='img/logo.jpg'">
      </div>
      <div class="favorite-item-info">
        <h3>${item.name}</h3>
        <p class="favorite-item-price">${item.price} ETB</p>
      </div>
      <button class="remove-favorite" type="button" onclick="window.toggleLike('${item.id}')" aria-label="Remove like">
        <i data-lucide="trash-2"></i>
      </button>
    </div>
  `).join('');

  if (window.lucide) lucide.createIcons();
}

function openFavorites() {
  document.querySelector('#favorites-drawer')?.classList.add('open');
  document.querySelector('#favorites-overlay')?.classList.add('open');
}

function closeFavorites() {
  document.querySelector('#favorites-drawer')?.classList.remove('open');
  document.querySelector('#favorites-overlay')?.classList.remove('open');
}

document.addEventListener('DOMContentLoaded', () => {
  loadLikes();

  if (window.lucide) lucide.createIcons();

  const year = document.querySelector('#year');
  if (year) year.textContent = new Date().getFullYear();

  // Lightbox
  const lightbox = document.querySelector('#lightbox');
  const image = document.querySelector('#lightbox-image');
  function closeLightbox() {
    if (!lightbox) return;
    lightbox.classList.remove('open');
    lightbox.setAttribute('aria-hidden', 'true');
    image?.removeAttribute('src');
  }
  document.querySelectorAll('[data-lightbox]').forEach(item => item.addEventListener('click', () => {
    if (image) {
      image.src = item.dataset.lightbox;
      image.alt = item.querySelector('img')?.alt || 'Gallery image';
    }
    lightbox?.classList.add('open');
    lightbox?.setAttribute('aria-hidden', 'false');
  }));
  document.querySelector('.lightbox-close')?.addEventListener('click', closeLightbox);
  lightbox?.addEventListener('click', e => { if (e.target === lightbox) closeLightbox(); });
  /* =========================
   Reviews Carousel (3 per page, 2 pages)
   ========================= */
function initReviewsCarousel() {
  const carousel = document.querySelector('#reviews-carousel');
  const prevBtn = document.querySelector('#reviews-prev');
  const nextBtn = document.querySelector('#reviews-next');
  const dots = document.querySelectorAll('.reviews-dot');
  const cards = document.querySelectorAll('.review-card');

  if (!carousel || !cards.length) return;

  const PER_PAGE = 3;
  const totalPages = Math.ceil(cards.length / PER_PAGE);
  let currentPage = 0;

  function renderPage(page) {
    // Fade out
    carousel.classList.add('is-fading');

    setTimeout(() => {
      cards.forEach((card, i) => {
        const start = page * PER_PAGE;
        const end = start + PER_PAGE;
        const visible = i >= start && i < end;
        card.style.display = visible ? 'flex' : 'none';
        card.setAttribute('aria-hidden', visible ? 'false' : 'true');
      });

      // Update dots
      dots.forEach((dot, i) => {
        dot.classList.toggle('active', i === page);
      });

      // Update nav buttons
      if (prevBtn) prevBtn.disabled = page === 0;
      if (nextBtn) nextBtn.disabled = page === totalPages - 1;

      // Fade in
      carousel.classList.remove('is-fading');
    }, 200);
  }

  // Nav buttons
  prevBtn?.addEventListener('click', () => {
    if (currentPage > 0) {
      currentPage--;
      renderPage(currentPage);
    }
  });

  nextBtn?.addEventListener('click', () => {
    if (currentPage < totalPages - 1) {
      currentPage++;
      renderPage(currentPage);
    }
  });

  // Dots
  dots.forEach((dot, i) => {
    dot.addEventListener('click', () => {
      currentPage = i;
      renderPage(currentPage);
    });
  });

  // Keyboard arrows (bonus)
  document.addEventListener('keydown', (e) => {
    const reviewsInView = document.querySelector('#reviews');
    if (!reviewsInView) return;

    const rect = reviewsInView.getBoundingClientRect();
    const isVisible = rect.top < window.innerHeight && rect.bottom > 0;
    if (!isVisible) return;

    if (e.key === 'ArrowLeft') prevBtn?.click();
    if (e.key === 'ArrowRight') nextBtn?.click();
  });

  // Initial render
  renderPage(0);
}

// Initialize after DOM ready
if (document.readyState === 'loading') {
  document.addEventListener('DOMContentLoaded', initReviewsCarousel);
} else {
  initReviewsCarousel();
}

  // Favorites
  document.querySelector('#favorites-btn')?.addEventListener('click', openFavorites);
  document.querySelector('#mobile-favorites-btn')?.addEventListener('click', openFavorites);
  document.querySelector('#favorites-close-btn')?.addEventListener('click', closeFavorites);
  document.querySelector('#favorites-overlay')?.addEventListener('click', closeFavorites);

  document.addEventListener('keydown', e => {
    if (e.key === 'Escape') {
      closeLightbox();
      closeFavorites();
    }
  });

  updateLikesUI();
  renderFavoritesDrawer();
});