import React from 'react'
import classes from './CheckBox.module.css'

const CheckBox = ({ description, checked, clickHandler }) => {
    
    return (
        <div className={classes.group}>
            <label htmlFor={description}>{description}</label>
            <input onChange={clickHandler} type="checkbox" name={description} id={description} checked={checked} />
        </div>
    )
}

export default CheckBox