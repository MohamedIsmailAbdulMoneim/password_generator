import React from 'react'
import Photo from '../../img/password.gif'
import classes from './Header.module.css'

const Header = () => {
  return (
    <>
      <img className={classes.gif} src={Photo} alt="" />
      <h2>PASSWORD GENERATOR</h2>
      <h3 className={classes['sub-titles']}>Create strong and secure passwords to keep your account safe online.</h3>
    </>
  )
}

export default Header