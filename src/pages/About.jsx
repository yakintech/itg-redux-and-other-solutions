import React, { useContext } from 'react'
import { CounterContext } from '../context/CounterContext'

function About() {

  const {counter, setcounter} = useContext(CounterContext)
  
  return (<>
    <h1>About Page</h1>
    <h1>{counter}</h1>
    <button onClick={() => setcounter(counter + 1)}>Increase</button>
  </>
  )
}

export default About