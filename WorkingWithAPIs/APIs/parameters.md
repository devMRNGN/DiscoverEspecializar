# Parametros nas requisições


## Modos de enviar um parametro/requisição
* Forma de passar pra dentro do código informações que não existiam la dentro antes


* Formas de enviar parametros pelo link
``` 
localhost:3000/?name=joaomarangoni
localhost:3000/?cidade=mogimirim
localhost:3000/olaalunos
```
* Existe também a forma de passar pelo body com um POST

``` json
{
    "name": "João Marangoni",
    "cidade": "Mogi Mirim"
}
```

# Tipos de parâmetros

## BODY PARAMS

* Tipo BODY -> As informações são enviadas de uma forma escondida, enviada comumente em JSON <br>
* Sempre que formos receber parametros de um BODY, devemos usar um Middleware app.use(express.json()) <br>
``` json
{
    "nome": "João Marangoni",
    "cidade": "Mogi Mirim",
    "livros-favoritos": [
        "neuromancer",
        "codigo limpo",
        "essencialismo"
    ]
}
```
* Enviando e mostrando uma requisição/parametros


``` javascript
app.route("/").post((req, res) => {
    const {nome, cidade} = req.body;
    res.send(`Meu nome é ${nome} e minha cidade é ${cidade}`);
});
```

### Verbos que aceitam o BODY

* POST

* PUT

* PATCH

## ROUTE PARAMS

* Forma de enviar os parametros pela rota <br>
* A partir do momento que voce diz que o código irá receber algum parametro na rota, a rota não é mais apenas "/" e sim necessita do parametro para que o GET a encontre
* Não importa o que voce escreveu na definição do parametro, é só o modo de acessa-lo, a pessoa pode enviar qualquer coisa na rota, que será armazenado no nome que vc definiu na rota!
* Recomanda-se qnd for receber um parametro em uma rota, criar outra rota para isso, e manter a rota padrão "/" sem parametros
* EX:

``` javascript
app.route("/").get((req, res) => res.send("Olá"));
app.route('/:nome').get((req, res) => res.send(req.body.params.nome));
// IMPORTANTE 
res.send(req.body.params.nome); // Quando voce envia ou recebe parametros pela rota, vc pega ele no req.body.params
```

* Caso ele receba parametro, ele mostrará o parametro, mas caso ele não recebá, continuará mostrando algo no caso "Olá"
* Forma de enviar parametros na rota localhost:3000/parametro
* Caso voce coloque dois parametros separados por barra, o ultimo parametro ele entenderá que é outra ROTA então cuidado
* EX: localhost:3000/parametro/parametro2 = o parametro 2 ele ira considerar como uma porta e não um parametro

### METODOS ROUTE PARAMS

* OS ROUTE PARAMS ACEITA APENAS "GET" como METODO

## QUERY PARAMS

* O QUERY NÃO NECESSITA DO app.use(express.json()) 
* POIS O QUERY NÃO É UM JSON, É UM ARQUIVO QUERY
* EX DE FORMA DE ENVIAR UM QUERY PARAMS

``` localhost:3000/?nome=joao&cidade=São Paulo ```

* Forma de se chamar
``` javascript 
app.route("/").get((req, res) => res.send(req.query)); // Voce acessa os parametros enviados pelo metodo QUERY acessando o req.query
```

* O query params transforma todos os parametros em um objeto QUERY
* Ex: caso envie ?nome=joao&cidade=São Paulo
* Voce recebera o seguinte QUERY

``` json
{
    "nome": "joao",
    "cidade": "São paulo"
}
```
* Código zoando que fiz para realizar operações entre dois numeros usando query params

``` javascript
app.route("/").get((req, res) => {
    const number1 = +req.query.number1;
    const number2 = +req.query.number2;
    const operator = req.query.operator;
    switch(operator) {
        case "-":
            const result = number1 - number2;
            res.send(`O resultado é ${result}`);
        break;
    }
});
```

* Caso queira acessar apenas um objeto do query, é só usar ex: req.query.nome