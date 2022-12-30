fetch('https://api.github.com/users/devMRNGN')
.then(response => response.json(9))
.then(data => fetch(data.repos_url))
.then(response => response.json())
.then(data => console.log(data))
.catch(error => console.log(error));