"use client"
import { FcOk } from "react-icons/fc";
import CategoryProduct from "../component/CategoryProduct";

export default function page() {

    const data = [
        {
          id: 1,
          product: "Cyberpunk 2077",
          category: "xbox",
          image:
            "https://letsenhance.io/static/73136da51c245e80edc6ccfe44888a99/1015f/MainBefore.jpg",
          price: 36.49,
        },
        {
          id: 2,
          product: "Grand Theft Auto 5",
          category: "xbox",
          image:
            "https://letsenhance.io/static/73136da51c245e80edc6ccfe44888a99/1015f/MainBefore.jpg",
          price: 21.99,
        },
        {
          id: 3,
          product: "NBA2K21 Next Generation",
          category: "xbox",
          image:
            "https://letsenhance.io/static/73136da51c245e80edc6ccfe44888a99/1015f/MainBefore.jpg",
          price: 49.99,
        },
        {
          id: 3,
          product: "NBA2K21 Next Generation",
          category: "xbox",
          image:
            "https://letsenhance.io/static/73136da51c245e80edc6ccfe44888a99/1015f/MainBefore.jpg",
          price: 49.99,
        },
        {
          id: 3,
          product: "NBA2K21 Next Generation",
          category: "xbox",
          image:
            "https://letsenhance.io/static/73136da51c245e80edc6ccfe44888a99/1015f/MainBefore.jpg",
          price: 49.99,
        },
        {
          id: 3,
          product: "NBA2K21 Next Generation",
          category: "xbox",
          image:
            "https://letsenhance.io/static/73136da51c245e80edc6ccfe44888a99/1015f/MainBefore.jpg",
          price: 49.99,
        },
        {
          id: 3,
          product: "NBA2K21 Next Generation",
          category: "xbox",
          image:
            "https://letsenhance.io/static/73136da51c245e80edc6ccfe44888a99/1015f/MainBefore.jpg",
          price: 49.99,
        },
      ];




  return (
<div className="w-full">
<div className="max-w-[1140px] h-full mx-auto p-2 lg:p-0">


  <h1 className="text-xl font-semibold pb-4 pt-8">Category Products</h1>
  <div className="w-full grid grid-flow-row lg:grid-cols-3 pb-5 gap-5 ">
    <div className="lg:col-span-2 border-t border-[#D7DFE1]">
    {data.map((product) => (
        <CategoryProduct key={product.id} product={product} />
    ))}
    </div>

    <div className="lg:col-span-1">
        <div className="border border-[#D7DFE1] rounded-md p-3 mb-6">
            <h1 className="flex items-center gap-x-2 text-base font-semibold pb-1"><FcOk /> Instant delivery</h1>
            <p className="text-sm">You will receive the code directly by email, so that you can use the credit immediately.</p>
        </div>
        <div className="border border-[#D7DFE1] rounded-md p-3 mb-6">
            <h1 className="flex items-center gap-x-2 text-base font-semibold pb-1"><FcOk /> Gift card design</h1>
            <p className="text-sm">You will receive the code directly by email, so that you can use the credit immediately.</p>
        </div>
        <div className="border border-[#D7DFE1] rounded-md p-3 mb-6">
            <h1 className="flex items-center gap-x-2 text-base font-semibold pb-1"><FcOk /> Instant delivery</h1>
            <p className="text-sm">You will receive the code directly by email, so that you can use the credit immediatelyYou will receive the code directly by email, so that you can use the credit immediately.</p>
        </div>
    </div>
  </div>


</div>
</div>
  )
}
