import React from 'react'
import classes from './DataAccess.module.css'

const DataAccess = () => {
    return (
        <div className={classes.container}>
            <div className={classes['input-like']}>
                sdas
                <i className={`fa-solid fa-rotate-right ${classes.rotate}`}></i>
            </div>
            <button className={classes['cpy-btn']}>
                <i className="fa-solid fa-copy"></i>
                Copy
            </button>
        </div>
    )
}

export default DataAccess