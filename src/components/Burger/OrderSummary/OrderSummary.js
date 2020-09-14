import React from 'react';
import Auxiliary from '../../../hoc/Auxiliary';
import Button from '../../UI/Button/Button';

const orderSummary = (props) => {
    // transform this into an array of the keys
    const ingredientSummary = Object.keys(props.ingredients)
        // want to map this into an array of JSX elements in the end
        .map(igKey => {
        return (
            <li key={igKey}>
                <span style={{textTransform: 'capitalize'}}>{igKey}</span>: {props.ingredients[igKey]}
            </li>);
        });
    // in an object format and not an array
    // pass the object on and do the transformation to array in OrderSummary
    // rather than doing it in BurgerBuilder

    // want the output <li>Salad: 1</li>
    // but want to do it dynamically

    return (
        <Auxiliary>
            <h3>Your Order</h3>
            <p>A delicious burger with the following ingredients:</p>
            <ul>
                {ingredientSummary}
            </ul>
            <p><strong>Total Price: {props.price.toFixed(2)}</strong></p>
            <p>Continue to Checkout?</p>
            <Button btnType="Danger" clicked={props.purchaseCancelled}>CANCEL</Button>
            <Button btnType="Success" clicked={props.purchasedContinued}>CONTINUE</Button>
        </Auxiliary>
    );
};

export default orderSummary;

// also has a class version of this component as an improvement
// for performance of the application