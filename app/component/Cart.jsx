"use client"

import { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Button, Loader } from 'rizzui';
import {
  decrementQuantity,
  incrementQuantity,
  removeFromCart,
} from '../redux/cart.slice';


export default function Cart() {
   
    const[isLoading, setIsLoading ] = useState(true);

    const cart = useSelector((state) => state.cart);
    const dispatch = useDispatch();
  
    const getTotalPrice = () => {
      return cart.reduce(
        (accumulator, item) => accumulator + item.quantity * item.price,
        0
      );
    };
  
    const [cartDAta, setCartDAta] = useState([])
  useEffect(() => {
    setCartDAta(cart)
  }, [cart])


  useEffect(() => {
    // Simulating data loading delay
    const timeout = setTimeout(() => {
      setIsLoading(false);
    }, 1500);

    return () => clearTimeout(timeout);
  }, []);

  return (
    <div className='w-full '>
      <div className='max-w-[1140px] h-full mx-auto p-2 lg:p-0 md:min-h-[70vh] min-h-[80vh] mb-10'>



         <>
           {isLoading ? 
            // <ShemerTableSkeleton />
            <div className='flex h-full justify-center items-center  md:min-h-[70vh] min-h-[80vh]'><Loader size="xl" /></div>
          :



      cartDAta.length == 0 ? (
         
          <div className='flex h-full justify-center items-center  md:min-h-[70vh] min-h-[80vh]'> <span>Your Cart is Empty!</span> </div>
        ) : (

          
          <>
          
          <table className="table-fixed w-full mt-5">
              <thead className='font-semibold'>
                <tr className='text-left'>
                  <th className=" md:px-4 py-2 md:text-base text-sm font-semibold">Image</th>
                  <th className=" md:px-4 py-2 md:text-base text-sm font-semibold">Product</th>
                  <th className=" md:px-4 py-2 md:text-base text-sm font-semibold">Price</th>
                  <th className=" md:px-4 py-2 md:text-base text-sm font-semibold">Qty</th>
                  <th className=" md:px-4 py-2 md:text-base text-sm font-semibold">Actions</th>
                  <th className=" md:px-4 py-2 md:text-base text-center text-sm font-semibold">T.Price</th>
                </tr>
              </thead>
              <tbody>
                {cart.map((item) => (
                  <tr key={item.id} className='text-xs md:text-left text-center md:text-sm font-medium'>
                    <td className="px-1 md:px-4 py-2">
                      {/* Properly render Image component */}
                      <img src={item.image} className='w-16 h-12' alt="" />
                    </td>
                    <td className="px-1 md:px-4 py-2 ">{item.product}</td>
                    <td className="px-1 md:px-4 py-2 ">$ {item.price}</td>
                    <td className="px-1 md:px-4 py-2 ">{item.quantity}</td>
                    <td className="px-1 md:px-4 py-1 flex flex-wrap gap-x-1">
                      <Button onClick={() => dispatch(decrementQuantity(item.id))}  size="sm" variant="outline">-</Button>
                      <Button onClick={() => dispatch(incrementQuantity(item.id))}  size="sm" variant="outline">+</Button>
                      <Button onClick={() => dispatch(removeFromCart(item.id))}  size="sm" variant="outline">x</Button>
                    </td>
                    <td className=" md:px-4 text-center py-2">$ {(item.quantity * item.price).toFixed(2)}</td>
                  </tr>
                ))}
              </tbody>
             
          </table>
          <div className='w-full border-t border-[#FB711D] mt-5'>
              <h2 className='text-end text-sm font-bold md:pr-12 my-5'>Grand Total: <span className='text-base'>${getTotalPrice().toFixed(2)}</span></h2>
            <div className='flex justify-end md:pr-12 mt-2'>
              <a type='button' href="/checkout" className='text-base cursor-pointer rounded-sm font-medium bg-[#FB711D] hover:bg-[#fc721dd0] text-[#fff] px-4 py-2'> Checkout</a>
            </div>
          </div>
   
          
          
          </>
          
          

        )





      }

      </>

      </div>
    </div>
  )
}
