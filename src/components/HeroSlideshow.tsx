'use client';

import { useEffect, useState } from 'react';

interface HeroSlideshowProps {
    images: string[];
    interval?: number; // in milliseconds
}

export default function HeroSlideshow({ images, interval = 6000 }: HeroSlideshowProps) {
    const [currentIndex, setCurrentIndex] = useState(0);

    useEffect(() => {
        if (images.length <= 1) return;

        const timer = setInterval(() => {
            setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
        }, interval);

        return () => clearInterval(timer);
    }, [images.length, interval]);

    return (
        <>
            {images.map((image, index) => (
                <div
                    key={image}
                    className="hero-background"
                    style={{
                        backgroundImage: `url(${image})`,
                        opacity: currentIndex === index ? 1 : 0,
                        transition: 'opacity 1.5s ease-in-out',
                        zIndex: currentIndex === index ? 1 : 0,
                    }}
                />
            ))}
        </>
    );
}
