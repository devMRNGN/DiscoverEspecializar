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
``` javascript
const express = require('express');

const app = express();
```
## Criando servidor

* app.listen('porta') -> Esse comando vai ficar ouvindo uma porta; <br>
* voce roda o arquivo em que o express está sendo chamado, para que sua porta comece a funcionar no google ex: localhost:3000 <br>
* Até aqui voce ja conseguiu criar um servidor <br>
``` javascript
app.listen('3000');

app.route('/').get((req, res) => res.send("hello"));
```
## Criar conteudo na rota GET

* app.route('/') -> conteudo principal <br>
* app.route('/sobre') -> conteudo de uma rota sobre <br>
* REQ -> requisição <br>
* RES -> response <br>
``` javascript
app.route('/').get((req, res) => res.send("hello"));
app.route('/sobre').get((req, res) => res.send("hello sobre"));
```
<br>
* Middleware <br>
* Transformando o conteudo recebido pelo post em JSON para que o servidor consiga ler <br>

``` javascript
app.use(express.json())
```
<br>
* Pegando o corpo da requisição e enviando como resposta <br>

``` javascript
app.route("/").post((req, res) => res.send(req.body));
```
<br>
* METODO PUT -> Editando informações <br>
- Alterando o que tem em author atraves do metodo PUT <br>
- Dizendo para o req.body pegar apenas o author <br>

``` javascript
let author = "João Marangoni";

app.route("/").get( (req, res) => res.send(author));

app.use(express.json());

app.route('/').put( (req, res) => {
    author = req.body.author;
    res.send(author);
});
```
<br>
* METODO DELETE -> Apagando informações <br>
- Quando passamos uma variavel pela rota chamamos de "params" <br>
ex: passando e acessando params <br>

``` javascript
app.route('/:identificador').delete((req, res) => {
    res.send(req.params.identificador);
});
``` 
<br>

* Explicando <br>
- 0101 foi armazenado na variavel identificador <br>
- Essa variavel vem dentro da requisição <br>
- Dentro da requisição ela vem dentro do params <br>
- Params é todas variaveis que vem dentro da URL <br>
- Podemos pegar ela atraves do .identificador <br>