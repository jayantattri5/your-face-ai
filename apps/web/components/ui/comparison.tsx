import React from 'react';

const ProductComparison = () => {
  const products = [
    {
      name: "Midjourney (2025)",
      imageUrl: "https://image.civitai.com/xG1nkqKTMzGDvpLrqFT7WA/5e918907-a153-4fdf-aad2-f1bb62ff0635/original=true,quality=90/63734191.jpeg", // Replace with your actual image URL
      features: [
        { text: "Cannot train people", positive: false },
        { text: "Inconsistent character", positive: false },
        { text: "Medium photorealism", positive: false },
        { text: "High resolution", positive: true },
        { text: "Maintains ethnicity", positive: false },
        { text: "Clear and sharp", positive: true },
        { text: "Zoom out of photos", positive: true },
        { text: "No video support", positive: false }
      ]
    },
    {
      name: "Your Face AI (2025)",
      imageUrl: "https://image.civitai.com/xG1nkqKTMzGDvpLrqFT7WA/6efb710c-afb5-4baa-aadd-465c6eed0845/original=true,quality=90/62874549.jpeg", // Replace with your actual image URL
      features: [
        { text: "Train real people", positive: true },
        { text: "Consistent character", positive: true },
        { text: "High photorealism", positive: true },
        { text: "High resolution", positive: true },
        { text: "Maintains ethnicity", positive: true },
        { text: "Clear and sharp", positive: true },
        { text: "Zoom out of photos", positive: true },
        { text: "Create videos", positive: true }
      ],
      highlighted: true
    },
    {
      name: "ChatGPT (2025)",
      imageUrl: "https://image.civitai.com/xG1nkqKTMzGDvpLrqFT7WA/bd6235b3-f31a-4f5f-ac33-7985e67fcffa/original=true,quality=90/63566892.jpeg", // Replace with your actual image URL
      features: [
        { text: "Cannot train people", positive: false },
        { text: "Inconsistent character", positive: false },
        { text: "Low photorealism", positive: false },
        { text: "Low resolution", positive: false },
        { text: "Maintains ethnicity", positive: true },
        { text: "Clear and sharp", positive: false },
        { text: "No zoom out support", positive: false },
        { text: "No video support", positive: false }
      ]
    }
  ];

  return (
    <div className="bg-black p-6">
      {/* Added heading */}
      <h1 className="text-6xl md:text-4xl font-bold text-white text-center mb-8">
        How does Your Face AI compare to other AI image generators?
      </h1>
      <p className="md:text-xl pb-10 text-white text-center mb-8">
       With the same uploaded selfies, Your Face AI performs far better than competitors in photorealism and resemblance.
      </p>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-6xl mx-auto">
        {products.map((product, index) => (
          <div 
            key={index} 
            className={`relative overflow-hidden rounded-lg border border-gray-700 ${
              product.highlighted ? 'ring-2 ring-orange-500' : ''
            }`}
          >
            {/* Product Image */}
            <div className="h-110 relative overflow-hidden bg-black">
              <img 
                src={product.imageUrl} 
                alt={product.name} 
                className="w-full h-full object-cover"
              />
            </div>
            
            {/* Product Name */}
            <div className="bg-black p-4">
              <h3 className="text-xl font-semibold text-white">{product.name}</h3>
              
              {/* Feature List */}
              <div className="mt-4 space-y-2">
                {product.features.map((feature, featureIndex) => (
                  <div key={featureIndex} className="flex items-center">
                    {feature.positive ? (
                      <span className="text-green-500 mr-2 text-xl">✓</span>
                    ) : (
                      <span className="text-red-500 mr-2 text-xl">✗</span>
                    )}
                    <span className="text-white">{feature.text}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ProductComparison;