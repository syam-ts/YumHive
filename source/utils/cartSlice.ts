import { createSlice } from '@reduxjs/toolkit'

const cartSlice = createSlice({
    name: "cart",
    initialState : {
        items: [],
        currentUser: false
    },
    reducers: {
        addItem : ( state: any, action ) => {
            state.items.push(action.payload)
        },
        removeItem: ( state ) => {
            state.items.pop()
        },
        clearCart: ( state ) => {
            state.items = []
        },
        signInUser: (state) => {
            state.currentUser = true
        },
        signOutUser: (state) => {
            state.currentUser = false
        }
    }
})

export default cartSlice.reducer
export const { addItem, removeItem, clearCart, signInUser, signOutUser } = cartSlice.actions