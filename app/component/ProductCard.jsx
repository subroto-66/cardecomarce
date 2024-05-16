"use client"
import { useDispatch } from 'react-redux';
import { Button } from 'rizzui';
import { addToCart } from './../redux/cart.slice';

const ProductCard = ({ product }) => {
    
  const dispatch = useDispatch();

  return (
    // <div>
    //       <Image
    //   src={product.image}
    //   height={300} width={220}
    //   alt="Picture of the author"
    // />
    //   {/* <Image height={300} width={220} /> */}
    //   <h4>{product.product}</h4>
    //   <h5 >{product.category}</h5>
    //   <p>$ {product.price}</p>
    //   <button
    //     onClick={() => dispatch(addToCart(product))}
       
    //   >
    //     Add to Cart
    //   </button>
    // </div>

    // <Link href="#">
      <div className="w-full bg-white shadow-md overflow-hidden rounded-sm ">
        <img
          className="w-full h-40 "
          src={product.image}
          alt=""
        />
        <div className="w-full grid grid-cols-1 gap-y-1 py-3 px-1">
            <h2 className="text-[15px] font-semibold">
          {product.product}
          </h2>
          <h5 className='text-green'>{product.category}</h5>
          <p className='font-semibold'>$ {product.price}</p>
        </div>
        <Button className='w-full bg-[#28C8A4]' onClick={() => dispatch(addToCart(product))} rounded="none">Add to Cart</Button>
      </div>
    // </Link>
  );
};

export default ProductCard;