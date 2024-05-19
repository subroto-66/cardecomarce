'use client'

import CategoryCard from '../component/CategoryCard';
import Search from '../component/Search';
export default function page() {

   const data = [
        {
          id: 1,
          name: "Free Fire All Server",
          image: "../category/Farlight.webp",
        },
        {
          id: 2,
          name: "Grand Theft Auto 5",
          image: "../category/Genshin-Impact-Genesis.png",
        },
        {
          id: 3,
          name: "Minecraft",
          image: "../category/Lords-Mobile-Diamonds.png",
        },
        {
          id: 4,
          name: "Grand Theft",
          image: "../category/Mobile-Legends-global.jpg",
        },    
      
      ]
    return (



<div className="w-full">
    <div className="max-w-[1140px] h-full mx-auto p-2 min-h-[80vh] ">
        <div className=" w-full mx-auto max-w-2xl mb-2 mt-5">
            <h1 className="text-base opacity-60 font-semibold mb-3">
                What are you looking for?
            </h1>
            <Search />
            </div>

    <h1 className="text-xl font-semibold pb-4 pt-4">All Category</h1>
    <div className="w-full grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 pb-8 gap-4 ">
        {data.map((product) => (
            <CategoryCard key={product.id} product={product} />
        ))}
    </div>


    </div>
</div>
      );
}
