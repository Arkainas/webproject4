import React from 'react';
import './../App.css';
import Navbar from './../Components/Navbar.jsx'
import Footer from './../Components/Footer.jsx'
import ArticleCard from './../Components/ArticleCards.jsx'
import ScrollToTop from '../Components/ScrollToTop.jsx';




function Home() {
  return (
    <div className="Home">
      <Navbar />
      <ArticleCard />
      <ScrollToTop />
      <Footer />

    </div>
  );
}



export default Home;
