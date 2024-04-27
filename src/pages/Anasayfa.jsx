import React from 'react'
import { useDispatch, useSelector } from 'react-redux' //redux hooks
import { arttir, degerleArttir } from '../store/sayacSlice'

function Anasayfa() {
  //useselector ile global STATE DEĞERİME ULASIYORUM
  const state = useSelector(state => state)

  let dispatch = useDispatch()

  return (<>
    <h1>Sayaç: {state.sayac.value}</h1>
    <button onClick={() => dispatch(arttir())}>Arttır</button>
    <button onClick={() => dispatch({ type: "sayac/arttir" })}>Arttır</button>


    <button onClick={() => dispatch({ type: "sayac/degerleArttir", payload:5 })}>Arttır-2</button>
    <button onClick={() => dispatch(degerleArttir(5))}>Arttır-2</button>

  </>
  )
}

export default Anasayfa