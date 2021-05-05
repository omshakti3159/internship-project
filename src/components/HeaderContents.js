import React from 'react'
import './css/HeaderContent.css'
const HeaderContents = () => {
    return (
        <div className="header_section">
            <div className="left_section">
                <div className="featured_content">
                    <p>Featured Project</p>
                    <p>ClearMotion</p>
                    <p>It’s gonna be a comfy</p>
                    <p>ride</p>
                    <p>More projects</p>
                </div>
            </div>
            <div className="right_section">
                <div className="rounded_container">
                    <div className="rounded_background"></div>
                </div>
                <div className="video_container">
                   
                <video className="video" poster="https://images.prismic.io/ueno-www/6d754721-40ff-4de1-b272-76b754e97da8_clear-motion-hero-poster.jpg?auto=compress,format" playsinline="" src="https://prismic-io.s3.amazonaws.com/ueno-www/271b65ff-cb67-4dc9-82e5-dbf0a1de93fb_clearmotion_hero_video.mp4"></video>
                </div>
            </div>
            <div className="quotes">
                <p>Ueno is a full-service agency, busy <br/>designing and building beautiful digital <br/>products, brands, and experiences.</p>
                <p>&gt; Contact us</p>
            </div>
        </div>
    )
}

export default HeaderContents
