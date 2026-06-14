// ==============================
// SEPET SİSTEMİ
// ==============================

// Toplamları güncelle
const updateTotals = () => {

  const cartItems =
    document.querySelectorAll(".cart-item");

  let subtotal = 0;

  cartItems.forEach((item) => {

    const priceText =
      item.querySelector(".product-price")
      .textContent;

    const price = parseFloat(
      priceText
        .replace("₺", "")
        .replace(",", ".")
    );

    const quantity = parseInt(
      item.querySelector(".quantity-input input")
      .value
    );

    const rowTotal = price * quantity;

    item.querySelector(
      ".product-subtotal"
    ).textContent =
      rowTotal.toFixed(2)
      .replace(".", ",") + "₺";

    subtotal += rowTotal;

  });

  const subtotalElement =
    document.querySelector("#subtotal");

  const totalElement =
    document.querySelector(
      ".order-total td strong"
    );

  if (subtotalElement) {

    subtotalElement.textContent =
      subtotal.toFixed(2)
      .replace(".", ",") + "₺";

  }

  if (totalElement) {

    totalElement.textContent =
      subtotal.toFixed(2)
      .replace(".", ",") + "₺";

  }

};

// Ürün sil
document.querySelectorAll(".delete-cart")
.forEach((btn) => {

  btn.addEventListener("click", (e) => {

    const row = e.target.closest("tr");

    const confirmDelete = confirm(
      "Bu ürünü sepetten çıkarmak istediğinize emin misiniz?"
    );

    if (confirmDelete) {

      row.remove();

      updateTotals();

      if (
        document.querySelectorAll(".cart-item")
        .length === 0
      ) {

        document.querySelector(
          ".cart-wrapper"
        ).innerHTML =
          `
          <tr>
            <td colspan="5"
              style="
                padding:20px;
                text-align:center;
              ">
              Sepetiniz boş.
            </td>
          </tr>
          `;

      }

    }

  });

});

// Adet değişimi
document.querySelectorAll(
  ".quantity-input input"
).forEach((input) => {

  input.addEventListener("change", (e) => {

    if (e.target.value < 1) {
      e.target.value = 1;
    }

    updateTotals();

  });

});

// İlk çalıştırma
updateTotals();