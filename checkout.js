function selectDiv(card_product) {
  let selectedDiv =
  document.getElementsByClassName(card_product);

  if (selectedDiv) {
    selectedDiv.style.border =
  'blue';
  console.log(selectedDiv)
  }
}
