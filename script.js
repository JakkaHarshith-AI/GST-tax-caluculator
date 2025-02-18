document.getElementById('calculate').addEventListener('click', function () {
  // Get input values
  const price = parseFloat(document.getElementById('price').value);
  const gstRate = parseFloat(document.getElementById('gst').value);

  // Clear previous error and result
  document.getElementById('error').textContent = '';
  document.getElementById('result').textContent = '';

  // Validate inputs
  if (isNaN(price) || price <= 0) {
    document.getElementById('error').textContent = 'Please enter a valid price (must be a positive number).';
    return;
  }
  if (isNaN(gstRate) || gstRate < 0) {
    document.getElementById('error').textContent = 'Please enter a valid GST rate (must be a positive number).';
    return;
  }

  // Calculate GST and total price
  const gstAmount = (price * gstRate) / 100;
  const totalPrice = price + gstAmount;

  // Display the result
  document.getElementById('result').textContent = `Total Price: ₹${totalPrice.toFixed(2)}`;
});
