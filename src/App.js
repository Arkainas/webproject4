import './App.css';
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
    <div className="App">


      <Footer />
    </div>
  );
}

export default App;
