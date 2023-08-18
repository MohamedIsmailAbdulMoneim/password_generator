import React, { useState, useEffect } from 'react'
import classes from './CheckBoxes.module.css'
import CheckBox from './CheckBox/CheckBox'
import { getComponents } from '../../../Helper/util'



const CheckBoxes = () => {

  const [components, setComponents] = useState({
    lowercase: false,
    uppercase: true,
    numbers: true,
    specialcharacters: false
  })

  useEffect(() => {
    getComponents(components)
  }, [[components.lowercase, components.uppercase, components.numbers, components.specialcharacters]])

  const clickHandler = (e) => {
    setComponents(old => ({ ...old, [e.target.name]: e.target.checked }))
  }

  return (
    <div className={classes['group-container']}>
      {Object.entries(components).map(([key, value], i) => (
        <CheckBox key={i} clickHandler={clickHandler} description={key} checked={value} />
      ))}
    </div>
  )
}

export default CheckBoxes