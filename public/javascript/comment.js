const commentEventHandler = async (e) => {
  e.preventDefault();
  const comment = document.getElementById("comment-body").value.trim();
  const post_id = window.location.toString().split("/")[
    window.location.toString().split("/").length - 1
  ];
  if (comment) {
    const response = await fetch("/api/comments", {
      method: "POST",
      body: JSON.stringify({
        post_id: post_id,
        comment_text: comment,
      }),
      headers: {
        "Content-Type": "application/json",
      },
    });
    if (response.ok) {
      document.location.reload();
    } else {
      alert(response.statusText);
    }
  }
};

const commentForm = document.getElementById("comment-form");
commentForm.addEventListener("submit", commentEventHandler);
