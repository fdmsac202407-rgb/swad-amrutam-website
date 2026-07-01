// Smooth animation on page load
window.addEventListener("load", () => {
  document.body.style.opacity = "1";
});

// Navbar shadow on scroll
window.addEventListener("scroll", () => {
  const header = document.querySelector(".header");

  if (window.scrollY > 50) {
    header.style.boxShadow = "0 10px 25px rgba(0,0,0,0.25)";
  } else {
    header.style.boxShadow = "none";
  }
});

// Buy Now button
document.querySelectorAll(".buy-btn").forEach(btn => {
  btn.addEventListener("click", () => {
    console.log("Buy button clicked");
  });
});

// Card hover animation
const cards = document.querySelectorAll(".card");

cards.forEach(card => {
  card.addEventListener("mouseenter", () => {
    card.style.transform = "translateY(-8px)";
  });

  card.addEventListener("mouseleave", () => {
    card.style.transform = "translateY(0)";
  });
});