import React from 'react';

const Section2 = () => {
    return (
        <div>
            <section className="py-16 bg-gray-100 text-center rounded-2xl mt-10">
  <h2 className="text-3xl font-bold mb-10">What Our Customers Say</h2>
  
  <div className="max-w-4xl mx-auto grid gap-8 md:grid-cols-2">

    <div className="bg-white p-6 rounded-xl shadow-lg hover:shadow-xl transition">
      <p className="text-gray-700 mb-4">
        The 3D models I bought were amazing! Saved me so much time and effort.
      </p>
      <span className="font-semibold text-gray-900">John Doe</span>
    </div>


    <div className="bg-white p-6 rounded-xl shadow-lg hover:shadow-xl transition">
      <p className="text-gray-700 mb-4">
        High-quality 3D assets! Really professional and easy to download.
      </p>
      <span className="font-semibold text-gray-900">Jane Smith</span>
    </div>


    <div className="bg-white p-6 rounded-xl shadow-lg hover:shadow-xl transition">
      <p className="text-gray-700 mb-4">
        I found exactly what I needed for my project. Highly recommend Shop 3D!
      </p>
      <span className="font-semibold text-gray-900">Michael Lee</span>
    </div>


    <div className="bg-white p-6 rounded-xl shadow-lg hover:shadow-xl transition">
      <p className="text-gray-700 mb-4">
        Affordable 3D models with excellent quality. Will buy again
      </p>
      <span className="font-semibold text-gray-900">Sarah Khan</span>
    </div>
  </div>
</section>
        </div>
    );
};

export default Section2;