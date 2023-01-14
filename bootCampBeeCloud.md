# Bootcamp beeCloud JAVA content

* Conteudo adquirido participando do bootcamp da beeCloud
* Um pouco sobre java e a plataforma "SalesForce"
* Utilizando Apex também!

``` java
public with sharing class aula5 {
    public aula5() {
        /* 
            create new apex class -> criar uma nova classe
            Escolher a primeira opção para ele salvar na pasta das classes
            Fsdx deploy -> usado para upar os códigos para o salesforce
            ctrl shift p -> execute anonymous -> executa todo o trecho no apex
            mostrando o log e etc
        */
        // System.debug() <- console.log()

        // Variaveis comuns
        String name = 'João Marangoni';
        Integer pens = 5;
        Decimal float = 5.2;
        Boolean haveName = true;
    
        // Variaveis Apex
        Id treinadorId = '001Dn00000DE2wmIAD'; // Aceita apenas Id's do salesForce
        Account treinador = new Account();
        treinador.Name = 'João Marangoni'; // Acessando os campos de registro de um treinador
        treinador.EmailProfessor__c = 'joao.tadeuzi00@gmail.com'; 

        // Arrays
        List<String> namesList = new List<String>(); // Parecido com o array do JS aceita itens iguais
        Set<String> namesSetList = new List<String>(); // Array parecido com JS, porém só aceita itens unicos, da erro se houver itens iguais
        namesList.add('João Marangoni'); // Adicionando um nome ao array, metodo parecido com o "push"
        names.size(); // Método parecido com o length, verifica o tamanho atual do array, ou seja quantos itens tem nel
        names.isEmpty(); // Método que verifica se um array esta vazio ou não, retorna apenas (True and False);

        // Maps
        Map<Integer, String> jogadores = new Map<Integer, String>(); // Instanciando um mapa, ele recebe um "ID" como primeiro valor, e um dado como segundo
        jogadores.put(7,'João Marangoni'); // Método para adicionar algo dentro do mapa
        jogadores.get(7); // Método para acessar algo dentro de um mapa, no caso só passa o "ID" e ele localizará o valor correspondente a esse ID

        // Mexendo com banco de dados SalesForce
        // Insert "nome da variavel" ex:
        Account treinador = new Account(); // Instanciando o objeto e adicionando coisas nele
        treinador.Name = 'João Marangoni';
        treinador.EmailProfessor__c = 'joao.tadeuzi00@gmail.com';
        treinador.Phone = '19945454453';
        treinador.ShippingCity = 'Mogi Mirim';
        // Inserindo o conteudo no salesForce
        insert treinador; // Com esse comando voce insere dentro do Banco de dados os conteudos adicionados a cim
        // Pegando dados do banco de dados SalesForce
        Account conta = [SELECT Name, Description FROM Account WHERE id = '001Dn00000DE2wmIAD']; // Nessa linha estou selecionando o campo nome e descrição, do objeto Account onde o id seja = ....
        // Alterando dados do banco de dados
        conta.Name = 'Arthur'; // Estou passando o novo nome dessa conta
        update conta; // Estou upando essa nova alteração para o banco de dados
        // Deletando dados do banco de dados
        delete conta; // Estou deletando o registro dessa conta que eu instanciei acima;
    }  
}
```