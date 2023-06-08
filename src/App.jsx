import logo from './logo.svg';
import './App.css';
import Button from './components/Button';
import Navbar from './components/Navbar';
import Footer from './components/Footer';


function App() {
  const navText = 'Sosmed';
  const navHeading = 'Navigation Bar';
  const clicked = () => {
    return alert('Button di oencer');
  }

  const paragraf = () => {
    return (
      <div>
        <h3>hore</h3>
        <i>Mantap bang</i>
        <marquee>keren ni</marquee>
      </div>

    );
  };
  return (
    <div className="App">
     <Navbar></Navbar>
     <Footer></Footer>
    </div>
  );
}

export default App;
