function toggleDetails(pairNumber, price) {
    // Hide all details first
    document.querySelectorAll('.size-colour-container').forEach(el => {
        el.style.display = 'none';
    });

    // Show the selected pair's details
    document.getElementById('details-' + pairNumber).style.display = 'block';

    // Update the total price
    document.getElementById('total-price').style.display = 'block';
    document.getElementById('total-price').textContent = 'Total: DKK ' + price.toFixed(2);
}
