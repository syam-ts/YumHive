import { createSlice, PayloadAction } from '@reduxjs/toolkit';

interface User {
    id: string;
    name: string;
    image: string;
    email: string;
}

 

const initialState = { 
    currentUser: null, 
    isUser: false,
};

const userSlice = createSlice({
    name: 'user',
    initialState,
    reducers: { 
        signInUser: (state: any, action: PayloadAction<User>) => {
            state.currentUser = action.payload
            state.isUser = true;
        },
        signOutUser: (state: any) => {
            state.currentUser = '';  
            state.isUser = false;
        },
    },
});

export default userSlice.reducer;
export const { signInUser, signOutUser } = userSlice.actions;
