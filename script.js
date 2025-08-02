document.addEventListener("DOMContentLoaded", () => {
  console.log("script.js підключений і DOM готовий");

  // Вибір розміру
  const sizeButtons = document.querySelectorAll(".sizes button");
  let selectedSize = null;

  sizeButtons.forEach(btn => {
    btn.addEventListener("click", () => {
      sizeButtons.forEach(b => b.classList.remove("selected"));
      btn.classList.add("selected");
      selectedSize = btn.textContent;
      console.log("Вибраний розмір:", selectedSize);
    });
  });
  

  // Кількість та ціна
  const minusBtn = document.getElementById("minus");
  const plusBtn = document.getElementById("plus");
  const qtySpan = document.getElementById("qty");
  const priceEl = document.querySelector(".price");
  const basePrice = Number(priceEl.getAttribute("data-base-price"));

  let quantity = 1;

  function updatePrice() {
    const total = basePrice * quantity;
    // Форматування ціни з роздільниками і гривнею
    priceEl.textContent = `₴${total.toLocaleString("uk-UA")}.00 UAH`;
  }
  

  minusBtn.addEventListener("click", () => {
    if (quantity > 1) {
      quantity--;
      qtySpan.textContent = quantity;
      updatePrice();
    }
  });

  plusBtn.addEventListener("click", () => {
    quantity++;
    qtySpan.textContent = quantity;
    updatePrice();
  });

  // Галерея: заміна великого з малими фото
  const mainImage = document.querySelector(".main-image");
  const galleryImages = document.querySelectorAll(".gallery img");

  galleryImages.forEach(img => {
    img.style.cursor = "pointer";
    img.addEventListener("click", () => {
      const mainSrc = mainImage.src;
      mainImage.src = img.src;
      img.src = mainSrc;
    });
 const buyButton = document.querySelector(".buy");
  if (buyButton) {
    buyButton.addEventListener("click", () => {
      window.location.href = "checkout.html";
    });
  }    
  });
});
