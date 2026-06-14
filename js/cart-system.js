const cartCount = document.querySelector(".header-cart-count");

const getCart = () => {
  return JSON.parse(localStorage.getItem("cart")) || [];
};

const saveCart = (cart) => {
  localStorage.setItem("cart", JSON.stringify(cart));
};

const updateCartCount = () => {
  const cart = getCart();
  if (cartCount) {
    // Toplam ürün adedini göster (opsiyonel: cart.length de kullanabilirsin)
    const totalItems = cart.reduce((total, item) => total + item.quantity, 0);
    cartCount.textContent = totalItems;
  }
};

const addToCartButtons = document.querySelectorAll(".add-to-cart");

addToCartButtons.forEach((button) => {
  button.addEventListener("click", () => {
    const product = button.closest(".product-item");
    const title = product.querySelector(".product-title").textContent;
    const price = product.querySelector(".product-prices strong").textContent;
    const image = product.querySelector(".img1").src;

    let cart = getCart();

    // Ürün daha önce eklenmiş mi kontrol et
    const existingProduct = cart.find((item) => item.title === title);

    if (existingProduct) {
      existingProduct.quantity += 1;
    } else {
      cart.push({
        title,
        price,
        image,
        quantity: 1,
      });
    }

    saveCart(cart);
    updateCartCount();
    alert(title + " sepete eklendi!");
  });
});

// Sayfa yüklendiğinde sayıyı güncelle
updateCartCount();