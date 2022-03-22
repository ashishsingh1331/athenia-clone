import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    modal:{
        isOpen:false,
    }
}

const uiSlice = createSlice({
    name:"ui",
    initialState:initialState,
    reducers:{
        toggleModal(state){
            state.modal.isOpen = !state.modal.isOpen;
        },
    }
});

export const uiSliceActions = uiSlice.actions;
export default  uiSlice.reducer;