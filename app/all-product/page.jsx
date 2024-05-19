import ProductCard from '../component/ProductCard';
import Search from '../component/Search';
export default function page() {
   const data = [
        {
          "id": 1,
          "product": "Cyberpunk 2077",
          "category": "xbox",
          image: "../product/product-2.webp",
          "price": 36.49
        },
        {
          "id": 2,
          "product": "Grand Theft Auto 5",
          "category": "xbox",
          image: "../product/poduct-1.jpg",
          "price": 21.99
        },
        {
          "id": 3,
          "product": "Minecraft",
          "category": "xbox",
          image: "../product/product-3.jpeg",
          "price": 49.99
        },
        {
          "id": 4,
          "product": "Minecraft",
          "category": "xbox",
          image: "../product/product-2.webp",
          "price": 49.99
        },
        {
          "id": 5,
          "product": "Minecraft",
          "category": "xbox",
          image: "../product/product-4.jpeg",
          "price": 49.99
        },
        {
          "id": 6,
          "product": "Minecraft",
          "category": "xbox",
          image: "../product/product-3.jpeg",
          "price": 49.99
        }
      
      ]
    return (



<div className="w-full">
    <div className="max-w-[1140px] min-h-[80vh] mx-auto p-2 lg:p-0">
      <div className=" w-full mx-auto max-w-2xl mb-2 mt-5">
        <h1 className="text-base opacity-60 font-semibold mb-3">
          What are you looking for?
        </h1>
        <Search />
      </div>

      <h1 className="text-xl font-semibold pb-4 pt-4">All Product</h1>
      <div className="w-full grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 pb-5 gap-4">


          {data.length > 0 ?
            data.map((product) => (
              <ProductCard key={product.id} product={product} />
            ))
          :
        <div className='flex h-full justify-center items-center  md:min-h-[70vh] min-h-[80vh]'> <span> is Empty!</span> </div>

        }


      </div>


    </div>
</div>
      );
}
