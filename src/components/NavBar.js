import React from 'react'
import { Link } from 'react-router-dom'
import styled from 'styled-components'
  
  const Nav = styled.nav`
  text-align: center;
  background-color: #062c43;
  margin: 0;
  padding: 1em;
  color: white;
  font-size: 1.5em;
  display:flex;
  justify-content: space-between;
  text-decoration: none;

  `

  const List = styled.ul`
  list-style: none;
  margin: 0;
  padding: 0;
  `

  const StyledLink  = styled(Link)`
  color: yellow;
  text-decoration: none;

  
  `
const NavBar = () => {


  return (
    
     <Nav>
            {/* <List> */}
                <StyledLink to="/portfolio/">Home</StyledLink>
                <StyledLink to="/portfolio/about">About</StyledLink>
            {/* </List> */}
      </Nav>
  
  )
}

export default NavBar

