import { FaAmericanSignLanguageInterpreting } from "react-icons/fa";
import CategoryCard from "./component/CategoryCard";
import ProductCard from "./component/ProductCard";
import ResonCard from "./component/ResonCard";
import Search from "./component/Search";

export default function Home() {
  const data = [
    {
      id: 1,
      product: "Cyberpunk 2077",
      category: "xbox",
      image:
        "https://cdn.pixabay.com/photo/2022/10/09/09/12/woman-7508618_1280.jpg",
      price: 36.49,
    },
    {
      id: 2,
      product: "Grand Theft Auto 5",
      category: "xbox",
      image:
        "https://cdn.pixabay.com/photo/2022/10/09/09/12/woman-7508618_1280.jpg",
      price: 21.99,
    },
    {
      id: 3,
      product: "NBA2K21 Next Generation",
      category: "xbox",
      image:
        "https://cdn.pixabay.com/photo/2022/10/09/09/12/woman-7508618_1280.jpg",
      price: 49.99,
    },
    {
      id: 3,
      product: "NBA2K21 Next Generation",
      category: "xbox",
      image:
        "https://cdn.pixabay.com/photo/2022/10/09/09/12/woman-7508618_1280.jpg",
      price: 49.99,
    },
    {
      id: 3,
      product: "NBA2K21 Next Generation",
      category: "xbox",
      image:
        "https://cdn.pixabay.com/photo/2022/10/09/09/12/woman-7508618_1280.jpg",
      price: 49.99,
    },
    {
      id: 3,
      product: "NBA2K21 Next Generation",
      category: "xbox",
      image:
        "https://cdn.pixabay.com/photo/2022/10/09/09/12/woman-7508618_1280.jpg",
      price: 49.99,
    },
    {
      id: 3,
      product: "NBA2K21 Next Generation",
      category: "xbox",
      image:
        "https://cdn.pixabay.com/photo/2022/10/09/09/12/woman-7508618_1280.jpg",
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
  ];

  const reasons = [
    {
      id: 1,
      icon: (
        <FaAmericanSignLanguageInterpreting className="text-[#FB711D] text-6xl p-3 rounded-full border-2" />
      ),
      title: "Easy and Fast",
      description:
        "It only takes a few seconds to complete a purchase on Jubaly.",
    },
    {
      id: 2,
      icon: (
        <FaAmericanSignLanguageInterpreting className="text-[#FB711D] text-6xl p-3 rounded-full border-2" />
      ),
      title: "Instant Delivery",
      description:
        "When you purchase on Jubaly, your purchase is delivered directly to your email or game account as soon as your payment is complete.",
    },
    {
      id: 3,
      icon: (
        <FaAmericanSignLanguageInterpreting className="text-[#FB711D] text-6xl p-3 rounded-full border-2" />
      ),
      title: "Convenient Payment Methods",
      description:
        "To ensure your convenience, we have partnered with the most popular providers (sManager) in Bangladesh.",
    },
    {
      id: 3,
      icon: (
        <FaAmericanSignLanguageInterpreting className="text-[#FB711D] text-6xl p-3 rounded-full border-2" />
      ),
      title: "Customer Support",
      description:
        "Our support team is available 24/7 . Message us for support.",
    },
  ];

  return (
    <div className="w-full">
      <div className="max-w-[1140px] h-full mx-auto p-2 ">
        <div className=" w-full mx-auto max-w-2xl mb-4 mt-10">
          <h1 className="text-lg font-semibold mb-5">
            What are you looking for?
          </h1>
          <Search />
        </div>

        <h1 className="text-xl font-semibold mb-4 pt-10">All Category</h1>
        <div className="w-full grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 pb-8 gap-4">
          {category.map((product) => (
            <CategoryCard key={product.id} product={product} />
          ))}
        </div>

        <h1 className="text-xl font-semibold pb-4 pt-2">Popular Products</h1>
        <div className="w-full grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 pb-8 gap-4">
          {data.map((product) => (
            <ProductCard key={product.id} product={product} />
          ))}
        </div>

        <div className="grid grid-flow-row md:grid-cols-2 gap-4 mt-5 mb-5">
          <div className="w-full h-full flex flex-col items-center justify-start">
            <h2 className="text-2xl font-semibold py-3 w-full">About 24GIFT</h2>
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

        <div className="w-full">
          <div className="pt-10 text-center">
            <h2 className="text-2xl font-semibold py-3 w-full">
              Why Top Up Games On JUBALY?
            </h2>
            <p className="text-sm font-normal">
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
