import React from 'react'
import classes from './Options.module.css'
import CheckBoxes from './CheckBoxes/CheckBoxes'
import Range from './Range/Range'

const Options = () => {

    return (
        <div className={classes.container}>
            <Range />
            <CheckBoxes />
        </div>
    )
}

export default Options