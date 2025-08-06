import React from "react";
import { Truck, Lock, RotateCcw, Clock } from "lucide-react";

const features = [
  { icon: Truck, text: "Free Shipping", subtext: "On orders over $100" },
  { icon: Lock, text: "Secure Payment", subtext: "100% protected payments" },
  { icon: RotateCcw, text: "Easy Returns", subtext: "30-day return policy" },
  { icon: Clock, text: "24/7 Support", subtext: "Dedicated customer service" },
];

const Features = () => {
  return (
    <section className="bg-gray-50 py-14 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {features.map((feature, index) => {
            const Icon = feature.icon;
            return (
              <div
                key={index}
                className="group flex flex-col items-center text-center sm:items-start sm:text-left p-6 bg-white rounded-xl shadow-sm hover:shadow-md hover:-translate-y-1 transition-all duration-300"
              >
                <div className="bg-red-100 text-red-600 rounded-full p-3 mb-4">
                  <Icon className="w-7 h-7" aria-hidden="true" />
                </div>
                <h3 className="text-lg font-semibold text-gray-800 group-hover:text-red-600 transition">
                  {feature.text}
                </h3>
                <p className="text-sm text-gray-500 mt-2">{feature.subtext}</p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Features;
