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

  // Allow only numbers while typing
  function onlyNumbers(input, errorElement, fieldName, minLen = null, maxLen = null) {
    input.addEventListener("input", () => {
      input.value = input.value.replace(/[^0-9]/g, ""); // remove non-numbers

      // Validation check
      if (minLen && maxLen) {
        if (input.value.length < minLen || input.value.length > maxLen) {
          errorElement.style.display = "block";
          errorElement.textContent = `${fieldName} must be ${minLen}-${maxLen} digits.`;
        } else {
          errorElement.style.display = "none";
        }
      } else {
        if (input.value.length === 0) {
          errorElement.style.display = "block";
          errorElement.textContent = `${fieldName} is required.`;
        } else {
          errorElement.style.display = "none";
        }
      }
    });
  }

  // Phone = 7–15 digits
  onlyNumbers(phoneInput, phoneError, "Phone number", 7, 15);

  // ID = any digits (at least 1)
  onlyNumbers(idInput, idError, "ID number");
});
