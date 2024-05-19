"use client"

import Link from "next/link";
import { useEffect, useState } from "react";
import { IoCartOutline } from "react-icons/io5";
import { useDispatch, useSelector } from 'react-redux';
import { CardItem, loadCartState } from './../redux/cart.slice';
import SkeletonSpan from "./Shemer/SkeletonSpan";
const Navbar = () => {
    const [isLoading, setIsLoading] = useState(true)
    // Selecting cart from global state
    const cart = useSelector((state) => state.cart);
    const [cartItem, setCartItem] = useState(null);
    const dispatch = useDispatch();

    // Getting the count of items
    const getItemsCount = () => {
      return cart.reduce((accumulator, item) => accumulator + item.quantity, 0);
    };

    useEffect(() => {
      setCartItem(cart.reduce((accumulator, item) => accumulator + item.quantity, 0));
      dispatch(CardItem(loadCartState()))
      console.log(loadCartState(),'dddd');
    }, [dispatch, cart]);


    useEffect(() => {
      // Simulate a data fetching delay
      const timer = setTimeout(() => {
        setIsLoading(false);
      }, 1500); // Adjust the delay as needed
  
      return () => clearTimeout(timer);
    }, []);

    
  return (
    <nav className="w-full">

      {/* <h6>GamesKart</h6>
      <ul>
        <li>
          <Link href='/'>Home</Link>
        </li>
        <li>
          <Link href='/shop'>Shop</Link>
        </li>
        <li>
        <Link href="/cart">
            <p>Cart </p>
          </Link>
        </li>
      </ul> */}


      <div className="w-full h-20 border-b bg-[#ffffff] border-[#d7d7d7]">
        <div className="w-full h-full max-w-[1140px] mx-auto p-2 ">
          <div className="w-full flex items-center justify-between h-full">
            <div className="flex items-center font-bold text-3xl"><Link href="/">GamesKart</Link></div>
            <div className="flex items-center gap-x-2">
              <Link
                href="/cart"
                className="flex h-full items-center opacity-60 text-base font-normal gap-x-1"
              >
                <span>
                  {/* {isLoading ? <span className=""></span> : `(${cartItem})`} */}
                  {isLoading ? <SkeletonSpan /> : `(${cartItem})`}
            
                </span>
                <IoCartOutline className="text-2xl" />
              </Link>
              {/* <Link href="#" className="lg:hidden">
                <FaBars className="text-2xl" />
              </Link> */}
            </div>
          </div>
        </div>
      </div>

      <div className="w-full h-12 bg-[#F3F6F8] border-b border-[#d7d7d7] ">
        <div className="max-w-[1140px] h-full mx-auto p-2 ">
          <div className="w-full flex justify-between h-full">
            <ul className="flex items-center gap-x-4">
              <Link href="/" className=" hover:text-[#FB711D] cursor-pointer text-sm font-bold">
              Home 
              </Link>
              <Link href="/all-product" className="hover:text-[#FB711D] capitalize cursor-pointer text-sm font-bold">
              All Product 
              </Link>
              <Link href="/all-category" className="hover:text-[#FB711D] capitalize cursor-pointer text-sm font-bold">
                All Category 
              </Link>
            </ul>
            <div></div>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
