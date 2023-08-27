import React, { useState } from 'react'
import classes from './DataAccess.module.css'
import { generatePass } from '../../Helper/util'
import { useEval } from '../../Hooks/useEval'

const DataAccess = () => {
    const [password, setPassword] = useState(null)
    const [evl, setEvl] = useState('')
    const evaluation = useEval(password)
    
    const clickHandler = () => {
        const generatedPassword = generatePass()
        setPassword(generatedPassword)
        setEvl(evaluation(generatedPassword))
        
    }

    return (
        <>
            <div className={classes.container}>
                <div className={classes['input-like']}>
                    <span>{password}</span>
                    <i onClick={clickHandler} className={`fa-solid fa-rotate-right ${classes.rotate}`}></i>
                </div>
                <button className={classes['cpy-btn']}>
                    <i className="fa-solid fa-copy"></i>
                    Copy
                </button>
            </div>
            <h4 className={`${classes.eval} ${classes[evl]}`} >{evl}</h4>
        </>

    )
}

export default DataAccess