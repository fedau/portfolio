import React from 'react';
import { slide as Menu } from 'react-burger-menu';
import './Sidebar.css';

// eslint-disable-next-line import/no-anonymous-default-export
export default props => {
  return (
    <Menu>
      <a className="menu-item" href="/">
        Home
      </a>
      <a className="menu-item" href="/about">
        Contact
      </a>
      {/* <a className="menu-item" href="/pizzas">
        Pizzas
      </a>
      <a className="menu-item" href="/desserts">
        Desserts
      </a> */}
    </Menu>
  );
};