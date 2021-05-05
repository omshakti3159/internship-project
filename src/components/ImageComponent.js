import React from 'react'
import './css/ImageComponent.css'

const ImageComponent = ({src,heading,text}) => {
    return (
        <div className="image_container">
            <div className="image_sub_container">
                <img src={src} alt= 'image'/>
            </div>
           <h3>{heading}<br/><span>{text}</span></h3>
        </div>
    )
}

export default ImageComponent
