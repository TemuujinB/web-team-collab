var minusButton = document.querySelector('.minus-btn');
var plusButton = document.querySelector('.plus-btn');
var quantityInput = document.querySelector('.quantity-input');

minusButton.addEventListener('click', function() {
  var currentValue = parseInt(quantityInput.value);
  if (currentValue > 1) {
    quantityInput.value = currentValue - 1;
  }
});

plusButton.addEventListener('click', function() {
  var currentValue = parseInt(quantityInput.value);
  quantityInput.value = currentValue + 1;
});
