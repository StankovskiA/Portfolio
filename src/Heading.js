import React from 'react'
import {Link} from 'react-router-dom'

function clicked1()
{
  var x = document.getElementById('gPanela');
  if (x.style.display === "none") {
    x.style.display = "inline";
  } else {
    x.style.display = "none";
  }
}
function clicked2()
{
  var x = document.getElementById('lPanela');
  if (x.style.display === "none") {
    x.style.display = "inline";
  } else {
    x.style.display = "none";
  }
}
function clicked3()
{
  var x = document.getElementById('iPanela');
  if (x.style.display === "none") {
    x.style.display = "inline";
  } else {
    x.style.display = "none";
  }
}function clicked4()
{
  var x = document.getElementById('hPanela');
  if (x.style.display === "none") {
    x.style.display = "inline";
  } else { 
    x.style.display = "none";
  }
}
export default function Heading() {
    return (
        <div className="heading">
       <p>
         HEY THERE! <br/>
        <span className="helloText">
         I AM ALEKSANDAR STANKOVSKI
        </span>
        <br/>
        SOFTWARE ENGINEER & WEB DEVELOPER <br/> <br/> 
        <button type="button" className="gButton" onClick={clicked1}>
          <img alt="e" src="https://www.freepnglogos.com/uploads/logo-gmail-png/logo-gmail-png-gmail-icon-download-png-and-vector-1.png"></img>
        </button>
        <button type="button" className="gButton"  onClick={clicked2}>
          <img alt="e" src="https://icons-for-free.com/iconfiles/png/512/linked+linkedin+logo+social+icon-1320191784782940875.png"></img>
        </button>
        <button type="button" className="gButton"  onClick={clicked3}>
          <img alt="e"  src="https://cdn.icon-icons.com/icons2/1826/PNG/512/4202090instagramlogosocialsocialmedia-115598_115703.png"></img>
        </button>
        <button type="button" className="gButton"  onClick={clicked4}>
          <img alt="e"  src="http://pngimg.com/uploads/github/github_PNG40.png"></img>
        </button> <br/>
        <span className="gPanel" id="gPanela">stankovski.a@gmail.com</span>
        <span className="gPanel" id="lPanela"><a target="_blank" rel="noreferrer" href="http://linkedin.com/in/stankovskialeksandar">My LinkedIn</a></span>
        <span className="gPanel" id="iPanela"><a target="_blank" rel="noreferrer" href="https://www.instagram.com/friendlycoder/">My Instragram</a></span>
        <span className="gPanel" id="hPanela"><a target="_blank" rel="noreferrer" href="https://github.com/StankovskiA">My Github</a></span>
        
        <Link id="projects" href="\projects">Check out my projects</Link>
        </p>
        
     
     </div>
    )
}
