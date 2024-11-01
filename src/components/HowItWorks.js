import React from 'react';

const HowItWorks = () => (
    <section id="how-it-works" className="py-12 bg-white">
        <h3 className="text-3xl font-bold text-center mb-6">How It Works</h3>
        <p className="text-center mb-6">In a vertical hydroponics system, nutrient-rich water flows through a series of pipes, allowing plants to thrive without soil. Here’s how it works:</p>
        <ul className="list-disc list-inside space-y-4 max-w-2xl mx-auto text-gray-700">
            <li>
                <strong>Nutrient Delivery:</strong> Water mixed with essential nutrients circulates through the system, providing plants with everything they need to grow.
            </li>
            <li>
                <strong>Vertical Stacking:</strong> Plants are grown in stacked layers, maximizing space and allowing for higher crop yields in smaller areas.
            </li>
            <li>
                <strong>Efficient Water Usage:</strong> Hydroponics systems use significantly less water than traditional farming methods, recirculating the water to minimize waste.
            </li>
            <li>
                <strong>Controlled Environment:</strong> Growing conditions such as light, temperature, and humidity can be optimized, resulting in faster growth and healthier plants.
            </li>
            <li>
                <strong>No Soil Required:</strong> Unlike traditional farming, hydroponics eliminates the need for soil, reducing the risk of soil-borne pests and diseases.
            </li>
        </ul>
    </section>
);

export default HowItWorks;
