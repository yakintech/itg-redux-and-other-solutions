import React, { useContext } from 'react'
import { CounterContext } from '../context/CounterContext'

function Contact() {

    const { counter } = useContext(CounterContext)

    return (<>
        <h1>Contact Page</h1>
        <h1>Counter: {counter}</h1>
    </>
    )
}

export default Contact