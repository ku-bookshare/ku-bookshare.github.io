import React from 'react';
import {
    Link,
  } from "react-router-dom";
import map from '../assets/map.jpg';
const About = () => {
    return(
        <div style={{width: 500}}>
                <Link to="/" className="Link close">
                    <a href="./" class="close"/>
                </Link>
                <h1>
                    Shelf Locations !
                </h1>
                <div className="form" >
                    <img style={{width: 400,height: 300, marginTop: -10}} src={map} className="map" alt=""/>
                </div>
        </div>
    )
}

export default About;