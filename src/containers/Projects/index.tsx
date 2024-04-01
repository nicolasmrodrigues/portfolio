import Project from '../../components/Project'
import Title from '../../components/Title'
import { Projects as ProjectsStyle, ProjectsList } from './styles'

const Projects = () => (
	<ProjectsStyle id="projects">
		<Title alignment="center">Projetos</Title>
		<ProjectsList>
			<Project
				imageLink="/project1.webp"
				title="Clone do Disney+"
				description="Este projeto é um clone da landing page do Disney Plus desenvolvido no Curso de Desenvolvedor Full Stack Python da EBAC (Escola Britânica De Artes Criativas & Tecnologia). Foram utilizados neste projeto o Grid Layout para a apresentação do conteúdo em forma de grade, Gulp.js para automatizar tarefas como compressão de imagens, que melhora a performance do site, e o Sass para um código de estilização menor, mais legível e de fácil manutenção."
				deployLink="https://movie-landing-page-lemon.vercel.app/#pt-br"
				repoLink="https://github.com/nicolasmrodrigues/movie-landing-page"
			></Project>
			<Project
				imageLink="/project2.webp"
				title="Loja de Periféricos"
				description="Uma landing page de uma loja online responsiva com layouts adaptados para diferentes aparelhos como celulares e computadores. Essa página possui seções sobre a loja, produtos em destaque, entre em contato e um menu em forma de barra lateral para celulares. Algumas das tecnologias usadas nesse projeto foram: HTML5, CSS3, Git, Saas, Gulp.js, JavaScript e JQuery."
				deployLink="https://loja-redragon.vercel.app/"
				repoLink="https://github.com/nicolasmrodrigues/projeto-loja-redragon"
			></Project>
			<Project
				imageLink="/project3.webp"
				title="Previsão do Tempo"
				description="Este projeto consiste de um site totalmente responsivo de previsão do tempo onde o usuário pode digitar o nome de um país / estado no campo de pesquisa que possui autocomplete (O autocomplete é em inglês para nome de países por falta de uma API que suportasse o português) e o site apresenta os dados do clima atual e a previsão para os próximos dias do local desejado."
				deployLink="https://clima-lemon.vercel.app/"
				repoLink="https://github.com/nicolasmrodrigues/clima"
			></Project>
		</ProjectsList>
	</ProjectsStyle>
)

export default Projects
