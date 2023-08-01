import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import CartItem from "./CartItem";
import { BsFillCartXFill } from 'react-icons/bs'
import { RiApps2Line } from 'react-icons/ri'
import { AiOutlineCheckCircle } from 'react-icons/ai'
import { useState } from "react";
import { checkout } from "../../features/cart/cartSlice";


function Cart() {
    const cartState = useSelector(state => state.cart.value.cart)
    const cartTotal = useSelector(state => state.cart.value.total)
    const dispatch = useDispatch()

    const [isCheckout, setIsCheckout] = useState(false)

    function Ordered(){
        setIsCheckout(true)
        const time = setTimeout(() => {
            setIsCheckout(false)
            dispatch(checkout())
        }, 3000)

        return () => clearTimeout(time)
    }
    return (
        <div className="min-h-screen bg-white relative">
            <header className="sticky top-[-1px] z-[50]">
                <nav className="flex justify-between px-[0.8rem] lg:px-[3rem] py-[1.4rem] bg-[#0f1111]">
                    <Link to="/"><img src="/logo.png" alt="" className="w-[5rem] lg:w-[7rem]"/></Link>
                    <Link className="text-white flex text-[0.8rem] lg:text-[1rem] items-center gap-[3px] lg:gap-[5px] justify-center" to="/">
                        <span className="text-[1.2rem] lg:text-[1.4rem] text-[#febd69]"><RiApps2Line/></span>
                        <span>Products</span>
                    </Link>
                </nav>
            </header>
            <div className="bg-white p-[1rem] lg:p-[2rem] pb-[8rem]">
                <img src="/banner.jpg" alt="" className="rounded-lg lg:rounded-2xl object-cover w-full"/>
                {cartState.length > 0 ? <div className="p-[0.5rem] lg:p-[1.5rem] mt-[1.5rem]">
                    <h2 className="text-[1.5rem] lg:text-[1.8rem] font-bold text-gray-400">Shopping Cart</h2>
                    <table className="w-full mt-[1rem]">
                        <thead className="w-full">
                            <tr className="grid grid-cols-4 text-left text-[0.9rem] lg:text-[1rem] text-gray-400">
                                <th className="col-span-2">Product</th>
                                <th>Count</th>
                                <th>Total Cost</th>
                            </tr>
                        </thead>
                        <tbody>
                            {cartState?.map(product => <CartItem key={product.id} {...product}/>)}
                        </tbody>
                    </table>
                    <div className="flex justify-end gap-[2rem] items-center mt-[5rem]">
                        <div>
                            <p className="text-gray-400 text-[0.9rem] lg:text-[1rem]">Total Cost</p>
                            <p className="font-semibold text-gray-600 text-[1.1rem] lg:text-[1.4rem]">${cartTotal}</p>
                        </div>
                        <button className="py-[0.6rem] lg:py-[0.8rem] px-[1.3rem] lg:px-[2rem] bg-[#f59e0b] text-[0.8rem] lg:text-[0.97rem] rounded-lg text-white font-semibold active:scale-[0.95]" onClick={() => Ordered()}>Complete Order</button>
                    </div>
                </div>:
                <div className="flex flex-col gap-[1rem justify-center items-center py-[3rem]">
                    <BsFillCartXFill className="text-[5rem] lg:text-[7rem] mb-[1rem] text-gray-300"/>
                    <h4 className="text-gray-500 text-[1.7rem] lg:text-[2rem] font-bold">Cart is empty.</h4>
                    <p className="text-gray-500 text-center text-[0.9rem] lg:text-[1rem]">Looks like you have no items in your shopping cart.</p>
                </div>}
            </div>
            {isCheckout && <div className="transition-all duration-500 bg-white py-[2rem] lg:py-[3rem] px-[3rem] lg:px-[5rem] rounded-xl drop-shadow-2xl fixed left-[50%] top-[50%] translate-x-[-50%] translate-y-[-50%] z-[999] flex flex-col gap-[1rem justify-center items-center border border-gray-200 text-center">
                <AiOutlineCheckCircle className="text-[5rem] lg:text-[7rem] mb-[1rem] text-green-400"/>
                <h4 className="text-gray-500 text-[1.7rem] lg:text-[2rem] font-bold">Order Completed.</h4>
                <p className="text-gray-500 text-center text-[0.9rem] lg:text-[1rem] min-w-[10rem]">We're On the Way! Thank You for Shopping!</p>
            </div>}
        </div>
     );
}

export default Cart;
