# Github para "TIMES"

## Criando repositório e adicionando colaboradores

* Primeiro passo criar um repositório comum
* Segundo passo após criar um respositório voce irá em colaborations e adiciona pessoas para trabalhar com voce nesse repositório
* Fazendo isso voce da acesso a outras pessoas a comitarem no seu github

## Criar Branchs (Ramificações do nosso trabalho)

* Quando voce inicia um projeto no github ele já cria uma branch, que é a branch *Main*
* Comandos terminal
* Se voce mudar de branch em um trabalho de colaboradores e efetuar um commit seu commit será apenas visto na branch que voce comitou, já na branch main ele não existirá
* Com isso voce consegue ramificar seu projeto
* Branchs são interessantes para quando voce quer fazer atualizações mas não quer que elas sejam atualizadas imediatamentes, ou voce precisa da avaliação de alguem

``` javascript
$cd DiscoverEspecializar/GithubForTimes/
$git branch // mostra a branch atual que voce esta
$git checkout nomedabranch// Comando que voce usa pra mudar de Branch
$git checkout -b nomedabranch // Cria uma nova branch utilizando o comando -b 
$git push origin nomedabranchatual // Antes voce dava git push origin main, porém como voce vai efetuar um commit em outra branch, voce coloca o nome da branch que está commitando
```

## Merge

* Merge é o nome que se da para colocar o conteúdo de uma outra branch, dentro da branch princípal 
* Primeiramente voce entrará na sua branch "main"
* Voce executará o comando 
```$git merge NomeDaBranchQueVoceIráFazerOMerge```
* Ele irá na branch que voce passou pegará o conteúdo que tem la e copiará para a branch "main"
* E o commit que não existia na main, agora passa a existir dentro da main
* O Merge pega os commits de uma branch que não existe na main, e traz para ela

## Apagar uma Branch

* Voce não pode estar dentro da branch que voce deseja apagar
* Para apagar uma branch basta executar o seguinte comando
```$git branch -D NomeDaBranchQueDesejaApagar```
* Fazendo isso voce apagará a branch apenas do seu computador, porém ela continuará existindo dentro do github
* Já para apagar a branch no github, basta ir em branchs e clicar na lixeirinha para apaga-lá
* Existe uma maneira também de apagar uma branch do github pelo terminal com o seguinte comando
```$git push origin --delete NomeDaBranchQueDesejaApagarNoGithub```

## Atualizando as branchs

* Comando para ver todas as branchs que tem no seu repositorio da sua maquina
```$git branch -a```
* Caso no seu projeto exista uma branch que não consta no seu computador, voce pode atualizar as branchs para que comece a aparecer para voce, comando para atualizar as branchs:
```$git fetch```  ele irá atualizar todas as branchs que existem no github para a sua máquina
* Com comando gitbranch, voce consegue ver todas branchs que voce entrou, com comando git branch -a, voce ve todas branchs existentes no projeto mesmo que não tenha entrado

## Configuração de branch padrão e proteção da main

* Proteger a main, dar permissão ou não para pessoas de fazer commit diretamente na main OU NÃO poder
* Vá no github e clique em "branch rule" 
* Coloque a branch que voce quer colocar as regras no caso "main"
* E lá voce terá as opções de proteção e restrições para a sua branch
* Poder necessitar de aprovações para fazer merge para main e etc
* Opção de check to pass, para o github analizar o código antes de fzr o push
* Mais regras no github caso precise entender todas as regras que quer colocar numa branch

## Pull Request ou "PR"

* Um pull request é uma requisição para voce fazer um merge para a "main"
* No caso voce pode ver oq ele quer mergiar para a main, e voce pode aprovar ou não e etc
* Lá dentro voce verá os commits que ele fez, os códigos e etc
* Clicando no pull request, voce consegue ver oq a pessoa alterou e etc
* Files Changed é importante para avaliar e ver o que a pessoa alterou

## Resolvendo conflito

* Comando para puxar para o seu PC as atualizações que só foram para o github
```$git pull origin main``` Puxa todas as alterações la da main
* As vezes quando voce tentar fazer o pull acontecerá um conflito
* um conflito é quando voce tenta alterar uma linha que alguém já alterou
* Para resolver:
* Basta apagar as linhas que está dando erro ou estão em conflito
* e depois voce clica no "+" dentro do vscode
* depois basta fazer o commit

## Criando um Pull Request

* Primeiro voce da um push em uma outra branch sem ser a main
* Segundo vá no github e lá aparecerá sua nova branch com as novas atualizações
* Terceiro o proprio github irá auxiliar voce e indicar que voce crie um Pull Request
* Quarto clique em *Compare & pull request*
* Outro caminho é ir em Pull requests e criar um *New PullRequests*
* Esse segundo modo tem uma vantagem que voce pode fazer configurações extras
* Existem comentários para voce comentar oq voce atualizou e etc
* Voce pode adicionar os "reviewers" que são as pessoas que vão avalizar seu Pull Request
* Assignees é aonde voce indica quem fez parte desse pull request
* Labels label é um nome para que auxilia a pessoa a entender oq é o pull request

## Contribuindo com projetos publicos

* Primeiramente voce deve fazer um "fork" no github
* Segundo voce clona o projeto para sua maquina
* Voce abre o arquivo no seu vscode