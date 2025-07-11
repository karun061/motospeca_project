document.addEventListener("DOMContentLoaded", () => {
  const addToCartButtons = document.querySelectorAll(".add-to-cart");
  const buyNowButtons = document.querySelectorAll(".buy-now");
  const cartCount = document.getElementById("cart-count");
  const cartItemsList = document.getElementById("cart-items");
  const cartTotal = document.getElementById("cart-total");
  const cartBuyNowBtn = document.getElementById("buy-now");

  const modal = document.getElementById("buy-now-modal");
  const form = document.getElementById("buy-now-form");
  const productInput = document.getElementById("product-name");
  const closeBtn = document.getElementById("closeModalBtn");

  const cart = {};

  function formatPrice(price) {
    return `Npr.${price.toLocaleString("en-IN")}`;
  }

  function updateCartUI() {
    cartItemsList.innerHTML = "";

    const items = Object.keys(cart);
    if (items.length === 0) {
      cartItemsList.innerHTML = "<li>No items in cart.</li>";
      cartCount.textContent = "0";
      cartTotal.textContent = "Total: npr.0";
      cartBuyNowBtn.disabled = true;
      return;
    }

    let totalPrice = 0;
    let totalQty = 0;

    items.forEach((name) => {
      const item = cart[name];
      totalQty += item.qty;
      totalPrice += item.price * item.qty;

      const li = document.createElement("li");
      li.textContent = `${name} x${item.qty}`;

      const priceSpan = document.createElement("span");
      priceSpan.textContent = formatPrice(item.price * item.qty);
      li.appendChild(priceSpan);

      cartItemsList.appendChild(li);
    });

    cartCount.textContent = totalQty;
    cartTotal.textContent = `Total: ${formatPrice(totalPrice)}`;
    cartBuyNowBtn.disabled = false;
  }

  function addToCart(name, price) {
    if (cart[name]) {
      cart[name].qty++;
    } else {
      cart[name] = { price: price, qty: 1 };
    }
    updateCartUI();
  }

  // Handle Add to Cart buttons
  addToCartButtons.forEach((btn) => {
    btn.addEventListener("click", () => {
      const card = btn.closest(".product-card");
      const name = card.querySelector("h3").textContent.trim();
      const priceText = card.querySelector("p").textContent.trim();
      const price = Number(priceText.replace(/[^\d]/g, ""));

      addToCart(name, price);
      alert(`✅ "${name}" added to cart!`);
    });
  });

  // Handle individual Buy Now button (single item)
  buyNowButtons.forEach((btn) => {
    btn.addEventListener("click", () => {
      const card = btn.closest(".product-card");
      const name = card.querySelector("h3").textContent.trim();
      productInput.value = name;
      modal.style.display = "flex";
    });
  });

  // Handle cart Buy Now button (multiple items)
  cartBuyNowBtn.addEventListener("click", () => {
    if (cartBuyNowBtn.disabled) return;

    const items = Object.keys(cart);
    if (items.length === 0) {
      alert("Your cart is empty!");
      return;
    }

    // Combine cart items into summary
    const combinedItems = items.map(name => {
      const item = cart[name];
      return `${name} x${item.qty}`;
    }).join(", ");

    productInput.value = combinedItems;
    modal.style.display = "flex";
  });

  // Close modal on X
  closeBtn.addEventListener("click", () => {
    modal.style.display = "none";
  });

  // Close modal if clicked outside content
  window.addEventListener("click", (e) => {
    if (e.target === modal) {
      modal.style.display = "none";
    }
  });

  // Handle form submission
  form.addEventListener("submit", (e) => {
    e.preventDefault();
    const formData = new FormData(form);
    const summary = `
🛍️ Purchase Confirmed!
------------------------
Product(s): ${formData.get("product")}
Name: ${formData.get("name")}
Email: ${formData.get("email")}
Phone: ${formData.get("phone")}
Address: ${formData.get("address")}
Payment: ${formData.get("payment")}

✅ Thank you for your purchase!
    `;
    alert(summary);
    modal.style.display = "none";
    form.reset();

    // Clear cart only if it was a cart purchase
    if (formData.get("product").includes(",")) {
      for (const key in cart) {
        delete cart[key];
      }
      updateCartUI();
    }
  });

  // Initialize cart
  updateCartUI();
});
