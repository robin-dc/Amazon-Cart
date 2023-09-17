import { AiOutlineSearch } from 'react-icons/ai';
import { IoMdCart } from 'react-icons/io';
import { BsFilterRight } from 'react-icons/bs';
import { useDispatch, useSelector } from 'react-redux';
import { filter, search, fetchData } from '../../features/products/productsSlice';
import {useState, useEffect} from 'react'
import { Link } from "react-router-dom";

function Navbar() {
    const [searchInput, setSearchInput] = useState('')
    const [showFilter, setShowFilter] = useState(false)
    const productsState = useSelector(state => state.products.value)
    const cart = useSelector(state => state.cart.value)
    const cartState = cart.cart.length

    const uniqueSets = new Set([...productsState?.map(product => product.category)])
    const newState = Array.from(uniqueSets)

    const dispatch = useDispatch()

    useEffect(() => {
        if(searchInput === ''){
            dispatch(fetchData())
        }
        dispatch(search(searchInput))
    }, [searchInput])

    return (
        <header className="sticky top-[-1px] lg:top-[0px] z-[50]">
            <nav className="flex justify-between px-[1.2rem] items-center lg:px-[3rem] py-[1.4rem] bg-[#0f1111]">
                <a href="/"><img src="/logo.png" alt="" className="w-[5rem] lg:w-[7rem]"/></a>
                <div className="flex rounded-md justify-between overflow-hidden bg-white w-[9rem] lg:w-[30rem]">
                    <input type="text" placeholder="Search a product." className="px-[0.7rem] text-[0.8rem] lg:text-[1rem] py-[3px] lg:px-[1rem] pr-[5rem] outline-none" value={searchInput} onChange={(e) =>
                    setSearchInput(e.target.value)
                    }/>
                    <button className="hidden lg:flex bg-[#febd69] text-[1.6rem] px-[0.7rem] py-[5px] active:scale-[0.95]" onClick={() => dispatch(search(searchInput))}><AiOutlineSearch /></button>
                </div>
                <div className='flex gap-[0.8rem] items-center'>
                    <button className='flex lg:hidden text-white text-[1.7rem] active:scale-[0.95] relative' onClick={() => setShowFilter(!showFilter)}><BsFilterRight /></button>
                    <Link className='text-white text-[1.4rem] lg:text-[1.7rem] active:scale-[0.95] relative cart-items'
                    data-cart-count={cartState}
                    to="/cart"><IoMdCart /></Link>
                    {/* <img src="https://www.allkpop.com/upload/2022/09/content/120925/1662989144-image.png" alt="" className='w-[2.3rem] h-[2.3rem] rounded-full border-[2px] border-gray-300 object-cover'/> */}
                </div>
            </nav>
            <ul className={`${showFilter ? "flex" : "hidden"} lg:flex gap-[0.7rem] lg:gap-[1rem] text-white bg-[#232f3e] px-[1.2rem] lg:px-[3rem] py-[0.5rem] text-[0.67rem] lg:text-[0.9rem]`}>
                <li className="cursor-pointer" onClick={() => {
                    dispatch(fetchData())
                    setSearchInput('')
                }}>All</li>
                {newState?.map(category => (
                    <li
                        key={category}
                        className="cursor-pointer"
                        onClick={() => {
                            dispatch(filter(category))
                            setSearchInput('')
                        }}
                    >{category[0].toUpperCase() + category.slice(1)}</li>
                ))}
            </ul>
        </header>
     );
}

export default Navbar;
