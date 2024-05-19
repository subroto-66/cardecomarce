import Link from 'next/link'
import React from 'react'
export default function TostCart() {
  return (
    <div>
        Yor Item has been added to cart! <Link href="/cart"  className='text-red'>View Cart</Link>
    </div>
  )
}
