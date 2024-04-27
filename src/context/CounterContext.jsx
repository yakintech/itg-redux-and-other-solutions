import { createContext, useState } from "react";



export const CounterContext = createContext(null)


export const CounterProvider = ({ children }) => {

    const [counter, setcounter] = useState(0)
    let name = "Türkiye"


    const increaseByValue = (data) => {
        setcounter(counter + Number(data))
    }


    return <CounterContext.Provider value={{counter,setcounter, increaseByValue}}>
        {children}
    </CounterContext.Provider>

}