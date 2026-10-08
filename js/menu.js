// Diwan Coffee — menu data. Like-only, no cart. Fixed prices.

const menuItems = [
  // Breakfast
  { id: 'pancake', name: 'Pancake', category: 'breakfast', description: 'ፓን ኬክ', image: 'gallery/pancake.jpg', price: 60, showOnHome: true },
  { id: 'scrambled-eggs', name: 'Scrambled Eggs', category: 'breakfast', description: 'እንቁላል ፍርፍር', image: 'gallery/scrambled_eggs.jpg', price: 80 },
  

  // Lunch
  { id: 'normal-injera-firfir', name: 'Normal Injera Firfir', category: 'lunch', description: 'ኖርማል እንጀራ ፍርፍር', image: 'gallery/normal_injera_firfir.jpg', price: 120 },
  { id: 'pasta-with-vegetables', name: 'Pasta with Vegetables', category: 'lunch', description: 'ፓስታ በእትክልት', image: 'gallery/pasta_with_vegetables.jpg', price: 140 },
  { id: 'pasta-with-tomato-sauce', name: 'Pasta with Tomato Sauce', category: 'lunch', description: 'ፓስታ በስጎ', image: 'gallery/pasta_with_tomato_sauce.jpg', price: 130, showOnHome: true },

  // Burger
  { id: 'special-burger', name: 'Special Burger', category: 'burger', description: 'ስፔሻል በርገር', image: 'gallery/special-burger.jpg', price: 180, showOnHome: true },
  { id: 'normal-burger', name: 'Normal Burger', category: 'burger', description: 'ኖርማል በርገር', image: 'gallery/normal_burger.jpg', price: 150 },
  { id: 'cheeseburger', name: 'Cheeseburger', category: 'burger', description: 'ቺዝ በርገር', image: 'gallery/cheeseburger.jpg', price: 170 },
  { id: 'double-burger', name: 'Double Burger', category: 'burger', description: 'ደብል በርገር', image: 'gallery/doubleburger.jpg', price: 220 },
  { id: 'tuna-burger', name: 'Tuna Burger', category: 'burger', description: 'ቱና በርገር', image: 'gallery/tuna_burger.jpg', price: 190 },

  // Pizza
  { id: 'special-pizza', name: 'Special Pizza', category: 'pizza', description: 'ስፔሻል ፒዛ', image: 'gallery/special_pizza.jpg', price: 250, showOnHome: true },
  { id: 'vegetable-pizza', name: 'vegetable Pizza', category: 'pizza', description: 'የአትክልት ፒዛ ከ ቱና ጋር', image: 'gallery/vegetable_pizza_with_tuna.jpg', price: 250, showOnHome: true },

  // Desserts
  { id: 'dubi-checolatelokma', name: 'Dubai Chocolate Lokma', category: 'desserts', description: '', image: 'gallery/dubai_checolate_lokma.jpg', price: 180 , showOnHome: true },
  { id: 'half-club-sandwich', name: 'Half Club Sandwich', category: 'desserts', description: 'ግማሽ ክለብ ሳንድዊች', image: 'gallery/half_club_sandwich.jpg', price: 150 },
  { id: 'french-fries', name: 'French Fries', category: 'desserts', description: 'ችብስ', image: 'gallery/french_fries.jpg', price: 90 },
  { id: 'ice-cream', name: 'Ice Cream', category: 'desserts', description: 'ኣይስክሬም', image: 'gallery/icecream.jpg', price: 80}, 
  { id: 'checolate-sabusa', name: 'Checolate Sabusa', category: 'desserts', description: 'ቸኮልት ሳቡሳ', image: 'gallery/checolate_sabusa.jpg', price: 80, showOnHome: true }, 

  // Juice
  { id: 'strawberry-juice', name: 'Strawberry Juice', category: 'juice', description: 'ስትሮበሪ ጁስ', image: 'gallery/strawberry_juice.jpg', price: 100 },
  { id: 'strawberry-shake', name: 'Strawberry Shake', category: 'juice', description: 'ስትሮበሪ ሼክ', image: 'gallery/strawberry_shake.jpg', price: 120 },
  { id: 'strawberry-with-dates-milk', name: 'Strawberry with Dates & Milk', category: 'juice', description: 'ስትሮበሪ በተምር በወተት', image: 'gallery/strawberry_with_dates_milk.jpg', price: 140 },
  { id: 'avocado-juice', name: 'Avocado Juice', category: 'juice', description: 'አቮካዶ ጁስ', image: 'gallery/avocado_juice.jpg', price: 110 },
  { id: 'mango-juice', name: 'Mango Juice', category: 'juice', description: 'ማንጎ', image: 'gallery/mango_juice.jpg', price: 110 },

  // Hot drinks
  { id: 'tea', name: 'Tea', category: 'hot drinks', description: 'ሻይ', image: 'gallery/tea.jpg', price: 30 },
  { id: 'coffee', name: 'Coffee', category: 'hot drinks', description: 'ቡና', image: 'gallery/coffee.jpg', price: 40, showOnHome: true },
  { id: 'milk', name: 'Milk', category: 'hot drinks', description: 'ወተት', image: 'gallery/milk.jpg', price: 50 },
  { id: 'macchiato', name: 'Macchiato', category: 'hot drinks', description: 'ማኪያቶ', image: 'gallery/macchiato.jpg', price: 45, showOnHome: true },
 
  // Cold drinks
  { id: 'sprite', name: 'Sprite', category: 'cold drinks', description: 'ስፕራይት', image: 'gallery/sprite.jpg', price: 40 },
  { id: 'coca-cola', name: 'Coca-Cola', category: 'cold drinks', description: 'ኮካ-ኮላ', image: 'gallery/coca_cola.jpg', price: 40 },
  { id: 'fanta', name: 'Fanta', category: 'cold drinks', description: 'ፋንታ', image: 'gallery/fanta.jpg', price: 40 },
  { id: 'mirinda', name: 'Mirinda', category: 'cold drinks', description: 'ሚሪንዳ', image: 'gallery/mirinda.jpg', price: 40 },
  { id: 'pepsi', name: 'Pepsi', category: 'cold drinks', description: 'ፔፕሲ', image: 'gallery/pepsi.jpg', price: 40 },
  { id: 'water-1l', name: 'Water 1L', category: 'cold drinks', description: 'ውሀ 1 ሊትር', image: 'gallery/water_1l.jpg', price: 30 }
];

const galleryImages = [
  'img/img1.jpg',

 'img/img2.jpg',
 'img/img3.jpg',
 'img/img4.jpg',
 'img/img1.jpg',
];

function productCard(item) {
  const isLiked = typeof window.isLiked === 'function' && window.isLiked(item.id);

  return `<article class="product-card" data-id="${item.id}">
    <button class="product-favorite ${isLiked ? 'active' : ''}" type="button" aria-label="Like item" onclick="window.toggleLike('${item.id}')">
      <i data-lucide="heart"></i>
    </button>
    <img src="${item.image}" alt="${item.name}" loading="lazy" onerror="this.src='img/logo.jpg'">
    <div class="product-info">
      <div class="product-top">
        <small>${item.category.toUpperCase()}</small>
      </div>
      <h3>${item.name}</h3>
      <p class="product-desc">${item.description || ''}</p>
      <div class="product-bottom">
        <span class="price">${item.price} ETB</span>
      </div>
    </div>
  </article>`;
}

function renderMenu(filter = 'all', search = '') {
  const isHomePage = !!document.querySelector('#featured-products');
  const root = document.querySelector('#menu-products') || document.querySelector('#featured-products');

  if (!root) return;

  root.innerHTML = menuItems
    .filter(item => {
      if (isHomePage && item.showOnHome !== true) return false;
      const matchesCategory = (filter === 'all' || item.category.toLowerCase() === filter.toLowerCase());
      const searchLower = search.toLowerCase();
      const matchesSearch = item.name.toLowerCase().includes(searchLower) ||
                            (item.description && item.description.toLowerCase().includes(searchLower));
      return matchesCategory && matchesSearch;
    })
    .map(productCard)
    .join('') || '<p class="empty-msg">No matching items found.</p>';

  if (window.lucide) lucide.createIcons();
}

function renderGallery() {
  const root = document.querySelector('#gallery-grid');
  if (!root) return;

  root.innerHTML = galleryImages
    .map((src, i) => `<button class="gallery-item ${i === 0 ? 'tall' : ''}" data-lightbox="${src}" aria-label="Open gallery image ${i + 1}"><img src="${src}" alt="Diwan Coffee gallery photo ${i + 1}" onerror="this.src='img/logo.jpg'"></button>`)
    .join('');
}

document.addEventListener('DOMContentLoaded', () => {
  renderMenu();
  renderGallery();

  const filterContainer = document.querySelector('#filter-buttons');
  filterContainer?.querySelectorAll('button').forEach(b => b.addEventListener('click', () => {
    filterContainer.querySelectorAll('button').forEach(x => x.classList.remove('active'));
    b.classList.add('active');
    renderMenu(b.dataset.filter, document.querySelector('#menu-search')?.value || '');
  }));

  document.querySelector('#menu-search')?.addEventListener('input', e => renderMenu(
    filterContainer?.querySelector('.active')?.dataset.filter || 'all',
    e.target.value
  ));
});