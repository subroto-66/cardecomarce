'use client'

import CategoryCard from '../component/CategoryCard';
import Search from '../component/Search';
export default function page() {

   const data = [
        {
          "id": 1,
          "name": "Cyberpunk 2077",
          "image": "https://cdn.pixabay.com/photo/2022/10/09/09/12/woman-7508618_1280.jpg",
        },
        {
          "id": 2,
          "name": "Grand Theft Auto 5",
          "category": "xbox",
          "image": "https://cdn.pixabay.com/photo/2022/10/09/09/12/woman-7508618_1280.jpg",
        },
        {
          "id": 3,
          "name": "Minecraft",
          "image": "https://cdn.pixabay.com/photo/2022/10/09/09/12/woman-7508618_1280.jpg",
        }]
    return (



<div className="w-full">
    <div className="max-w-[1140px] h-full mx-auto p-2 ">
        <div className=" w-full mx-auto max-w-2xl mb-3 mt-8">
            <h1 className="text-lg font-semibold mb-5">
                What are you looking for?
            </h1>
            <Search />
            </div>

    <h1 className="text-xl font-semibold pb-4 pt-8">All Category</h1>
    <div className="w-full grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 pb-8 gap-4 md:min-h-[70vh] min-h-[80vh]">
        {data.map((product) => (
            <CategoryCard key={product.id} product={product} />
        ))}
    </div>


    </div>
</div>
      );
}
