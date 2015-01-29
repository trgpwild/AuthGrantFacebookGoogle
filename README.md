<h4><b>Exemplo de autenticação com o Google/Facebook no NodeJs.</b></h4>

Foi utilizado o <a href="https://github.com/simov/grant">Grant</a> como Middleware de autenticação.

Utilizar <b>npm install</b> e <b>npm start</b> após o download.

* Configuração do <b>id</b> e <b>chave secreta</b> do Google/Facebook esta em "config/auth.js", necessário configurar antes de rodar.
* Não esta utilizando banco de dados, apenas pega informações do usuário e guarda na sessão.


&emsp; Como esta havendo boatos que o <a href="http://passportjs.org/">Passport</a> poderá ser ou foi descontinuado, resolvi testar o Grant como alternativa. Ao utilizá-lo, tive uma frustação, foi quando percebi que estava retornando somente o token do usuário, comparando com o Passport, que ao se autenticar, já é retornado os dados que a aplicação obteve permissão, o Grant fica devendo.<br/>
&emsp; Por isso resolvemos( <a href="https://github.com/lcpereira">Eu</a> e o <a href="https://github.com/DouglasHennrich">Douglas</a>  ) brincar com a lib do express.js dentro do grant, alterando o callback de autenticaçao, incluindo as informaçoes do usuario.