import { createSlice } from "@reduxjs/toolkit"


const initialState = {
    favorites: []
}


export const favSlice = createSlice({
    name: "favorites",
    initialState: initialState,
    reducers: {
        addToFav: (state, action) => {
            state.favorites.push(action.payload)
        }
    }
})

export default favSlice.reducer

export const { addToFav } = favSlice.actions