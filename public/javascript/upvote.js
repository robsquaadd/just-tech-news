const upVoteHandler = async (e) => {
  e.preventDefault();
  const postID = window.location.toString().split("/")[
    window.location.toString().split("/").length - 1
  ];
  const response = await fetch("/api/posts/upvote", {
    method: "PUT",
    body: JSON.stringify({
      post_id: postID,
    }),
    headers: { "Content-Type": "application/json" },
  });
  if (response.ok) {
    document.location.reload();
  } else {
    alert(response.statusText);
  }
};

const upVoteButton = document.getElementById("upvote-btn");
upVoteButton.addEventListener("click", upVoteHandler);
