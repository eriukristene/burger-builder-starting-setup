import React from 'react';
import classes from './Modal.css';
import Auxiliary from '../../../hoc/Auxiliary';
import Backdrop from '../Backdrop/Backdrop';


const modal = (props) => (
    <Auxiliary>
        <Backdrop show={props.show} clicked={props.modalClosed} />
        <div 
            className={classes.Modal}
            style={{
                transform: props.show ? 'translateY(0)' : 'translateY(-100vh)',
                opacity: props.show ? '1' : '0'
            }}>
            {props.children}
        </div>
    </Auxiliary>
);

export default modal;

// in this case, the Backdrop is added here
// if the Modal is shown, then the Backdrop should be shown