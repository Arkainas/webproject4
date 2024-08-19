import './App.css';
import Navbar from './Components/Navbar.js'
import './Footer.css'

function Footer() {
  return (
    <footer className="border-top footer text-muted">
      <div className="container">
        2023 - JensenWebApp - <a href="link/to/privacy">Privacy</a>
      </div>
    </footer>
  );
}

function App() {
  return (
    <div>
      <Navbar></Navbar>


      <Footer />

    </div>
  );
}



export default App;
