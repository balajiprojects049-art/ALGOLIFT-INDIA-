'use client';

import { useEffect, useRef, ReactNode } from 'react';

interface ScrollRevealProps {
    children: ReactNode;
    direction?: 'up' | 'down' | 'left' | 'right' | 'scale' | 'fade';
    delay?: number;
    className?: string;
}

export default function ScrollReveal({
    children,
    direction = 'up',
    delay = 0,
    className = ''
}: ScrollRevealProps) {
    const elementRef = useRef<HTMLDivElement>(null);

    useEffect(() => {
        const element = elementRef.current;
        if (!element) return;

        const observer = new IntersectionObserver(
            (entries) => {
                entries.forEach((entry) => {
                    if (entry.isIntersecting) {
                        entry.target.classList.add('is-visible');
                    }
                });
            },
            {
                threshold: 0.1,
                rootMargin: '0px 0px -50px 0px'
            }
        );

        observer.observe(element);

        return () => {
            observer.disconnect();
        };
    }, []);

    const delayClass = delay > 0 ? `delay-${delay}` : '';
    const directionClass = `scroll-reveal-${direction}`;

    return (
        <div
            ref={elementRef}
            className={`scroll-reveal ${directionClass} ${delayClass} ${className}`}
        >
            {children}
        </div>
    );
}
