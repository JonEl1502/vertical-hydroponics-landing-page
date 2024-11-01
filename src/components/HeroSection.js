import React from 'react';

const HeroSection = () => {
    return (
        <section id="features" className="bg-green-50 pt-20 pb-12 px-6">
            <div className="container mx-auto text-center">
                <h2 className="text-4xl font-bold text-green-700 mb-4">
                    Transform Your Space into a Sustainable Oasis
                </h2>
                <p className="text-lg text-gray-600 mb-8">
                    Discover the benefits of Vertical Hydroponics, a compact, eco-friendly solution that allows you
                    to grow fresh produce right at home.
                </p>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                    {/* Card 1 */}
                    <div
                        className="bg-white p-6 shadow-lg rounded-lg transform transition-transform duration-300 hover:scale-105">
                        <h3 className="text-2xl font-semibold text-green-800 mb-2">
                            Sustainable Living
                        </h3>
                        <p className="text-gray-600">
                            Transform your living space into a sustainable oasis with Vertical Hydroponics! Grow
                            fresh vegetables, herbs, and flowers with ease.
                        </p>
                    </div>
                    {/* Card 2 */}
                    <div
                        className="bg-white p-6 shadow-lg rounded-lg transform transition-transform duration-300 hover:scale-105">
                        <h3 className="text-2xl font-semibold text-green-800 mb-2">
                            Urban-Friendly Design
                        </h3>
                        <p className="text-gray-600">
                            This innovative system is compact and soil-free, making it perfect for urban spaces and
                            apartments.
                        </p>
                    </div>
                    {/* Card 3 */}
                    <div
                        className="bg-white p-6 shadow-lg rounded-lg transform transition-transform duration-300 hover:scale-105">
                        <h3 className="text-2xl font-semibold text-green-800 mb-2">
                            Year-Round Gardening
                        </h3>
                        <p className="text-gray-600">
                            Enjoy gardening year-round with a system that’s easy to maintain, eco-friendly, and
                            brings nature closer to your home.
                        </p>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default HeroSection;
