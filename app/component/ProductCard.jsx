"use client"
import toast from 'react-hot-toast';
import { useDispatch } from 'react-redux';
import { Button } from 'rizzui';
import TostCart from '../component/TostCard';
import { addToCart } from './../redux/cart.slice';

const ProductCard = ({ product }) => {
    
  const dispatch = useDispatch();
  const handleAddToCart = () => {
    dispatch(addToCart(product));
    // Display a success toast message
    toast.success(<TostCart/>);
  };

  return (

      <div className="w-full border border-[#fff] min-h-80 flex flex-col justify-between bg-white shadow-2xl transition-all ease-out duration-200 hover:shadow-lg overflow-hidden rounded-sm relative">
        <img
          className="w-full h-40"
          src={product.image}
          alt=""
        />
        <div className="w-full grid grid-cols-1 gap-y-1 py-3 px-1">
            <h2 className="text-[15px] font-medium min-h-5 h-full">
          {product.product}
          </h2>
          <h5 className='text-[#FB711D]'>{product.category}</h5>
          <p className='font-semibold'>$ {product.price}</p>
        </div>
        <Button className='w-full bg-[#1E6DF6]' onClick={() => handleAddToCart()} rounded="none">Add to Cart</Button>
      </div>

  );
};

export default ProductCard;