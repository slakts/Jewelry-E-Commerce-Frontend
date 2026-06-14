document.addEventListener("DOMContentLoaded", () => {

  /* =========================
     PRODUCT TABS
  ========================== */

  const tabButtons = document.querySelectorAll(".tab-button");

  const tabContents = {
    desc: document.querySelector(".tab-panel-descriptions"),
    info: document.querySelector(".tab-panel-information"),
    reviews: document.querySelector(".tab-panel-reviews"),
  };

  // Tab sistemi sadece varsa çalışsın
  if (tabButtons.length > 0) {

    Object.values(tabContents).forEach((content, index) => {

      if (content) {
        content.style.display = index === 0 ? "block" : "none";
      }

    });

    tabButtons.forEach((button) => {

      button.addEventListener("click", () => {

        tabButtons.forEach((btn) =>
          btn.classList.remove("active")
        );

        button.classList.add("active");

        Object.values(tabContents).forEach((content) => {

          if (content) {
            content.style.display = "none";
          }

        });

        const tabName = button.dataset.tab;

        if (tabContents[tabName]) {
          tabContents[tabName].style.display = "block";
        }

      });

    });

  }


  /* =========================
     COMMENT FORM
  ========================== */

  const commentForm = document.querySelector(".comment-form");
  const commentList = document.querySelector(".comment-list");

  if (commentForm && commentList) {

    commentForm.addEventListener("submit", (e) => {

      e.preventDefault();

      const commentText =
        document.querySelector("#comment").value.trim();

      const name =
        document.querySelector("#name").value.trim();

      if (!commentText || !name) {

        alert("Lütfen tüm alanları doldurun.");
        return;

      }

      const today = new Date();

      const date = today.toLocaleDateString("tr-TR", {
        day: "numeric",
        month: "long",
        year: "numeric",
      });

      const newComment = document.createElement("li");

      newComment.classList.add("comment-item");

      newComment.innerHTML = `
        <div class="comment-avatar">
          <img src="img/avatars/avatar1.jpg" alt="Kullanıcı Avatarı" />
        </div>

        <div class="comment-text">

          <ul class="comment-star">
            <li><i class="bi bi-star-fill"></i></li>
            <li><i class="bi bi-star-fill"></i></li>
            <li><i class="bi bi-star-fill"></i></li>
            <li><i class="bi bi-star-fill"></i></li>
            <li><i class="bi bi-star-fill"></i></li>
          </ul>

          <div class="comment-meta">
            <strong>${name}</strong> -
            <time>${date}</time>
          </div>

          <div class="comment-description">
            <p>${commentText}</p>
          </div>

        </div>
      `;

      commentList.prepend(newComment);

      commentForm.reset();

      alert("Yorum başarıyla eklendi!");

    });

  }


  /* =========================
     QUANTITY BUTTONS
  ========================== */

  const decreaseBtn = document.querySelector(".decrease");
  const increaseBtn = document.querySelector(".increase");
  const quantityInput = document.querySelector(".quantity-input");

  if (decreaseBtn && increaseBtn && quantityInput) {

    decreaseBtn.addEventListener("click", () => {

      let currentValue = parseInt(quantityInput.value);

      if (currentValue > 1) {
        quantityInput.value = currentValue - 1;
      }

    });

    increaseBtn.addEventListener("click", () => {

      let currentValue = parseInt(quantityInput.value);

      quantityInput.value = currentValue + 1;

    });

  }


  /* =========================
     ADD TO CART
  ========================== */

  const addToCartButtons = document.querySelectorAll(
    ".add-to-cart, .add-to-cart-btn"
  );

  const cartCount = document.querySelector(".header-cart-count");

  if (addToCartButtons.length > 0 && cartCount) {

    addToCartButtons.forEach((button) => {

      button.addEventListener("click", () => {

        let quantity = 1;

        // quantity input varsa al
        if (quantityInput) {
          quantity = parseInt(quantityInput.value);
        }

        let currentCart =
          parseInt(cartCount.textContent);

        cartCount.textContent =
          currentCart + quantity;

        const originalHTML = button.innerHTML;

        button.innerHTML = `
          <i class="bi bi-check-circle-fill"></i>
          <span>Sepete Eklendi</span>
        `;

        button.disabled = true;

        setTimeout(() => {

          button.innerHTML = originalHTML;

          button.disabled = false;

        }, 2000);

      });

    });

  }


  /* =========================
     PRODUCT GALLERY
  ========================== */

  const mainImage = document.querySelector(".single-image-wrapper img");
  const thumbs = document.querySelectorAll(".gallery-thumbs img");

  if (mainImage && thumbs.length > 0) {

    thumbs.forEach((thumb) => {

      thumb.addEventListener("click", () => {

        // Büyük resmin src ve alt niteliklerini tıklanan küçük resme göre güncelle
        mainImage.src = thumb.src;
        mainImage.alt = thumb.alt;

        // İsteğe bağlı css şıklığı: Seçili küçük resme odaklanma (active sınıfı yönetimi)
        thumbs.forEach((img) => img.classList.remove("active"));
        thumb.classList.add("active");

      });

    });

  }

});