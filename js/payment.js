// ==============================
// PAYMENT SYSTEM
// ==============================

const cardNumber =
  document.querySelector("#card-number");

const cardExpire =
  document.querySelector("#card-expire");

const cardCVV =
  document.querySelector("#card-cvv");

const cardName =
  document.querySelector("#card-name");

// Kart numarası formatı
cardNumber?.addEventListener(
  "input",
  (e) => {

    let value =
      e.target.value.replace(/\D/g, "");

    value =
      value.replace(/(.{4})/g, "$1 ")
      .trim();

    e.target.value = value;

  }
);

// Son kullanma tarihi
cardExpire?.addEventListener(
  "input",
  (e) => {

    let value =
      e.target.value.replace(/\D/g, "");

    if (value.length >= 3) {

      value =
        value.substring(0, 2) +
        "/" +
        value.substring(2, 4);

    }

    e.target.value = value;

  }
);

// CVV sadece sayı
cardCVV?.addEventListener(
  "input",
  (e) => {

    e.target.value =
      e.target.value.replace(/\D/g, "");

  }
);

// Kart sahibi büyük harf
cardName?.addEventListener(
  "input",
  (e) => {

    e.target.value =
      e.target.value.toUpperCase();

  }
);

// Ödeme yöntemi aktif görünüm
const paymentItems =
  document.querySelectorAll(".payment-item");

paymentItems.forEach((item) => {

  const radio =
    item.querySelector(
      'input[type="radio"]'
    );

  radio?.addEventListener(
    "change",
    () => {

      paymentItems.forEach((i) => {

        i.classList.remove(
          "active-payment"
        );

      });

      if (radio.checked) {

        item.classList.add(
          "active-payment"
        );

      }

    }
  );

});

// Sipariş butonu kontrolü
const placeOrderBtn =
  document.querySelector(
    ".btn-place-order"
  );

placeOrderBtn?.addEventListener(
  "click",
  (e) => {

    const creditCardSelected =
      document.querySelector(
        "#credit-card"
      )?.checked;

    if (creditCardSelected) {

      const number =
        cardNumber.value.replace(
          /\s/g,
          ""
        );

      if (
        !cardName.value ||
        number.length !== 16 ||
        cardExpire.value.length !== 5 ||
        cardCVV.value.length !== 3
      ) {

        e.preventDefault();

        alert(
          "Lütfen kredi kartı bilgilerini eksiksiz doldurun."
        );

      }

    }

  }
);