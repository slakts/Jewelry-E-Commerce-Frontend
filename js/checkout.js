const displayOrderSummary = () => {
  const cart = JSON.parse(localStorage.getItem("cart")) || [];
  const orderTableBody = document.querySelector(".checkout-table tbody");
  const subtotalElement = document.querySelector(".checkout-table tfoot tr:nth-child(1) td");
  const totalElement = document.querySelector(".order-total td strong");

  if (!orderTableBody) return;

  let total = 0;
  orderTableBody.innerHTML = "";

  cart.forEach(item => {
    const price = parseFloat(item.price.replace("₺", "").replace(".", "").replace(",", "."));
    const itemTotal = price * item.quantity;
    total += itemTotal;

    orderTableBody.innerHTML += `
      <tr>
        <td>${item.title} <strong>x ${item.quantity}</strong></td>
        <td>${itemTotal.toLocaleString('tr-TR', { minimumFractionDigits: 2 })}₺</td>
      </tr>`;
  });

  if (subtotalElement) subtotalElement.textContent = total.toLocaleString('tr-TR', { minimumFractionDigits: 2 }) + "₺";
  if (totalElement) totalElement.textContent = total.toLocaleString('tr-TR', { minimumFractionDigits: 2 }) + "₺";
};

document.addEventListener("DOMContentLoaded", displayOrderSummary);