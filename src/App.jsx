import './App.css'
import About_me from './components/about_me/About_me'
import Contacto from './components/contacto/Contacto'
import Curriculum from './components/curriculum/Curriculum'
import Footer from './components/footer/Footer'
import Home from './components/home/Home'
import NavBar from './components/navbar/NavBar'
import Portfolio from './components/portfolio/Portfolio'
import Skills from './components/skills/Skills'

function App() {

  return (
    <div>
      <NavBar/>
      <Home/>
      <About_me/>
      <Skills/>
      <Curriculum/>
      <Portfolio/>
      <Contacto/>
      <Footer/>
    </div>
  )
}

export default App
