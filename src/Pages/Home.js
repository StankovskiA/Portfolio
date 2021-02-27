import '../App.css';
import Slideshow from '../Slideshow'; 
import Services from '../Services';
import Heading from '../Heading';
import AboutMe from '../AboutMe';



function Home() {
   
  return (
    <>
    <div className="App">
    
     <Heading />
    <AboutMe />
    <Services />
    <Slideshow />
    
    </div>
    <button  id="bttn">Projects</button>
    </>
  );
}

export default Home;
