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
	<p>Primeiro foram selecionados os elementos inportantes para a construção da aplicação. Elementos esses como: <strong>input do nome, input do ano de nascimento, o botão de gerar perfil, modal de aviso e etc...</strong></p>
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
	<img align="center" src="" width="700px">
</div>











