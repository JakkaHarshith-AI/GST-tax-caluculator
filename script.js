document.getElementById('calculate').addEventListener('click', function () {
  // Get input values
  const price = parseFloat(document.getElementById('price').value);
  const gstRate = parseFloat(document.getElementById('gst').value);

  // Validate inputs
  if (isNaN(price) || isNaN(gstRate)) {
    alert('Please enter valid numbers for price and GST rate.');
    return;
  }

  // Calculate GST and total price
  const gstAmount = (price * gstRate) / 100;
  const totalPrice = price + gstAmount;

  // Display the result
  document.getElementById('totalPrice').textContent = ₹${totalPrice.toFixed(2)};
});
