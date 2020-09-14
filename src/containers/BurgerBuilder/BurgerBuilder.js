import React, { Component } from 'react';
import Auxiliary from '../../hoc/Auxiliary';
import Burger from '../../components/Burger/Burger';
import BuildControls from '../../components/Burger/BuildControls/BuildControls'
import Modal from '../../components/UI/Modal/Modal';
import OrderSummary from '../../components/Burger/OrderSummary/OrderSummary';

// want to know which ingredient costs what
// consts you want to use as global const, you use capital letters
const INGREDIENT_PRICES = {
    salad: 0.5,
    bacon: 0.7,
    cheese: 0.4,
    meat: 1.3 
}

// want to manage state in this component, so we will use a class-based component

class BurgerBuilder extends Component {
    // alternative way of implementing and managing state in this type of component
    // constructor(props) {
    //    super(props);
    //    this.state = {}
    // }

    state = {
        ingredients : {
            salad: 0,
            bacon: 0,
            cheese: 0,
            meat: 0
        },
        totalPrice: 4,
        purchaseable: false,
        purchasing: false
    }

    updatePurchaseState (ingredients) {
        // need to turn this object into an array of these values
        const sum = Object.keys(ingredients)
            .map(igKey => {
                // accessing a certain property in the ingredients object
                // getting the numbers/values
                return ingredients[igKey]
            })
            // turn the array into a single number
            // the sum of all the ingredients
            // sum is the number of ingredients, 0 if there are none OR
            // some other number representing total amount of ingredients
            .reduce((sum, el) => {
                return sum + el;
            }, 0);
        this.setState({purchaseable: sum > 0});
    }
    
    // type refers to which type of ingredient it is
    addIngredientHandler = (type) => {
        const oldCount = this.state.ingredients[type];
        const updatedCount = oldCount + 1;
        // update the state in an immutable way
        // create a copy of the state object here
        // use the spread operator to distribute the properties
        // of the old ingredients state into the new object
        // being created here
        const updatedIngredients = {
            ...this.state.ingredients
        };
        // access the type which I have to update the ingredients
        // set the value, which is the amount of the ingredients
        // to the updatedCount
        updatedIngredients[type] = updatedCount;

        // update the total price with the price of the ingredients type added
        const priceAddition = INGREDIENT_PRICES[type];
        const oldPrice = this.state.totalPrice;
        const newPrice = oldPrice + priceAddition;
        // update the price and ingredients
        this.setState({totalPrice: newPrice, ingredients: updatedIngredients});
        this.updatePurchaseState(updatedIngredients);
    }

    removeIngredientHandler = (type) => {
        const oldCount = this.state.ingredients[type];
        // need to check to make sure the ingredient exists
        // otherwise we will try to delete something we don't have
        // which will throw an error
        if (oldCount <= 0) {
            return; // nothing will happen if we try to delete an ingredient we don't have
        }
        const updatedCount = oldCount - 1;
        const updatedIngredients = {
            ...this.state.ingredients
        };
        updatedIngredients[type] = updatedCount;
        const priceDeduction = INGREDIENT_PRICES[type];
        const oldPrice = this.state.totalPrice;
        const newPrice = oldPrice - priceDeduction;
        this.setState({totalPrice: newPrice, ingredients: updatedIngredients});
        this.updatePurchaseState(updatedIngredients);
    }

    purchaseHandler = () => {
        this.setState({purchasing: true});
    }

    // clicking on the backdrop means we want to 
    // close the modal and cancel the purchase
    purchaseCancelledHandler = () => {
        this.setState({purchasing: false});
    }

    purchaseContinueHandler = () => {
        alert('You continue!');
    }

    render() {
        const disabledInfo = {
            // copy the state object in an immutable way
            ...this.state.ingredients
        }
        for (let key in disabledInfo) {
            // disabledInfo[key] is the value of each key, 0 at the start
            disabledInfo[key] = disabledInfo[key] <= 0
            // will return true or false
            // will update this in our copied object with true or false
        }
        // {salad: true, meat: false, ...}
        return(
            <Auxiliary>
                <Modal show={this.state.purchasing} modalClosed={this.purchaseCancelledHandler}>
                    <OrderSummary 
                        ingredients={this.state.ingredients}
                        price={this.state.totalPrice}
                        purchaseCancelled={this.purchaseCancelledHandler}
                        purchasedContinued={this.purchaseContinueHandler} />
                </Modal>
                <Burger ingredients={this.state.ingredients} />
                <BuildControls 
                    ingredientAdded={this.addIngredientHandler}
                    ingredientRemoved={this.removeIngredientHandler}
                    disabled={disabledInfo}
                    purchaseable={this.state.purchaseable}
                    ordered={this.purchaseHandler}
                    price={this.state.totalPrice} />
            </Auxiliary>
        );
    }
}

export default BurgerBuilder;