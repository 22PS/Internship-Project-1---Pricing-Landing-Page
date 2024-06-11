document
  .getElementById('pricing-toggle')
  .addEventListener('change', function () {
    const prices = document.querySelectorAll('.price');
    if (this.checked) {
      // Yearly pricing
      prices[0].textContent = '$199.99/year';
      prices[1].textContent = '$399.99/year';
      prices[2].textContent = '$999.99/year';
    } else {
      // Monthly pricing
      prices[0].textContent = '$19.99/month';
      prices[1].textContent = '$39.99/month';
      prices[2].textContent = '$99.99/month';
    }
  });
