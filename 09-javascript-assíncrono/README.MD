# Processos 
De forma geral, um processo nada mais é do que um programa em execução.

Os processos são gerenciados pelo sistema operacional.

Isso significa que um  processo pode ser gerenciado de uma forma pelo Windows, de outra pelo Linux e de outra pelo SunOS por exemplo.

Este gerenciamento é baseado em algoritmos.

# Threads
É uma forma de um processo ser dividio em uma ou mais partes (threads que podem ser executadas em paralelo.

Obs.: A linguagem JavaScript é single thread.

Isso significa que os programas JavaScript são executados em uma única thread.

# Programação Assíncrona vs Síncrona

Na programação síncrona, os comandos são executados em sequência, um após o outro.

```javascript
console.log('1')
console.log('2')
console.log('3')
```

Neste tipo de programação o programa fica "bloqueado" até que todo o processamento seja realizado.

Isso significa que se você fizer algo como:

```javascript
console.log('teste 1')
for (let i = 0; i < 10000; i++) {
    console.log(i)
}
console.log('teste 2')
```
O programa irá executar a linha 1, ficará bloqueado executando o loop for, e só seguirá adiante quando este loop estiver finalizado. O usuário não consegue fazer nenhuma iteração com a página web enquanto houver este bloqueio.  Isso ocorre porque o for e várias outras funções em JavaScript são síncronas.

A programação assíncrona faz com que não ocorra este bloqueio.

Ou seja, se existe um evento para ocorrer que pode demroar, por exemplo:
 - algum processamento;
 - acesso à APIs externas;
 - Acesso à bancos de dados;
 - Leitura e/ou escrita em disco;
 - etc

O programa fica "esperando" a resposta deste evento mas libera a thread para executar outras tarefas, sem que a aplicação fique engasgada esperando a tarefa terminar.

# Como o JavaScript Trabalha

Dependendo de como o programa é desenvolvimento é criado "Event Queue" ou fila de eventos, esses eventos serão executados um a uma no "event loop", ao sinalizado será enviado para thread pool, a thread vai executar e finalizar até concluir todos os eventos.

As bibliotecas de programação assíncrona vão gerar uma segunda thread e essa programação entre as threads vão ocorrer de forma ordenada. 

# Siglas

 - AJAX (XMLHttpRequest): Asynchronous JavaScript and XML, ou seja, uma requisição assíncrona que realizamos em algum backend.

# Promises

Promises são funções que não influenciam a linha de tempo da aplicação, ou seja, quando finalizadas os dados são apresentados sem bloquear a aplicação. 
