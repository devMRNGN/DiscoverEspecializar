# Comandos avançados Banco de dados SQL

# Relação entre tabelas

* Quando voce relaciona uma tabela a algum dado de outra tabela(OBS: sempre tem que ser um dado que não se repita)
* Exemplo... Voce tem uma tabela aonde tem usuários e quando ele faz um post, voce precisa dizer que o post pertence a ele
* Então voce relaciona o usuário ao post, utilizando o nome de usuário pois não se repete
* ou também serviria neste caso o Id
* Em um banco de dados voce relaciona tabelas com contextos, exemplo, caso o número que identifica um professor(id) e um número que identifica um aluno(id) sejam iguais, não causa problemas, pois cada um esta em um contexto diferente
* Sempre que precisar relacionar duas tabelas, indica-se que crie outra tabela de relacionamento

## PRIMARY KEY

* Toda tabela necessita de um identificador
* **Primary key** é o Id da sua tabela, o que identifica cada dado nela
* **IMPORTANTE** Uma PRIMARY KEY é única, não pode se repetir numa tabela

## FOREING KEY

* Chave estrangeira, é quando voce utiliza o id de uma outra tabela para referenciar algo em sua tabela
* Ou seja, voce está pegando a primary key de uma outra tabela para utilizar em sua nova tabela para referenciar algum dado necessário na nova tabela
* Uma **FOREING KEY** pode se repetir várias vezes na tabela, diferentemente da **PRIMARY KEY**

## UNIQUE

* Quando colocamos UNIQUE na frente de um tipo de campo o campo só aceita valores unicos
* Ou seja, caso voce tenha um TEXT UNIQUE, caso voce tente repetir o mesmo nome ele dará erro, pois só pode existir um nome
* Exemplo, CPF é um item UNIQUE, pois ninguém possuí o mesmo cpf logo o banco de dados não permite cadastrar cpfs ou dados iguais

## TIPOS DE DADOS 

* **NUMBER**: INTEGER e DECIMAL
* **TEXT**: Textos e caracteres especiais
* **PRIMARY KEY**: Identificador da tabela, pode ser tanto text como number
* **FOREING KEY**: Indentificador de outra tabela
* **NULL**: Vázio

## UNIR TABELAS

* A funcionalidade de unir tabelas é importante no momento de fazer SELECT
* Suponhamos que possuimos duas tabelas: Departamentos e Funcionários
* A tabela Departamentos possuí os seguintes campos: **id_dept(PrimaryKey Integer), descricao(text)**
* A tabela Funcionários possuí os seguintes campos: **Id_funcionario(PrimaryKey Integer), nome(text), (cpf Integer Unique), id_departamento(foreingKey Integer)**

# COMANDOS

## SELECT FROM

* **SELECT FROM**: Selecionar de
* EX: trazer todos os funcionários e todos departamentos porém organizados por funcionários
* Selecione *(todos) da tabela funcionários
``` SQL
SELECT * FROM funcionarios 
```
## JOIN

* **JOIN**: Trazer conteúdo de duas tabelas que possuem um relacionamento
* Selecionar todos campos da tabela funcionarios e departamentos
* Estou selecionando todos dados da tabela funcionarios e da tabela departamento aonde o Id do departamento seja igual ao id do departamento cadastrado no funcionario
``` SQL
SELECT * FROM funcionarios
JOIN departamentos
ON departamentos.id_dept = funcionarios.id_departamento
```
* Com esse comando, nós receberiamos todos campos da tabela funcionarios e para cada funcionario iria trazer todos campos da tabela departamento que estão relacionados a eles, organizado por funcionarios

## JOIN WITH WHERE

* Fazer JOIN com WHERE
* Ou seja, quero por exemplo pegar apenas os funcionarios do departamento de TI
``` SQL
SELECT * FROM funcionarios
JOIN departamentos
ON departamento.id_dept = funcionarios.id_departamento
WHERE funcionarios.id_departamento = 2
```
## BUSCAR CAMPOS ESPECIFICOS COM JOIN

* Como trazer apenas os campos que nós queremos em um JOIN
* Ao invés do '*' voce menciona os campos que deseja, pois o 'asterisco' significa "todos"
* Alguns campos não são interessantes para quem está visualizando por exemplo: id e etc, mas são importantes para o banco de dados então qnd necessitar apenas de campos especificos para que seja mais visual, opte por pegar apenas os campos necessários
``` SQL
SELECT funcionarios.nome, funcionarios.cpf, departamentos.descricao 
FROM funcionarios
JOIN departamentos
ON departamentos.id_dept = funcionarios.id_departamento

```

## Alias "as"

* Alias serve para criar nomes apenas para o SELECT
* podemos mudar os nomes das tabelas e os nomes dos campos, apenas para utilizar no SELECT
* COMANDO "as"
* Exemplo abaixo, ao inves de termos que digitar sempre funcionarios e departamentos para acessar os dados
* podemos dizer que funcionarios chamará "func" no select e departamentos chamará "dept"
* também podemos mudar o nome de campos utilizando "as" em um campo do SELECT
* Exemplo: SELECT func.nome as "Nome" -> estou dizendo que o nome do campo "nome do funcionario" se chamará Nome
* E isso tudo funciona só dentro do SELECT, não altera nenhum nome de campo realmente
* é apenas para melhorar a visualização

``` SQL
SELECT func.nome as "Nome", func.cpf as "CPF", dept.descricao as "Departamento"
FROM funcionarios as func
JOIN departamentos as dept
ON func.id_departamento = dept.id_dept
```

## LEFT OUTER JOIN

* Serve para quando na tabela existe algum dado como "null", ou seja um funcionario não está linkado a nenhum departamento
* e vice e versa, um departamento sem nenhum funcionário linkado
* Com isso acaba que perdemos esses dados no SELECT, pois como não possuem dados não são mostrados, mesmo existindo
* com o **LEFT OUTER JOIN** faz com que todo conteúdo da tabela que está na frente do from, apareça mesmo que não esteja com o relacionamento igual está no "on"
* Sempre prioriza a tabela da esquerda, ou seja a tabela que foi utilizado o SELECT FROM e não a que foi utilizada o JOIN

``` SQL
SELECT * FROM funcionarios
LEFT OUTER JOIN departamentos
ON funcionarios.id_departamento = departamentos.id_dept
```
* Ele faz com que mostre todo o contéudo da tabela funcionário mesmo ele não possuindo um departamento ligado a ele

* Agora o contrário, quando um departamento não possui um funcionario relacionado
``` SQL
SELECT * FROM departamentos
LEFT OUTER JOIN funcionarios
ON funcionarios.id_departamento = departamentos.id_dept
```

## ORDER BY

* **ORDER BY** Sempre precisamos passar um campo
* O que ele faz é organizar a tabela por ordem crescente ou decrescente 
* depende do campo que voce coloca, ele organiza em ordem de acordo com o campo que voce colocou
* ou seja, se por nome, ele organizará a tabela por ordem alfabetica dos nomes, caso coloque materia, ele organizará a tabela alfabeticamente de acordo com as matérias

* ORDER BY crescente, organizando alunos pelo nome em ordem alfabetica
``` SQL
SELECT * FROM aluno
ORDER BY nome 
```
* ORDER BY decrescente: **DESC**
``` SQL
SELECT * FROM aluno
ORDER BY nome DESC
```

## LIMIT

* Serve para colocarmos um limite de resutados
* o comando é **"LIMIT"** seguido por um numero integer, que será o limite que o SQL irá buscar

EX: LIMIT 2
``` SQL
SELECT * FROM aluno LIMIT 2
```
* Com isso o banco de dados trará todos os campos apenas dos primeiros dois alunos

## OFFSET

* Serve para dizer para o banco de dados quantos registros ele irá ignorar
* Ou seja, com limit irá trazer os próximos 4 (1,2,3,4)
* Porém como usamos o OFFSET 2, ele irá trazer (3,4,5,6)
* Assim ignoradno os primeiros dois registros

``` SQL
SELECT * FROM funcionarios
LIMIT 4 OFFSET 2
```
## COUNT

* Count serve para voce saber quantos registros possuem em uma tabela
* **IMPORTANTE** o count conta apartir de algum campo, ou seja caso a pessoa não possua esse campo ela será ignorada
* Count só aceita um campo para contar

``` SQL
SELECT COUNT(nome) FROM funcionarios
```
* Contar quantos funcionarios possuem o campo nome

## GROUP BY

* diferente do count, o GROUP BY vai agrupar dados semelhantes
* temos que passar para ele qual campo que ele deve usar de referência
* Como resultado ele mostrará quantos registros possuem dentro do departamento
* A devolução dele, é uma contagem igual COUNT

``` SQL
SELECT id_departamento, COUNT(id_departamento) 
FROM funcionarios
GROUP BY id_departamento
```

## JOIN, GROUP BY e COUNT juntos

* Irá mostrar descricao do departamento, o count de quantos funcionarios tem em cada departamento
* Buscando da tabela funcionarios (FROM)
* Fazendo JOIN na tabela departamentos
* O relacionamento do id_departamento
* E estamos pedindo pra agrupar os resultados pelo id_dept

``` SQL
SELECT departamentos.descricao COUNT(funcionarios.id_departamento) 
FROM funcionarios
JOIN departamentos 
ON funcinarios.id_departamento = departamentos.id_dept
GROUP BY departamentos.id_dept
```

## HAVING

* O HAVING serve como um WHERE porém conseguindo fazer com campos agrupados
* Pois o WHERE, não consegue funcionar quando se tenta em campos agrupados, apenas em capos normais,
* Sempre que quiser fazer alguma coisa com um campo agrupado é utilizado o **HAVING**
* Voce consegue utilizar nele todos os operadores lógicos

``` SQL
SELECT departamentos.descricao, count(funcionarios.id_departamento) 
FROM funcionarios
JOIN departamentos
ON funcionarios.id_departamento = departamentos.id_dept
GROUP BY departamento.id_dept
HAVING count(funcionarios.id_departamento) >= 2
```

# COMANDOS NAS TABELAS

## CREATE TABLE

* Serve para criarmos as tabelas do nosso banco
* Criar um arquivo com a extensão **".sqlite"**
* **CREATE TABLE** -> criar tabela
* Exemplo abaixo, estamos criando uma tabela chamada alunos e dentro dela possuirá os campos, matricula, nome, cpf e responsavel
* na frente de cada nome do campo, colocamos o tipo dele ex: integet, text e etc
* Precisamos informar a PRIMARY KEY da tabela
* **AUTOINCREMENT** Comando passado normalmente na PRIMARY KEY, para que o próprio banco de dados coloque o número da matricula automaticamente, pois como é um id, seria complicado ficar toda vez colocando ele
* Após isso basta dar run na seleção que o banco criará a tabela

* Criando tabela alunos
``` SQL
CREATE TABLE aluno (matricula INTEGER PRIMARY KEY AUTOINCREMENT, nome TEXT, cpf INTEGER UNIQUE, responsavel TEXT)
```
* Criando tabela professores
``` SQL
CREATE TABLE professore (id_professor INTEGER PRIMARY KEY AUTOINCREMENT, nome TEXT, cpf INTEGER UNIQUE, materia TEXT)
```
* Criando tabela que relaciona alunos e professores pelas matérias
* O comando REFERENCES serve para referenciar de qual tabela a FOREING KEY está sendo adquirida, após ele se passa o nome da tabela e dentro dele como função se passa o nome do campo que será foreing key
``` SQL
CREATE TABLE aulas(id_professor INTEGER, 
matricula INTEGER, 
FOREING KEY(id_professor) REFERENCES professore(id_professor), 
FOREING KEY(matricula) REFERENCES aluno(matricula))
```

## ALTER TABLE

* Comando utilizado para alterar dados em uma tabela
* Exemplo abaixo, alterar o nome da tabela de aluno para alunos
* **Alterar tabela aluno renomear para alunos**
``` SQL
ALTER TABLE aluno RENAME TO alunos
ALTER TABLE professor RENAME TO professores
```
* Alterar nome de campo
* **Alterar a tabela aulas, renomar coluna id_aluno para matricula_aluno**
``` SQL
ALTER TABLE aulas RENAME COLUMN id_aluno TO matricula_aluno
```

## DROP TABLE

* Ele apaga uma tabela inteira
* Esse comando é um comando perigoso pois ele apaga tabela inteira e não há modo de recuperar
* Exemplo abaixo, estou apagando a tabela alunos, professores e aulas
``` SQL
DROP TABLE alunos
DROP TABLE professores
DROP TABLE aulas
```