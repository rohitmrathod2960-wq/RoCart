// ===============================
// Product Data (with real images)
// ===============================
const products = [
  {
    id: 1,
    brand: "Rolex",
    title: "Rolex Submariner Date Automatic, 40 mm",
    rating: 4.8,
    ratingCount: 132,
    price: 980000,
    oldPrice: 1200000,
    tag: "Top Deal",
    category: "rolex",
    img: "https://a.1stdibscdn.com/rolex-submariner-16613-in-stainless-steel-with-a-black-dial-40mm-automatic-watch-for-sale/32076752/j_212529321701946368089/j_21252932_1_master.jpg?disable=upscale&auto=webp&quality=60&width=960"
  },
  {
    id: 2,
    brand: "Rolex",
    title: "Rolex DeepSea",
    rating: 4.8,
    ratingCount: 18,
    price: 1250000,
    oldPrice: 1500000,
    tag: "Top Deal",
    category: "rolex",
    img: "https://media.rolex.com/image/upload/q_60/f_webp/c_limit,w_960/v1712065100/rolexcom/collection/family-pages/professional-watches/rolex-deepsea/navigation/professional-watches-rolex-deepsea-landing-navigation-m136660-0005-2403bh-0002.jpg"
  },      
  {
    id: 3,
    brand: "Rolex",
    title: "Rolex Red Face",
    rating: 4.8,
    ratingCount: 118,
    price: 780000,
    oldPrice: 950000,
    tag: "Top Deal",
    category: "rolex",
    img: "https://a.1stdibscdn.com/rolex-datejust-31mm-pave-72ct-iced-diamond-red-mop-watch-178240-for-sale-picture-2/j_33612/j_190003921681397971312/Datejust_31_Red_MOP_Dial_Iced_Out_Diamond_Watch_178240_1_master.jpg?disable=upscale&auto=webp&quality=60&width=960"
  },
  {
    id: 4,
    brand: "Rolex",
    title: "Rolex GMT-Master II, 40 mm",
    rating: 4.8,
    ratingCount: 118,
    price: 1150000,
    oldPrice: 1350000,
    tag: "Top Deal",
    category: "rolex",
    img: "https://d2j6dbq0eux0bg.cloudfront.net/images/38270005/3711505155.jpg?format=webp&quality=60&width=960"
  },
  {
    id: 5,
    brand: "Jacob & Co",
    title: "Jacob Astronomia Solar Skeleton dial, tourbillon",
    rating: 4.7,
    ratingCount: 21,
    price: 32000000,
    oldPrice: 36000000,
    tag: "Luxury",
    category: "jacob",
    img: "https://www.datocms-assets.com/99008/1715804946-5.webp"
  },
  {
    id: 6,
    brand: "Jacob & Co",
    title: "Jacob Tim Brady",
    rating: 4.7,
    ratingCount: 21,
    price: 28000000,
    oldPrice: 32000000,
    tag: "Luxury",
    category: "jacob",
    img: "https://desejoluxo.com.br/wp-content/uploads/2025/02/sala-16-768x432.jpg?auto=webp&quality=60&width=960"
  },
  {
    id: 7,
    brand: "Jacob & Co",
    title: "Co. USD Yellow Diamond",
    rating: 4.7,
    ratingCount: 21,
    price: 45000000,
    oldPrice: 52000000,
    tag: "Luxury",
    category: "jacob",
    img: "https://images.lifestyleasia.com/wp-content/uploads/sites/2/2023/03/30111142/jacob-co-20-million-usd-billionaire-timeless-treasure-yellow-diamond-watch-00.jpg?auto=webp&quality=60&width=960"
  },
  {
    id: 8,
    brand: "Jacob & Co",
    title: "acob & Co. Bugatti Chiron Tourbillon Titanium",
    rating: 4.7,
    ratingCount: 21,
    price: 38000000,
    oldPrice: 43000000,
    tag: "Luxury",
    category: "jacob",
    img: "https://www.watchonista.com/sites/default/files/watchographer/1/watches/489414/pictures/jacobandcocom_352559100.jpg?auto=webp&quality=60&width=960"
  },
  
  {
    id: 9,
    brand: "Omega",
    title: "Omega Seamaster Diver 300M Co-Axial Master Chronometer",
    rating: 4.6,
    ratingCount: 89,
    price: 420000,
    oldPrice: 460000,
    tag: "Analog",
    category: "analog",
    img: "https://d2j6dbq0eux0bg.cloudfront.net/images/38270005/3829625217.jpg"
  },
  {
    id: 10,
    brand: "Omega",
    title: "Rare Blue Moon with Omega",
    rating: 4.6,
    ratingCount: 89,
    price: 520000,
    oldPrice: 580000,
    tag: "Analog",
    category: "analog",
    img: "https://www.yankodesign.com/images/design_news/2024/07/celebrate-the-rare-blue-moon-with-omega-x-swatch-limited-edition-watch/MISSION-TO-THE-SUPER-BLUE-MOONPHASE-case.jpg?auto=webp&quality=60&width=960"
  },
  {
    id: 11,
    brand: "Omega",
    title: "Omega SpeedMaster MoonPhase",
    rating: 4.6,
    ratingCount: 89,
    price: 780000,
    oldPrice: 860000,
    tag: "Analog",
    category: "analog",
    img: "https://www.gearpatrol.com/wp-content/uploads/sites/2/2022/02/1621812856-moonphase-watches-omega-speedmaster-moonwatch-1621812834-jpg.webp?quality=60&width=960"
  },
  {
    id: 12,
    brand: "Omega",
    title: "Omega Seamaster Professional 300M Quartz Black Steel Divers Watch",
    rating: 4.6,
    ratingCount: 89,
    price: 420000,
    oldPrice: 460000,
    tag: "Analog",
    category: "analog",
    img: "https://tse4.mm.bing.net/th/id/OIP.LRqrPd_dHqiHptffthBa3AHaHa?cb=ucfimg2&ucfimg=1&rs=1&pid=ImgDetMain&o=7&rm=3&width=960&quality=60"
  },
  {
    id: 13,
    brand: "Fossil",
    title: "Fossil Watch for Men Decker, Quartz Chronograph Movement, 44 mm Silver",
    rating: 4.2,
    ratingCount: 512,
    price: 21995,
    oldPrice: 29995,
    tag: "Smart",
    category: "smart",
    img: "https://watches.ae/cdn/shop/products/fossil-ch2885_1.jpg?v=1665412979&width=960&format=webp&quality=60"
  },
  {
    id: 14,
    brand: "Fossil",
    title: "Fossil Chronograph Dean Brown Leather Strap Watch 45mm Fs4788",
    rating: 4.2,
    ratingCount: 512,
    price: 23995,
    oldPrice: 31995,
    tag: "Smart",
    category: "smart",
    img: "https://fossil.scene7.com/is/image/FossilPartners/FS4788_main?wid=960&fmt=webp&qlt=60"
  },
  {
    id: 15,
    brand: "Fossil",
    title: "Fossil Nate Chronograph Black Stainless Steel Watch",
    rating: 4.2,
    ratingCount: 512,
    price: 24995,
    oldPrice: 32995,
    tag: "Smart",
    category: "smart",
    img: "https://i5.walmartimages.com/asr/50ee67c1-2af6-4b48-b06b-7ce8a411705e_1.36b676c1598e8ff0ac99a4449c99d339.jpeg?odnWidth=960&odnHeight=960"
  },
  {
    id: 16,
    brand: "Fossil",
    title: "Fossil Machine Stainless Steel Smoke Chronograph Watch",
    rating: 4.2,
    ratingCount: 512,
    price: 25995,
    oldPrice: 33995,
    tag: "Smart",
    category: "smart",
    img: "https://qvc.scene7.com/is/image/QVC/j/03/j438703.001?wid=960&fmt=webp&qlt=60"
  }
];


// ===============================
// Format INR
// ===============================
function formatINR(n) {
  return "₹" + n.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
}

// ===============================
// Product Card Generator
// ===============================
function createCard(p) {
  const el = document.createElement("div");
  el.className = "product-card";

  el.innerHTML = `
    <div class="product-image">
      <img src="${p.img}" alt="${p.title}">
    </div>

    <div class="product-brand">${p.brand}</div>
    <div class="product-title">${p.title}</div>

    <div class="rating-row">
      <div class="rating-badge">${p.rating} ★</div>
      <div>${p.ratingCount} ratings</div>
    </div>

    <div class="price-row">
      <div class="price-current">₹${p.price.toLocaleString()}</div>
      <div class="price-old">₹${p.oldPrice.toLocaleString()}</div>
    </div>

    <!-- ✅ CART + BUTTON -->
    <div class="rc-product-actions">
      <button class="rc-cart-plus" data-id="${p.id}">
  🛒 Add to Cart
</button>
    </div>
  `;

  return el;
}


// ===============================
// Render Product Grid
// ===============================
function renderGrid(list) {
  const grid = document.getElementById("top-deals-grid");
  grid.innerHTML = "";
  list.forEach(p => grid.appendChild(createCard(p)));
}

// ===============================
// Render Brand Showcase Cards
// ===============================
function renderBrands(list) {
  const grid = document.getElementById("brand-grid");
  grid.innerHTML = "";

  const brandLogos = {
    "Rolex": "https://th.bing.com/th/id/ODF.6spG8IV4ICAwPmy1o3Hixg?w=32&h=32&qlt=90&pcl=fffffc&r=0&o=6&cb=ucfimg1&pid=1.2&ucfimg=1",
    "Jacob & Co": "https://th.bing.com/th/id/OSK.6YN_bEZ1rsQQ68tGg41D4gYpaqYoHvHNaAH7ZgynoK0?w=64&h=64",
    "Omega": "https://th.bing.com/th/id/OSK.127306635312f5c3862ca0182f06004c?w=50&h=50",
    "Fossil": "https://th.bing.com/th/id/ODF.ft8qoc6e-aPbZ_9AcDNduw?w=32&h=32&qlt=90&pcl=fffffc&r=0&o=6&cb=ucfimg1&pid=1.2&ucfimg=1"
  };

  const brands = [...new Set(list.map(p => p.brand))];

  brands.forEach(b => {
    const c = document.createElement("div");
    c.className = "brand-card";

    c.innerHTML = `
      <div style="width:84px;height:84px;border-radius:10px;background:#fff;display:flex;align-items:center;justify-content:center">
        <img src="${brandLogos[b]}" alt="${b}" style="max-width:70%;max-height:70%;">
      </div>
      <div style="flex:1">
        <div style="font-weight:800">${b}</div>
        <div style="color:#6b7280;margin-top:6px">Iconic luxury timepieces</div>
      </div>
    `;

    grid.appendChild(c);
  });
}

// ===============================
// INIT — Run on page load
// ===============================
document.addEventListener("DOMContentLoaded", () => {
  renderGrid(products);
  renderBrands(products);

  // Chip filters
  document.querySelectorAll("nav.rc-discovery-row .rc-chip").forEach(chip => {
    chip.addEventListener("click", () => {
      document.querySelectorAll("nav.rc-discovery-row .rc-chip")
        .forEach(c => c.classList.remove("rc-chip-active"));

      chip.classList.add("rc-chip-active");

      const sect = chip.dataset.section;
      if (!sect || sect === "all") {
        renderGrid(products);
      } else {
        renderGrid(products.filter(p => p.category === sect));
      }
    });
  });

  // Search
  const form = document.getElementById("search-form");
  form.addEventListener("submit", evt => {
    evt.preventDefault();

    const q = document
      .getElementById("search-input")
      .value.trim()
      .toLowerCase();

    if (!q) {
      renderGrid(products);
    } else {
      renderGrid(
        products.filter(p =>
          (p.title + " " + p.brand + " " + p.tag)
            .toLowerCase()
            .includes(q)
        )
      );
    }
  });
});

