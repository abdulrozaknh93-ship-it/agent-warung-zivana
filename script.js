// GANTI nomor ini dengan nomor WhatsApp bisnis, format Indonesia: 628xxxxxxxxxx (tanpa +, spasi, atau tanda baca).
const WHATSAPP_NUMBER = "6281234567890";
const products = [
  {
    id: 1,
    name: "Sabun Mandi Lifebuoy",
    brand: "Lifebuoy",
    category: "Kebersihan",
    unit: "pak isi 12 pcs",
    price: 42000,
    stock: 28,
    emoji: "🧼",
    tone: "#e5eee0",
  },
  {
    id: 2,
    name: "Sabun Mandi Nuvo",
    brand: "Nuvo",
    category: "Kebersihan",
    unit: "pak isi 12 pcs",
    price: 39000,
    stock: 24,
    emoji: "🧴",
    tone: "#e5e9f2",
  },
  {
    id: 3,
    name: "Sabun Cuci Piring Sunlight",
    brand: "Sunlight",
    category: "Cuci & Rumah",
    unit: "dus isi 12 pcs",
    price: 78000,
    stock: 19,
    emoji: "🫧",
    tone: "#f6edc9",
  },
  {
    id: 4,
    name: "Deterjen Rinso",
    brand: "Rinso",
    category: "Cuci & Rumah",
    unit: "dus isi 12 pcs",
    price: 96000,
    stock: 22,
    emoji: "🧺",
    tone: "#dfeaf4",
  },
  {
    id: 5,
    name: "Deterjen So Klin",
    brand: "So Klin",
    category: "Cuci & Rumah",
    unit: "dus isi 12 pcs",
    price: 85000,
    stock: 17,
    emoji: "🧽",
    tone: "#e8e1f2",
  },
  {
    id: 6,
    name: "Pembersih Lantai Wipol",
    brand: "Wipol",
    category: "Cuci & Rumah",
    unit: "dus isi 12 pcs",
    price: 72000,
    stock: 15,
    emoji: "🧹",
    tone: "#e0eee3",
  },
  {
    id: 7,
    name: "Beras Premium 5 kg",
    brand: "Beras pilihan",
    category: "Sembako",
    unit: "karung 5 kg",
    price: 76000,
    stock: 34,
    emoji: "🍚",
    tone: "#f3ead8",
  },
  {
    id: 8,
    name: "Minyak Goreng 1 L",
    brand: "Minyak goreng",
    category: "Sembako",
    unit: "dus isi 12 pcs",
    price: 198000,
    stock: 21,
    emoji: "🫗",
    tone: "#f8e8be",
  },
  {
    id: 9,
    name: "Gula Pasir 1 kg",
    brand: "Gula pasir",
    category: "Sembako",
    unit: "pak isi 10 pcs",
    price: 158000,
    stock: 18,
    emoji: "🧂",
    tone: "#eee9dc",
  },
  {
    id: 10,
    name: "Tepung Terigu 1 kg",
    brand: "Tepung terigu",
    category: "Sembako",
    unit: "dus isi 10 pcs",
    price: 118000,
    stock: 16,
    emoji: "🌾",
    tone: "#f1e6d1",
  },
  {
    id: 11,
    name: "Mi Instan Goreng",
    brand: "Indomie",
    category: "Makanan",
    unit: "dus isi 40 pcs",
    price: 118000,
    stock: 32,
    emoji: "🍜",
    tone: "#f7e7c9",
  },
  {
    id: 12,
    name: "Mi Instan Kuah",
    brand: "Mi instan",
    category: "Makanan",
    unit: "dus isi 40 pcs",
    price: 112000,
    stock: 27,
    emoji: "🍲",
    tone: "#f6e6d7",
  },
  {
    id: 13,
    name: "Biskuit Keluarga",
    brand: "Biskuit",
    category: "Makanan",
    unit: "dus isi 24 pcs",
    price: 96000,
    stock: 14,
    emoji: "🍪",
    tone: "#f2dfca",
  },
  {
    id: 14,
    name: "Kopi Sachet",
    brand: "Kopi instan",
    category: "Minuman",
    unit: "dus isi 30 sachet",
    price: 69000,
    stock: 26,
    emoji: "☕",
    tone: "#e6d8c8",
  },
  {
    id: 15,
    name: "Teh Celup",
    brand: "Teh",
    category: "Minuman",
    unit: "pak isi 10 kotak",
    price: 85000,
    stock: 13,
    emoji: "🍵",
    tone: "#dce9d6",
  },
  {
    id: 16,
    name: "Air Mineral 600 ml",
    brand: "Air mineral",
    category: "Minuman",
    unit: "dus isi 24 botol",
    price: 58000,
    stock: 30,
    emoji: "💧",
    tone: "#dcecf2",
  },
  {
    id: 17,
    name: "Sampo Sachet",
    brand: "Sampo",
    category: "Kebersihan",
    unit: "renteng isi 12 sachet",
    price: 18000,
    stock: 25,
    emoji: "🧴",
    tone: "#e3e9f1",
  },
  {
    id: 18,
    name: "Pasta Gigi",
    brand: "Pasta gigi",
    category: "Kebersihan",
    unit: "dus isi 12 pcs",
    price: 96000,
    stock: 12,
    emoji: "🪥",
    tone: "#dce9e8",
  },
  {
    id: 19,
    name: "Kecap Manis",
    brand: "Kecap",
    category: "Sembako",
    unit: "dus isi 12 botol",
    price: 92000,
    stock: 20,
    emoji: "🍶",
    tone: "#eadbca",
  },
  {
    id: 20,
    name: "Sarden Kaleng",
    brand: "Sarden",
    category: "Makanan",
    unit: "dus isi 24 kaleng",
    price: 216000,
    stock: 11,
    emoji: "🥫",
    tone: "#f1dcd2",
  },
];
const money = (n) =>
  new Intl.NumberFormat("id-ID", {
    style: "currency",
    currency: "IDR",
    maximumFractionDigits: 0,
  }).format(n);
let cart = {};
try {
  cart = JSON.parse(localStorage.getItem("zivanaCart") || "{}") || {};
} catch (e) {
  cart = {};
}
const $ = (s) => document.querySelector(s);
const $$ = (s) => document.querySelectorAll(s);
const productGrid = $("#productGrid"),
  searchInput = $("#searchInput"),
  categoryFilter = $("#categoryFilter"),
  sortFilter = $("#sortFilter");
function showToast(message) {
  const t = $("#toast");
  t.textContent = message;
  t.classList.add("show");
  clearTimeout(showToast.timer);
  showToast.timer = setTimeout(() => t.classList.remove("show"), 2500);
}
function saveCart() {
  try {
    localStorage.setItem("zivanaCart", JSON.stringify(cart));
  } catch (e) {}
  renderCart();
}
function renderProducts() {
  const q = searchInput.value.trim().toLocaleLowerCase("id"),
    cat = categoryFilter.value,
    sort = sortFilter.value;
  let list = products.filter(
    (p) =>
      (cat === "Semua" || p.category === cat) &&
      [p.name, p.brand, p.category, p.unit].some((s) =>
        s.toLocaleLowerCase("id").includes(q),
      ),
  );
  if (sort === "low") list.sort((a, b) => a.price - b.price);
  if (sort === "high") list.sort((a, b) => b.price - a.price);
  if (sort === "name") list.sort((a, b) => a.name.localeCompare(b.name, "id"));
  if (sort === "stock") list.sort((a, b) => b.stock - a.stock);
  $("#resultCount").textContent = `${list.length} produk ditemukan`;
  productGrid.innerHTML = list.length
    ? list
        .map(
          (p, i) =>
            `<article class="product-card reveal visible" style="transition-delay:${Math.min(i % 4, 3) * 0.05}s"><div class="product-visual" style="background:linear-gradient(145deg,${p.tone},#fffdf8)"><span class="stock-pill ${p.stock <= 12 ? "low" : ""}">${p.stock <= 12 ? "Stok terbatas" : "Ready"} · ${p.stock}</span><span class="product-emoji" aria-hidden="true">${p.emoji}</span></div><div class="product-info"><div class="product-category">${p.category}</div><h3>${p.name}</h3><div class="product-meta">${p.brand} · ${p.unit}</div><div class="price-row"><span class="price">${money(p.price)}</span><span class="unit">/ unit jual</span></div><button class="add-btn" data-add="${p.id}">＋ Tambah ke keranjang</button></div></article>`,
        )
        .join("")
    : '<div class="empty-state"><div style="font-size:2.2rem">🔎</div><h3>Barang belum ditemukan</h3><p>Coba kata kunci lain atau pilih kategori berbeda.</p><button class="btn btn-outline" onclick="resetFilters()">Reset pencarian</button></div>';
  $$(".category-card").forEach((b) =>
    b.classList.toggle("active", b.dataset.category === cat),
  );
}
function resetFilters() {
  searchInput.value = "";
  categoryFilter.value = "Semua";
  sortFilter.value = "featured";
  renderProducts();
}
function addToCart(id) {
  const p = products.find((x) => x.id === id);
  if (!p) return;
  const current = cart[id] || 0;
  if (current >= p.stock) {
    showToast("Jumlah melebihi stok demo yang tersedia.");
    return;
  }
  cart[id] = current + 1;
  saveCart();
  showToast(`${p.name} ditambahkan ke keranjang`);
}
function cartQuantity() {
  return Object.values(cart).reduce((a, b) => a + Number(b || 0), 0);
}
function cartSubtotal() {
  return Object.entries(cart).reduce((sum, [id, qty]) => {
    const p = products.find((x) => x.id === Number(id));
    return sum + (p ? p.price * qty : 0);
  }, 0);
}
function renderCart() {
  for (const id of Object.keys(cart)) {
    const p = products.find((x) => x.id === Number(id));
    if (!p || cart[id] <= 0) delete cart[id];
    else if (cart[id] > p.stock) cart[id] = p.stock;
  }
  $("#cartCount").textContent = cartQuantity();
  $("#drawerItemCount").textContent = `(${cartQuantity()} item)`;
  $("#cartTotal").textContent = money(cartSubtotal());
  const items = Object.entries(cart).filter(([id, qty]) => qty > 0);
  $("#cartItems").innerHTML = items.length
    ? items
        .map(([id, qty]) => {
          const p = products.find((x) => x.id === Number(id));
          return `<div class="cart-item"><div class="cart-item-emoji">${p.emoji}</div><div><h4>${p.name}</h4><small>${money(p.price)} / unit jual</small><div class="qty-control"><button data-qty="${id}" data-delta="-1" aria-label="Kurangi ${p.name}">−</button><strong>${qty}</strong><button data-qty="${id}" data-delta="1" aria-label="Tambah ${p.name}">+</button></div></div><div><div class="cart-line-price">${money(p.price * qty)}</div><button class="remove-btn" data-remove="${id}">Hapus</button></div></div>`;
        })
        .join("")
    : '<div class="cart-empty"><div class="big">🛒</div><h3>Keranjang masih kosong</h3><p>Yuk, tambahkan kebutuhan warung kamu.</p></div>';
  try {
    localStorage.setItem("zivanaCart", JSON.stringify(cart));
  } catch (e) {}
}
function openCart() {
  closeMenu();
  $("#cartDrawer").classList.add("open");
  $("#drawerBackdrop").classList.add("open");
  $("#cartDrawer").setAttribute("aria-hidden", "false");
  document.body.classList.add("no-scroll");
  $("#closeCart").focus();
}
function closeCart() {
  $("#cartDrawer").classList.remove("open");
  $("#drawerBackdrop").classList.remove("open");
  $("#cartDrawer").setAttribute("aria-hidden", "true");
  if (!$("#checkoutModal").classList.contains("open"))
    document.body.classList.remove("no-scroll");
}
function openCheckout() {
  if (!cartQuantity()) {
    showToast("Keranjang kamu masih kosong.");
    return;
  }
  closeCart();
  $("#checkoutModal").classList.add("open");
  document.body.classList.add("no-scroll");
  $("#customerName").focus();
}
function closeCheckout() {
  $("#checkoutModal").classList.remove("open");
  document.body.classList.remove("no-scroll");
}
function closeMenu() {
  $("#navLinks").classList.remove("open");
  $("#menuToggle").setAttribute("aria-expanded", "false");
}
function scrollToShop() {
  closeMenu();
  $("#shop").scrollIntoView({ behavior: "smooth" });
  setTimeout(() => searchInput.focus({ preventScroll: true }), 450);
}
productGrid.addEventListener("click", (e) => {
  const b = e.target.closest("[data-add]");
  if (b) addToCart(Number(b.dataset.add));
});
$("#cartItems").addEventListener("click", (e) => {
  const qty = e.target.closest("[data-qty]"),
    remove = e.target.closest("[data-remove]");
  if (qty) {
    const id = qty.dataset.qty;
    cart[id] = (cart[id] || 0) + Number(qty.dataset.delta);
    if (cart[id] <= 0) delete cart[id];
    const p = products.find((x) => x.id === Number(id));
    if (p && cart[id] > p.stock) {
      cart[id] = p.stock;
      showToast("Jumlah sudah mencapai stok demo.");
    }
    saveCart();
  }
  if (remove) {
    delete cart[remove.dataset.remove];
    saveCart();
  }
});
searchInput.addEventListener("input", renderProducts);
categoryFilter.addEventListener("change", renderProducts);
sortFilter.addEventListener("change", renderProducts);
$$(".category-card").forEach((b) =>
  b.addEventListener("click", () => {
    categoryFilter.value =
      categoryFilter.value === b.dataset.category
        ? "Semua"
        : b.dataset.category;
    renderProducts();
    scrollToShop();
  }),
);
$("#openCart").addEventListener("click", openCart);
$("#closeCart").addEventListener("click", closeCart);
$("#drawerBackdrop").addEventListener("click", closeCart);
$("#continueShopping").addEventListener("click", closeCart);
$("#checkoutBtn").addEventListener("click", openCheckout);
$("#closeModal").addEventListener("click", closeCheckout);
$("#checkoutModal").addEventListener("click", (e) => {
  if (e.target === $("#checkoutModal")) closeCheckout();
});
$("#headerSearch").addEventListener("click", scrollToShop);
$("#readyShopBtn").addEventListener("click", () => {
  categoryFilter.value = "Semua";
  renderProducts();
  scrollToShop();
});
$("#menuToggle").addEventListener("click", () => {
  const open = $("#navLinks").classList.toggle("open");
  $("#menuToggle").setAttribute("aria-expanded", String(open));
});
$$(".nav-links a").forEach((a) => a.addEventListener("click", closeMenu));
$("#checkoutForm").addEventListener("submit", (e) => {
  e.preventDefault();
  if (!cartQuantity()) {
    showToast("Keranjang kamu masih kosong.");
    closeCheckout();
    return;
  }
  const name = $("#customerName").value.trim(),
    phone = $("#customerPhone").value.trim(),
    address = $("#customerAddress").value.trim(),
    note = $("#customerNote").value.trim();
  if (!name || !phone || !address) {
    showToast("Lengkapi nama, nomor HP, dan alamat.");
    return;
  }
  const lines = Object.entries(cart)
    .filter(([id, qty]) => qty > 0)
    .map(([id, qty]) => {
      const p = products.find((x) => x.id === Number(id));
      return `• ${p.name} (${p.unit}) x ${qty} = ${money(p.price * qty)}`;
    });
  const msg = `Halo AGENT WARUNG ZIVANA, saya ingin konfirmasi pesanan:\n\nNama: ${name}\nNo. HP: ${phone}\nAlamat: ${address}\n\nDaftar pesanan:\n${lines.join("\n")}\n\nTotal sementara: ${money(cartSubtotal())}\nCatatan: ${note || "-"}\n\nMohon konfirmasi stok, harga, dan ongkos kirim. Terima kasih.`;
  if (WHATSAPP_NUMBER === "6281234567890") {
    showToast("Ganti nomor WhatsApp bisnis di kode sebelum dipakai live.");
    return;
  }
  const url = `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(msg)}`;
  window.open(url, "_blank", "noopener,noreferrer");
  closeCheckout();
});
// Scroll reveal: elemen muncul saat masuk layar dan kembali tersembunyi setelah keluar.
const revealObserver = new IntersectionObserver(
  (entries) =>
    entries.forEach((entry) => {
      if (entry.isIntersecting) entry.target.classList.add("visible");
      else entry.target.classList.remove("visible");
    }),
  { threshold: 0.12, rootMargin: "0px 0px -25px 0px" },
);
function observeReveal() {
  $$(".reveal").forEach((el) => revealObserver.observe(el));
}
$("#year").textContent = new Date().getFullYear();
$("#stockSku").textContent = products.length;
$("#stockTotal").textContent = products
  .reduce((n, p) => n + p.stock, 0)
  .toLocaleString("id-ID");
renderProducts();
renderCart();
observeReveal();
window.resetFilters = resetFilters;
document.addEventListener("keydown", (e) => {
  if (e.key === "Escape") {
    closeCart();
    closeCheckout();
    closeMenu();
  }
});
