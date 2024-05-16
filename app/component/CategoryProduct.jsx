import { useDispatch } from 'react-redux';
import { Button } from 'rizzui';
import { addToCart } from './../redux/cart.slice';

export default function CategoryProduct({product}) {
    const dispatch = useDispatch();
  return (

  <div className="h-auto py-4 md:h-28 flex md:items-center md:flex-row flex-col md:justify-between w-full bg-white border-b border-[#D7DFE1] overflow-hidden hover:bg-[#F3F9FD]">
    <div className='flex w-full h-full items-center justify-start gap-x-2'>
        <img
        className="w-28 h-[72px] "
        src={product.image}
        alt=""
        />
        <div className='lg:p-3 '>
        <h2 className=" text-sm lg:text-[15px] font-semibold hover:text-green transition-all duration-300 ease-in-out">
        {product.product}
        </h2>
        <p className='text-base font-semibold text-green'>{product.category}</p>
        </div>
    </div>
    <div className='flex gap-x-1 pt-4 md:pt-auto md:gap-x-3 items-center'>
      <span className='text-base font-bold text-nowrap'>$ {product.price}</span>
      <Button rounded='none' className='w-32 bg-blue text-sm  h-12' onClick={() => dispatch(addToCart(product))} >Add to Cart</Button>
    </div>

  </div>
  )
}
