"use client";

import React from "react";

const Showcase = () => {
  // Array of logo objects for cleaner rendering
  const logos = [
    { id: "google", src: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSSLpdGXjCr7P_ouzz0AE1hMYDYErpTeLwQsQ&s", alt: "Google", height: "h-8" },
    { id: "nyt", src: "https://photoai.com/cdn-cgi/image/format=auto,fit=cover,height=150,quality=100/https://photoai.com/assets/nytimes.png?1723678994", alt: "New York Times", height: "h-8" },
    { id: "mit", src: "https://photoai.com/cdn-cgi/image/format=auto,fit=cover,height=150,quality=100/https://photoai.com/assets/mit.png?1739641698", alt: "MIT", height: "h-8" },
    { id: "techcrunch", src: "https://photoai.com/cdn-cgi/image/format=auto,fit=cover,height=50,quality=50/https://avatarai.me/assets/techcrunch.png?1708109686", alt: "Tech Crunch", height: "h-8" },
    { id: "shopify", src: "https://photoai.com/assets/shopify.png?1713380468", alt: "Shopify", height: "h-8" },
    { id: "logos", src: "https://www.headshotpro.com/_nuxt/img/logo-cloud-horizontal.e5e3772.png", alt: "logos", height: "h-12" },
    { id: "ebay", src: "https://www.headshotpro.com/_nuxt/img/logo-3.5588fdb.png", alt: "ebay", height: "h-8" },
    { id: "dell", src: "https://www.headshotpro.com/_nuxt/img/logo-4.0d6d3bc.png", alt: "dell", height: "h-8" },
    { id: "box", src: "https://www.headshotpro.com/_nuxt/img/logo-5.793a4b1.png", alt: "box", height: "h-8" },
    { id: "stackoverflow", src: "https://www.headshotpro.com/_nuxt/img/logo-6.89d84c1.png", alt: "stackoverflow", height: "h-10" },
    { id: "rogers", src: "https://www.headshotpro.com/_nuxt/img/logo-8.7cc0319.png", alt: "rogers", height: "h-10" },
    { id: "berkeley", src: "https://www.headshotpro.com/_nuxt/img/logo-9.4a40760.png", alt: "berkeley", height: "h-10" },
    { id: "warnermedia", src: "https://www.headshotpro.com/_nuxt/img/logo-12.c6a3662.png", alt: "warnermedia", height: "h-12" },
    { id: "forbes", src: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSVq4YCWxAkvBDZaLgOFNe555BKS7JxVII4IA&s", alt: "forbes", height: "h-6" },
    { id: "washingtonpost", src: "https://upload.wikimedia.org/wikipedia/commons/thumb/9/93/The_Logo_of_The_Washington_Post_Newspaper.svg/2560px-The_Logo_of_The_Washington_Post_Newspaper.svg.png", alt: "washingtonpost", height: "h-8" },
    { id: "sueddeutsche", src: "https://upload.wikimedia.org/wikipedia/commons/thumb/4/42/S%C3%BCddeutsche_Zeitung_Logo.svg/2560px-S%C3%BCddeutsche_Zeitung_Logo.svg.png", alt: "sueddeutsche zeitung", height: "h-7" },
    { id: "dailymail", src: "https://upload.wikimedia.org/wikipedia/commons/thumb/9/96/Daily_Mail_masthead.svg/2560px-Daily_Mail_masthead.svg.png", alt: "dailymail", height: "h-8" },
    { id: "larepublica", src: "https://upload.wikimedia.org/wikipedia/commons/9/9c/La_Repubblica_logo.png", alt: "larepublica", height: "h-8" },
  ];

  return (
    <div className="bg-black py-24 sm:py-0 overflow-hidden">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <h2 className="text-center text-lg/8 font-semibold text-gray-100">
          Trusted by the world's most {" "}
          <span className="bg-gradient-to-r from-pink-500 to-purple-500 text-transparent bg-clip-text">
            innovative
          </span>{" "}
          teams
        </h2>
        <div className="relative mt-10 w-full overflow-hidden">
          <div className="flex space-x-10 animate-scroll">
            {/* Render each logo twice for the infinite scroll effect */}
            {[0, 1].map((setIndex) => (
              // Add a key to the fragment
              <React.Fragment key={`logo-set-${setIndex}`}>
                {logos.map((logo) => (
                  <img
                    key={`${logo.id}-${setIndex}`}
                    alt={logo.alt}
                    src={logo.src}
                    className={`${logo.height} object-contain filter invert`}
                  />
                ))}
              </React.Fragment>
            ))}
          </div>
        </div>
      </div>
      <style jsx>{`
        @keyframes scroll {
          from {
            transform: translateX(0%);
          }
          to {
            transform: translateX(-50%);
          }
        }
        .animate-scroll {
          display: flex;
          width: max-content;
          animation: scroll 50s linear infinite;
        }
      `}</style>
    </div>
  );
};

export default Showcase;