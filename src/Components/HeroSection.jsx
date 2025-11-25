"use client";
import Link from 'next/link';
import React from 'react';

const HeroSection = () => {
    return (
        <div>
           <section className="relative w-full py-6 flex items-center justify-center rounded-2xl mt-10 text-center px-4 overflow-hidden">
                <div className="absolute inset-0 bg-cover bg-center blur-sm scale-110" style={{backgroundImage:"url('https://img.daisyui.com/images/stock/photo-1507358522600-9f71e620c44e.webp')",}}></div>
                    <div className="absolute inset-0 bg-black/40 rounded-2xl"></div>
                    <div className="relative max-w-2xl mx-auto">
                    <h1 className="text-[18px] md:text-2xl font-bold text-white/75 drop-shadow-lg">Your Marketplace for 3D Models</h1>
                    <p className="mt-4 text-white/50 mb-5 drop-shadow">Buy realistic 3D models at an affordable price and make your work look more professional.</p>
                    <Link href="/all_products" className="btn btn-outline btn-primary">Buy Now</Link>
                </div>
            </section>
        </div>
    );
};

export default HeroSection;