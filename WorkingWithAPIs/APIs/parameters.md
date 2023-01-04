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

## Tipos de parâmetros

* Tipo BODY -> As informações são enviadas de uma forma escondida, enviada comumente em JSON <br>
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

## Verbos que aceitam o BODY

* POST

* PUT

* PATCH