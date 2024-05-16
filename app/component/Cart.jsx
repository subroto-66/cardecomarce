"use client"

import Image from 'next/image';
import { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Button } from 'rizzui';
import {
  decrementQuantity,
  incrementQuantity,
  removeFromCart,
} from '../redux/cart.slice';

export default function Cart() {

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

  return (
    <div className='w-full '>
      <div className='max-w-[1140px] h-full mx-auto p-2 lg:p-0 '>
      {cartDAta.length == 0 ? (
         
          <h1>Your Cart is Empty!</h1>
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
                  <th className=" md:px-4 py-2 md:text-base text-sm font-semibold">T.Price</th>
                </tr>
              </thead>
              <tbody>
                {cart.map((item) => (
                  <tr key={item.id} className='text-xs md:text-left text-center md:text-sm font-medium'>
                    <td className="px-1 md:px-4 py-2">
                      {/* Properly render Image component */}
                      <Image src={item.image} height={80} width={60} alt='' />
                    </td>
                    <td className="px-1 md:px-4 py-2 ">{item.product}</td>
                    <td className="px-1 md:px-4 py-2 ">$ {item.price}</td>
                    <td className="px-1 md:px-4 py-2 ">{item.quantity}</td>
                    <td className="px-1 md:px-4 py-1 flex flex-wrap gap-x-1">
                      <Button onClick={() => dispatch(incrementQuantity(item.id))}  size="sm" variant="outline">+</Button>
                      <Button onClick={() => dispatch(decrementQuantity(item.id))}  size="sm" variant="outline">-</Button>
                      <Button onClick={() => dispatch(removeFromCart(item.id))}  size="sm" variant="outline">x</Button>
                    </td>
                    <td className=" md:px-4 py-2">$ {(item.quantity * item.price).toFixed(2)}</td>
                  </tr>
                ))}
              </tbody>
            </table>

            <h2 className='text-center my-4'>Grand Total: <span className='text-lg'>${getTotalPrice().toFixed(2)}</span></h2>
          </>
        )}
      </div>
    </div>
  )
}
