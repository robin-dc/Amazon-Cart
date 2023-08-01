import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";

export const fetchData = createAsyncThunk('products/fetchData',() => {
    return axios.get('https://fakestoreapi.com/products')
        .then(response => response.data)
})

const productsSlice = createSlice({
    name: 'products',
    initialState: {
        loading: false,
        value:[],
        error: ''
    },
    reducers: {
        filter: (state, action) => {
            state.value = state.value.filter(product => product.category === action.payload)
        },
        search: (state, action) => {
            state.value = state.value.filter(product => product.title.toLowerCase().includes(action.payload.toLowerCase()))
        }
    },
    extraReducers: builder => {
        builder.addCase(fetchData.pending, (state) => {
            state.loading = true
        })
        builder.addCase(fetchData.fulfilled, (state, action) => {
            state.loading = false
            state.value = action.payload
            state.error = ''
        })
        builder.addCase(fetchData.rejected, (state, action) => {
            state.loading = false
            state.value = []
            state.error = action.error.message
        })
    }
})

export default productsSlice.reducer
export const {filter, search} = productsSlice.actions
