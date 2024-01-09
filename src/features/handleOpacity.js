import {createSlice} from "@reduxjs/toolkit";

export const handleOpacity = createSlice({
    name: 'handleOpacity',
    initialState: {
        value: 1,
    },
    reducers: {
        makeInvisible: state => {
            if(state.value === 1){
                state.value = 0
            }
        },
        makeVisible: state => {
            if(state.value === 0){
                state.value = 1
            }
        }
    }
})

export const {makeInvisible, makeVisible} = handleOpacity.actions

export default handleOpacity.reducer