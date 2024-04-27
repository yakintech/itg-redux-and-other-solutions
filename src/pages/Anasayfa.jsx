import React from 'react'
import { useSelector } from 'react-redux'

function Anasayfa() {
    //useselector ile global STATE DEĞERİME ULASIYORUM

    const state = useSelector(state => state)
    console.log(state.sayac.value);

  return (<>
    <h1>Sayaç: {state.sayac.value}</h1>
  </>
  )
}

export default Anasayfa