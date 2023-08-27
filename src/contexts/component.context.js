import { createContext, useState } from 'react'

const defaultComponents = {
    lowercase: false,
    uppercase: true,
    numbers: true,
    specialcharacters: false
}

export const ComponentContext = createContext({
    currentComponents: defaultComponents,
    setCurrentComponents: () => null
})

export const ComponentProvider = ({ children }) => {
    const [currentComponents, setCurrentComponents] = useState(defaultComponents)
    const value = { currentComponents, setCurrentComponents }
    return (
        <ComponentContext.Provider value={value}>
            {children}
        </ComponentContext.Provider>
    )
}