import React from 'react';

const features = [
    {
        title: "Space-efficient",
        description: "Vertical stacking of crops saves space.",
        icon: "/images/vertical-farm-01.jpg" // Replace with your icon URL
    },
    {
        title: "Water-efficient",
        description: "Uses 90% less water than traditional methods.",
        icon: "/images/vertical-farm-02.jpg" // Replace with your icon URL
    },
    {
        title: "No soil required",
        description: "Less mess and fewer pests without soil.",
        icon: "/images/hydroponics.webp" // Replace with your icon URL
    },
];

const Features = () => (
    <section id="features" className="py-12 bg-green-50">
        <h3 className="text-3xl font-bold text-center mb-8">Why Vertical Hydroponics?</h3>
        <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-6 px-4">
            {features.map((feature, index) => (
                <div key={index} className="bg-white shadow-lg rounded-lg p-6 text-center transition-transform transform hover:scale-105">
                    <img src={feature.icon} alt={`${feature.title} icon`} className="h-48 mb-4 mx-auto" />
                    <h4 className="text-xl font-semibold mb-2">{feature.title}</h4>
                    <p className="text-gray-600">{feature.description}</p>
                </div>
            ))}
        </div>
    </section>
);

export default Features;
