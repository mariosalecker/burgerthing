import React from 'react';

import classes from './Input.module.css'

const input = (props) => {

    let inputClasses = [classes.InputElement];
    if (props.invalid && props.shouldValidate && props.touched) {
        inputClasses.push(classes.Invalid);
    }
    let input = <input className={inputClasses.join(' ')} {...props.elementConfig} value={props.value} onChange={props.changed}/>

    switch (props.elementType) {
        case ('textarea'):
            input = <textarea className={inputClasses.join(' ')} {...props.elementConfig} value={props.value} onChange={props.changed} />
            break;
        case ('select'):
            input = (<select className={inputClasses.join(' ')} value={props.value} onChange={props.changed}>
                {props.elementConfig.options.map(option => (
                    <option key={option.value} value={option.value}>{option.display}</option>
                ))}
            </select>)
            break;
        default:
        // do nothing
    }

    return (
        <div className={classes.Input}>
            <label className={classes.Label}>{props.label}</label>
            {input}
        </div>
    );
}

export default input;