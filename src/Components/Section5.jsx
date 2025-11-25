import React from "react";

const Section5 = () => {
  return (
    <div>
      <section className="w-full py-20 bg-linear-to-r from-purple-50 via-white to-indigo-50 mt-10 rounded-2xl">
        <div className="max-w-6xl mx-auto px-4">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-14">
            Customer Reviews
          </h2>

          <div className="space-y-8">
            <div className="bg-white rounded-2xl shadow-lg border border-gray-100 p-6 relative overflow-hidden hover:shadow-xl transition-all duration-300">
              <div className="absolute left-0 top-0 h-full w-1 bg-linear-to-b from-indigo-500 to-purple-500 rounded-r"></div>
              <p className="text-gray-700 mb-3">
                Amazing quality! The 3D models blended perfectly with my
                project. Highly impressed.
              </p>
              <h4 className="font-semibold text-gray-900">Daniel Carter</h4>
            </div>

            <div className="bg-white rounded-2xl shadow-lg border border-gray-100 p-6 relative overflow-hidden hover:shadow-xl transition-all duration-300">
              <div className="absolute left-0 top-0 h-full w-1 bg-linear-to-b from-pink-500 to-red-500 rounded-r"></div>
              <p className="text-gray-700 mb-3">
                Very easy to download and use. The models are super detailed and
                clean.
              </p>
              <h4 className="font-semibold text-gray-900">Alicia Gomez</h4>
            </div>

            <div className="bg-white rounded-2xl shadow-lg border border-gray-100 p-6 relative overflow-hidden hover:shadow-xl transition-all duration-300">
              <div className="absolute left-0 top-0 h-full w-1 bg-linear-to-b from-green-500 to-emerald-500 rounded-r"></div>
              <p className="text-gray-700 mb-3">
                Affordable and high-quality 3D assets. My workflow is much
                faster now.
              </p>
              <h4 className="font-semibold text-gray-900">Kevin Brooks</h4>
            </div>

            <div className="bg-white rounded-2xl shadow-lg border border-gray-100 p-6 relative overflow-hidden hover:shadow-xl transition-all duration-300">
              <div className="absolute left-0 top-0 h-full w-1 bg-linear-to-b from-yellow-500 to-orange-500 rounded-r"></div>
              <p className="text-gray-700 mb-3">
                Great customer support and really premium models. Highly
                recommended!
              </p>
              <h4 className="font-semibold text-gray-900">Sophia Turner</h4>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Section5;
