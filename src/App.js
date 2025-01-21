
import './App.css';
import Navbar from './components/topnav';
import NavbarBottom from './components/bottomNav';
import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";
import ImageSlider from './components/imgSlider';
import Timer from './components/timer';
import AboutCompany from './components/about';
import Features from './components/feature';
import Services from './components/service';
import Footer from './components/footer';
import Profile from './components/profile';
import Sponsers from './components/sponser';

function App() {
  return (
    <div className="App">
     <Navbar/>
     <NavbarBottom/>
     <ImageSlider/>
     <Timer/>
     <AboutCompany/>
     <Features/>
     <Services/>
     <Profile/>
     <Sponsers/>
     <Footer/>

    </div>
  );
}

export default App;
