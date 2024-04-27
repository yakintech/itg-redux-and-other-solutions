import { createSlice } from "@reduxjs/toolkit"; 


const initialState = {
    value: 0
}


export const sayacSlice = createSlice({
    name: 'sayac',
    initialState: initialState,
    reducers: {
        arttir: (state) => { //  sayac/arttir
            state.value = state.value + 1
        },
        azalt: (state) => { //    sayac/azalt
            state.value = state.value - 1
        },
        degerleArttir: (state, action) => {
            state.value = state.value + action.payload
        }
    }
})

export const {arttir, azalt, degerleArttir } = sayacSlice.actions

export default sayacSlice.reducer