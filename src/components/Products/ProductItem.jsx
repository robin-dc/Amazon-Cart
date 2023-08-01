import { IoMdCart } from 'react-icons/io';
import { AiFillStar } from 'react-icons/ai';
import { useDispatch } from 'react-redux';
import { addItem } from '../../features/cart/cartSlice';

function ProductItem({title, id, image, category, price, description, rating: {rate, count}}) {
    const dispatch = useDispatch()

    const stars = []
    for(let i = 0; i < 5 ; i++) {
        stars.push(<span key={i} className="text-[#febd69] text-[0.8rem] lg:text-[1rem]"><AiFillStar/></span>)
    }
    return (
        <div className="p-[1rem] lg:p-[2rem] bg-white drop-shadow-2xl relative">
            <img src={image} alt="" className="w-[7rem] lg:w-[10rem] mx-auto h-[8rem] lg:h-[12rem]"/>
            <h3 className="text-[0.8rem] lg:text-[1rem] font-semibold mt-[1rem] truncate">{title}</h3>
            <p className="truncate text-[0.7rem] lg:text-[0.8rem]">{description}</p>
            <p className="bg-[#0f1111] text-[0.8rem] lg:text-[1rem] text-white absolute top-[1rem] right-[1rem] rounded-full py-[5px] px-[0.7rem] lg:px-[1rem]">${price}</p>
            <div className="flex mt-[0.5rem] lg:mt-[1rem] items-center">
                {stars}
                <small className="ml-[4px] text-[0.7rem] lg:text-[0.8rem]">{rate}</small>
                <small className="ml-[4px] text-gray-400 text-[0.7rem] lg:text-[0.8rem]">({count})</small>
            </div>
            <button className="flex gap-[5px] items-center border-[#232f3e] border-[2px] text-[#232f3e] font-semibold px-[1rem] py-[0.3rem] rounded-md text-[0.8rem] mt-[1rem] active:scale-[0.95] hover:drop-shadow-xl mx-auto lg:mx-0"
            onClick={() => dispatch(addItem({title, id, image, category, price, description, rating: {rate, count}}))}><IoMdCart />Add to Cart</button>
        </div>
     );
}

export default ProductItem;
