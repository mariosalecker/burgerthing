import React from 'react'

import classes from './Burger.module.css'
import BurgerIngredient from './BurgerIngredient/BurgerIngredient'

const burger = (props) => {

    let transformedIngredients = Object.keys(props.ingredients)
        .map((ingredient) => {
            return [...Array(props.ingredients[ingredient])].map((_, index) => {
                return <BurgerIngredient key={ingredient + index} type={ingredient} />
            });
        })
        .reduce((prev, cur) => {
            return prev.concat(cur);
        }, []);

    if (transformedIngredients.length === 0) {
        transformedIngredients = "Please start adding ingredients";
    }
    return (
        <div className={classes.Burger}>
            <BurgerIngredient type="bread-top" />
            {transformedIngredients}
            <BurgerIngredient type="bread-bottom" />
        </div>
    );
}

export default burger;