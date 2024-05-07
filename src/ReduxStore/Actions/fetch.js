fetch('https://shopaholic.onrender.com/product')
  .then(response => response.json())
  .then(data => {
    console.log('API Data:', data);
  })
  .catch(error => {
    console.error('Error fetching data:', error);
  });