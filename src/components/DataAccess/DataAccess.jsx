import React, { useState } from 'react'
import classes from './DataAccess.module.css'
import { generatePass } from '../../Helper/util'

const DataAccess = () => {
    const [Password, setPassword] = useState('')

    const clickHandler = () => {
        const generatedPassword = generatePass()
        setPassword(generatedPassword)
    }

    return (
        <div className={classes.container}>
            <div className={classes['input-like']}>
                {Password}
                <i onClick={clickHandler} className={`fa-solid fa-rotate-right ${classes.rotate}`}></i>
            </div>
            <button className={classes['cpy-btn']}>
                <i className="fa-solid fa-copy"></i>
                Copy
            </button>
        </div>
    )
}

export default DataAccess