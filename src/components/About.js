import React from "react";
import './About.css'
import {GoMarkGithub} from "react-icons/go"
import {FaLinkedin} from 'react-icons/fa'
import '../App.css';



const About = () => (
  <div className="outer-wrapperA" >
    {/* <div className="inner-wrapperA"> */}


    <h1 className="pageTitle">About Me</h1>
    <p>I am a recent graduate from CodeClan, with a background in retail management, eager to start my career as a Software Developer. During my position as manager, I learned how to be a creative problem solver and I had a strong focus on creating a better product and keeping track of progress. I loved all those aspects in my previous job but felt like I needed to use them in a different environment. From my time at CodeClan, I am able to  to learn on the go. Now I have a strong foundation in programming languages including Python, Java, and JavaScript. I have hands-on experience in web development using Flask, ReactJS and have knowledge of databases like MongoDB and PostgreSQL. With all of this combined I am I am ready for a career in software. </p>
    <p>I am a quick learner and have a passion for coding. The creating and delivering of a project is incredibly rewarding and makes me want to constantly be better. I believe that my technical skills, combined with my eagerness to learn, makes me a strong candidate for this role. </p>
    <p>I am looking for a challenging and supportive environment where I can continue to grow, learn and make a positive impact as a developer. I am confident in my ability to turn business requirements into functioning software and am eager to contribute to the success of a company by leveraging my skills and knowledge. </p>
    <h4>Contact Me Please</h4>
    <a href="https://github.com/fedau" target="_blank" rel="noreferrer"><GoMarkGithub color='#283D3B' fontSize="2em" margin='2em'/> </a> 
    <a href="https://www.linkedin.com/in/fedau" target="_blank" rel="noreferrer"> <FaLinkedin color='#283D3B' fontSize="2em"/></a>

    {/* </div> */}
  </div>
);

export default About;
