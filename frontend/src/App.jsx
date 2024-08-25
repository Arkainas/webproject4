import './App.css';
import Navbar from './Components/Navbar.jsx'
import Footer from './Components/Footer.jsx'
import ArticleCard from './Components/ArticleCards.jsx'
import ScrollToTop from './Components/ScrollToTop.jsx';




function App() {
  return (
    <div className="App">
      <Navbar></Navbar>
      <ArticleCard />
      <ScrollToTop />
      <Footer />
    </div>
  );
}



export default App;