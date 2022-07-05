import { createSlice } from '@reduxjs/toolkit';

const initialState = {
    currentUser: null,
    loaded: false
}

const authSlice = createSlice({
    name: "auth",
    initialState,
    reducers: {
        changeUserState: (state, action) => {
            if (action.payload !== '') {
                state.currentUser = action.payload,
                    state.loaded = true
            }
        }
    }
});


export const { changeUserState } = authSlice.actions;
export default authSlice.reducer;
console.log(authSlice.getInitialState);
