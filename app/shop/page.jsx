import ProductCard from '../component/ProductCard';
import Search from '../component/Search';
export default function page() {
   const data = [
        {
          "id": 1,
          "product": "Cyberpunk 2077",
          "category": "xbox",
          "image": "https://letsenhance.io/static/73136da51c245e80edc6ccfe44888a99/1015f/MainBefore.jpg",
          "price": 36.49
        },
        {
          "id": 2,
          "product": "Grand Theft Auto 5",
          "category": "xbox",
          "image": "https://letsenhance.io/static/73136da51c245e80edc6ccfe44888a99/1015f/MainBefore.jpg",
          "price": 21.99
        },
        {
          "id": 3,
          "product": "Minecraft",
          "category": "xbox",
          "image": "https://letsenhance.io/static/73136da51c245e80edc6ccfe44888a99/1015f/MainBefore.jpg",
          "price": 49.99
        }]
    return (



<div className="w-full">
<div className="max-w-[1140px] h-full mx-auto p-2 lg:p-0">
<div className=" w-full mx-auto max-w-2xl mb-12 mt-20">
          <h1 className="text-lg font-semibold mb-5">
            What are you looking for?
          </h1>
          <Search />
        </div>

  <h1 className="text-xl font-semibold pb-4 pt-8">All Product</h1>
  <div className="w-full grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 pb-5 gap-4">
  {data.map((product) => (
    <ProductCard key={product.id} product={product} />
  ))}
  </div>


</div>
</div>
      );
}
