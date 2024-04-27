import { createSlice } from "@reduxjs/toolkit"; 


const initialState = {
    value: 0
}


export const sayacSlice = createSlice({
    name: 'sayac',
    initialState: initialState,
    reducers: {
        arttir: (state) => {
            state.value = state.value + 1
        },
        azalt: (state) => {
            state.value = state.value - 1
        },
        degerleArttir: (state, action) => {
            state.value = state.value + action.payload
        }
    }
})


export default sayacSlice.reducer