import '../css/Projects.css';
import '../App.css';

const lightbox = document.createElement('div')
lightbox.id = 'lightbox'
document.body.appendChild(lightbox)

const images = document.querySelectorAll('img')
images.forEach(image => {
  image.addEventListener('click', e => {
    lightbox.classList.add('active')
    const img = document.createElement('img')
    img.src = image.src
    while (lightbox.firstChild) {
      lightbox.removeChild(lightbox.firstChild)
    }
    lightbox.appendChild(img)
  })
})

lightbox.addEventListener('click', e => {
  if (e.target !== e.currentTarget) return
  lightbox.classList.remove('active')
})
function Projects() {
 
  return (
    <>
    <div className="projects">
   <div>
   <p id="soft" className="doneSo">I have done so far</p> <br/> 
   <article>
     <p className="pText">Historical Augmented Reality App <br></br> (Telling the story of the old Jewish life in Bitola)</p>
     <div className="pGallery">
     <img alt="img" src="/projects/ar1.png"></img>
     <img alt="img"src="/projects/ar2.png"></img>
     <img alt="img"src="/projects/ar3.png"></img>
     </div>
   </article>
   <article>
     <p className="pText">3D Animation with Unreal Engine 4</p>
     <div className="pGallery">
     <img alt="img"src="/projects/a1.png"></img>
     <img alt="img"src="/projects/a2.png"></img>
     <img alt="img"src="/projects/a3.png"></img>
     </div>
   </article> 
   <article>
     <p className="pText">2D Side Scroller Game made with Unity Engine</p>
     <div className="pGallery">
     <img alt="img"src="/projects/om1.png"></img>
     <img alt="img"src="/projects/om2.png"></img>
     <img alt="img"src="/projects/om3.png"></img>
     </div>
   </article>
   <article>
     <p className="pText">Educational 3D Game made in Unreal Engine</p>
     <div className="pGallery">
     <img alt="img"src="/projects/nasa1.png"></img>
     <img alt="img"src="/projects/nasa2.png"></img>
     </div>
   </article>
   <article>
     <p className="pText">Pitched on many hackathons and other events</p>
     <div className="pGallery">
     <img alt="img"src="/projects/pitch1.png"></img>
     <img alt="img"src="/projects/pitch2.png"></img>
     </div>
   </article>
   <article>
     <p className="pText">Made a VR app in Unity using c# meant to make kids happier while being treated in a hospital</p>
     <div className="pGallery">
     <img id="vr" alt="img"src="/projects/vr1.png"></img>
     </div>
   </article>
   <article>
     <p className="pText">E-commerce mobile App made in Android Studio using Kotlin for a clothing store</p>
     <div className="pGallery">
     <img id="vr" alt="img"src="/projects/kotlin1.png"></img>
     </div>
   </article>
   <article>
     <p className="pText">3D game made in Unreal Engine 4 using c++ blueprints</p>
     <div className="pGallery">
     <img id="vr" alt="img"src="/projects/yugo1.png"></img>
     </div>
   </article>
    <article>
     <p className="pText">Course video about Understanding the Built-in Functions and Algorithms in C++</p>
     <div className="pGallery">
     <img id="vr" alt="img"src="/projects/kurs1.png"></img>
     </div>
   </article>
   </div>
    
    
    </div>
    </>
  );
}

export default Projects;
