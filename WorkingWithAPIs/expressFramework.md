# Express

* Conjunto de arquivo com códigos para utilizar no node <br>
* É um framework para criar APIs rapido e facil <br>
* Criar projetos robustos com eles <br>
* Instalar usando Yarn ou NPM <br>

## PASSO A PASSO

* npm i express <br>
* criar um index.js <br>
* chamar o modulo express -> const express = require("express") <br>
* Inicializar a constante express -> const app(aplication) = express(); <br>
* Sempre que quiser utilizar qualquer coisa do express, utilizar app.(oq vc quiser utilizar do express); <br>
```
const express = require('express');

const app = express();
```
## Criando servidor

* app.listen('porta') -> Esse comando vai ficar ouvindo uma porta; <br>
* voce roda o arquivo em que o express está sendo chamado, para que sua porta comece a funcionar no google ex: localhost:3000 <br>
* Até aqui voce ja conseguiu criar um servidor <br>
```
app.listen('3000');

app.route('/').get((req, res) => res.send("hello"));
```
## Criar conteudo na rota GET

* app.route('/') -> conteudo principal <br>
* app.route('/sobre') -> conteudo de uma rota sobre <br>
* REQ -> requisição <br>
* RES -> response <br>
```
app.route('/').get((req, res) => res.send("hello"));
app.route('/sobre').get((req, res) => res.send("hello sobre"));
```