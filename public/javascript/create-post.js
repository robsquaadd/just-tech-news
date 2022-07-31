const createPostEventHandler = async (e) => {
  e.preventDefault();
  const title = document.getElementById("post-title").value.trim();
  const post_url = document.getElementById("post-url").value.trim();
  const response = await fetch("/api/posts", {
    method: "POST",
    body: JSON.stringify({
      title,
      post_url,
    }),
    headers: { "Content-Type": "application/json" },
  });
  if (response.ok) {
    document.location.replace("/dashboard");
  } else {
    alert(response.statusText);
  }
};

const createPostButton = document.querySelector(".new-post-form");
createPostButton.addEventListener("submit", createPostEventHandler);
