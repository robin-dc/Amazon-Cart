import React, { useEffect, useRef } from 'react'
import { IoMdCart, IoMdAdd } from 'react-icons/io';
import { AiFillStar } from 'react-icons/ai';
import { useDispatch, useSelector } from 'react-redux';
import { addItem, remove } from '../../features/cart/cartSlice';
import { useParams, Link } from 'react-router-dom';
import { TbTruckDelivery } from 'react-icons/tb'
import { LuRotate3D } from 'react-icons/lu'

const ProductDetails = () => {
    const dispatch = useDispatch()
    const state = useSelector(state => state.productDetails)
    const { id } = useParams()
    const cart = useSelector(state => state.cart.value)
    const cartState = cart.cart.length
    const isFirstMount = useRef(true);

    useEffect(() => {

        if (isFirstMount.current) {
          window.scrollTo(0, 0);

          isFirstMount.current = false;
        }
      }, []);

    const {title, image, category, price, description, rating: {rate, count}} = state.value

    const stars = []
    for(let i = 0; i < 5 ; i++) {
        stars.push(<span key={i} className="text-[#febd69] text-[0.8rem] lg:text-[1.2rem]"><AiFillStar/></span>)
    }

    const images = []
    for(let i = 0; i < 3 ; i++){
        images.push(<img key={i} src={image} className="w-full h-auto border border-[#f0f0f0] rounded-md bg-white p-3" alt=""/>)
    }

    const isInCart = cart.cart.some((item) => item.id === id)
    const buttonText = isInCart ? "Remove from Cart" : "Add to Cart"

    return (
        <div className='min-h-screen bg-[#F5F5F5] '>
            <header className="sticky top-[-1px] z-[50]">
                <nav className="flex justify-between px-[0.8rem] lg:px-[3rem] py-[1.4rem] bg-[#0f1111]">
                    <Link to="/"><img src="/logo.png" alt="" className="w-[5rem] lg:w-[7rem]"/></Link>
                    <div className='flex gap-[0.8rem] items-center'>
                        <Link className='text-white text-[1.4rem] lg:text-[1.7rem] active:scale-[0.95] relative cart-items'
                        data-cart-count={cartState}
                        to="/cart"><IoMdCart /></Link>
                    </div>
                </nav>
            </header>
            <div className='container p-[1rem] py-[2rem] lg:p-[2rem]'>
                <div className='mb-[3rem] text-gray-400 text-[0.9rem] lg:text-[1rem]'>
                    <Link to="/products">
                        Products &nbsp;
                    </Link>
                    <span className='text-[#232f3e]'>/ Details</span>
                </div>
                <div className="flex flex-col lg:flex-row gap-3">
                    <div className='w-full lg:w-2/5 flex flex-col-reverse lg:flex-row gap-4'>
                        <div className='flex lg:flex-col gap-3 w-1/5'>
                            {images}
                        </div>
                        <img src={image} alt="" className='w-full lg:w-4/5 h-fit bg-white border border-[#f0f0f0] p-5 rounded-md'/>
                    </div>

                    <div className='w-full lg:w-3/5 px-3'>
                        <h3 className="text-[1.4rem] lg:text-[2rem] font-semibold mt-[1rem]">{title}</h3>
                        <div className="flex mt-[0.5rem] lg:mt-[1rem] items-center">
                            {stars}
                            <small className="ml-[4px] text-[0.9rem] lg:text-[1rem]">{rate}</small>
                            <small className="ml-[4px] text-gray-400 text-[0.9rem] lg:text-[1rem]">({count} Reviews)  |  In Stock</small>
                        </div>
                        <p className=" mt-3 text-[1.3rem] lg:text-[1.5rem]">${price}</p>
                        <p className="text-[1rem] lg:text-[1.1rem] mt-5">{description[0].toUpperCase() + description.slice(1)}</p>
                        <button className="flex gap-[5px] items-center bg-[#232f3e] text-[white] font-semibold px-[1.3rem] py-[0.7rem] rounded-md text-[0.8rem] mt-[1rem] active:scale-[0.95] hover:drop-shadow-xl transition"
                        onClick={() => dispatch(isInCart ? remove(id) : addItem({title, id, image, category, price, description, rating: {rate, count}}))}><IoMdAdd className={`${isInCart && "rotate-[135deg]"} transition-all duration-500 text-[1.3rem]`}/>{buttonText}</button>

                        <div className='border-2 border-[#d3d3d3] divide-y-2 rounded-lg my-[2rem]'>
                            <div className='p-4 flex items-center gap-3'>
                                <TbTruckDelivery className='text-[2.3rem] text-gray-700'/>
                                <div>
                                  <p className='font-semibold'>Free Delivery</p>
                                    <small className='underline'>Enter your postal code for Delivery Availability</small>
                                </div>
                            </div>
                            <div className='p-4 flex items-center gap-3'>
                                <LuRotate3D className='text-[2.3rem] text-gray-700'/>
                                <div>
                                   <p className='font-semibold'>Return Delivery</p>
                                <small>Free 30 Days Delivery Returns. <span className='underline'>Details</span></small>
                                </div>

                            </div>
                        </div>
                    </div>

                </div>
            </div>
        </div>

    )
}

export default ProductDetails