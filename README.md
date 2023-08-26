# Teste Técnico

O teste técnico é constituído em 3 partes:

 1. Responder um questionário _(Teste JS PL_SR.pdf)_
 2. Refatorar um código _(main.js)_
 3. Criar um _marketplace_ em React.js (instruções de como rodar a aplicação na pasta _marketplace_)

---

## Respostas do questionário

**_1. Qual a saída do algoritmo?_**
Ele imprime no console os números primos, dentro de um limite, paginados e ordenados.

<details>
<summary>Saída</summary>

```

CODE!

```
</details>


**_2. Você julga que este código é limpo? Aponte quais erros o programador cometeu que prejudicaram a qualidade do código. Obs: não existe nenhum bug escondido no código._**
Não, o código não é um código limpo. A escolha dos nomes (classe, método e variáveis) não é nada descritiva, não sabemos exatamente o que cada coisa está representando no código. Está sendo definido todas as variáveis como let, até mesmo as que tem um valor constante, quando deveria ser usado const no lugar. O código está em um único bloco, tendo mais de uma responsabilidade num único método: ao mesmo tempo que ele verifica os números primos, ele personaliza e formata a saída. Poderia ter comentários no código, explicando o que está sendo feito, ou uma documentação. Não tem nenhum tipo de tratamento de erro ou validação de entradas.

**_3. Refatore o código do arquivo utilizando conceitos de Clean Code, de maneira que o código se torne mais limpo, legível e de fácil manutenção._**
Código refatorado no arquivo _main.js_ na raiz do repositório.

**_4. Explique como o conceito de middlewares no Express.js pode ser utilizado para evitar repetição de código._**
Os middlewares no Express.js são blocos de código executados em sequência nas requisições HTTP. Os middlewares ajudam muito a evitar repetições de código quando utilizamos uma mesma lógica para várias rotas, por exemplo os middlewares de autenticação de usuários e de tratamento de erros, implementando um middleware, você o chama nas rotas necessárias, ou globalmente na aplicação. Assim, quando você faz uma requisição HTTP, ele primeiro lê os middlewares (na sequência declarada no código) e depois processa a requisição de fato. Em outras palavras, os middlewares no Express.js permitem escrever um código mais limpo, sem repetição em várias rotas. Outra vantagem de utilizar middlewares é a fácil manutenção, já que você só precisará alterar o código num único lugar.

**_5. Tendo em vista duas abordagens de backend: uma utilizando um ORM (como Prisma e Sequelize) e outra utilizando apenas um query builder (como o Knex), quais as vantagens e desvantagens de cada abordagem?_**
**ORM**
Vantagens:
- Abstração bidirecional do banco de dados, mapeando objetos JavaScript para tabelas e vice-versa.
- Aumento da produtividade devido a funções nativas que simplificam consultas sem a necessidade de escrever extenso código SQL.
- Facilita a manutenção do código, adicionando uma camada extra de abstração.
- Adiciona uma camada extra de segurança, ajudando a prevenir ataques como injeção de SQL.
Desvantagens:
- Possível pior desempenho em algumas situações devido à necessidade de traduzir o código em SQL nos bastidores.
- Limitado para consultas muito específicas ou otimizações de desempenho avançadas.

**Query Builder**
Vantagens:
- Controle total sobre as consultas SQL, permitindo consultas personalizadas e otimização de desempenho.
- Mais simples de usar e aprender, especialmente se você já tem conhecimento de SQL.
Desvantagens:
- Requer mais código em comparação com ORMs.
- Exige manutenções manuais, como migrações e mapeamento de objetos.
- Mais vulnerável a ataques, como injeção de SQL, se não for usado com cuidado.

**_6. Faça uma query em SQL que traga em cada linha o nome de jogadores que se enfrentaram mais de duas vezes, onde em cada partida a soma dos pontos foi maior que 30 e a duração do jogo foi maior que 90 minutos. Não pode haver resultados repetidos._**
```SQL
SELECT DISTINCT  j1.nome  AS jogador1 , j2.nome  AS jogador2
	FROM Partidas p
	INNER JOIN Jogador j1 ON  p.jogador1_id  =  j1.id
	INNER JOIN Jogador j2 ON  p.jogador2_id  =  j2.id
	WHERE (pontos_jogador1 + pontos_jogador2) >  30  AND duracao >  90
	GROUP BY  j1.nome, j2.nome
	HAVING  COUNT(*) >  2;
```

 ---

Projeto desenvolvido por [Thais R Kotovicz](https://www.linkedin.com/in/thaiskotovicz/).
</br>