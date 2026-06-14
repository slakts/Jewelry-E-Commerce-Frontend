const cartWrapper = document.querySelector(".cart-wrapper");
const subtotalElement = document.getElementById("subtotal");
const totalElement = document.querySelector(".order-total td strong");

const displayCart = () => {
  const cart = JSON.parse(localStorage.getItem("cart")) || [];
  if (!cartWrapper) return;
  
  cartWrapper.innerHTML = "";
  let total = 0;

  if (cart.length === 0) {
    cartWrapper.innerHTML = `<tr><td colspan="5" style="text-align:center; padding:30px;">Sepetiniz boş.</td></tr>`;
    if (subtotalElement) subtotalElement.textContent = "0,00₺";
    if (totalElement) totalElement.textContent = "0,00₺";
    return;
  }

  cart.forEach((item, index) => {
    const price = parseFloat(item.price.replace("₺", "").replace(".", "").replace(",", "."));
    const itemTotal = price * item.quantity;
    total += itemTotal;

    cartWrapper.innerHTML += `
      <tr class="cart-item">
        <td class="cart-image">
          <img src="${item.image}" alt="${item.title}">
          <button type="button" class="delete-cart" data-index="${index}">
            <i class="bi bi-x"></i>
          </button>
        </td>
        <td class="product-name">${item.title}</td>
        <td class="product-price">${item.price}</td>
        <td class="product-quantity">
          <div class="quantity-input">
             <input type="number" value="${item.quantity}" min="1" data-index="${index}" class="quantity-change">
          </div>
        </td>
        <td class="product-subtotal">${itemTotal.toLocaleString('tr-TR', { minimumFractionDigits: 2 })}₺</td>
      </tr>`;
  });

  if (subtotalElement) subtotalElement.textContent = total.toLocaleString('tr-TR', { minimumFractionDigits: 2 }) + "₺";
  if (totalElement) totalElement.textContent = total.toLocaleString('tr-TR', { minimumFractionDigits: 2 }) + "₺";
  
  initCartEvents();
};

const initCartEvents = () => {
  // Silme Butonları
  document.querySelectorAll(".delete-cart").forEach((btn) => {
    btn.addEventListener("click", () => {
      const index = btn.getAttribute("data-index");
      let cart = JSON.parse(localStorage.getItem("cart"));
      cart.splice(index, 1);
      localStorage.setItem("cart", JSON.stringify(cart));
      displayCart();
      if(typeof updateCartCount === "function") updateCartCount();
    });
  });

  // Miktar Değişimi
  document.querySelectorAll(".quantity-change").forEach((input) => {
    input.addEventListener("change", (e) => {
      const index = e.target.getAttribute("data-index");
      let cart = JSON.parse(localStorage.getItem("cart"));
      cart[index].quantity = parseInt(e.target.value);
      localStorage.setItem("cart", JSON.stringify(cart));
      displayCart();
    });
  });
};

displayCart();