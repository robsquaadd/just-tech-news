const deleteButtonHandler = async (e) => {
  e.preventDefault();
  const id = window.location.toString().split("/")[
    window.location.toString().split("/").length - 1
  ];
  const response = await fetch(`/api/posts/${id}`, {
    method: "DELETE",
  });
  if (response.ok) {
    document.location.replace("/dashboard");
  } else {
    alert(response.statusText);
  }
};

const editPostHandler = async (e) => {
  e.preventDefault();
  const id = window.location.toString().split("/")[
    window.location.toString().split("/").length - 1
  ];
  console.log(id);
  const title = document.getElementById("post-title").value.trim();
  console.log(title);
  const response = await fetch(`/api/posts/${id}`, {
    method: "PUT",
    body: JSON.stringify({
      title,
    }),
    headers: {
      "Content-Type": "application/json",
    },
  });
  if (response.ok) {
    document.location.redirect("/dashbaord");
  } else {
    alert(response.statusText);
  }
};

const deleteButton = document.querySelector(".delete-post-btn");
deleteButton.addEventListener("click", deleteButtonHandler);
const editForm = document.querySelector(".edit-post-form");
editForm.addEventListener("submit", editPostHandler);
