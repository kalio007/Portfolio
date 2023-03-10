import './App.css';
import Header from './Components/Header/Header';
import Hero from './Components/Hero/Hero';
import Intro from './Intro/Intro';
import Footer from './Components/Footer/Footer';
import Project from './Components/Project/Project';
import Skills from './Components/Skills/Skills';




function App() {
  return (
    <div>
      <Header/>
      <Intro />
      <Skills/>
      <Project/>
      <Footer/>
    </div>
  );
}

export default App;
