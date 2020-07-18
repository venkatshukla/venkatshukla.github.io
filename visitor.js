fetch('https://venkatshukla.tk/health')
  .then(response => response.json())
  .then(data => console.log(data));