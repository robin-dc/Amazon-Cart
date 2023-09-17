import { IoMdCart } from 'react-icons/io';
import { AiFillStar } from 'react-icons/ai';
import { useDispatch } from 'react-redux';
import { addItem } from '../../features/cart/cartSlice';
import { Link } from 'react-router-dom';
import { setProduct } from '../../features/products/productDetailSlice';

function ProductItem({title, id, image, category, price, description, rating: {rate, count}}) {
    const dispatch = useDispatch()

    const stars = []
    for(let i = 0; i < 5 ; i++) {
        stars.push(<span key={i} className="text-[#febd69] text-[0.8rem] lg:text-[1rem]"><AiFillStar/></span>)
    }
    return (
        <div className="p-[1rem] pt-[1.5rem] lg:p-[2rem] lg:pt-[2rem] lg:pb-[1rem] bg-white drop-shadow-2xl relative">
            <Link to={`/products/${id}`} onClick={() => dispatch(setProduct({title, id, image, category, price, description, rating: {rate, count}}))}>
                <img src={image} alt="" className="w-[6rem] lg:w-[10rem] mx-auto h-[7rem] lg:h-[12rem]"/>
            </Link>
            <h3 className="text-[0.8rem] lg:text-[1rem] font-semibold mt-[1rem] truncate">{title}</h3>
            <p className="truncate text-[0.7rem] lg:text-[0.8rem]">{description}</p>
            <p className="bg-[#0f1111] text-[0.7rem] lg:text-[1rem] text-white absolute top-[1rem] right-[1rem] rounded-full py-[4px] px-[0.6rem] lg:px-[1rem]">${price}</p>
            <div className="flex mt-[0.5rem] lg:mt-[1rem] items-center">
                {stars}
                <small className="ml-[4px] text-[0.7rem] lg:text-[0.8rem]">{rate}</small>
                <small className="ml-[4px] text-gray-400 text-[0.7rem] lg:text-[0.8rem]">({count})</small>
            </div>
            <div className='flex justify-end mt-[1rem]'>
                <Link to={`/products/${id}`} className="text-[#232f3e] underline lg:no-underline font-semibold text-[0.7rem] lg:text-[0.8rem] active:scale-[0.95] hover:underline"
            onClick={() => dispatch(setProduct({title, id, image, category, price, description, rating: {rate, count}}))}>See more
            </Link>
            </div>

        </div>
     );
}

export default ProductItem;
