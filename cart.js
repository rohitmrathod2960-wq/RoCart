
let cart = [];
const DISCOUNT_THRESHOLD = 100000; // ₹100000
// const OFFER_PRODUCT_ID = 3;
const DISCOUNT_ELIGIBLE_PRICE = 100000; // ₹1,00,000+
const DISCOUNT_RATE = 0.30;       // 30%


// AUTH HELPER
function isLoggedIn() {
  return localStorage.getItem("isLoggedIn") === "true";
}

function loadCart() {
  if (isLoggedIn()) {
    const savedCart = localStorage.getItem("cart");
    cart = savedCart ? JSON.parse(savedCart) : [];
  } else {
    cart = [];
    localStorage.removeItem("cart");
  }
}

function saveCart() {
  if (isLoggedIn()) {
    localStorage.setItem("cart", JSON.stringify(cart));
  }
}


// DOM ELEMENTS 
document.addEventListener("DOMContentLoaded", () => {

  let orderAlertShown = false; 

const cartDrawer = document.getElementById("cartDrawer");
const cartOverlay = document.getElementById("cartOverlay");
const cartItemsEl = document.getElementById("cartItems");
const cartTotalEl = document.getElementById("cartTotal");
const cartCountEl = document.getElementById("cartCount");
const openCartBtn = document.getElementById("openCart");
const closeCartBtn = document.getElementById("closeCart");
const placeOrderBtn = document.getElementById("placeOrderBtn"); 


loadCart();
updateCart();

 
  
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

  // ADD TO CART 
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

  // ADD ITEM
function addToCart(id) {
  //  LOGIN CHECK
  if (!isLoggedIn()) {
    alert("Please login to add items to cart");
    document.getElementById("loginBtn")?.click(); 
    return; 
  }

  const product = products.find(p => p.id == id);
  if (!product) return;

  // for perticular discount
//   const product = products.find(p => p.id === Number(id));
//   if (!product) {
//   console.error("Product not found for id:", id);
//   return;
// }


  const item = cart.find(i => i.id == id);

  if (item) {
    item.qty++;
  } else {
    cart.push({ ...product, qty: 1 });
  }

  updateCart();
}



 function updateCart() {
  cartItemsEl.innerHTML = "";

  let subtotal = 0;

  let count = 0;

  if (cart.length === 0) {
    cartItemsEl.innerHTML =
      `<p style="text-align:center;color:#6b7280;">Your cart is empty</p>`;
  }

  cart.forEach(item => {
   subtotal += item.price * item.qty;
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

let discount = 0;

// apply discount ONLY on eligible items
cart.forEach(item => {
  if (item.price >= DISCOUNT_ELIGIBLE_PRICE) {
    discount += item.price * item.qty * DISCOUNT_RATE;
  }
});

const finalTotal = subtotal - discount;


    //  CART TOTAL DISPLAY
 
  cartTotalEl.innerHTML = `
    <div>Subtotal: ₹${subtotal.toLocaleString()}</div>
    ${
      discount > 0
        ? `<div style="color:#16a34a;font-weight:600;">
            New Year Discount (30%): −₹${discount.toLocaleString()}
           </div>`
        : ""
    }
    <div style="font-weight:800;margin-top:6px;">
      Total: ₹${finalTotal.toLocaleString()}
    </div>
  `;

  cartCountEl.textContent = count;


  saveCart();
  // for perticular products
// let discount = 0;
// ONLY product id = 3 gets 30% off
// cart.forEach(item => {
//   if (item.id === 3) {
//     discount += item.price * item.qty * 0.30;
//   }
// });
// const finalTotal = subtotal - discount;
// cartTotalEl.innerHTML = `
//   <div>Subtotal: ₹${subtotal.toLocaleString()}</div>
//   ${
//     discount > 0
//       ? `<div style="color:#16a34a;font-weight:600;">
//            30% OFF on Rolex Red Face: −₹${discount.toLocaleString()}
//          </div>`
//       : ""
//   }
//   <div style="font-weight:800;margin-top:6px;">
//     Total: ₹${finalTotal.toLocaleString()}
//   </div>
// `;
// cartCountEl.textContent = count;
// saveCart();
  updatePlaceOrderButton();

  // reset alert lock whenever cart changes
  orderAlertShown = false;
}


  // REMOVE ITEM
  document.addEventListener("click", e => {
    if (e.target.classList.contains("rc-cart-remove")) {
      const id = e.target.dataset.id;
      removeItem(id);
    }
  });

function removeItem(id) {
  cart = cart.filter(item => item.id != id);
  updateCart(); // already saves
}

//  CLEAR CART ON LOGOUT 
window.addEventListener("user-logged-out", () => {
  cart = [];
  updateCart();

  
  cartDrawer.classList.remove("active");
  cartOverlay.classList.remove("active");
  document.body.style.overflow = "";
});
 
function updatePlaceOrderButton() {
  if (!placeOrderBtn) return;

  if (cart.length === 0) {
    placeOrderBtn.disabled = true;
    placeOrderBtn.textContent = "Place Order";
    placeOrderBtn.style.opacity = "0.6";
  } else {
    placeOrderBtn.disabled = false;
    placeOrderBtn.textContent = "Place Order";
    placeOrderBtn.style.opacity = "1";
  }
}

if (placeOrderBtn) {

  
//for perticular products


// placeOrderBtn.addEventListener("click", e => {
//   e.preventDefault();

//   if (cart.length === 0) {
//     alert("Your cart is empty");
//     return;
//   }

//   let subtotal = 0;
//   let discount = 0;

//   cart.forEach(item => {
//     subtotal += item.price * item.qty;
//     if (item.id === 3) {
//       discount += item.price * item.qty * 0.30;
//     }
//   });

//   const finalTotal = subtotal - discount;

//   alert(`Order placed!\nTotal: ₹${finalTotal.toLocaleString()}`);

  placeOrderBtn.addEventListener("click", (e) => {

    e.preventDefault();
    e.stopImmediatePropagation();
     e.stopPropagation();

    // if (cart.length === 0) {
    //   alert("Your cart is empty. Please add items before placing an order.");
    //   return;
    // }

    const orderId = "ORD-" + Date.now();

    //  const subtotal = cart.reduce((sum, item) => sum + item.price * item.qty, 0);
    //   const discount = subtotal > DISCOUNT_THRESHOLD ? subtotal * DISCOUNT_RATE : 0;

    //   total: subtotal - discount


     let subtotal = 0;
    let discount = 0;

    cart.forEach(item => {
      subtotal += item.price * item.qty;

      if (item.price >= DISCOUNT_ELIGIBLE_PRICE) {
        discount += item.price * item.qty * DISCOUNT_RATE;
      }
    });

    const finalTotal = subtotal - discount;




    const orderData = {
      orderId,
      date: new Date().toLocaleString(),
      items: cart.map(item => ({
        name: item.title,
        price: item.price,
        qty: item.qty
      })),
      total: finalTotal
    };

   
    const orders = JSON.parse(localStorage.getItem("orders")) || [];
    orders.push(orderData);
    localStorage.setItem("orders", JSON.stringify(orders));
     localStorage.setItem("lastOrder", JSON.stringify(orderData));

    alert(
      "Order Placed Successfully!\n\nOrder ID: " + orderId
    );

    //  CLEAR CART
    cart = [];
    localStorage.removeItem("cart");
    updateCart();

  });
}

});


