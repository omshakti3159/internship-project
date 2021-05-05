import React, { useState } from 'react'
import Home from './components/Home'
import Navbar from './components/Navbar'
import './App.css'
const App = () => {
    const [loading,setloading]=useState(false)
    const [loadctn,setctn]= useState(false)
    setTimeout(()=>{setctn(true)},3800)
    setTimeout(()=>{setloading(true)},3000)
    function loadContent(){
        if(loadctn)
        return <Home/>
        else
            return <div></div>
    }
    function preloading(){
      if(loading)
        return(
            <div className="load">
        <div className="loading_screen">
        </div>
        {loadContent()}
    </div>
    )
    else
        return(
            <>
            <div className="loading_text">I am Preloading Screen</div>
        </>
        )
    }
    return (
        <div >
            <Navbar/>
            <div id="load">
                {preloading()}
            </div>  
        </div>
    )
}
export default App
