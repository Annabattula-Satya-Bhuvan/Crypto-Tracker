// Fake dynamic update for UI demo
setInterval(() => {
  document.querySelectorAll(".crypto-card").forEach(card => {
    const priceEl = card.querySelector(".price");
    let price = parseFloat(priceEl.textContent.replace("$", ""));
    const change = (Math.random() * 2 - 1).toFixed(2);

    price += price * (change / 100);
    priceEl.textContent = `$${price.toFixed(2)}`;
  });
}, 3000);
