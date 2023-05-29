# Desafio:

Acessar o site do webscraper.io e pegar os dados dos notebooks Lenovo ordenando do mais barato para o mais caro.
link do site:
https://webscraper.io/test-sites/e-commerce/allinone/computers/laptops

## Observações:
- É interessante que o robô possa ser consumido por outros serviços. 
- Foi criada uma pequena REST Ful API JSON para deixar mais otimizado.
- Foi utilizado o puppeteer para a resolução do case.

## Instruções:
A API funciona em localhost:8080/nomeDaMarca acessando essa rota e substituindo "nomeDaMarca"
por uma marca de notebook é possível obter as informações desejadas dos produtos de tal marca, ordenadas por produto mais barato
para o produto mais caro.

### Execução:
Após baixar o puppeteer e o express, entrar no arquivo index.js e usar o comando "node ." para rodar o servidor.

### Informações Coletadas pelo bot:
- name
- url
- image_url
- description
- price
- numbersOfReviews
- reviewRate
