import Header from './components/Header'
import Footer from './components/Footer'

import Hero from './containers/Hero'
import AboutMe from './containers/AboutMe'
import Skills from './containers/Skills'
import Projects from './containers/Projects'
import Contact from './containers/Contact'

import GlobalStyle, { Container } from './styles'

function App() {
	return (
		<>
			<GlobalStyle />
			<Header />
			<Container as="main">
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
