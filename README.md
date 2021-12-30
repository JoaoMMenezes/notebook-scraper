# Desafio:

Acessar o site do webscraper.io e pegar os dados dos notebooks Lenovo ordenando do mais barato para o mais caro.
link do site:
https://webscraper.io/test-sites/e-commerce/allinone/computers/laptops

## Observações:
É interessante que o robô possa ser consumido por outros serviços.
Foi criada uma pequena REST Ful API JSON para deixar mais otimizado.
Foi utilizado o puppeteer para a resolução do case.

## Instruções:
A API funciona em localhost:8080/nomeDaMarca acessando esse endereço e substituindo "nomeDaMarca"
por uma marca de notebook é possível obter as informações desejadas da marca. Ordenadas por produto mais caro
para produto menos caro.

### Informações Coletadas pelo bot:
- name
- url
- description
- price
- numbersOfReviews
- reviewRate
