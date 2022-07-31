const loginEventHandler = async (e) => {
  e.preventDefault();
  const email = document.getElementById("email-login").value.trim();
  const password = document.getElementById("password-login").value.trim();
  if (email && password) {
    const response = await fetch("/api/users/login", {
      method: "POST",
      body: JSON.stringify({
        email,
        password,
      }),
      headers: { "Content-Type": "application/json" },
    });
    if (response.ok) {
      document.location.replace("/dashboard");
    } else {
      alert(response.statusText);
    }
  }
};

const signupEventHandler = async (e) => {
  e.preventDefault();
  const username = document.getElementById("username-signup").value.trim();
  const password = document.getElementById("password-signup").value.trim();
  const email = document.getElementById("email-signup").value.trim();
  if (username && email && password) {
    const response = await fetch("/api/users", {
      method: "POST",
      body: JSON.stringify({
        username,
        email,
        password,
      }),
      headers: { "Content-Type": "application/json" },
    });
    if (response.ok) {
      console.log("success");
    } else {
      alert(response.statusText);
    }
  }
};

const loginForm = document.getElementById("login-form");
loginForm.addEventListener("submit", loginEventHandler);
const signupForm = document.getElementById("signup-form");
signupForm.addEventListener("submit", signupEventHandler);
