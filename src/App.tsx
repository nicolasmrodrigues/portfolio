import GlobalStyle, { Container } from './styles'
import Header from './components/Header'
import Hero from './components/Hero'
import AboutMe from './components/AboutMe/'
import Skills from './containers/Skills'
import Projects from './containers/Projects'
import Contact from './components/Contact'
import Footer from './components/Footer'

function App() {
	return (
		<>
			<GlobalStyle />
			<Header />
			<Container>
				<Hero />
				<AboutMe />
				<Skills />
				<Projects />
				<Contact />
			</Container>
			<Footer />
		</>
	)
}

export default App
