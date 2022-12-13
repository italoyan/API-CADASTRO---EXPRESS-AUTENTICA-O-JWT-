# API-CADASTRO---EXPRESS-AUTENTICA-O-JWT-
Tutorial de como utilizar a API.

Passar os parametros json com um POST na rota auth/register

{
  "name": "kk",
  "email":"kk@teste.com",
  "password":"123"
}

Que logo em seguida será gerado um token de autenticação

--> Depois na rota auth/login com o token copiado, vai em Bearer, marca a caixa enabled, e cola o token logo em seguida.

--> em user conseguimos acessar nossa rota!!
