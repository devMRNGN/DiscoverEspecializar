# Aprendizados REACT

* é uma biblioteca do JavaScript que tem como objetivo a criação de interfaces
* vitejs.dev/guide/#trying-vite-online -> pesquisar como começar um projeto com REACT
* O react funciona atravez de funções e obrigatoriamente voce precisa ter um retorno e esse retorno sempre será em HTML
* Todo conteudo será inserido no elemento ROOT no caso pq estamos renderizando ele exatamente nesse arquivo utilizando a DOM

## Criando o projeto com react

``` node 
npm create vite@latest reactapp --template react 
// Entrar na pasta reactapp criada e inserir
npm install 
// Com isso terá instalado as dependencias
```
#### .JSX

* JSX Sintaxe === É a sintaxe que o react usa para que possamos criar nossas interfaces de forma declarativa
* Dentro do JSX temos uma função e o retorno dela será HTML -> que será o conteudo renderizado na tela

## Fragment

* Regras
- Uma função JSX retorna apenas UM elemento único HTML <br>
- Toda tag html que está no retorno da função JSX, voce necessita por a tag de fechamento "/>" <br>

## Importando arquivos CSS

* Dentro da pasta Scr(Source) cria uma paste Style e la voce coloca os CSSs
* Para importar um CSS para o React Jsx {
    * no main.jsx crie um 
    ``` jsx
        import './style/global.css' // exemplo
    ```
}
* Colocando no main ele será replicado para toda a aplicação
* Se voce colocar um arquivo por exemplo home.jsx, numa pasta chamada home e renomealo para index.jsx, automaticamente voce estará chamando ele, pq quando vc não identifica no import o arquivo, ele chama o index.jsx por padrão