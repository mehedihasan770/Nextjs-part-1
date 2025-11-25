import React from "react";

const Section2 = () => {
  return (
    <section className="w-full py-20 bg-linear-to-br from-indigo-50 via-white to-purple-50 mt-12 rounded-2xl">
      <div className="max-w-6xl mx-auto px-4 text-center">
        <h2 className="text-3xl md:text-4xl font-bold mb-14">Why Choose Us</h2>

        <div className="grid gap-10 md:grid-cols-3">
          <div
            className="p-8 bg-white rounded-2xl shadow-[0_0_25px_rgba(0,0,0,0.05)] border border-transparent 
                      hover:border-indigo-500/40 hover:shadow-[0_0_25px_rgba(99,102,241,0.25)] 
                      transition-all duration-300"
          >
            <h3 className="text-xl font-semibold mb-3">Premium Quality</h3>
            <p className="text-gray-600">
              Professionally crafted 3D models that ensure high detail and
              realistic results.
            </p>
          </div>

          <div
            className="p-8 bg-white rounded-2xl shadow-[0_0_25px_rgba(0,0,0,0.05)] border border-transparent 
                      hover:border-purple-500/40 hover:shadow-[0_0_25px_rgba(168,85,247,0.25)] 
                      transition-all duration-300"
          >
            <h3 className="text-xl font-semibold mb-3">Instant Access</h3>
            <p className="text-gray-600">
              Buy once and get instant digital downloads, ready for any project.
            </p>
          </div>

          <div
            className="p-8 bg-white rounded-2xl shadow-[0_0_25px_rgba(0,0,0,0.05)] border border-transparent 
                      hover:border-pink-500/40 hover:shadow-[0_0_25px_rgba(236,72,153,0.25)] 
                      transition-all duration-300"
          >
            <h3 className="text-xl font-semibold mb-3">Affordable Pricing</h3>
            <p className="text-gray-600">
              High-quality assets at a price that fits your creative budget.
            </p>
          </div>

          <div
            className="p-8 bg-white rounded-2xl shadow-[0_0_25px_rgba(0,0,0,0.05)] border border-transparent 
                      hover:border-green-500/40 hover:shadow-[0_0_25px_rgba(34,197,94,0.25)] 
                      transition-all duration-300 md:col-span-3"
          >
            <h3 className="text-xl font-semibold mb-3">Huge Collection</h3>
            <p className="text-gray-600">
              Food, characters, plants, props, and many more categories—all in
              one marketplace.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Section2;
