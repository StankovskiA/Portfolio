import React from 'react'

export default function Services() {
    return (
        <div className="services">
          <hr id="servicesHr" />
     <span id="serviceSpan">SERVICES <img className="stroke" alt="brushstroke" src="https://www.onlygfx.com/wp-content/uploads/2017/07/blue-watercolor-brush-stroke-18-1.png"></img> </span>  <br/> <br/>
    <span id="soft">What services <br/> I Offer you</span> <br/> <br/>
    <div className="servisi">
      <div>
        <img alt="gameDev" src="https://stankovski.000webhostapp.com/gallery_gen/dcc427a96a2ff675cfdee8576d76a20d_91x91.png"></img>
         <br/> Game <br/> Development <br/>
         <span className="serviceDesc">
           2D/3D games made with Unity and Unreal Engine
         </span>

      </div>
      <div>
        <img alt="AR" src="https://stankovski.000webhostapp.com/gallery_gen/221fd31ad7cec701310a21e14ef6003c_100x100.png"></img>
         <br/> Augmented & <br/> Virtual Reality <br/>
         <span className="serviceDesc">
           AR/VR Applications for different purposes. Including
           interactive options and animations
         </span>
      </div>
      <div>
        <img alt="mobileDev" src="https://stankovski.000webhostapp.com/gallery_gen/ccc4de81c38a0e19b9f6c0a532508138_154.09090909091x113.png"></img>
         <br/> Mobile Application <br/> Development <br/>
         <span className="serviceDesc">
           Mobile applications with Android Stuido, Visual Studio or Unity
         </span>
      </div>
      <div>
        <img alt="webDev" src="https://stankovski.000webhostapp.com/gallery_gen/d8d1c42b666e4278842090c6d6c82ba5_110x110.png"></img>
         <br/> Web  <br/> Development <br/>
         <span className="serviceDesc">
           Full Stack Web Development with React and node
         </span>
      </div>
    </div>

    </div> 
    )
}
