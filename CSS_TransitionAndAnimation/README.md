# CSS TRANSITION

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

* Transition Delay
* Inicia a animação após um tempo determinado
``` css
transition-delay: 2s;
```

* Shortcut do uso da transition
``` css
transition: background-color 1s ease 4s; /* Property, duration, timing function e delay */
```
* Animação estilingue
``` css
transition: all 1s cubic-bezier(.29, 1.01, 1, -0.68);
```
* Transition: all; -> independentemente do tipo da mudança ele autua, se voce alterar o tamanho, qnd ele for voltar pra forma original, ele voltara "all" tudo que foi alterado para original
``` css
transition: all 1s linear 0s;
```
* Opacity: 0 -> animação transparente
``` css
opacity: 0;
transition: opacity 1s linear 0s;
```

# CSS ANIMATION

* Algo que se anima ou recebe alterações sem a necessidade da interação do usuário diferente do transition
* Uma animação é executada assim que voce carrega a página, logo depois de executa-lá os objetos voltam as suas propriedades padrões
* Trabalha com uma propriedade chamada **keyframes**
* Em uma keyframe voce sempre inicia com o @keyframes e logo em seguida vem o nome que voce dará para sua animação
* Ex criação de uma animação
``` css
@keyframes example-one{
                
}
```
* FROM -> Aonde e como a animação irá começar
``` css
@keyframes example_one{
    from{
        background-color: blueviolet;
    }
}
```
* TO -> para onde a animação deve ir
``` css
@keyframes example_one{
    from{
        background-color: blueviolet;
    }

    to{
        background-color: rosybrown;
    }
}
```
* Para o animation funcionar ele precisa de duas propriedades a **animation-name** e a **animation-duration**

* Após criar uma animação voce precisa chama-lá no objeto que receberá essa animação
``` css
.ball{ /* Estou dizendo que a classe ball irá receber essa animação "example-one" */
    width: 100px;
    height: 100px;
    border-radius: 100%;
    background-color: red;
    position: relative;

    animation-name: example_one; /* chamando a animação pelo seu nome */
    animation-duration: 4s; /* Irá levar 4s para funcionar do "from" até o "to" */
}
```

* animação com porcentagem -> funciona como se fosse um carregamento
* Depende do tempo de duração que voce colocou, as porcentagens vale de acordo com a duração da animação
* Utilizando o **position: relative** voce pode alterar a posição do elemento criando uma animação mudando-o de posição
* **Animation-delay: 2s** -> na hora que eu executar minha pagina ele demorará dois segundos para executar a animação
* **animaiton-iteration-count: 2;** define quantas vezes uma animação irá acontecer, no caso qnd chegar ao fim ele executará mais uma vez, pois o valor é dois
* **!IMPORTANT** O delay só funciona na hora de iniciar pela primeira vez a animação no carregamento da página, ou seja para as proximas vezes que ela acontecer com o **animation-iteration-count** ela iniciará diretamente sem o delay
* **animation-iteration-count: infinite;** Faz com que a animação rode infinitamente!
* **animation-direction: reverse;** essa propriedade faz com que mude a direção em que a animação acontece, ex: caso voce use o reverse como valor, ao invés da animação começar no 0% até 100%, ela começara do 100% e irá até o 0%;
* **animation-direction: alternate;** esse valor irá alternar, começará no 0% e irá até o 100%, do 100% irá até o 0% e do 0% irá até o 100% novamente, ou seja ele irá ficar alternando começando do 0 e dps do 100 // **alternate-reverse** Esse começa do 100% e vai até o 0%, dps do 0% ao 100%, dps do 100% ao 0%, mesma coisa do alternate só que ao contrário;
``` css
.ball{
    width: 100px;
    height: 100px;
    border-radius: 100%;
    background-color: red;
    position: relative;

    animation-name: example-two;
    animation-duration: 10s;
    animation-delay: 2s;
    animation-iteration-count: 2;
}

@keyframes example-two{
    0%{
        background-color: blueviolet;
        top: 0;
        left: 0;
    }

    25%{
        background-color: rosybrown;
        left: 600px;
        top: 0;
    }

    50%{
        background-color: blue;
        left: 600px;
        top: 600px;
    }

    75%{
        background-color: yellow;
        left: 0;
        top: 600px;
    }

    100%{
        background-color: red;
        left: 0;
        top: 0;
    }
}
```
## animation-timing-function

* Funciona exatamente como funcionava no transition porém agora serve pro animation
* A unica diferença é a do animation msm, de iniciar assim que a página é carregada
* **Linear** **Ease** **Ease-in** **Ease-out** **Ease-in-out**

## animation-fill-mode

* É utilizado quando voce necessita que a animação comece em um lugar (valor padrão dela)
* E termine em outro lugar alterando o seu valor padrão para o valor final em que voce deseja que ela pare
* Esse é o valor forwards -> após termino da animação ele para com as propriedades que estão no "to" ou no "100%"
``` css
animation-fill-mode: forwards;
```

* backwards -> o elemento ele irá manter os valores definidos na primeira chave antes da animação
* Ou seja, faz com que no periodo que o delay esteja rolando o elemento fique com os elementos do "from" e não de seu valor padrão
* Porém, logo após a passagem do delay e inicio da animação ele retorna ao seu valor padrão ou ao proximo valor de acordo com a animação
``` css
animation-fill-mode: backwards;
```

* both -> funciona como os dois modos acima juntos, o bakcwards e o forwards
* Ou seja, quando começa a animação e está no delay o elemento tem as propriedades do "from" ou do "0%"
* Porém quando passa o delay e ela inicia, ela passa para as propriedades do "to" ou do "100%" e permanece com elas após a animação
``` css
animation-fill-mode: bpth;
```