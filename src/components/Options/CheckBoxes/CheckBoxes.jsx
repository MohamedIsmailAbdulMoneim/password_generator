import React, {  useEffect, useContext } from 'react'
import classes from './CheckBoxes.module.css'
import CheckBox from './CheckBox/CheckBox'
import { getComponents } from '../../../Helper/util'
import { ComponentContext } from '../../../contexts/component.context'



const CheckBoxes = () => {


  const { currentComponents: components, setCurrentComponents: setComponents } = useContext(ComponentContext)

  useEffect(() => {
    getComponents(components)
    const checkAllFalse = Object.values(components).every(checked => checked === false)
    if (checkAllFalse) {
      setComponents(old => ({ ...old, lowercase: true }))
    }
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