import React from 'react'

export default function AboutMe() {
    return (
        <div className="aboutMe" >
          <hr id="aboutMeHr" />
      <img className="aboutMeImg" alt="photoOfMe"  src="certificates/alek.jpeg"></img>
      <p id="link1">
        ABOUT ME
        <img alt="" className="stroke" src="https://www.onlygfx.com/wp-content/uploads/2017/07/blue-watercolor-brush-stroke-18-1.png"></img>
         <br/> <br/>
        <span id="soft">Software Engineer</span> <br/> <br/>
       <span id="bio"> Software engineering student interested in technology, 
        innovation and business. Working with Web Development, VR/AR 
        applications, as well as 2D/3D games. I have been to numerous hackathons,
        seminars, lectures and events and have competed in different categories 
        such as Computer Technologies (Theoretical), Web Development, Competitive Programming 
        (Algorithms), Game Development etc. 
        </span>
      </p>
    </div>
    )
}
