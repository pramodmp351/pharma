document
  .getElementById("newsletterForm")
  .addEventListener("submit", function (e) {
    e.preventDefault();
    const btn = this.querySelector("button");
    const icon = btn.querySelector(".icon-circle");

    // Visual feedback
    btn.style.opacity = "0.7";
    btn.innerHTML = 'Subscribed! <div class="icon-circle">✓</div>';

    setTimeout(() => {
      location.reload(); // Reset for demo
    }, 3000);
  });
