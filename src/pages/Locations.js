import React from 'react';
import {
    Link,
  } from "react-router-dom";
import map from '../assets/map.jpg';
const About = () => {
    return(
        <div className="form-body">
                <Link to="/" className="Link close">
                    <a href="./" class="close"/>
                </Link>
                <h1>
                    Shelf Locations !
                </h1>
                <div className="form" >
                    <img style={{marginTop: -10}} src={map} className="map" alt=""/>
                </div>
        </div>
    )
}

export default About;