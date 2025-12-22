// ===============================
// CART STATE
// ===============================
let cart = [];

// ===============================
// DOM ELEMENTS (SAFE LOAD)
// ===============================
document.addEventListener("DOMContentLoaded", () => {
  const cartDrawer = document.getElementById("cartDrawer");
  const cartOverlay = document.getElementById("cartOverlay");
  const cartItemsEl = document.getElementById("cartItems");
  const cartTotalEl = document.getElementById("cartTotal");
  const cartCountEl = document.getElementById("cartCount");
  const openCartBtn = document.getElementById("openCart");
  const closeCartBtn = document.getElementById("closeCart");

  // ===============================
  // OPEN / CLOSE CART
  // ===============================
  if (openCartBtn) {
    openCartBtn.addEventListener("click", () => {
      cartDrawer.classList.add("active");
      cartOverlay.classList.add("active");
      document.body.style.overflow = "hidden";
    });
  }

  if (closeCartBtn) {
    closeCartBtn.addEventListener("click", closeCart);
  }

  if (cartOverlay) {
    cartOverlay.addEventListener("click", closeCart);
  }

  function closeCart() {
    cartDrawer.classList.remove("active");
    cartOverlay.classList.remove("active");
    document.body.style.overflow = "";
  }

  // ===============================
  // ADD TO CART (EVENT DELEGATION)
  // ===============================
  document.addEventListener("click", e => {
 if (e.target.classList.contains("rc-cart-plus")) {
  const btn = e.target;
  const id = btn.dataset.id;

  addToCart(id);

  // Professional feedback
  btn.classList.add("added");
  btn.innerHTML = "✓ Added";

  setTimeout(() => {
    btn.classList.remove("added");
    btn.innerHTML = "🛒 Add to Cart";
  }, 1200);
}



  });

  // ===============================
  // ADD ITEM
  // ===============================
  function addToCart(id) {
    const product = products.find(p => p.id == id);
    if (!product) return;

    const item = cart.find(i => i.id == id);

    if (item) {
      item.qty++;
    } else {
      cart.push({ ...product, qty: 1 });
    }

    updateCart();
  }

  // ===============================
  // UPDATE CART UI
  // ===============================
  function updateCart() {
    cartItemsEl.innerHTML = "";

    let total = 0;
    let count = 0;

    if (cart.length === 0) {
      cartItemsEl.innerHTML = `<p style="text-align:center;color:#6b7280;">Your cart is empty</p>`;
    }

    cart.forEach(item => {
      total += item.price * item.qty;
      count += item.qty;

      cartItemsEl.innerHTML += `
        <div class="rc-cart-item">
          <img src="${item.img}" alt="${item.title}">
          <div>
            <h4>${item.title}</h4>
            <p>${item.qty} × ₹${item.price.toLocaleString()}</p>
            <button class="rc-cart-remove" data-id="${item.id}">
              Remove
            </button>
          </div>
        </div>
      `;
    });

    cartTotalEl.textContent = "₹" + total.toLocaleString();
    cartCountEl.textContent = count;
  }

  // ===============================
  // REMOVE ITEM
  // ===============================
  document.addEventListener("click", e => {
    if (e.target.classList.contains("rc-cart-remove")) {
      const id = e.target.dataset.id;
      removeItem(id);
    }
  });

  function removeItem(id) {
    cart = cart.filter(item => item.id != id);
    updateCart();
  }
});
