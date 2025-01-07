import './App.css';
import Home from './Contents/Home';
import Qualification from './Contents/Qualification';
import Contact from './Contents/Contact';
import NavigationBar from './components/NavigationBar';
import Footer from './components/Footer';
import Project from './Contents/Project';

function App() {
  return (
    <div className="App">
      <NavigationBar />

      <Home />
      <hr />
      <Qualification />
      <Project/>
      <hr />
      <Contact />
      <hr />
      <Footer />
    </div>
  );
}

export default App;
