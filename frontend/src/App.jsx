import './App.css';
import Navbar from './Components/Navbar.jsx'
import Footer from './Components/Footer.jsx'
import ArticleCard from './Components/ArticleCards.jsx'




function App() {
  return (
    <div className="App">
      <Navbar></Navbar>
      <ArticleCard />
      <Footer />

    </div>
  );
}



export default App;