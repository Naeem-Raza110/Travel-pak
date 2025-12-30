import React from "react";

const features = [
  { icon: "fa-map-marker-alt", title: "50+ DESTINATIONS" },
  { icon: "fa-medal", title: "BEST PRICE GUARANTEE" },
  { icon: "fa-users", title: "ECO FRIENDLY TOURISM" },
  { icon: "fa-calendar-check", title: "SUPER FAST BOOKING" },
];

const FeatureBar: React.FC = () => {
  return (
    <div className="bg-[#3498db] py-4 border-b border-blue-400/30">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
          {features.map((feature, idx) => (
            <div
              key={idx}
              className="flex items-center justify-center lg:justify-start space-x-3"
            >
              <div className="bg-white/10 w-9 h-9 flex items-center justify-center rounded-full border border-white/20">
                <i className={`fas ${feature.icon} text-white text-sm`}></i>
              </div>

              <span className="text-white font-semibold tracking-wide text-xs md:text-sm">
                {feature.title}
              </span>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default FeatureBar;
