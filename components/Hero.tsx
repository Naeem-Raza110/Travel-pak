
import React from 'react';
import Image from "../IMG/1.jpg";
const Hero: React.FC = () => {
  return (
    <section className="relative h-screen min-h-[400px] w-full flex items-center overflow-hidden">
      <div
        className="absolute inset-0 bg-cover bg-center transition-transform duration-[10000ms] scale-110 hover:scale-100"
        style={{
          backgroundImage: `url(${Image})`,
        }}
      >
        <div className="absolute inset-0 bg-gradient-to-r from-black/60 via-black/30 to-transparent"></div>
      </div>

      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-3xl animate-fadeIn">
          <h2 className="text-white text-xl md:text-2xl font-semibold uppercase tracking-[0.2em] mb-4 drop-shadow-lg">
            Open Your Eyes To
          </h2>
          <h1 className="text-white text-5xl md:text-8xl font-black uppercase mb-2 drop-shadow-2xl leading-[0.9]">
            Shangri La
          </h1>
          <h3 className="text-white text-3xl md:text-5xl font-bold  mb-10 opacity-90 tracking-tight">
            The hidden World
          </h3>

          <div className="flex flex-col sm:flex-row space-y-4 sm:space-y-0 sm:space-x-6">

            <a
              href="tel:+923214106223"
              className="flex items-center justify-center bg-[#76d33f] hover:bg-[#67c12f] text-white font-semibold py-3 px-7 rounded-full shadow-md transition-colors"
            >
              <i className="fas fa-phone mr-3 text-sm"></i>
              Call Now
            </a>

            <a
              href="https://wa.me/92312345678"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center justify-center bg-[#f39c12] hover:bg-[#e58e0b] text-white font-semibold py-3 px-7 rounded-full shadow-md transition-colors"
            >
              <i className="fab fa-whatsapp mr-3 text-base"></i>
              Whatsapp
            </a>

          </div>

        </div>
      </div>


    </section>
  );
};

export default Hero;
