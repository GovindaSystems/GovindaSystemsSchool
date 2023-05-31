### Aula 1: Introdução aos Testes Automatizados e Criação de Casos de Testes 📝

Nesta aula, os alunos serão apresentados aos conceitos básicos de testes automatizados. Eles aprenderão a criar casos de testes eficazes, que são essenciais para qualquer estratégia de teste automatizado.

1 - Presentação da nossa aplicação para testes

* https://www.demoblaze.com/index.html
* https://demoqa.com/
* https://automationintesting.online/#/
* https://todomvc.com/

2 - Definição de casos de testes

Gherkin : https://www.linkedin.com/pulse/bdd-com-gherkin-v%C3%A2nia-porto-da-silva/?originalSubdomain=pt

Cenário
É a funcionalidade especifica de cada cenário.

Exemplo de Cenário:

Cadastrar um produto
Dado que eu esteja logada como administrador
E na tela de cadastro de produtos
Quando cadastro um novo produto
Então produto cadastrado com sucesso

https://automationintesting.online/#/

* casos de teste de regressão (testes fim a fim)
* casos de teste de aceitação do usuário : (o que o PO pedio foi o que foi entregue)
* casos de teste de desempenho : (a nova feature afetou o desempenho da aplicação)
* casos de teste de segurança : (foi aberta alguma falha de segurança com a nova feature)

> Testes de Backend e API REST 🌐

* Testes de API : 

Características Teste : Demora menos tempo para ser executado (3 min)

Características de uma API REST : 

Definição : API REST é uma interface de comunicação entre sistemas que permite a integração entre aplicações por meio de requisições HTTP.

SOAP (webservices)
API REST (HTTP / HTTPS / JSON / Htttp methods)

~/api/users (GET / POST / PUT / DELETE)

crul : 

GET : curl -X GET https://reqres.in/api/users?page=2

Retornar o dado

POST : curl -X POST https://reqres.in/api/users -d "name=Vania&job=QA"

Criar um dado

PUT : curl -X PUT https://reqres.in/api/users/2 -d "name=Vania&job=QA"

Atualizar um dado

DELETE : curl -X DELETE https://reqres.in/api/users/2

Deletar um dado

rotas : api/users (todos os usuarios)
        api/users/2 (id user)
        api/users?page=2 (paginação) 
        api/users/2?delay=3 (delay de 3 segundos)

parametros : passados pela url
             passados pelo body { "name" : "Vania" } 


http codes : 

200 : OK
201 : Created
204 : No Content
202 : Accepted

400 : Bad Request
401 : Unauthorized
403 : Forbidden
404 : Not Found

500 : Internal Server Error
502 : Bad Gateway
503 : Service Unavailable
504 : Gateway Timeout

## Instalação do insomnia

Interface gráfica para testar API

sudo snap install insomnia

* Enviar uma mensagem (dados válidos e inválidos)
* Reservar um quarto (dados válidos e inválidos)

## Para casa - 1

Criação de 6 casos de testes para aplicarmos em cypress.


## Gherkin

Gherkin é uma linguagem que é usada para escrever cenários de teste em um formato legível por humanos. Aqui estão alguns exemplos de casos de teste escritos em Gherkin:

**Exemplo 1: Teste de Login**

```gherkin
Feature: Login Feature
  Scenario: Successful Login with Valid Credentials
    Given User is on Login Page
    When User enters valid username and password
    And User clicks on Login button
    Then User should be redirected to the Home Page
```

**Exemplo 2: Teste de Pesquisa**

```gherkin
Feature: Search Feature
  Scenario: Check search functionality
    Given User is on Home Page
    When User enters a valid search term
    And User clicks on Search button
    Then User should see a list of search results related to the search term
```

**Exemplo 3: Teste de Carrinho de Compras**

```gherkin
Feature: Shopping Cart Feature
  Scenario: Add item to shopping cart
    Given User is on Home Page
    When User selects an item
    And User clicks on Add to Cart button
    Then The item should be added to the shopping cart

Funcionalidade: Funcionalidade do Carrinho de Compras
  Cenário: Adicionar item ao carrinho de compras
    O usuário fornecido está na página inicial
    Quando o usuário seleciona um item
    E o usuário clica no botão Adicionar ao carrinho
    Em seguida, o item deve ser adicionado ao carrinho de compras
```

**Exemplo 4: Teste de Checkout**

```gherkin
Feature: Checkout Feature
  Scenario: Successful Checkout
    Given User has items in the shopping cart
    When User goes to the checkout page
    And User enters valid payment information
    And User clicks on Purchase button
    Then User should receive a confirmation message
```

Cada um desses exemplos começa com uma "Feature" que descreve a funcionalidade que está sendo testada. Cada "Scenario" representa um caso de teste único. "Given" descreve as pré-condições, "When" descreve as ações que o usuário executa, e "Then" descreve o resultado esperado. "And" é usado para adicionar múltiplas condições ou ações.