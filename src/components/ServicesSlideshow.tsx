'use client';

import { useState, useEffect } from 'react';
import Image from 'next/image';

interface ServiceCard {
    title: string;
    image: string;
}

const services: ServiceCard[] = [
    {
        title: 'AI, Data & Analytics',
        image: '/images/hero-abstract.png'
    },
    {
        title: 'Cyber Security',
        image: '/images/hero-cloud.png'
    },
    {
        title: 'DevOps & Automation',
        image: '/images/hero-java.png'
    },
    {
        title: 'Digital Engineering',
        image: '/images/hero-careers.png'
    },
    {
        title: 'Web Development',
        image: '/images/hero-java-2.png'
    },
    {
        title: 'Cloud Infrastructure',
        image: '/images/hero-careers-2.png'
    },
    {
        title: 'Project Management',
        image: '/images/hero-projects.jpg'
    }
];

export default function ServicesSlideshow() {
    const [isPaused, setIsPaused] = useState(false);
    const [offset, setOffset] = useState(0);

    // Duplicate services for infinite scroll effect
    const duplicatedServices = [...services, ...services];

    useEffect(() => {
        if (isPaused) return;

        const interval = setInterval(() => {
            setOffset((prevOffset) => {
                const newOffset = prevOffset + 1;
                // Reset when we've scrolled through one full set
                if (newOffset >= services.length) {
                    return 0;
                }
                return newOffset;
            });
        }, 3000); // Move every 3 seconds

        return () => clearInterval(interval);
    }, [isPaused]);

    return (
        <section className="relative py-24 bg-[#020617] overflow-hidden">
            {/* Background Effects */}
            <div className="absolute inset-0 bg-[linear-gradient(to_right,#111827_1px,transparent_1px),linear-gradient(to_bottom,#111827_1px,transparent_1px)] bg-[size:4rem_4rem] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_0%,#000_70%,transparent_100%)] opacity-20"></div>
            <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full max-w-5xl h-[500px] bg-emerald-500/10 blur-[120px] rounded-full pointer-events-none"></div>

            <div className="container mx-auto px-6 relative z-10">
                {/* Header */}
                <div className="text-center mb-16">
                    <div className="inline-block px-3 py-1 bg-emerald-900/30 text-emerald-400 rounded-full text-sm font-medium mb-6 border border-emerald-500/20">
                        Our Core Services
                    </div>
                    <h2 className="text-4xl md:text-5xl font-bold text-white mb-4 leading-tight">
                        Transform Your Ideas
                        <br />
                        <span className="animated-gradient-text">Into Reality Today</span>
                    </h2>
                    <p className="text-slate-300 text-lg max-w-2xl mx-auto">
                        Our innovative solutions empower you to achieve your goals effortlessly. Experience seamless integration and unmatched support tailored to your needs.
                    </p>
                </div>

                {/* Horizontal Slideshow Container */}
                <div
                    className="relative"
                    onMouseEnter={() => setIsPaused(true)}
                    onMouseLeave={() => setIsPaused(false)}
                >
                    {/* Horizontal Scroll Container */}
                    <div className="overflow-hidden">
                        <div
                            className="flex gap-6 transition-transform duration-1000 ease-in-out"
                            style={{
                                transform: `translateX(-${offset * (100 / 4)}%)`,
                            }}
                        >
                            {duplicatedServices.map((service, index) => (
                                <div
                                    key={index}
                                    className="group relative overflow-hidden rounded-2xl flex-shrink-0 w-full sm:w-[calc(50%-12px)] lg:w-[calc(25%-18px)] hover:scale-105 transition-transform duration-500 cursor-pointer"
                                >
                                    {/* Image Container */}
                                    <div className="relative h-64 bg-slate-800">
                                        <Image
                                            src={service.image}
                                            alt={service.title}
                                            fill
                                            className="object-cover transition-transform duration-700 group-hover:scale-110"
                                            sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 25vw"
                                        />

                                        {/* Gradient Overlay */}
                                        <div className="absolute inset-0 bg-gradient-to-t from-slate-900 via-slate-900/60 to-transparent"></div>

                                        {/* Glow Effect on Hover */}
                                        <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500 bg-gradient-to-t from-emerald-500/20 to-transparent"></div>
                                    </div>

                                    {/* Title */}
                                    <div className="absolute bottom-0 left-0 right-0 p-6">
                                        <h3 className="text-white font-bold text-xl leading-tight group-hover:text-emerald-400 transition-colors">
                                            {service.title}
                                        </h3>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>

                    {/* Navigation Dots */}
                    <div className="flex items-center justify-center gap-3 mt-12">
                        {services.map((_, index) => (
                            <button
                                key={index}
                                onClick={() => setOffset(index)}
                                className={`transition-all duration-300 rounded-full ${offset % services.length === index
                                        ? 'w-8 h-2 bg-emerald-500'
                                        : 'w-2 h-2 bg-slate-600 hover:bg-slate-500'
                                    }`}
                                aria-label={`Go to slide ${index + 1}`}
                            />
                        ))}
                    </div>
                </div>
            </div>
        </section>
    );
}
