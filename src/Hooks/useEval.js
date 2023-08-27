import React, { useState, useContext, useEffect } from 'react'

import { ComponentContext } from '../contexts/component.context'



export const useEval = () => {


    const { currentComponents } = useContext(ComponentContext)

    const selectedComponents = Object.keys(currentComponents).filter(x => {
        if (currentComponents[x]) {
            return x
        }
    })


 
    return (password) => {
        if (password?.length < 8) {
            return "weak"
        } else if (password?.length > 8) {
            if (selectedComponents.length === 4)
                return "strong"
            if (selectedComponents.length === 3)
                return "medium"
            return "weak"

        }
    }


}

