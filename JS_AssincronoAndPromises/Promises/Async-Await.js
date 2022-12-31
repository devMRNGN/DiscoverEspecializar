const promessa = new Promise((resolve, reject) => {
    return resolve('ok');
})


// Função assincrona é usada para substituir o .then, .finally e .catch é uma escrita mais facil
async function start() {
    try {
        const result = await promessa;       
        console.log(result);
    } catch(error) {
        console.log(error);
    } finally {
        console.log('Rodar sempre');
    }
}

start();