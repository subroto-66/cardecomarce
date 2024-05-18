import Link from 'next/link';


export default function CategoryCard({ product }) {

    return (
      <Link href={`/all-category/${product.name.split(' ').join('-')}`}>
      <div className="w-full h-64 bg-white border border-[#fff] shadow-lg overflow-hidden rounded-lg">
        <img
          className="w-full h-full max-h-48"
          src={product.image}
          alt=""
        />
        <h2 className="text-center text-[15px] p-3 font-semibold hover:text-green transition-all duration-300 ease-in-out">
          {product.name}
        </h2>
      </div>
    </Link>
      );
}
