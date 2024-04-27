import React from 'react'
import { WithLoading } from './WithLoading'

function DataDisplay() {
  return (<>
    <h1>Name: Çağatay</h1>
  </>
  )
}

const LoadedDataDisplay = WithLoading(DataDisplay)

export default LoadedDataDisplay