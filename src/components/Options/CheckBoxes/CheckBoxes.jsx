import React, { useState } from 'react'
import classes from './CheckBoxes.module.css'

const CheckBoxes = () => {
  return (
    <div class={classes['group-container']}>
      <div class={classes.group}>
        <label for="uppercase">Uppercase</label>
        <input type="checkbox" name="uppercase" id="uppercase" />
      </div>
      <div class={classes.group}>
        <label for="lowercase">Lowercase</label>
        <input type="checkbox" name="lowercase" id="lowercase" />
      </div>
      <div class={classes.group}>
        <label for="numbers">Numbers</label>
        <input type="checkbox" name="numbers" id="numbers" />
      </div>
      <div class={classes.group}>
        <label for="specialcharacters">Special characters</label>
        <input type="checkbox" name="specialcharacters" id="specialcharacters" />
      </div>
    </div>
  )
}

export default CheckBoxes