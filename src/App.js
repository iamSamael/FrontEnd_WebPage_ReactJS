import './components/navbar/Navbar'
import './components/body/Body'
import Navbar from "./components/navbar/Navbar";
import Body from "./components/body/Body";
import Welcome from './components/welcome/Welcome'
import Services from './components/services/Services'
import Stats from './components/stats/Stats'
import WhyChooseUs from "./components/why_choose_us/WhyChooseUs";
import ClientLogoSection from "./components/client_logo_section/ClientLogoSection";
import News from "./components/news/News";
import Footer from "./components/footer/Footer";
import BackToTopButton from "./components/backToTopButton/BackToTopButton";

function App() {
  return (
    <div className="App">
        <Navbar/>
        <Body/>
        <Welcome/>
        <Services/>
        <Stats/>
        <WhyChooseUs/>
        <ClientLogoSection/>
        <News/>
        <Footer/>
        <BackToTopButton/>

    </div>
  );
}

export default App;
