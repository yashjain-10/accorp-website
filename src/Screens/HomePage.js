import React, {useEffect, useState} from 'react';

import '../App.css';

import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader

function HomePage() {

    return (
        <div className="bg-white max-w-full">
            <p>Karte rahiye Meeting meeting, Hote rahega meeting meeting, ALUA MEETING</p>

            {/* Hero Section */}
            <section className="text-center py-20 bg-gray-100">
                <h1 className="text-5xl font-bold">Global Expertise, Local Focus</h1>
                <h2 className="text-3xl font-bold text-blue-600 mt-4">Your trusted CPA Partner</h2>
                <p className="text-gray-600 mt-4">Comprehensive financial services for businesses and individuals with over 35 years of global experience.</p>
            </section>

            {/* Services Section */}
            <section className="flex justify-around py-20">
                <div className="bg-white shadow-lg rounded-lg p-6">
                <h3 className="text-2xl font-bold">SOC</h3>
                </div>
                <div className="bg-white shadow-lg rounded-lg p-6">
                <h3 className="text-2xl font-bold">USA INCORPORATION</h3>
                </div>
                <div className="bg-white shadow-lg rounded-lg p-6">
                <h3 className="text-2xl font-bold">COMPLIANCES</h3>
                </div>
            </section>

            {/* Expertise Section */}
            <section className="text-center py-20">
                <div className="space-y-8">
                <div>
                    <h3 className="text-xl font-bold">Decades of Expertise</h3>
                    <p className="text-gray-600">With over 35 years of expertise, we bring a wealth of global knowledge to every client engagement.</p>
                </div>
                <div>
                    <h3 className="text-xl font-bold">Global Compliance</h3>
                    <p className="text-gray-600">We ensure strict adherence to all global standards, keeping your business compliant and secure.</p>
                </div>
                <div>
                    <h3 className="text-xl font-bold">Tailored Solutions</h3>
                    <p className="text-gray-600">Comprehensive services for both individuals and businesses, customized to your unique needs.</p>
                </div>
                <div>
                    <h3 className="text-xl font-bold">International Insight</h3>
                    <p className="text-gray-600">Navigating cross-border regulations with a global perspective for your success.</p>
                </div>
                </div>
            </section>

            {/* Statistics Section */}
            <section className="flex justify-around py-20 bg-blue-100">
                <div className="text-center">
                <h3 className="text-4xl font-bold text-blue-600">700+</h3>
                <p className="text-gray-600">Trusted Clients</p>
                </div>
                <div className="text-center">
                <h3 className="text-4xl font-bold text-blue-600">7+</h3>
                <p className="text-gray-600">Awards</p>
                </div>
                <div className="text-center">
                <h3 className="text-4xl font-bold text-blue-600">34+</h3>
                <p className="text-gray-600">Years of Experience</p>
                </div>
                <div className="text-center">
                <h3 className="text-4xl font-bold text-blue-600">115+</h3>
                <p className="text-gray-600">Experts</p>
                </div>
            </section>
            
            <section className="h-8 bg-gray-200 text-center py-20">

            </section>
        </div>
    );
}

export default HomePage;
