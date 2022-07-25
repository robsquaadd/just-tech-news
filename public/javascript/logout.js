const logoutEventHandler = async () => {
  const response = await fetch("/api/users/logout", {
    method: "POST",
    headers: { "Content-Type": "application/json" },
  });
  if (response.ok) {
    document.location.redirect("/");
  } else {
    alert(response.statusText);
  }
};

const logoutButton = document.getElementById("logout");
logoutButton.addEventListener("click", logoutEventHandler);
