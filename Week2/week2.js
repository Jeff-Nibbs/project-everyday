function openCard(element) {
  let activeCard = document.querySelector(".active");
  if (activeCard == null) {
    element.classList.add("active");
  } else if (activeCard != element) {
    element.classList.add("active");
    activeCard.classList.remove("active");
  } else if (activeCard == element) {
    element.classList.remove("active");
  }
}
