<div> 
  <h1 align="center">Construtor de Perfil - Projeto JS👨‍💻</h1> 
</div>

<div>
  <h3 align="center">Aplicação de construção de perfil</h3>
</div>

<div align='center'>
	<img src= "https://user-images.githubusercontent.com/112639055/227649813-07a7de0d-1484-497c-ad0e-ad26c2300b65.png" width='850px'>
</div>

## Ferramentas utilizadas🛠️

<div>
	<p>Para a elaboração do projeto, foram usadas as tecnologias: </p>
</div>

<ul>
 	<li>
  		<img align="center" width="30" src="https://raw.githubusercontent.com/devicons/devicon/master/icons/javascript/javascript-plain.svg"> JavaScript
 	</li>
	<br>
	<li> 
		<img align="center" width="30" src="https://raw.githubusercontent.com/devicons/devicon/master/icons/html5/html5-original.svg"> HTML
 	</li>
	<br>
 	<li> 
  		<img align="center" width="30" src="https://raw.githubusercontent.com/devicons/devicon/master/icons/css3/css3-original.svg"> CSS 
 	</li>

</ul>

<div>
	<h2>Sobre o projeto📃</h2>
</div>
	
<div>
	<p>Projeto desenvolvido com objetivo de praticar principalmente conceitos em JavaScript como funções, estruturas de condição, validação de dados e etc. Mas também utilizando muito de CSS e HTML em sua construção.</p>
	<p>A aplicação pega os dados fornecidos pelo usuário, que são o nome, ano de nascimento e gênero, e apartir disso gera um perfil de acordo com as informações passadas. Informando o nome do usuário, sua idade e gênero. Exibindo uma foto de uma pessoa de acordo com idade e gênero passados.</p>
	<p>Ideia inicial tirada do canal <a href="https://www.youtube.com/@CursoemVideo">Curso em Video</a></p>
</div>

### Acessar projeto: ✈

◻<a href="https://willianol.github.io/Construtor-de-perfil/assets/index.html">Construtor de Perfil</a>

#

<div>
	<h3> <img align="center" width="35" src="https://raw.githubusercontent.com/devicons/devicon/master/icons/javascript/javascript-plain.svg"> &nbsp;JavaScript</h3>
</div>

#### Elementos importantes.

<div>
	<p>Primeiro foram selecionados os elementos importantes para a construção da aplicação. Elementos esses como: <strong>input do nome, input do ano de nascimento, o botão de gerar perfil, modal de aviso e etc...</strong></p>
</div>

<div align="center">
	<img align="center" src="https://user-images.githubusercontent.com/112639055/227611020-51b6dacd-954b-4ea7-bf0a-870b44261bbd.png" width="700px">
</div>

&nbsp;
&nbsp;

#### Validação de dados

<div>
	<p>Para fazer a validação dos dados, através do evento no botão de gerar perfil, foi criada uma função nomeada <strong>"dataCheck".</strong> Nela foram definidas <strong>duas constantes que armazenam os caracteres dos inputs de nome e ano de nascimento.</strong> Logo após, usando a estrutura condicional "else if" foi passado o seguinte argumento: <strong>se o número de caracteres do ano de nascimento for diferente de 4, ou o do nome for 0, vai abrir o modal com a mensagem de erro.</strong> Se não, vai executar a função <strong>"perfilConstructor()"</strong> para seguir o fluxo do código.</p>
</div>

<div align="center">
	<img align="center" src="https://user-images.githubusercontent.com/112639055/227614961-7f5030b0-4ac4-44fb-9ff3-298b477fd3d7.png" width="700px">
</div>

&nbsp;

<div>
	<p>Para indicar ao usuário que o <strong>campo de ano de nascimento precisa ter quatro caracteres,</strong> foi dedicada uma função para isso. Primeiro, uma constante foi definida para selecionar o <strong>input de ano nascimento.</strong> Nele foi criada uma <strong>função com o evento de "input" para disparar a função sempre que algo for digitado no input.</strong></p>
	<p>Na função, foram criadas duas constantes que armazenam o número de caracteres do input ano e o span. Logo após, um "else if" com o seguinte argumento: <strong>Se o número de caracteres do input ano for diferente de 4, vai adicionar as classes ao input e span.</strong> Trocando a cor do input e exibindo o span com o aviso.</p>
</div>

<div align="center">
	<img align="center" src="https://user-images.githubusercontent.com/112639055/227653067-a52bad55-dc77-4f05-8cb7-6d691ab1714f.png" width="700px">
</div>

&nbsp;
&nbsp;

#### Construção de perfil

<div>
	<p>Após passar pela validação de dados, a função para construir o perfil é executada.</p>
	<p>Primeiro, duas constantes são criadas para fazer o <strong>cálculo da idade da pessoa,</strong> usando a constructor function <strong>"new Date()" com o método ".getFullYear()" foi pego o ano atual.</strong> Na constante seguinte, foi feito o cálculo da idade simplismente <strong>pegando o anoAtual e subtraindo o pelo ano de nascimento passado pelo usuário.</strong> Gerando assim a idade da pessoa.(Não é muito preciso)</p>
</div>

<div align="center">
	<img align="center" src="https://user-images.githubusercontent.com/112639055/227656229-ba500f00-5bbb-4375-a523-36fa70ab331a.png" width="700px">
</div>

&nbsp;

<div>
	<p>Depois, duas constantes são criadas, <strong>a "imagemPerfil" para pegar a foto de perfil do lado direito</strong>, e a <strong>"inputGenero" para pegar os radio-buttons para a verificação de gênero.</strong> Pois de acordo com o gênero selecionado, a imagem vai mostrar uma mulher ou homem.</p>
</div>

<div align="center">
	<img align="center" src="https://user-images.githubusercontent.com/112639055/229649609-a85dbaf2-ef25-476d-ae26-f8dd4d98b5a5.png" width="700px">
</div>

&nbsp;

<div>
	<p>Agora sim, vamos para a construção do perfil. O perfil é construido <strong>de acordo com o gênero e idade</strong> passados, nessa lógica foram criadas quatro constantes. <strong>As duas primeiras pra armazenar a condição dos IF´s posteriores</strong>, adicionando uma maior legibilidade ao código. Onde verifica se o radio-button de mulher ou homem está marcado. Depois <strong>duas vareáveis do tipo let são criadas "genero" e "geracao", ambas vazias para depois receberem um novo valor.</strong></p>
</div>

<div align="center">
	<img align="center" src="https://user-images.githubusercontent.com/112639055/229652099-0caefcab-4fb5-49a6-9b92-77147ff9b05f.png" width="700px">
</div>

&nbsp;

<div>
	<p><strong>Duas estruturas de condição são criadas(IF),</strong> cada uma para uma situação diferente de acordo com o gênero. <strong>Se for passado masculino pelo usuário, será executado o "if" de sexHomem, se for feminino, será executado o "if" sexMulher.</strong> Na estrutura é atribuido um valor a vareável <strong>"genero"</strong> criada anteriormente, <strong>armazenando uma string "homem" ou "mulher".</strong> Abaixo fazendo um innerHTML de uma mensagem de boas-vindas, <strong>com uma template string mostrando o nome e idade da pessoa.</strong></p>
</div>

<div align="center">
	<img align="center" src="https://user-images.githubusercontent.com/112639055/229781873-6308a15b-db7f-4fcc-ae4f-c6a10ff4ab47.png" width="700px">
</div>

&nbsp;

<div>
	<p>No if é criada mais uma <strong>estutura de condição, nela se faz a principal verificação das idades, onde se for idoso, adulto, adolescente ou criança</strong> faz a devida modificação. Em cada "if" e "else if", é definido uma imagem através do <strong>setAttrubute</strong>, mudando seu src com a imagem de acordo com a idade. Depois atribuindo um novo valor a <strong>vareável "geracao" criada anteriormente, armazenando uma string com a geração da pesssoa(idoso, adulto, adolescente ou criança).</strong></p>
</div>

<div align="center">
	<img align="center" src="https://user-images.githubusercontent.com/112639055/229784922-26dbb0c7-d258-4cee-9acd-ef14b719a5e5.png" width="700px">
</div>

&nbsp;

#### Estrutura completa:

<div align="center">
	<img align="center" src="https://user-images.githubusercontent.com/112639055/229944694-2f69aeba-a662-448a-95e7-ab65382e3423.png" width="700px">
</div>

&nbsp;

<div>
	<p>Logo após, na vareável que armazena a div onde vai ser exposto o resultado<strong>(divDiagnosticoPerfil),</strong> é feito um <strong>".innerHTML" com uma template string mostrando o nome do usuário, gênero, geração e idade.</strong> Em baixo executando a função que vai esconder o formulário e mostrar a tela de resultado.</p>
</div>

<div align="center">
	<img align="center" src="https://user-images.githubusercontent.com/112639055/229947776-f6554ea0-771c-40d6-9e66-b9ff0fcee87c.png" width="700px">
</div>






