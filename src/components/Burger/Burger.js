import React from 'react';
import classes from './Burger.css';
import BurgerIngredient from './BurgerIngredient/BurgerIngredient';

// this will be the burger that we render to the screen
// a functional component

// use a div to wrap all the ingredients in order to give it some styling

const burger = (props) => {
    // extracts keys of a given object and 
    // turns them into an array, gives an array of keys
    // values are not part of the array
    // can then execute the map() method since keys will return an array
    // will execute on each element of the array
    let transformedIngredients = Object.keys(props.ingredients)
        .map(igKey => {
            // transform string value into an array with as many elements 
            // as we have ingredients for a given ingredient
            // use spread operator to spread a new array we have to construct
            // length of the array will be the amount of the given ingredient
            // use map because we want to map the elements for the array
            // i is the index for the element
            return [...Array(props.ingredients[igKey])].map((_, i) => {
                // need to return an array of JSX elements
                // map my object into an array of ingredients in the end
                // return an object of key value pairs into an array
                // of burger ingredients where the value of the object
                // is important for me to decide how many ingredients I need
                // and they key is important for which type of ingredient
                // I need
                return <BurgerIngredient key={igKey + i} type={igKey} />;
            })
        })
            // always us to transform the array into something else
            // takes two arguments: previous value and current value
            // the callback executes on every value of the array returned
            // also takes an initial value, an empty array here
            // will loop through all the elements and initialize them step by step
        .reduce((arr, el) => {
            // will take the given element through which we are looping
            // and add it to this array arr
            return arr.concat(el);
        }, []); 
    
    if (transformedIngredients.length === 0) {
        transformedIngredients = <p>Please start adding ingredients!</p>
    }
    // CHECK OUT JAVASCRIPT FUNCTIONS
    // map() and reduce()
    console.log(transformedIngredients);
    return (
        <div className={classes.Burger}>
            <BurgerIngredient type="bread-top" />
            {transformedIngredients}
            <BurgerIngredient type="bread-bottom" />
        </div>
    );
};

export default burger;
