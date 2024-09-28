import { createSlice } from '@reduxjs/toolkit'

interface User {
    id: string,
    name: string, 
    image: string,
    email: string
}

let currentUser: User[] = []

const cartSlice = createSlice({
    name: "cart",
    initialState : {
        items: [],
        currentUser,
        isUser: false
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
        signInUser: (state, action) => {
            state.currentUser.push(action.payload),
            state.isUser = true
        },
        signOutUser: (state) => {
            state.currentUser = [],
            state.isUser = false
        }
    }
})

export default cartSlice.reducer
export const { addItem, removeItem, clearCart, signInUser, signOutUser } = cartSlice.actions