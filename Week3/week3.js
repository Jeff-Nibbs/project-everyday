document.addEventListener("DOMContentLoaded", () => {
  const reviews = [
    {
      title: "Review of Tech Product 1",
      content: "This is a great product because...",
    },
    {
      title: "Review of Tech Product 2",
      content: "I found this product to be...",
    },
    {
      title: "Review of Tech Product 3",
      content: "The best feature of this product is...",
    },
  ];

  const reviewList = document.getElementById("review-list");
  reviews.forEach(review => {
    const reviewDiv = document.createElement("div");
    reviewDiv.classList.add("review");

    const reviewTitle = document.createElement("h3");
    reviewTitle.textContent = review.title;
    reviewDiv.appendChild(reviewTitle);

    const reviewContent = document.createElement("p");
    reviewContent.textContent = review.content;
    reviewDiv.appendChild(reviewContent);

    reviewList.appendChild(reviewDiv);
  });
});
