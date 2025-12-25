'use client';

import Image from 'next/image';
import { clients } from '@/data/clients';

// Force HMR update
export default function ClientLogoSlideshow() {
    return (
        <div className="w-full py-10 overflow-hidden bg-gradient-to-r from-emerald-100 via-emerald-50 to-emerald-100 border-y border-emerald-200">
            <div className="container mx-auto px-6 mb-8 text-center">
                <h3 className="text-2xl font-bold text-slate-900">Trusted by 800+ Clients</h3>
                <p className="text-slate-500 text-sm mt-2">Delivering excellence to global leaders</p>
            </div>

            <div className="relative w-full flex overflow-hidden group">
                {/* Gradient Masks for smooth fade edges */}
                <div className="absolute top-0 left-0 h-full w-20 bg-gradient-to-r from-emerald-100 to-transparent z-10"></div>
                <div className="absolute top-0 right-0 h-full w-20 bg-gradient-to-l from-emerald-100 to-transparent z-10"></div>

                {/* Sliding Track - Duplicated for seamless loop */}
                <div className="flex animate-marquee whitespace-nowrap gap-12 items-center">
                    {/* First Copy */}
                    {clients.map((client, index) => (
                        <div key={`a-${index}`} className="flex flex-col items-center justify-center min-w-[180px] transition-all duration-300 hover:scale-110 cursor-pointer">
                            <div className="relative w-40 h-20">
                                {/* Using img tag for external URLs to avoid Next.js Image config issues for now, or we can configure domains */}
                                <img
                                    src={client.logo || `https://cdn.brandfetch.io/${client.domain}/w/400/h/400?c=1bfd55d5M`}
                                    alt={client.name}
                                    className="w-full h-full object-contain transition-all duration-300 mix-blend-multiply"
                                    onError={(e) => {
                                        const target = e.currentTarget;
                                        // If local logo fails or wasn't provided, try external
                                        if (client.logo && target.src.includes(client.logo)) {
                                            target.src = `https://cdn.brandfetch.io/${client.domain}/w/400/h/400?c=1bfd55d5M`;
                                        }
                                        // Try Google Favicon as fallback
                                        else if (target.src.includes('brandfetch')) {
                                            target.src = `https://www.google.com/s2/favicons?domain=${client.domain}&sz=128`;
                                        } else {
                                            // If all fail, hide image and show text
                                            target.style.display = 'none';
                                            target.parentElement!.nextElementSibling!.classList.remove('hidden');
                                        }
                                    }}
                                />
                            </div>
                            <span className="hidden text-xs font-bold text-slate-700 mt-2">{client.name}</span>
                        </div>
                    ))}

                    {/* Second Copy (for loop) */}
                    {clients.map((client, index) => (
                        <div key={`b-${index}`} className="flex flex-col items-center justify-center min-w-[180px] transition-all duration-300 hover:scale-110 cursor-pointer">
                            <div className="relative w-40 h-20">
                                <img
                                    src={client.logo || `https://cdn.brandfetch.io/${client.domain}/w/400/h/400?c=1bfd55d5M`}
                                    alt={client.name}
                                    className="w-full h-full object-contain transition-all duration-300 mix-blend-multiply"
                                    onError={(e) => {
                                        const target = e.currentTarget;
                                        // If local logo fails or wasn't provided, try external
                                        if (client.logo && target.src.includes(client.logo)) {
                                            target.src = `https://cdn.brandfetch.io/${client.domain}/w/400/h/400?c=1bfd55d5M`;
                                        }
                                        // Try Google Favicon as fallback
                                        else if (target.src.includes('brandfetch')) {
                                            target.src = `https://www.google.com/s2/favicons?domain=${client.domain}&sz=128`;
                                        } else {
                                            // If all fail, hide image and show text
                                            target.style.display = 'none';
                                            target.parentElement!.nextElementSibling!.classList.remove('hidden');
                                        }
                                    }}
                                />
                            </div>
                            <span className="hidden text-xs font-bold text-slate-700 mt-2">{client.name}</span>
                        </div>
                    ))}
                </div>
            </div>

            <style jsx>{`
                @keyframes marquee {
                    0% { transform: translateX(0); }
                    100% { transform: translateX(-50%); }
                }
                .animate-marquee {
                    animation: marquee 40s linear infinite;
                }
                .group:hover .animate-marquee {
                    animation-play-state: paused;
                }
            `}</style>
        </div>
    );
}
