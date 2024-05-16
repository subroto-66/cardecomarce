import Link from 'next/link';


export default function CategoryCard({ image, name }) {

    return (
      <Link href="/category">
      <div className="max-w-44 h-64 w-full bg-white border border-[#fff] shadow-lg overflow-hidden rounded-lg">
        <img
          className="w-full h-full max-h-48"
          src={image}
          alt=""
        />
        <h2 className="text-center text-[15px] p-3 font-semibold hover:text-green transition-all duration-300 ease-in-out">
          Free Fire Diamond Top Up BD
        </h2>
      </div>
    </Link>
      );
}
