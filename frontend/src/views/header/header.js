/**
 * Created by musbell on 12/2/16.
 */
import React from 'react'
import './header.css'
import logo from '../demo/logo.png'

const logoStyle = {
    width: 75,
    height: 65,
};

export default () => (
    <div className="header">
        <img src={logo} alt="logo" style={logoStyle}/>
    </div>
)
