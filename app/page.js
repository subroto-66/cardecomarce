import { FaAmericanSignLanguageInterpreting } from "react-icons/fa";
import CategoryCard from "./component/CategoryCard";
import ProductCard from "./component/ProductCard";
import ResonCard from "./component/ResonCard";
import Search from "./component/Search";

export default function Home() {
  const data = [
    {
      id: 1,
      product: "Cyberpunk Lorem Ipsum is Simply Cyberpunk Lorem",
      category: "xbox",
      image: "../product/poduct-1.jpg",
      price: 36.49,
    },
    {
      id: 2,
      product: "Grand Theft Lorem Ipsum is simply dummy Cyberpunk",
      category: "xbox",
      image: "../product/product-2.webp",
      price: 21.99,
    },
    {
      id: 3,
      product: "NBA2K21 Next Generation Cyberpunk Lorem Cyberpunk ",
      category: "xbox",
      image: "../product/product-3.jpeg",
      price: 49.99,
    },
    {
      id: 4,
      product: "Next Generation",
      category: "xbox",
      image: "../product/product-4.jpeg",
      price: 49.99,
    },
    {
      id: 5,
      product: "NBA2K21 Next Generation",
      category: "xbox",
      image: "../product/poduct-1.jpg",
      price: 49.99,
    },
    {
      id: 6,
      product: "Next Generation",
      category: "xbox",
      image: "../product/product-2.webp",
      price: 49.99,
    },
    {
      id: 7,
      product: "Next Generation",
      category: "xbox",
      image: "../product/product-2.webp",
      price: 49.99,
    },
    {
      id: 8,
      product: "NBA2K21 Next Generation",
      category: "xbox",
      image: "../product/poduct-1.jpg",
      price: 49.99,
    },
    {
      id: 9,
      product: "Next Generation",
      category: "xbox",
      image: "../product/product-2.webp",
      price: 49.99,
    },
    {
      id: 10,
      product: "NBA2K21 Next Generation",
      category: "xbox",
      image: "../product/poduct-1.jpg",
      price: 49.99,
    },
  ];

  const category = [
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
      name: "Minecraft",
      image: "../category/Mobile-Legends-global.jpg",
    },
    {
      id: 5,
      name: "Minecraft",
      image: "../category/PUBG-Mobile-New-State-NC-jubaly.png",
    },
    {
      id: 6,
      name: "Minecraft",
      image: "../category/Sausage-Man-Candies.jpg",
    },
    {
      id: 7,
      name: "Minecraft",
      image: "../category/Super-Golden.webp",
    },
    {
      id: 8,
      name: "Minecraft",
      image: "../category/free-fire-diamond-topup.jpg",
    },
    {
      id: 9,
      name: "Minecraft",
      image: "../category/free-fire-diamond-topup.jpg",
    },
    {
      id: 10,
      name: "Minecraft",
      image: "../category/free-fire-diamond-topup.jpg",
    },
    {
      id: 12,
      name: "Minecraft",
      image: "../category/free-fire-diamond-topup.jpg",
    },
    {
      id: 13,
      name: "Minecraft",
      image: "../category/free-fire-diamond-topup.jpg",
    },
  ];

  const reasons = [
    {
      id: 1,
      icon: (
        <FaAmericanSignLanguageInterpreting className="text-[#FB711D] hover:text-[#fff] hover:bg-[#FB711D] text-6xl p-3 rounded-full border-2" />
      ),
      title: "Easy and Fast",
      description:
        "It only takes a few seconds to complete a purchase on Jubaly.",
    },
    {
      id: 2,
      icon: (
        <FaAmericanSignLanguageInterpreting className="text-[#FB711D] hover:text-[#fff] hover:bg-[#FB711D] text-6xl p-3 rounded-full border-2" />
      ),
      title: "Instant Delivery",
      description:
        "When you purchase on Jubaly, your purchase is delivered directly to your email or game account as soon as your payment is complete.",
    },
    {
      id: 3,
      icon: (
        <FaAmericanSignLanguageInterpreting className="text-[#FB711D] hover:text-[#fff] hover:bg-[#FB711D] text-6xl p-3 rounded-full border-2" />
      ),
      title: "Convenient Payment Methods",
      description:
        "To ensure your convenience, we have partnered with the most popular providers (sManager) in Bangladesh.",
    },
    {
      id: 3,
      icon: (
        <FaAmericanSignLanguageInterpreting className="text-[#FB711D] hover:text-[#fff] hover:bg-[#FB711D] text-6xl p-3 rounded-full border-2" />
      ),
      title: "Customer Support",
      description:
        "Our support team is available 24/7 . Message us for support.",
    },
  ];

  return (
    <div className="w-full">
      <div className="max-w-[1140px] h-full mx-auto p-2 ">
        <div class="pt-3 leading-5 tracking-wide font-semibold">
          <marquee behavior="scroll" direction="left" scrollamount="4">
            {" "}
            Our service is open 24 hours, but from 5 am to 6 am Ordering may
            take some time to receive delivery. Order now, Thank You 😊{" "}
          </marquee>
        </div>

        <div className=" w-full mx-auto max-w-2xl mb-2 mt-5">
          <h1 className="text-base opacity-60 font-semibold mb-3">
            What are you looking for?
          </h1>
          <Search />
        </div>

        <div className="w-full mb-10">
          <h1 className="text-xl font-semibold mb-5 pt-4">Popular Category</h1>
          <div className="w-full grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 pb-8 gap-4">
            {category.map((product) => (
              <CategoryCard key={product.id} product={product} />
            ))}
          </div>
          <div className="w-full text-center mt-2">
            <a
              role="button"
              href="#"
              className="uppercase transition-all duration-200 ease-out text-xs rounded-sm hover:border-2 hover:border-[#FB711D] hover:bg-[#fff] hover:text-[#FB711D] font-semibold text-[#fff] bg-[#FB711D] px-4 py-3"
            >
              view all item
            </a>
          </div>
        </div>

        <div className="w-full mb-10">
          <h1 className="text-xl font-semibold pb-5 pt-2">Popular Products</h1>
          <div className="w-full grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 pb-8 gap-4">
            {data.map((product) => (
              <ProductCard key={product.id} product={product} />
            ))}
          </div>
          <div className="w-full text-center mt-2">
            <a
              role="button"
              href="#"
              className="uppercase transition-all duration-200 ease-out text-xs rounded-sm hover:border-2 hover:border-[#FB711D] hover:bg-[#fff] hover:text-[#FB711D] font-semibold text-[#fff] bg-[#FB711D] px-4 py-3"
            >
              view all item
            </a>
          </div>
        </div>

        <div className="grid grid-flow-row md:grid-cols-2 gap-4 mt-20 mb-20">
          <div className="w-full h-full flex flex-col items-center justify-start">
            <h2 className="text-2xl font-semibold py-4 w-full">About 24GIFT</h2>
            <p className="text-base font-normal w-full">
              Trusted worldwide, we bring digital prepaid cards & gift cards
              directly to you. In United States or wherever you are, whenever
              you need them. Because prepaid is the smartest and safest way to
              pay online. Looking for subscriptions, games, shopping or phone
              credit? Choose from a wide variety of countries and currencies and
              buy your eGift cards online with fast email delivery!
            </p>
          </div>
          <div className="w-full">
            <img className="w-full rounded-md" src="./about-us.jpg" />
          </div>
        </div>

        <div className="w-full ">
          <div className="pt-10 text-center">
            <h2 className="text-2xl font-semibold py-5 w-full">
              Why Top Up Games On JUBALY?
            </h2>
            <p className="text-sm font-normal md:px-40 px-2">
              Millions of gamers or people count on Jubaly every month for a
              seamless purchase experience when buying game credits or vouchers
              and purchases are delivered to your email or game account
              instantly. Purchase card now!
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 my-10">
            {reasons.map((reason) => (
              <ResonCard key={reason.id} reason={reason} />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
