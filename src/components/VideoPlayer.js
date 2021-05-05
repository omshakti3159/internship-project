import React from 'react'
import img from './poster.png'
const VideoPlayer = () => {
    const style={
        position:'absolute',
        bottom:'-270rem',
        width:'100vw',
        textAlign:'center'
    }
    return (
        <div style={style}>
            <video autoPlay={true} poster={img} height='600rem' width='90%'>
                <source src="https://ueno.co/static/interview-white-17edfff518080c24e6248ae5e6b232dc.mp4"/>
            </video>
        </div>
    )
}

export default VideoPlayer
