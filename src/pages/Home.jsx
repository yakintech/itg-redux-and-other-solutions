import React, { useContext, useState } from 'react'
import { CounterContext } from '../context/CounterContext'

function Home() {

    const [value, setvalue] = useState(0)
    const {counter, increaseByValue} = useContext(CounterContext)

    const increase = () => {
        increaseByValue(value)
    }

  return (<>
    <h1>Home Page</h1>
    <hr />
    <div>
        <label htmlFor="">Number</label>
        <input type='text' onChange={(e) => setvalue(e.target.value)} />
        <button onClick={increase}>Increase</button>
    </div>
    <h1>Counter: {counter}</h1>
  </>
  )
}

export default Home