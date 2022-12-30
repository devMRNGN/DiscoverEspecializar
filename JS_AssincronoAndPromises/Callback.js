// Funções aceitam qualquer tipo de dado como argumento
function printData(data) {
    console.log(data);
    console.log(data())
}

/*
printData(1);
printData('texto');
printData(true);
printData({nome: "João"});
printData([1,2,3]);
*/
printData(function () {
    return 'Olá mundo';
});