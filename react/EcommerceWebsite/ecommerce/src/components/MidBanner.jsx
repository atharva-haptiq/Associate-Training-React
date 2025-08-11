import image from "../assets/image.png";
import { useNavigate } from "react-router-dom";

const MidBanner = () => {
  const navigate = useNavigate();
  return (
    <section className="bg-gray-50 md:py-20">
      <div
        className="relative max-w-7xl mx-auto h-[500px] md:h-[600px] rounded-lg overflow-hidden shadow-xl"
        style={{
          backgroundImage: `url(${image})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
          backgroundAttachment: "fixed",
        }}
      >
        <div className="absolute inset-0 bg-gradient-to-r from-black/70 via-black/50 to-black/70 flex items-center justify-center">
          <div className="text-center text-white px-4">
            <h1 className="text-4xl md:text-6xl font-extrabold mb-4 leading-tight drop-shadow-md">
              Upgrade Your World with Elite Tech
            </h1>
            <p className="text-lg md:text-xl max-w-2xl mx-auto mb-6 text-gray-200">
              Discover futuristic gadgets and premium electronics, delivered
              fast and hassle-free.
            </p>
            <button
              onClick={() => navigate("/products")}
              className="bg-red-600 hover:bg-red-700 text-white font-semibold py-3 px-6 rounded-full transition-all duration-300 shadow-md hover:shadow-lg"
            >
              Start Shopping
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default MidBanner;
