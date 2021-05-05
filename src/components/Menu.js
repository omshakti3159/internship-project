import React from 'react'
import './css/Menu.css'
const Menu = ({visible}) => {
    var style
    {visible?style={display:'block'}:style={display:'none'}}
    return (
        <div style={style} className="menu_container">
                <h1>Menu Container</h1>
        </div>
    )
}

export default Menu
