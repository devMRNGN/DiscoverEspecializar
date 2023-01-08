# Typescript

* Para programar Typescript, vá no Typescript Playground no navegador
* É um Javascript Tipado, informativo
* Serve pra não deixar pontos sem nó no código e evitar que erros aconteçam
* Adicionar Typescript npm
``` npm install typescript --save-dev ```

## Tipagem

``` typescript
function showTicket(user: string, ticket: number) {
    console.log(`Olá ${user}. O número do seu ticket é ${number}`);
}
```
* Aqui voce está explicitamente dizendo pra função que o parametro user é uma string e o ticket é um number

#### Any

* Quando voce declara uma variavel como Any, voce está dizendo que ela pode ser qualquer tipo de valor
* Não é muito recomendado o Any, pois da na mesma de que voce não estivesse tipando a variavel

``` typescript
let info: any;

info = [1,2,3];
info = "João Marangoni";
info = 54545;
info = {name: "João", ticket: 45454}
```


#### Declarando uma variavel tipada de forma explicita

* Dizendo para ela que o tipo de name é string

``` typescript
const name: string = "João Marangoni";
const number: number = 45454;
const true: boolean = true;
const nulo: null = null;
```

#### Declarando de forma implicita

* Quando voce passa para uma variavel um conteudo e depois tenta passar outro, o proprio typescript irá te informar que o tipo da variavel é o primeiro q vc definiu 
* EX:
``` typescript
let name = "João"; // Voce definiu para ele que é uma string implicitamente pois foi declarada recebendo uma string
name = 5454; // CASO TENTE PASSAR UM NUMBER, ELE DARÁ ERRO, pois irá dizer que o correto é uma string
```

#### Declarando arrays

* Declarando um array que aceita apenas numeros

```typescript
let numbers:number[];
numbers = [1,2,3,4,5];
```

* Outra maneira de criar dizendo que é um array e dps o conteudo q vai nele
``` typescript
let users: Array<string>;
users = ["João","Maria","Carla"];
let numbers: Array<number>;
numbers = [1,2,34,4,3];
```

## Tipagem de funções

* Quando uma função não tem retorno ela tem um tipo que é "VOID" significa que não tem retorno
* Declarando uma função sem retorno em TS, se tentar por um return, irá dar erro, pois a função não aceitara retorno

``` typescript
function showMessages(message: string): void {
    console.log(message);
}
```
* Especificando o tipo de retorno de uma função
* Caso não especifique o typescript irá definir de acordo com o parametro que ela está recebendo

```typescript
function showMessages(message:string): string {
    return message; // Estou dizendo que o retorno é tipo string
    // Caso o conteudo de message seja um number, ela irá da erro, pois espera um retorno do tipo string
    // O mesmo vale pros outros tipos :boolean, :number, :string e etc
}
```

## Union

* Operador union entra para a gente dizer que uma variavel pode aceitar mais de um tipo

```typescript
function printUserId(id: number | string): number | string{ // Aqui estamos dizendo que a função pode receber como argumento, tanto number quanto string, e ela pode retornar tanto number como stirng tbm
    console.log(`O ID do usúario é: ${id}`);
}
```

## Generics

* Ele é utilizado para deixar a tipagem flexível, só que o generic tem uma diferença
* Ele irá definir a tipagem em execução, só que a tipagem que voce definir no momento da declaração é a que irá valer
* Se voce definir a tipagem como number, ele só aceitará number apartir dali, se voce definir como string, ele só aceitará uma string apartir dali
* Modos de represetnar generics
* S => state
* T => type
* K => key
* V => value
* E => element

```TypeScript
function useState<T: string | number = string>() {
    let state: T;

    function get() {
        return state;
    }

    function set(newValue: T) {
        state = newValue;
    }

    return {get, set};
}

let newState = useState<string>();
newState.get();
newState.set(123);
```

* Esse useState<t: string | number = string>() está dizendo que o usuario pode definir a função como number ou string, porém se ele não definir ela será considerada uma string 

## Type

* Como reaproveitar tipos

``` typescript
const userId: string | number | undefined; // Notem que estamos repetindo o mesmo tipo para duas variaveis com isso podemos criar um tipo e dar a elas esse tipo 
const adminId: string | number | undefined;

type IdType = string | number | undefined;

const userId: IdType; // string, number e undefined
const adminId: IdType;
```

## Type Assertions 

* Serve para quando o typescript não sabe definir o tipo, ai voce irá dizer para ele qual tipo é!

```typescript
type UserResponse = {
    ui: number;
    name: string;
    avatar: string;
}

let userResponse = {} as UserResponse;
```

* Estamos dizend oque o tipo do objeto é esse 

## Objetos

* Sempre que formos criar tipos, considerem sempre criar tipos com letra Maiuscula

``` typescript
type Point = {
    x: number;
    y: number;
}

function printCoord(points: Point) {
    console.log(`O eixo x é: ${points.x}`);
    console.log(`O eixo y é: ${points.y}`);
}

printCoord({x: 101, y: 50});
```
``` typescript
type User = {
    name: string;
    email: string;
    age: number;
    isAdmin?: boolean;
}

const newUser: User; // estou dando pra newUser todo o tipo de User então ele conterá todas propriedades do objeto tipado

// Deixar uma propriedade ocmo opcional isAdmin?: boolean;

let newUser: User = {
    name: "João Marangoni",
    email: "joao.taljkdhs@gmail.com",
    age: 20
}
```

## Intersecção de Tipos

``` typescript
type Profile = {
    id: number;
    name: string;
}

type Char = {
    nickname: string;
    level: number;
}

type PlayerInfo = Profile && Char; // Com isso estou criando um novo tipo que está pegando a propriedade dos dois tipos acima, ou seja o PlayerInfo irá conter o id, name, nickname e level

let info: PlayerInfo = {
    id: 5,
    name: "João",
    nickname: "jotamrngn",
    level: 1
}
```

## Interface

```typescript
interface User {
    id: number;
    name: string;
}

let newUser: User = {
    id: 1, 
    name: "João Marangoni"
}
// Ou
function registerNewUser(newUser: User) {

}
```


* Qual a diferença de type e interface:
* O type é mais recomendados por ser mais simples e mais flexível
* As interfaces são úteis e são muito utilizadas para quem gosta de usar lib e/ou programa em POO
* Mas ambas servem pras mesmas coisas e cumprem o mesmo proposito

``` typescript
type TUser = {
    id: number;
    name: string;
}

type TPayment = {
    method: string;
}

type TAccount = TUser && TPayament;

// A diferença da criação dos dois é bem sútil, apenas sintaxe

interface IUser {
    id: number;
    name: string;
}

interface IPayment {
    method: string;
}

interface IAccount extends IUser, IPayment {};
```

## Tsconfig

* No google typescript playground voce pode configurar as informações que voce quer que não de erro
* Exemplo, caso queira que não de erro ao não definir explicitamente um Any, voce tem a opção la!

