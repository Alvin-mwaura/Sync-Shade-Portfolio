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
