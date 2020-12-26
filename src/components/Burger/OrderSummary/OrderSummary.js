import React, { Component, Fragment } from 'react';

import Button from '../../UI/Button/Button'

class OrderSummary extends Component {

    componentDidUpdate = () => {
        console.log("Component will update")
    } 

    render() {
        const ingredientsSummary = Object.keys(this.props.ingredients)
            .map(ingredient => {
                return <li key={ingredient}>
                    <span style={{ textTransform: 'capitalize' }}>{ingredient}</span>
            : {this.props.ingredients[ingredient]}
                </li>
            });

        return (
            <Fragment>
                <h3>Your order</h3>
                <p>Yay, this is your burger:</p>
                <ul>
                    {ingredientsSummary}
                </ul>
                <p>Total price: <strong>{this.props.price.toFixed(2)}</strong></p>
                <p>Continue to checkout</p>
                <Button btnType="Danger" clicked={this.props.onCancel}>CANCEL</Button>
                <Button btnType="Success" clicked={this.props.onContinue}>CONTINUE</Button>
            </Fragment>
        );
    }
}

export default OrderSummary;