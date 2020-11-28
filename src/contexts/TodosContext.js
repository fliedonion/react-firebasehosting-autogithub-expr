import React, { createContext, useState } from 'react'

export const TodosContext = createContext()

const TodosContextProvider = (props) => {
    // accept and deploy consumer components.
    return (
        <TodosContext.Provider>
            {props.children} 
        </TodosContext.Provider>
    )
}


export default TodosContextProvider