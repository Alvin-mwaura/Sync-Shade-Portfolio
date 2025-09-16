const form = document.getElementById("earn-form");
const successMsg = document.getElementById("form-success");
const errorMsg = document.getElementById("form-error");

form.addEventListener("submit", async (e) => {
  e.preventDefault(); // prevent reload

  const formData = new FormData(form);
  try {
    const response = await fetch(form.action, {
      method: form.method,
      body: formData,
      headers: { 'Accept': 'application/json' }
    });

    if (response.ok) {
      successMsg.classList.add("show");
      errorMsg.classList.remove("show");
      form.reset();

      // Hide after 4 seconds
      setTimeout(() => {
        successMsg.classList.remove("show");
      }, 4000);
    } else {
      successMsg.classList.remove("show");
      errorMsg.classList.add("show");

      setTimeout(() => {
        errorMsg.classList.remove("show");
      }, 4000);
    }
  } catch (error) {
    successMsg.classList.remove("show");
    errorMsg.classList.add("show");

    setTimeout(() => {
      errorMsg.classList.remove("show");
    }, 4000);
  }
});

document.addEventListener("DOMContentLoaded", function () {
  const phoneInput = document.getElementById("phone");
  const idInput = document.getElementById("id-number");
  const phoneError = document.getElementById("phone-error");
  const idError = document.getElementById("id-error");

  function enforceDigits(input, errorElement, fieldName, minLen, maxLen) {
    input.addEventListener("input", () => {
      // Remove non-digits
      input.value = input.value.replace(/\D/g, "");

      // Trim to max length
      if (maxLen) {
        input.value = input.value.slice(0, maxLen);
      }

      // Validation check
      if (input.value.length < minLen || input.value.length > maxLen) {
        errorElement.style.display = "block";

        if (minLen === maxLen) {
          errorElement.textContent = `${fieldName} must be exactly ${minLen} digits.`;
        } else {
          errorElement.textContent = `${fieldName} must be ${minLen}-${maxLen} digits.`;
        }
      } else {
        errorElement.style.display = "none";
      }
    });
  }

  // Phone = exactly 10 digits
  enforceDigits(phoneInput, phoneError, "Phone number", 10, 10);

  // ID = 8–9 digits
  enforceDigits(idInput, idError, "ID number", 8, 9);
});
document.addEventListener("DOMContentLoaded", function () {
  const form = document.getElementById("earn-form");
  const message = document.getElementById("form-message");
  const submitBtn = form.querySelector("button");

  const phoneInput = document.getElementById("phone");
  const idInput = document.getElementById("id");
  const emailInput = document.getElementById("email");

  form.addEventListener("submit", async function (event) {
    event.preventDefault();

    // Validate inputs
    const phoneValid = /^\d{10}$/.test(phoneInput.value);
    const idValid = /^\d{8,9}$/.test(idInput.value);
    const emailValid = /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(emailInput.value);

    if (!phoneValid) {
      message.innerHTML = "📞 Phone number must be exactly 10 digits.";
      message.style.color = "red";
      return;
    }
    if (!idValid) {
      message.innerHTML = "🆔 ID number must be 8 or 9 digits.";
      message.style.color = "red";
      return;
    }
    if (!emailValid) {
      message.innerHTML = "📧 Please enter a valid email address.";
      message.style.color = "red";
      return;
    }

    // Save button text
    const originalText = submitBtn.innerHTML;

    // Show loading state
    submitBtn.disabled = true;
    submitBtn.innerHTML = `<span class="spinner"></span> Sending...`;

    const formData = new FormData(form);
    const response = await fetch(form.action, {
      method: form.method,
      body: formData,
      headers: { Accept: "application/json" },
    });

    if (response.ok) {
      message.innerHTML = "✅ Thank you, we’ll contact you soon!";
      message.style.color = "lightgreen";
      form.reset();
    } else {
      message.innerHTML = "❌ Oops! Something went wrong. Please try again.";
      message.style.color = "red";
    }

    // Reset button
    submitBtn.disabled = false;
    submitBtn.innerHTML = originalText;
  });
});
