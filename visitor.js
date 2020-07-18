fetch('http://168.62.38.160/health')
  .then(response => response.json())
  .then(data => console.log(data));