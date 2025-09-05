// Mobile Navbar Toggle
const menuToggle = document.getElementById("menu-toggle");
const navLinks = document.getElementById("nav-links");

menuToggle.addEventListener("click", () => {
    navLinks.classList.toggle("active");
});

const smeBtn = document.getElementById("smeBtn");
const corpBtn = document.getElementById("corpBtn");
const smesSection = document.querySelector(".smes");
const corpSection = document.querySelector(".corporates");

// Tab switching
smeBtn.addEventListener("click", () => {
  smeBtn.classList.add("active");
  corpBtn.classList.remove("active");
  smesSection.classList.add("active");
  corpSection.classList.remove("active");

  // Small delay for smooth animation
  corpSection.style.display = "none";
  smesSection.style.display = "grid";
});

corpBtn.addEventListener("click", () => {
  corpBtn.classList.add("active");
  smeBtn.classList.remove("active");
  corpSection.classList.add("active");
  smesSection.classList.remove("active");

  // Small delay for smooth animation
  smesSection.style.display = "none";
  corpSection.style.display = "grid";
});

// WhatsApp buttons
document.querySelectorAll(".order-btn").forEach(button => {
  button.addEventListener("click", () => {
    const message = encodeURIComponent("Hi! I'm interested in this package. Can we talk?");
    window.open(`https://wa.me/254704199673?text=${message}`, "_blank");
  });
});

