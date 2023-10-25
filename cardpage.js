let buttons = document.querySelectorAll("a.deletebtn");

function deletebtn_card(button) {
  let card = button.parentNode.parentNode.parentNode.parentNode;
  card.remove();
}

buttons.forEach((button) => {
  button.addEventListener("click", (event) => {
    if (event.target.classList.contains("bi-trash"))
      deletebtn_card(event.target.parentNode);
  });
});



