import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";
import './Home.css'
import {GoMarkGithub} from "react-icons/go"
import {FaLinkedin} from 'react-icons/fa'
import { Link } from "react-router-dom";

const Home = () => (
  <div className="outer-wrapper">
    <h1 className="name">Fedau Depraetere</h1>
    <h3>I am a software developper I have made different projects these past few months please check them out </h3>
    <a href="https://github.com/fedau"><GoMarkGithub color='#283D3B' fontSize="2em" margin='2em'/> </a> 
    <a href="https://www.linkedin.com/in/fedau-depraetere-601321209?lipi=urn%3Ali%3Apage%3Ad_flagship3_profile_view_base_contact_details%3Bzs%2Bh%2BtYGR3udwPKX7pRB3g%3D%3D"> <FaLinkedin color='#283D3B' fontSize="2em"/></a>
    <div className="card-wrapper">
<Link className="about" to="/about">
    <div > <h4>About</h4> <p>Get to know me</p></div>
</Link>
<Link>
</Link>
    <div className="pythonP"> <h4>Recipe Website</h4> <p>Made with Python - Flask - PostgresSql </p></div>
    <div className="shelterP"> <h4>Animal Shelter Website</h4> <p>Made with ReactJS - Mongodb </p></div>

    </div>

  </div>
);

export default Home;
