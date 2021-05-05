import React from 'react'
import './css/HomeBody.css'
import ImageComponent from './ImageComponent'
import img from './img.webp'
import img2 from './img2.webp'
import img3 from './img3.webp'
import img4 from './img4.webp'
import img5 from './img5.webp'
import img6 from './img6.webp'
const HomeBody = () => {
    return (
        <div className="body_container">
            <p>All work, all play<br/>Selected projects</p>
            <div className="left">
               <ImageComponent src={img} heading="Dorsia" text="Branding Product Marketing"/>
               <ImageComponent src={img3} heading="Dropbox Guide" text="Development Marketing"/>
               <ImageComponent src={img5} heading="Copper" text="Design Branding Marketing"/>
            </div>
            <div className="right">
            <ImageComponent src={img2} heading="Reuters News App" text="Design Product"/>
            <ImageComponent src={img4} heading="Uber Design" text="Development Marketing"/>
            <ImageComponent src={img6} heading="RedBull TV" text="Development Product"/>
            </div>
        </div>
    )
}

export default HomeBody
