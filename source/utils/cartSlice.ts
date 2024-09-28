import { createSlice, PayloadAction } from '@reduxjs/toolkit';

interface User {
    id: string;
    name: string;
    image: string;
    email: string;
}

 

const initialState = {
    items: [],
    currentUser: [], 
    isUser: false,
};

const cartSlice = createSlice({
    name: 'cart',
    initialState,
    reducers: {
        addItem: (state: any, action ) => {
            state.items.push(action.payload);
        },
        removeItem: (state) => {
            state.items.pop();
        },
        clearCart: (state) => {
            state.items = [];
        },
        signInUser: (state: any, action: PayloadAction<User>) => {
            state.currentUser.push(action.payload)
            state.isUser = true;
        },
        signOutUser: (state: any) => {
            state.currentUser = null;  
            state.isUser = false;
        },
    },
});

export default cartSlice.reducer;
export const { addItem, removeItem, clearCart, signInUser, signOutUser } = cartSlice.actions;
