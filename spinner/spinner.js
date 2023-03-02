window.addEventListener('load', function() {
    const loadingSpinner = document.querySelector('.loading-spinner');
    setTimeout(function() {
      loadingSpinner.remove()
    }, 3000);
  });