import {createSlice } from '@reduxjs/toolkit'

const cartSlice = createSlice({
    name: "cart",
    initialState: {
        items: []
    },
    reducers: {
        addItem: () => {
            state.items.push(action.payload)
        },
        removeItem: () => {
            state.items.pop()
        },
        clearCart: () => {
            state.items = []
        }
    }
})


export default cartSlice 