<h4><b>Exemplo de autenticação com o Google/Facebook no NodeJs.</b></h4>

Foi utilizado o <a href="https://github.com/simov/grant">Grant</a> para autenticar.

Utilizar <b>npm install</b> e <b>npm start</b> após o download.

* Configuração do <b>id</b> e <b>chave secreta</b> do Google/Facebook esta em "config/auth.js", necessário configurar antes de rodar.
* Não esta utilizando banco de dados, apenas pega informações do usuário e guarda na sessão.
* O exemplo foi criado para conhecimento do middleware  de autenticação para o NodeJs.

<b>Conclusão:</b>

<p>Como esta havendo boatos que o <a href="http://passportjs.org/">Passport</a> poderá ser descontinuado, resolvi testar o Grant afim de conhecimento, porem, em minha opinião, obtive algumas dificuldades, o que me frustou foi que consegui pegar somente o token do usuário, isso faz com que eu utilize outras dependências para pegar dados do perfil por exemplo, com o Passport, isso já era retornado ao se autenticar.</p>
<p>Claro que este é o meu primeiro comentário sobre o middleware, por falta de exemplos na internet, não encontrei uma forma de retornar os dados do usuário assim que autenticado, como é feito no Passport.</p>
