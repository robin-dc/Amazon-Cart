import {useEffect} from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { fetchData } from '../../features/products/productsSlice';
import ProductItem from './ProductItem';

function Products() {
    const dispatch = useDispatch()
    const state = useSelector(state => state.products)

    useEffect(() => {
        dispatch(fetchData())
    }, [])

    return (
        <>
            <div className="products pt-[10rem] lg:pt-[15rem] px-[0.5rem] gap-[0.5rem] grid grid-cols-2 lg:px-0 lg:grid-cols-4 lg:gap-[1rem]">
                {state.loading ? <div className="flex bg-[#00000062] items-center justify-center w-full fixed top-0 bottom-0 left-0 right-0 pointer-events-none"><img src="/loader.svg" alt="" className="w-[5rem]" /></div> : null}
                {!state.loading && state.value && state.value.length > 0 ? state.value.map(product => <ProductItem key={product.id} {...product}/>) : !state.loading && <p className="text-center text-[1.5rem] fixed left-0 right-0 text-[#0f1111]">No Match Found</p>}
            </div>
        </>
     );
}

export default Products;
