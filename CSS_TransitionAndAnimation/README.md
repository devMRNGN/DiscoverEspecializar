# CSS Transições e Animações

* Propriedade que nós usamos quando mudamos de valor alguma coisa
* permite que a transição seja feita de forma gradual 
* Só pode ser usado com propriedades que são quantificaveis: Height, Width e etc

## Propriedades

* Transition-property -> aceita como valor a propriedade que irá ocorrer a transição
* Uma transition funciona apenas aonde ela está, caso voce não coloque na ida e na volta, ele só irá funcionar na ida e dps qnd tirar o mouse ele voltará sem a transition
* background-color é só um exemplo, também podemos por width, height e etc
* o valor que voce colocará será a propriedade que voce quer q altere quando acontecer a transição
``` css
    transition-property: background-color; 
```

* transition-duration -> aceita como valor a quantidade de tempo para completar totalmente a transição
``` css
    transition-duration: 1s;
```

* Exemplo em código: um circulo vermelho alinhado ao meio, aonde quando passamos o mouse por cima, ele muda de cor para amarelo em 1s e após retirarmos o mouse, ele volta pro vermelhor tbm dps de 1s
* transition-property: all -> irá transicionar qualquer coisa que mudar
``` html
<!DOCTYPE html>
<html>
    <head>
        <title>CSS Transition</title>
        <style>
            body {
                display: flex;
                justify-content: space-around;
                align-items: center;
                height: 100vh;
            }
            
            .box-red{
                width: 100px;
                height: 100px;
                border-radius: 100%;
            }

            .box-red{
                background-color: #f00;
                transition-property: all;
                transition-duration: 2s;
            }

            .box-red:hover{
                background-color: yellow;
                transition-property: background-color, width;
                transition-duration: 3s;
                width: 250px;
            }
        </style>
    </head>

    <body>
        <div class="box-red"></div>
    </body>
</html>
```

## Transition time functions

* É um tipo de animação
* Função que conseguimos determinar o tempo de progresso da animação

* animação mais lenta no inicio, rapida no meio e um final lento(valor padrão)
```css 
transition-time-function: ease; 
```
* Tem a mesma velocidade do inicio ao fim
``` css
transition-time-function: linear;
```
* Inicio lento quando chega na metade vai mais rapido
``` css
transition-time-function: ease-in;
```
* Tem um final mais lento
``` css
transition-time-function: ease-out;
```
* Permanece com as duas extremidades mais lentas que o easy
``` css
transition-time-function: ease-in-out;
```
* HTML

``` HTML
<!DOCTYPE html>
<html>
    <head>
        <title>CSS Transition</title>
        <style>
            .line{
                width: 100%;
                background-color: blue;
                height: 25px;
                margin-bottom: 10px;

                transition-property: width;
                transition-duration: 1s;
            }

            body:hover .line{
                width: 20px;
                background-color: rgb(255,0,234);
            }

            .ease{
                transition-timing-function: ease;
            }

            .linear{
                transition-timing-function: linear;
            }

            .ease-in{
                transition-timing-function: ease-in;
            }

            .ease-out{
                transition-timing-function: ease-out;
            }
        
            .ease-in-out{
                transition-timing-function: ease-in-out;
            }
        </style>
    </head>

    <body>
        <div class="line ease">EASE</div>
        <div class="line linear">LINEAR</div>
        <div class="line ease-in">EASE-IN</div>
        <div class="line ease-out">EASE-OUT</div>
        <div class="line ease-in-out">EASE-IN-OUT</div>
    </body>
</html>
``` 