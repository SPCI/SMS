/**
 * Created by musbell on 12/22/16.
 */
import React from 'react'
import preloader from './preloader.png'
import './preloader.css'

let Preloader = () => (
    <div className="loader">
        <img src={preloader} alt="preloader"/>
    </div>
);

export default Preloader