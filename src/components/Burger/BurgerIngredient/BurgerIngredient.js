import React, {Component} from 'react';
import PropTypes from 'prop-types';
import classes from './BurgerIngredient.css';

// this is what we need to render something to the screen
// functional component
// stateless component

// then changed it to a class-based component
// need to use the THIS keyword now
// because inside a class, you access props with this.props

class BurgerIngredient extends Component  {
    render() {
        let ingredient = null;

        switch (this.props.type) {
            case ('bread-bottom'):
                ingredient = <div className={classes.BreadBottom}></div>
                break;
            case ('bread-top'):
                ingredient = (
                    <div className={classes.BreadTop}>
                        <div className={classes.Seeds1}></div>
                        <div className={classes.Seeds2}></div>
                    </div>
                );
                break;
            case ('meat'):
                ingredient = <div className={classes.Meat}></div>
                break;
            case ('cheese'):
                ingredient = <div className={classes.Cheese}></div>
                break;
            case ('bacon'):
                ingredient = <div className={classes.Bacon}></div>
                break;
            case ('salad'):
                ingredient = <div className={classes.Salad}></div>
                break;
            default:
                ingredient = null;
        }

        return ingredient;
    }
}

BurgerIngredient.propTypes = {
    type: PropTypes.string.isRequired 
};

export default BurgerIngredient;