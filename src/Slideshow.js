import React from 'react';
import { Fade } from 'react-slideshow-image';
import './css/Slideshow.css';
import 'react-slideshow-image/dist/styles.css'

  function Slideshow() {
    return (
        <div className="slide-container">
            <p id="soft"> Certificates, Diplomas and recognitions </p>
            <Fade>
                <div className="each-fade">
                    <div className="image-container">
                        <img alt="img" src="certificates/1.jpg" />
                    </div>
                </div>
                <div className="each-fade">
                    <div className="image-container">
                        <img alt="img"src="certificates/2.jpg" />
                    </div>
                </div>
                <div className="each-fade">
                    <div className="image-container">
                        <img alt="img"src="certificates/3.jpg" />
                    </div>
                </div>
                <div className="each-fade">
                    <div className="image-container">
                        <img alt="img"src="certificates/4.jpg" />
                    </div>
                </div>
                <div className="each-fade">
                    <div className="image-container">
                        <img alt="img"src="certificates/5.jpg" />
                    </div>
                </div>
                <div className="each-fade">
                    <div className="image-container">
                        <img alt="img" src="certificates/6.jpg" />
                    </div>
                </div>
                <div className="each-fade">
                    <div className="image-container">
                        <img alt="img" src="certificates/7.jpg" />
                    </div>
                </div>
                <div className="each-fade">
                    <div className="image-container">
                        <img alt="img" src="certificates/8.jpg" />
                    </div>
                </div>
                <div className="each-fade">
                    <div className="image-container">
                        <img alt="img" src="certificates/9.jpg" />
                    </div>
                </div>
                <div className="each-fade">
                    <div className="image-container">
                        <img alt="img" src="certificates/10.jpg" />
                    </div>
                </div>
                <div className="each-fade">
                    <div className="image-container">
                        <img alt="img" src="certificates/11.jpg" />
                    </div>
                </div>
                <div className="each-fade">
                    <div className="image-container">
                        <img alt="img"  src="certificates/12.png" />
                    </div>
                </div>
                <div className="each-fade">
                    <div className="image-container">
                        <img alt="img" src="certificates/13.jpg" />
                    </div>
                </div>
                <div className="each-fade">
                    <div className="image-container">
                        <img alt="img" src="certificates/14.jpg" />
                    </div>
                </div>
                <div className="each-fade">
                    <div className="image-container">
                        <img alt="img" src="certificates/15.jpg" />
                    </div>
                </div>
                <div className="each-fade">
                    <div className="image-container">
                        <img alt="img" src="certificates/16.jpg" />
                    </div>
                </div>
                <div className="each-fade">
                    <div className="image-container">
                        <img alt="img" src="certificates/17.png" />
                    </div>
                </div>
                <div className="each-fade">
                    <div className="image-container">
                        <img alt="img" src="certificates/18.png" />
                    </div>
                </div>
                

            </Fade>
           
        </div>
    );
}
export default Slideshow;
