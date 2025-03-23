const Showcase = () => {
    return (
      <div className="bg-black py-24 sm:py-0">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <h2 className="text-center text-lg/8 font-semibold text-gray-100">
            Trusted by the world's most innovative teams
          </h2>
          <div className="mx-auto mt-10 grid max-w-lg grid-cols-4 items-center gap-x-8 gap-y-10 sm:max-w-xl sm:grid-cols-6 sm:gap-x-10 lg:mx-0 lg:max-w-none lg:grid-cols-5">
            <img
              alt="Google"
              src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSSLpdGXjCr7P_ouzz0AE1hMYDYErpTeLwQsQ&s"
              width={158}
              height={48}
              className="col-span-2 max-h-12 w-full object-contain filter invert lg:col-span-1"
            />
            <img
              alt="New York Times"
              src="https://photoai.com/cdn-cgi/image/format=auto,fit=cover,height=150,quality=100/https://photoai.com/assets/nytimes.png?1723678994"
              width={158}
              height={48}
              className="col-span-2 max-h-12 w-full object-contain filter invert lg:col-span-1"
            />
            <img
              alt="MIT"
              src="https://photoai.com/cdn-cgi/image/format=auto,fit=cover,height=150,quality=100/https://photoai.com/assets/mit.png?1739641698"
              width={158}
              height={48}
              className="col-span-2 max-h-12 w-full object-contain filter invert lg:col-span-1"
            />
            <img
              alt="Tech Crunch"
              src="https://photoai.com/cdn-cgi/image/format=auto,fit=cover,height=50,quality=50/https://avatarai.me/assets/techcrunch.png?1708109686"
              width={158}
              height={48}
              className="col-span-2 max-h-12 w-full object-contain filter invert sm:col-start-2 lg:col-span-1"
            />
            <img
              alt="Shopify"
              src="https://photoai.com/assets/shopify.png?1713380468"
              width={158}
              height={48}
              className="col-span-2 col-start-2 max-h-12 w-full object-contain filter invert sm:col-start-auto lg:col-span-1"
            />
          </div>
        </div>
      </div>
    )
  }

  export default Showcase;