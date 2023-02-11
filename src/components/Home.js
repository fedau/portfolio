import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";
import './Home.css'
import {GoMarkGithub} from "react-icons/go"
import {FaLinkedin} from 'react-icons/fa'
import { Link } from "react-router-dom";
import pythonpage from '../public/Homepage.png'
import shelterpage from '../public/shelter.png'
import me from '../public/me.jpg'

          
// import mepic from '../public/me.jpg'


const Home = () => (

    <div className="outer-wrapper">

      <meta name="viewport" content="width=device-width, initial-scale=1.0"/> 
      <h1 className="name">Fedau Depraetere</h1>
      <h2>Software developer </h2>
      <a href="https://github.com/fedau" target="_blank" rel="noreferrer"><GoMarkGithub color='#283D3B' fontSize="2em" margin='2em'/> </a> 
      <a href="https://www.linkedin.com/in/fedau" target="_blank" rel="noreferrer"> <FaLinkedin color='#283D3B' fontSize="2em"/></a>
      <div className="card-wrapper">
  
  <Link className="about" to="/about">
      <div > <img src={me} alt=''/>  
      <h4>About</h4> 
      <p>Get to know me</p></div>
  </Link>

  <Link className="pythonP" to='/recipe'>
    
      <div > <img src={pythonpage} alt=''/> 
        <h4>Recipe Website</h4> 
        <i class="devicon-python-plain" style={{ fontSize: 30}}></i>
        <i class="devicon-flask-original" style={{ fontSize: 30}}></i>
        <i class="devicon-postgresql-plain" style={{ fontSize: 30}}></i>
          
          
    </div>
  </Link>
  <Link className="shelterP" to='/shelter'>
      <div > <img src={shelterpage} alt=''/> 
      <h4>Animal Shelter Website</h4> 

      <i class="devicon-react-original" style={{ fontSize: 30}}></i>
          
      <i class="devicon-javascript-plain" style={{ fontSize: 30}}></i>
          
      <i class="devicon-mongodb-plain" style={{ fontSize: 30}}></i>
          
      <i class="devicon-nodejs-plain" style={{ fontSize: 30}}></i>
          
          </div>
  </Link>
  
  <Link className="pythonP" to='/shelter'>
      <div > <h4>Another Project</h4> <p>mad with java or something </p></div>
  </Link>
  <Link className="shelterP" to='/shelter'>
      <div > <h4>Another Project</h4> <p>mad with java or something </p></div>
  </Link>
      </div>
  
    </div>
  );
  
  export default Home;
