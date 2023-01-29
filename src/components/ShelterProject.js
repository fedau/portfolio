import React from 'react'
import video from '../public/shelter.mp4'
import '../App.css';


const ShelterProject = () => {
  return (
    <div>
      <h2> This is the Animal shelter project </h2>
      <p> This project was made in ReactJS with mongodb. It was a group project and we had 6 days to come up with a brief, plan and code the whole project. <br/>
        It was a great experience working in team, delegating tasks and helping each other out. 
        You can checkout the video of a walk through or look at the code in github linked <a href='https://github.com/fedau/pet-shelter-app'>here </a> .
      </p>
      <video width="320" height="240" controls>
       <source src={video} type="video/mp4"/>
        Your browser does not support the video tag.
        </video> 
        <a href="/"><button>Home</button></a>
    </div>
  )
}

export default ShelterProject
