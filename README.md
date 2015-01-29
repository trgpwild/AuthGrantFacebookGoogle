<h4><b>Exemplo de autenticação com o Google/Facebook no NodeJs.</b></h4>

Foi utilizado o <a href="https://github.com/simov/grant">Grant</a> como Middleware de autenticação.

Utilizar <b>npm install</b> e <b>npm start</b> após o download.

* Configuração do <b>id</b> e <b>chave secreta</b> do Google/Facebook esta em "config/auth.js", necessário configurar antes de rodar.
* Não esta utilizando banco de dados, apenas pega informações do usuário e guarda na sessão.
* O exemplo foi criado para conhecimento do middleware  de autenticação para o NodeJs.

&emsp; Como esta havendo boatos que o <a href="http://passportjs.org/">Passport</a> poderá ser descontinuado, resolvi testar o Grant. O que me frustou foi que consegui pegar somente o token do usuário, isso faz com que eu utilize outras dependências para retornar dados do usuário por exemplo, com o Passport, isso já era retornado ao se autenticar.<br/>
&emsp; Claro que posso estar esquecendo de algo, como não encontrei muita utilização do Grant na internet, tive dificuldades na configuração e optei por instalar mais duas dependencias, uma para retornar os dados do usuário do Facebook e outra para o Google.
