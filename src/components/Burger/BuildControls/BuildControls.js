import React from 'react';
import classes from './BuildControls.css'
import BuildControl from './BuildControl/BuildControl';

// want an array to conveniently loop through to build all of these controls
const controls = [
    {label: 'Salad', type: 'salad'},
    {label: 'Bacon', type: 'bacon'},
    {label: 'Cheese', type: 'cheese'},
    {label: 'Meat', type: 'meat'}
];

const buildControls = (props) => (
    // loop through all the controls (above) and build a control for each of them
    <div className={classes.BuildControls}>
        <p>Current Price: <strong>{props.price.toFixed(2)}</strong></p>
        {controls.map(ctrl => (
            <BuildControl 
            key={ctrl.label} 
            label={ctrl.label}
            // whoa what does this do?
            // which should go back to addIngredientHandler()
            added={() => props.ingredientAdded(ctrl.type)}
            removed={() => props.ingredientRemoved(ctrl.type)} 
            // should we disable this button or not?
            disabled={props.disabled[ctrl.type]}
            />
        ))}
        <button 
            className={classes.OrderButton}
            disabled={!props.purchaseable}
            onClick={props.ordered}>ORDER NOW</button>
    </div>
);

export default buildControls;