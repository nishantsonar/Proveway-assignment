function selectOffer(offer, price) {
    // Hide all selectors
    document.querySelectorAll('.selectors').forEach(selector => {
      selector.style.display = 'none';
    });
    
    // Show selected offer's selectors
    document.getElementById(`selectors${offer}`).style.display = 'grid';
    
    // Update total price
    document.getElementById('total').innerText = price.toFixed(2);
  }