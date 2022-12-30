/*
* Promise
*
* A promessa de que algo irá acontecer
* Poderá dar certo ou errado,
* mas irá acontecer
*/
let aceitar = true;

console.log('Order uber');

const promise = new Promise((resolve, reject) => {
    if(aceitar) {
        return resolve('Order accepted!');
    }
    
    return reject('Request denied!');
});

promise.then(result => console.log(result)).catch(erro => console.log(erro)).finally(() => console.log('finished'));

console.log('Waiting');