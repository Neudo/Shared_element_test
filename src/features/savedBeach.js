import {createSlice}  from "@reduxjs/toolkit";

export const savedBeach = createSlice({
    name: 'savedBeach',
    initialState: {
        currentBeach: null,
    },
    reducers: {
        setCurrentBeach: (state, action) => {
            state.currentBeach = null
            state.currentBeach = action.payload;
            console.log("state : " + action.payload.image)
        },
    },
})


export const {setCurrentBeach} = savedBeach.actions

export default savedBeach.reducer