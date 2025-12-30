import React from "react";

const TopBar: React.FC = () => {
  return (
    <div className="absolute top-0 left-0 w-full z-50 text-white text-xs py-2 hidden md:block">
      <div className="container mx-auto px-4 flex justify-between items-center">

        {/* Left Side */}
        <div className="flex items-center space-x-6">
          <a href="tel:+923214106223" className="flex items-center">
            <i className="fas fa-phone mr-2"></i>
            +92 321 410 6223
          </a>

          <a href="mailto:info@pakistantravelplaces.com" className="flex items-center">
            <i className="fas fa-envelope mr-2"></i>
            info@pakistantravelplaces.com
          </a>
        </div>

        {/* Right Side */}
        <div className="flex items-center space-x-6 mr-12">
          {/* Social Icons */}
          <div className="flex items-center space-x-5 border-r border-white/20 pr-6">
            <a href="#">
              <i className="fab fa-facebook-f text-lg"></i>
            </a>
            <a href="#">
              <i className="fab fa-twitter text-lg"></i>
            </a>
            <a href="#">
              <i className="fab fa-instagram text-lg"></i>
            </a>
          </div>

          {/* Login */}
          <a href="#" className="flex items-center font-semibold uppercase tracking-wider">
            <i className="fas fa-lock mr-2 text-[12px]"></i>
            Login
          </a>
        </div>

      </div>
    </div>
  );
};

export default TopBar;
