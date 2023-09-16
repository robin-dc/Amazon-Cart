import { createSlice } from "@reduxjs/toolkit";

const activeProduct = JSON.parse(localStorage.getItem('activeProduct'));
const productsSlice = createSlice({
    name: 'products',
    initialState: {
        value: activeProduct ? activeProduct : {}
    },
    reducers: {
        setProduct: (state, action) => {
            state.value = {...action.payload}
            localStorage.setItem('activeProduct', JSON.stringify(state.value))
        },

    },
})

export default productsSlice.reducer
export const {setProduct} = productsSlice.actions
