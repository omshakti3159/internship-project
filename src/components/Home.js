import React from 'react'
import './css/Navbar.css'
import HeaderContents from './HeaderContents'
import HomeBody from './HomeBody'
import Navbar from './Navbar'
import VideoPlayer from './VideoPlayer'
import Whatsnew from './Whatsnew'
const Home = () => {
    return (
       <div >
                <Navbar/>
                <HeaderContents/>
                <HomeBody/>
                <Whatsnew/>
                <VideoPlayer/>
       </div>
        )
}

export default Home
