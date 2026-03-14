// ===== Product Data =====
const IMG = "https://images.unsplash.com/photo-";
const products = [
  { id: 1,  name: "Premium Miniket Rice",    category: "rice",       weight: "5 kg",    price: 420,  originalPrice: 480,  badge: "sale",  green: false, image: IMG + "1586201375761-83865001e31c?w=500&q=80&fit=crop" },
  { id: 2,  name: "Red Lentil (Masoor Dal)", category: "lentils",    weight: "1 kg",    price: 130,                       badge: null,    green: false, image: IMG + "1764573464925-da17a9f796d4?w=500&q=80&fit=crop" },
  { id: 3,  name: "Organic Eggs",            category: "dairy",      weight: "12 pcs",  price: 160,                       badge: "green", green: true,  image: IMG + "1582722872445-44dc5f7e3c8f?w=500&q=80&fit=crop" },
  { id: 4,  name: "Farm Fresh Milk",         category: "dairy",      weight: "1 Liter", price: 85,                        badge: null,    green: false, image: IMG + "1550583724-b2692b85b150?w=500&q=80&fit=crop" },
  { id: 5,  name: "Fresh Hilsa Fish",        category: "fish",       weight: "1 kg",    price: 1200, originalPrice: 1400, badge: "sale",  green: false, image: IMG + "1759487610611-4e302bf60e43?w=500&q=80&fit=crop" },
  { id: 6,  name: "Organic Spinach",         category: "vegetables", weight: "500 g",   price: 35,                        badge: "green", green: true,  image: IMG + "1576045057995-568f588f82fb?w=500&q=80&fit=crop" },
  { id: 7,  name: "Ripe Mango (Himsagar)",   category: "fruits",     weight: "1 kg",    price: 220,                       badge: "new",   green: false, image: IMG + "1601493700631-2b16ec4b4716?w=500&q=80&fit=crop" },
  { id: 8,  name: "Chicken Breast",          category: "meat",       weight: "1 kg",    price: 350,                       badge: null,    green: false, image: IMG + "1604503468506-a8da13d82791?w=500&q=80&fit=crop" },
  { id: 9,  name: "Mustard Oil",             category: "oil",        weight: "1 Liter", price: 190,                       badge: null,    green: false, image: IMG + "1474979266404-7eaacbcd87c5?w=500&q=80&fit=crop" },
  { id: 10, name: "Whole Wheat Atta",        category: "flour",      weight: "2 kg",    price: 110,                       badge: null,    green: false, image: IMG + "1615227233267-193d25d405f7?w=500&q=80&fit=crop" },
  { id: 11, name: "Organic Tomatoes",        category: "vegetables", weight: "500 g",   price: 45,                        badge: "green", green: true,  image: IMG + "1546094096-0df4bcaaa337?w=500&q=80&fit=crop" },
  { id: 12, name: "Fresh Bananas",           category: "fruits",     weight: "1 dozen", price: 60,                        badge: null,    green: false, image: IMG + "1571771894821-ce9b6c11b08e?w=500&q=80&fit=crop" },
  { id: 13, name: "Eco-Friendly Soap",       category: "personal",   weight: "3 bars",  price: 150,                       badge: "green", green: true,  image: IMG + "1584305574647-0cc949a2bb9f?w=500&q=80&fit=crop" },
  { id: 14, name: "Green Tea Bags",          category: "beverages",  weight: "25 bags", price: 180,                       badge: "green", green: true,  image: IMG + "1556679343-c7306c1976bc?w=500&q=80&fit=crop" },
  { id: 15, name: "Pure Honey",              category: "organic",    weight: "500 g",   price: 450,                       badge: "new",   green: true,  image: IMG + "1558642452-9d2a7deb7f62?w=500&q=80&fit=crop" },
  { id: 16, name: "Potatoes",               category: "vegetables", weight: "2 kg",    price: 60,                        badge: null,    green: false, image: IMG + "1518977676601-b53f82aba655?w=500&q=80&fit=crop" },
  { id: 17, name: "Onion",                  category: "vegetables", weight: "1 kg",    price: 55,                        badge: null,    green: false, image: IMG + "1618512496248-a07fe83aa8cb?w=500&q=80&fit=crop" },
  { id: 18, name: "Bamboo Toothbrush",       category: "personal",   weight: "2 pcs",   price: 120,                       badge: "green", green: true,  image: IMG + "1607613009820-a29f7bb81c04?w=500&q=80&fit=crop" },
  { id: 19, name: "Fresh Yogurt (Doi)",      category: "dairy",      weight: "500 g",   price: 70,                        badge: null,    green: false, image: IMG + "1686998424326-8d9dad7aac94?w=500&q=80&fit=crop" },
  { id: 20, name: "Basmati Rice",            category: "rice",       weight: "1 kg",    price: 210,                       badge: "new",   green: false, image: IMG + "1686820740687-426a7b9b2043?w=500&q=80&fit=crop" },
  { id: 21, name: "Jute Tote Bag",           category: "handmade",   weight: "1 pc",    price: 350,                       badge: "new",   green: true,  image: IMG + "1632765265777-23112da8c89e?w=500&q=80&fit=crop" },
  { id: 22, name: "Handmade Clay Pottery",   category: "handmade",   weight: "1 set",   price: 480,  originalPrice: 550,  badge: "sale",  green: true,  image: IMG + "1668840306122-526500331070?w=500&q=80&fit=crop" },
  { id: 23, name: "Bamboo Craft Basket",     category: "handmade",   weight: "1 pc",    price: 290,                       badge: "green", green: true,  image: IMG + "1758784881676-68e4b9e26da2?w=500&q=80&fit=crop" },
  { id: 24, name: "Wicker Storage Basket",   category: "handmade",   weight: "1 pc",    price: 420,                       badge: "new",   green: true,  image: IMG + "1572796078439-ad087023b3b9?w=500&q=80&fit=crop" },
];

const categories = [
  { name: "Rice & Grains",  slug: "rice",       count: 2,  image: IMG + "1586201375761-83865001e31c?w=300&q=80&fit=crop" },
  { name: "Vegetables",     slug: "vegetables", count: 4,  image: IMG + "1540420773420-3366772f4999?w=300&q=80&fit=crop" },
  { name: "Fruits",         slug: "fruits",     count: 2,  image: IMG + "1619566636858-adf3ef46400b?w=300&q=80&fit=crop" },
  { name: "Dairy & Eggs",   slug: "dairy",      count: 3,  image: IMG + "1550583724-b2692b85b150?w=300&q=80&fit=crop" },
  { name: "Fish & Meat",    slug: "fish",       count: 1,  image: IMG + "1759487610611-4e302bf60e43?w=300&q=80&fit=crop" },
  { name: "Meat",           slug: "meat",       count: 1,  image: IMG + "1604503468506-a8da13d82791?w=300&q=80&fit=crop" },
  { name: "Lentils",        slug: "lentils",    count: 1,  image: IMG + "1764573464925-da17a9f796d4?w=300&q=80&fit=crop" },
  { name: "Oil & Spices",   slug: "oil",        count: 1,  image: IMG + "1474979266404-7eaacbcd87c5?w=300&q=80&fit=crop" },
  { name: "Organic",        slug: "organic",    count: 1,  image: IMG + "1542838132-92c53300491e?w=300&q=80&fit=crop" },
  { name: "Beverages",      slug: "beverages",  count: 1,  image: IMG + "1556679343-c7306c1976bc?w=300&q=80&fit=crop" },
  { name: "Personal Care",  slug: "personal",   count: 2,  image: IMG + "1584305574647-0cc949a2bb9f?w=300&q=80&fit=crop" },
  { name: "Flour",          slug: "flour",      count: 1,  image: IMG + "1615227233267-193d25d405f7?w=300&q=80&fit=crop" },
  { name: "Handmade",       slug: "handmade",   count: 4,  image: IMG + "1632765265777-23112da8c89e?w=300&q=80&fit=crop" },
];

// ===== Cart (localStorage) =====
function getCart() {
  return JSON.parse(localStorage.getItem("bazarnow_cart") || "[]");
}

function saveCart(cart) {
  localStorage.setItem("bazarnow_cart", JSON.stringify(cart));
  updateCartCount();
}

function addToCart(productId) {
  const product = products.find((p) => p.id === productId);
  if (!product) return;
  const cart = getCart();
  const existing = cart.find((item) => item.id === productId);
  if (existing) {
    existing.qty += 1;
  } else {
    cart.push({ id: product.id, qty: 1 });
  }
  saveCart(cart);
  showToast(`\u2713 ${product.name} added to cart`);
}

function removeFromCart(productId) {
  let cart = getCart();
  cart = cart.filter((item) => item.id !== productId);
  saveCart(cart);
}

function updateQty(productId, delta) {
  const cart = getCart();
  const item = cart.find((i) => i.id === productId);
  if (!item) return;
  item.qty += delta;
  if (item.qty <= 0) {
    removeFromCart(productId);
    return;
  }
  saveCart(cart);
}

function getCartTotal() {
  const cart = getCart();
  let subtotal = 0;
  cart.forEach((item) => {
    const product = products.find((p) => p.id === item.id);
    if (product) subtotal += product.price * item.qty;
  });
  return subtotal;
}

function getCartItemCount() {
  const cart = getCart();
  return cart.reduce((sum, item) => sum + item.qty, 0);
}

function updateCartCount() {
  const counts = document.querySelectorAll(".navbar__cart-count");
  const total = getCartItemCount();
  counts.forEach((el) => {
    el.textContent = total;
    el.style.display = total > 0 ? "flex" : "none";
  });
}

// ===== Toast =====
function showToast(message) {
  let container = document.querySelector(".toast-container");
  if (!container) {
    container = document.createElement("div");
    container.className = "toast-container";
    document.body.appendChild(container);
  }
  const toast = document.createElement("div");
  toast.className = "toast";
  toast.textContent = message;
  container.appendChild(toast);
  setTimeout(() => toast.remove(), 3000);
}

// ===== Render Product Card =====
function renderProductCard(product) {
  let badgeHTML = "";
  if (product.badge === "green") badgeHTML = `<span class="product-card__badge badge--green">\u267b Eco</span>`;
  else if (product.badge === "sale") badgeHTML = `<span class="product-card__badge badge--sale">Sale</span>`;
  else if (product.badge === "new") badgeHTML = `<span class="product-card__badge badge--new">New</span>`;

  let priceHTML = `\u09f3${product.price}`;
  if (product.originalPrice) {
    priceHTML += `<span class="original">\u09f3${product.originalPrice}</span>`;
  }

  return `
    <div class="product-card" data-category="${product.category}" data-green="${product.green}">
      <div class="product-card__image">
        ${badgeHTML}
        <img src="${product.image}" alt="${product.name}" loading="lazy">
      </div>
      <div class="product-card__body">
        <div class="product-card__category">${product.category}</div>
        <div class="product-card__name">${product.name}</div>
        <div class="product-card__weight">${product.weight}</div>
        <div class="product-card__footer">
          <div class="product-card__price">${priceHTML}</div>
          <button class="product-card__add" onclick="addToCart(${product.id})" title="Add to cart">+</button>
        </div>
      </div>
    </div>
  `;
}

// ===== Homepage: Render Featured Products =====
function renderFeaturedProducts() {
  const container = document.getElementById("featured-products");
  if (!container) return;
  const featured = products.slice(0, 8);
  container.innerHTML = featured.map(renderProductCard).join("");
}

// ===== Homepage: Render Categories =====
function renderCategories() {
  const container = document.getElementById("categories-grid");
  if (!container) return;
  container.innerHTML = categories
    .map(
      (cat) => `
    <a href="products.html?category=${cat.slug}" class="category-card">
      <div class="category-card__image">
        <img src="${cat.image}" alt="${cat.name}" loading="lazy">
      </div>
      <div class="category-card__name">${cat.name}</div>
      <div class="category-card__count">${cat.count} items</div>
    </a>
  `
    )
    .join("");
}

// ===== Homepage: Render Green Products =====
function renderGreenProducts() {
  const container = document.getElementById("green-products");
  if (!container) return;
  const greenItems = products.filter((p) => p.green).slice(0, 4);
  container.innerHTML = greenItems.map(renderProductCard).join("");
}

// ===== Homepage: Render Handmade Products =====
function renderHandmadeProducts() {
  const container = document.getElementById("handmade-products");
  if (!container) return;
  const handmadeItems = products.filter((p) => p.category === "handmade");
  container.innerHTML = handmadeItems.map(renderProductCard).join("");
}

// ===== Products Page =====
function renderAllProducts() {
  const container = document.getElementById("all-products");
  if (!container) return;

  const params = new URLSearchParams(window.location.search);
  const categoryFilter = params.get("category");

  let filtered = [...products];

  // Category from URL
  if (categoryFilter) {
    filtered = filtered.filter((p) => p.category === categoryFilter);
    // Check the corresponding filter checkbox
    const checkbox = document.querySelector(`input[value="${categoryFilter}"]`);
    if (checkbox) checkbox.checked = true;
  }

  renderFilteredProducts(filtered);
  setupFilters();
}

function renderFilteredProducts(items) {
  const container = document.getElementById("all-products");
  const countEl = document.getElementById("product-count");
  if (!container) return;

  if (items.length === 0) {
    container.innerHTML = `<div style="grid-column:1/-1;text-align:center;padding:60px 20px;">
      <div style="font-size:3rem;margin-bottom:12px;">\ud83d\udd0d</div>
      <h3>No products found</h3>
      <p style="color:var(--text-light);margin-top:8px;">Try adjusting your filters</p>
    </div>`;
  } else {
    container.innerHTML = items.map(renderProductCard).join("");
  }

  if (countEl) countEl.textContent = items.length;
}

function setupFilters() {
  const searchInput = document.getElementById("search-input");
  const sortSelect = document.getElementById("sort-select");
  const categoryCheckboxes = document.querySelectorAll('input[name="category"]');
  const greenOnlyCheckbox = document.getElementById("green-only");

  function applyFilters() {
    let filtered = [...products];

    // Search
    const query = searchInput ? searchInput.value.toLowerCase().trim() : "";
    if (query) {
      filtered = filtered.filter(
        (p) => p.name.toLowerCase().includes(query) || p.category.toLowerCase().includes(query)
      );
    }

    // Category
    const checkedCats = [...document.querySelectorAll('input[name="category"]:checked')].map((c) => c.value);
    if (checkedCats.length > 0) {
      filtered = filtered.filter((p) => checkedCats.includes(p.category));
    }

    // Green only
    if (greenOnlyCheckbox && greenOnlyCheckbox.checked) {
      filtered = filtered.filter((p) => p.green);
    }

    // Sort
    const sortVal = sortSelect ? sortSelect.value : "default";
    if (sortVal === "price-low") filtered.sort((a, b) => a.price - b.price);
    else if (sortVal === "price-high") filtered.sort((a, b) => b.price - a.price);
    else if (sortVal === "name") filtered.sort((a, b) => a.name.localeCompare(b.name));

    renderFilteredProducts(filtered);
  }

  if (searchInput) searchInput.addEventListener("input", applyFilters);
  if (sortSelect) sortSelect.addEventListener("change", applyFilters);
  categoryCheckboxes.forEach((cb) => cb.addEventListener("change", applyFilters));
  if (greenOnlyCheckbox) greenOnlyCheckbox.addEventListener("change", applyFilters);
}

// ===== Cart Page =====
function renderCart() {
  const itemsContainer = document.getElementById("cart-items");
  const summaryContainer = document.getElementById("cart-summary-content");
  const emptyCart = document.getElementById("cart-empty");
  const cartContent = document.getElementById("cart-content");

  if (!itemsContainer) return;

  const cart = getCart();

  if (cart.length === 0) {
    if (emptyCart) emptyCart.style.display = "block";
    if (cartContent) cartContent.style.display = "none";
    return;
  }

  if (emptyCart) emptyCart.style.display = "none";
  if (cartContent) cartContent.style.display = "grid";

  let itemsHTML = "";
  let subtotal = 0;

  cart.forEach((item) => {
    const product = products.find((p) => p.id === item.id);
    if (!product) return;
    const itemTotal = product.price * item.qty;
    subtotal += itemTotal;

    itemsHTML += `
      <div class="cart-item">
        <div class="cart-item__image"><img src="${product.image}" alt="${product.name}"></div>
        <div class="cart-item__info">
          <div class="cart-item__name">${product.name}</div>
          <div class="cart-item__weight">${product.weight}</div>
        </div>
        <div class="cart-item__qty">
          <button onclick="updateQty(${product.id}, -1); renderCart();">\u2212</button>
          <span>${item.qty}</span>
          <button onclick="updateQty(${product.id}, 1); renderCart();">+</button>
        </div>
        <div class="cart-item__price">\u09f3${itemTotal}</div>
        <button class="cart-item__remove" onclick="removeFromCart(${product.id}); renderCart();">\u2715</button>
      </div>
    `;
  });

  itemsContainer.innerHTML = itemsHTML;

  const delivery = subtotal >= 500 ? 0 : 50;
  const total = subtotal + delivery;

  if (summaryContainer) {
    summaryContainer.innerHTML = `
      <div class="cart-summary__row"><span>Subtotal</span><span>\u09f3${subtotal}</span></div>
      <div class="cart-summary__row"><span>Delivery</span><span>${delivery === 0 ? "Free" : "\u09f3" + delivery}</span></div>
      ${delivery === 0 ? '<div class="cart-summary__row" style="color:var(--primary);font-size:0.85rem;"><span>\u2713 Free delivery on orders over \u09f3500!</span></div>' : ""}
      <div class="cart-summary__row total"><span>Total</span><span>\u09f3${total}</span></div>
      <a href="checkout.html" class="btn btn--primary btn--full">Proceed to Checkout</a>
    `;
  }
}

// ===== Checkout Page =====
function renderCheckoutSummary() {
  const container = document.getElementById("checkout-items");
  const totalEl = document.getElementById("checkout-total");
  if (!container) return;

  const cart = getCart();
  let subtotal = 0;
  let html = "";

  cart.forEach((item) => {
    const product = products.find((p) => p.id === item.id);
    if (!product) return;
    const itemTotal = product.price * item.qty;
    subtotal += itemTotal;
    html += `
      <div class="order-summary__item">
        <div class="order-summary__item-name">
          <img src="${product.image}" alt="${product.name}" style="width:40px;height:40px;object-fit:cover;border-radius:6px;flex-shrink:0;">
          <div>
            <div style="font-weight:600;font-size:0.9rem;">${product.name}</div>
            <div class="order-summary__item-qty">Qty: ${item.qty}</div>
          </div>
        </div>
        <span style="font-weight:600;">\u09f3${itemTotal}</span>
      </div>
    `;
  });

  container.innerHTML = html;

  const delivery = subtotal >= 500 ? 0 : 50;
  const total = subtotal + delivery;

  if (totalEl) {
    totalEl.innerHTML = `
      <div class="cart-summary__row"><span>Subtotal</span><span>\u09f3${subtotal}</span></div>
      <div class="cart-summary__row"><span>Delivery</span><span>${delivery === 0 ? "Free" : "\u09f3" + delivery}</span></div>
      <div class="cart-summary__row total"><span>Total</span><span>\u09f3${total}</span></div>
    `;
  }
}

function setupPaymentMethods() {
  const methods = document.querySelectorAll(".payment-method");
  methods.forEach((method) => {
    method.addEventListener("click", () => {
      methods.forEach((m) => m.classList.remove("active"));
      method.classList.add("active");
      method.querySelector("input").checked = true;
    });
  });
}

function handleCheckout(e) {
  e.preventDefault();

  const name = document.getElementById("c-name").value.trim();
  const phone = document.getElementById("c-phone").value.trim();
  const address = document.getElementById("c-address").value.trim();

  if (!name || !phone || !address) {
    showToast("Please fill in all required fields");
    return;
  }

  const selectedPayment = document.querySelector('input[name="payment"]:checked');
  if (!selectedPayment) {
    showToast("Please select a payment method");
    return;
  }

  // Generate order ID
  const orderId = "BN" + Date.now().toString().slice(-8);

  // Show success modal
  const modal = document.getElementById("success-modal");
  const orderIdEl = document.getElementById("order-id");
  if (modal) {
    if (orderIdEl) orderIdEl.textContent = "Order #" + orderId;
    modal.classList.add("active");
  }

  // Clear cart
  localStorage.removeItem("bazarnow_cart");
  updateCartCount();
}

function closeModal() {
  const modal = document.getElementById("success-modal");
  if (modal) modal.classList.remove("active");
  window.location.href = "index.html";
}

// ===== Contact Form =====
function handleContact(e) {
  e.preventDefault();
  showToast("\u2713 Message sent successfully! We'll get back to you soon.");
  e.target.reset();
}

// ===== Mobile Nav =====
function toggleNav() {
  const links = document.querySelector(".navbar__links");
  if (links) links.classList.toggle("open");
}

// ===== Init =====
document.addEventListener("DOMContentLoaded", () => {
  updateCartCount();
  renderFeaturedProducts();
  renderCategories();
  renderGreenProducts();
  renderHandmadeProducts();
  renderAllProducts();
  renderCart();
  renderCheckoutSummary();
  setupPaymentMethods();

  // Checkout form
  const checkoutForm = document.getElementById("checkout-form");
  if (checkoutForm) checkoutForm.addEventListener("submit", handleCheckout);

  // Contact form
  const contactForm = document.getElementById("contact-form");
  if (contactForm) contactForm.addEventListener("submit", handleContact);

  // Scroll-triggered fade-in animations
  const fadeElements = document.querySelectorAll(".fade-in");
  if (fadeElements.length > 0 && "IntersectionObserver" in window) {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("visible");
            observer.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.1, rootMargin: "0px 0px -40px 0px" }
    );
    fadeElements.forEach((el) => observer.observe(el));
  }
});
