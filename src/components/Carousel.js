import React from "react";
import {Carousel} from "react-responsive-carousel";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import image1 from '../assets/images/image_1.jpg';
import image2 from '../assets/images/image_2.jpg';
import image3 from '../assets/images/image_3.jpg';
import image4 from '../assets/images/image_4.jpg';
import image5 from '../assets/images/image_5.jpg';
import image6 from '../assets/images/image_6.jpg';
import image7 from '../assets/images/image_7.jpg';
import image8 from '../assets/images/image_8.jpg';
import image9 from '../assets/images/image_9.jpg';
import image10 from '../assets/images/image_10.jpg';
import image11 from '../assets/images/image_11.jpg';

export default() => (
    <Carousel autoPlay showStatus={false} infiniteLoop={true}>
        <div>
            <img src={image1} alt="image1"/>
        </div>
        <div>
            <img src={image2} alt="image2"/>
        </div>
        <div>
            <img src={image3} alt="image3"/>
        </div>
        <div>
            <img src={image4} alt="image4"/>
        </div>
        <div>
            <img src={image5} alt="image5"/>
        </div>
        <div>
            <img src={image6} alt="image6"/>
        </div>
        <div>
            <img src={image7} alt="image7"/>
        </div>
        <div>
            <img src={image8} alt="image8"/>
        </div>
        <div>
            <img src={image9} alt="image9"/>
        </div>
        <div>
            <img src={image10} alt="image10"/>
        </div>
        <div>
            <img src={image11} alt="image11"/>
        </div>
    </Carousel>
);
