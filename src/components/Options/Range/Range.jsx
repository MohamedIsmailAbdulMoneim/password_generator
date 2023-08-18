import React, { useState } from 'react'
import classes from './Range.module.css'
import { getLength } from '../../../Helper/util'

const Range = () => {
    const [pswdlen, setPswdlen] = useState(10)
    
    const changeHandler = (e) => {
        setPswdlen(e.target.value)
        getLength(e.target.value)

    }
    return (
        <>
            <h3>Password Length: {pswdlen}</h3>
            <input value={pswdlen} onChange={changeHandler} className={classes.range} type="range" name="" id="" min={5} max={30} />
        </>
    )
}

export default Range