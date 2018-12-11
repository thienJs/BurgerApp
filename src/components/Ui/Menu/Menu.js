import React from 'react';
import classes from './Menu.module.css';

const menu = (props) => (
  <div 
    className={classes.Menu}
    onClick={props.showMenu}>
    <div></div>
    <div></div>
    <div></div>
  </div>
);

export default menu;