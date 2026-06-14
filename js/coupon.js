// ==============================
// COUPON SYSTEM
// ==============================

const couponInput =
  document.querySelector(".coupon input");

const couponBtn =
  document.querySelector(".coupon button");

const subtotalElement =
  document.querySelector("#subtotal");

const totalElement =
  document.querySelector(
    ".order-total td strong"
  );

const discountRow =
  document.querySelector(".discount-row");

const discountAmount =
  document.querySelector("#discount-amount");

if (
  couponInput &&
  couponBtn &&
  subtotalElement &&
  totalElement
) {

  // Kuponlar
  const coupons = {

    "NISARA10": 10,
    "WELCOME15": 15,
    "SUMMER20": 20

  };

  let activeDiscount = 0;
  let couponUsed = false;

  // Fiyat formatla
  const formatPrice = (price) => {

    return (
      price.toFixed(2)
      .replace(".", ",") + "₺"
    );

  };

  // Subtotal oku
  const getSubtotal = () => {

    const subtotalText =
      subtotalElement.textContent;

    return parseFloat(
      subtotalText
        .replace("₺", "")
        .replace(",", ".")
    );

  };

  // Toplam güncelle
  const updateCouponTotal = () => {

    const subtotal =
      getSubtotal();

    const discountPrice =
      subtotal *
      (activeDiscount / 100);

    const finalTotal =
      subtotal - discountPrice;

    if (activeDiscount > 0) {

      discountRow.style.display =
        "table-row";

      discountAmount.textContent =
        formatPrice(discountPrice);

    } else {

      discountRow.style.display =
        "none";

    }

    totalElement.textContent =
      formatPrice(finalTotal);

  };

  // Kupon uygula
  couponBtn.addEventListener(
    "click",
    (e) => {

      e.preventDefault();

      const code =
        couponInput.value
        .trim()
        .toUpperCase();

      // Boşsa
      if (!code) {

        alert(
          "Lütfen kupon kodu girin."
        );

        return;

      }

      // Zaten kullanıldıysa
      if (couponUsed) {

        alert(
          "Kupon zaten uygulandı."
        );

        return;

      }

      // Kupon doğruysa
      if (coupons[code]) {

        activeDiscount =
          coupons[code];

        couponUsed = true;

        updateCouponTotal();

        couponInput.disabled = true;

        couponBtn.disabled = true;

        couponBtn.textContent =
          "Kupon Uygulandı";

        alert(
          `%${activeDiscount} indirim uygulandı!`
        );

      } else {

        alert(
          "Geçersiz kupon kodu."
        );

      }

    }
  );

}