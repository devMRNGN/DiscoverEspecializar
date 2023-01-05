# Consumindo API do github

* Express não faz requisição em APIs externas, Só cria as proprias APIS
* Por isso usaremos o Axios, para conseguirmos consumir APIs externas

## Axios

* Instalando axios <br>
``` node
npm i axios
```
* Utilizando Axios no projeto <br>
``` javascript
const axios = require("axios"); // importando axios

app.route("/").get((req, res) => {
    // Nessa linha abaixo estou consumindo a API do meu usuario
    axios.get('https://api.github.com/users/devMRNGN')
    .then(result => res.send(result.data))
    .catch(error => console.error(error));
    // Axios trabalha com promisses logo retornará um then, catch, finally
})
```