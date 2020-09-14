import React from 'react';
import classes from './Button.css';

const button = (props) => (
    // use props.children
    // so that you can use my own button like a normal button
    // and simply wrap the content that should go inside
    // with the custom button element
    <button
        // getting a string of class names
        // and joining them together again
        // we need to do this because we need to decide if the button
        // should be a success or danger 
        className={[classes.Button, classes[props.btnType]].join(' ')}
        // this props.children will grab whatever is between the button tags
        // and display it, like a regular HTML button
        onClick={props.clicked}>{props.children}</button>
);
    

export default button;