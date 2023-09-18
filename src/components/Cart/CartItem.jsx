import { RiArrowLeftSLine } from 'react-icons/ri'
import { RiArrowRightSLine } from 'react-icons/ri'
import { FaTimes } from 'react-icons/fa'
import { useDispatch } from 'react-redux';
import { decrement, increment, remove } from '../../features/cart/cartSlice';

function CartItem({id, title, price, image, description, count, totalprice}) {
    const dispatch = useDispatch()

    return (
        <tr className="grid grid-cols-4 text-left mt-[2rem] lg:px-[1.5rem] gap-[0.5rem] lg:gap-[1rem]">
            <td className="flex flex-col lg:flex-row gap-[0.5rem] lg:gap-[3rem] col-span-1 lg:col-span-2 items-center">
                <img src={image} alt="" className="h-[4rem] w-[3rem] lg:w-[5rem] lg:h-[6rem] "/>
                <div>
                    <h4 className="font-semibold text-[#0f1111] text-[0.8rem] lg:hidden truncate w-[5rem]">{title}</h4>
                    <h4 className="font-semibold text-[#0f1111] text-[1rem] hidden lg:block">{title}</h4>
                    <p className="text-gray-400 text-[0.8rem] lg:text-[1rem]">${price}</p>
                </div>
            </td>
            <td className="flex flex-row items-center gap-[0.5rem] justify-center lg:justify-normal lg:gap-[1rem] col-span-2 lg:col-span-1">
                <button className="rotate-0 text-gray-400 text-[1.4rem] lg:text-[1.5rem] font-bold bg-gray-200 p-[3px]"
                        onClick={() => dispatch(decrement(id))}
                ><RiArrowLeftSLine/></button>
                <p className="text-gray-400 tracking-widest text-[0.9rem] lg:text-[1rem]">x{count}</p>
                <button className="rotate-0 text-gray-400 text-[1.4rem] lg:text-[1.5rem] font-bold bg-gray-200 p-[3px]"
                        onClick={() => dispatch(increment(id))}
                ><RiArrowRightSLine/></button>
            </td>
            <td className="flex items-center justify-between">
                <p className="text-left font-semibold text-gray-500 text-[0.8rem] lg:text-[1rem]">${totalprice}</p>
                <button className="text-gray-400 "
                        onClick={() => dispatch(remove(id))}
                ><FaTimes/></button>
            </td>
        </tr>
     );
}

export default CartItem;
