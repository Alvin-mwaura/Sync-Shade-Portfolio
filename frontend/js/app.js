// Mobile Navbar Toggle
const menuToggle = document.getElementById("menu-toggle");
const navLinks = document.getElementById("nav-links");

menuToggle.addEventListener("click", () => {
    navLinks.classList.toggle("active");
});

const slides = document.querySelectorAll(".carousel-slide");
const dots = document.querySelectorAll(".dot");
let currentIndex = 0;
let autoSlideInterval;

// Show a specific slide
function showSlide(index) {
  slides.forEach((slide, i) => {
    slide.classList.remove("active");
    dots[i].classList.remove("active");
  });

  slides[index].classList.add("active");
  dots[index].classList.add("active");

  currentIndex = index;
}

// Go to the next slide automatically
function nextSlide() {
  currentIndex = (currentIndex + 1) % slides.length;
  showSlide(currentIndex);
}

// Start auto-switching every 4 seconds
function startAutoSlide() {
  autoSlideInterval = setInterval(nextSlide, 4000);
}

// When clicking dots, jump to that slide
dots.forEach((dot, i) => {
  dot.addEventListener("click", () => {
    showSlide(i);
    clearInterval(autoSlideInterval);
    startAutoSlide();
  });
});

// Initialize carousel
showSlide(currentIndex);
startAutoSlide();


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

