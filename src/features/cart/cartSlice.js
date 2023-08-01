import { createSlice } from "@reduxjs/toolkit";

function calculateTotalPrice(state){
    const total = state.value.cart.reduce((accum, initial) => {
        return accum + Number(initial.totalprice)
    }, 0)

    state.value.total = total.toFixed(2)
}
const amazonStorage = JSON.parse(localStorage.getItem('Amazon Cart'))
const cartSlice = createSlice({
    name: 'cart',
    initialState: {
        value: amazonStorage ?
        amazonStorage :
        {
            cart: [],
            total: 0
        }
    },
    reducers: {
        addItem: (state, action) => {
                let cart = state.value.cart
                const itemExist = cart.some(product => product.id === action.payload.id)
                if(!itemExist){
                    cart.push({...action.payload, count: 1, totalprice: action.payload.price})
                    state.value.total = (Number(state.value.total) + action.payload.price).toFixed(2)
                }

        },
        increment: (state, action) => {
            state.value.cart = state.value.cart.map(product => {
                if(product.id === action.payload){
                    return {...product, count:product.count + 1, totalprice: (product.price * (product.count + 1)).toFixed(2)}
                }
                return product
            })
            calculateTotalPrice(state)
        },
        decrement: (state, action) => {
            state.value.cart = state.value.cart.map(product => {
                if(product.id === action.payload){
                    return {...product,
                        count: product.count === 1 ? product.count = 1 : product.count - 1,
                        totalprice: product.price * (product.count === 1 ? product.count = 1 : product.count - 1)}
                }
                return product
            })
            calculateTotalPrice(state)
        },
        remove: (state, action) => {
            state.value.cart = state.value.cart.filter(product => product.id !== action.payload)
            calculateTotalPrice(state)
        },
        checkout: (state) => {
            state.value = {
                cart: [],
                total: 0
            }
        }
    }
})


export default cartSlice.reducer
export const {addItem, increment, decrement, remove, checkout} = cartSlice.actions
