'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { Menu, X } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';
import { cn } from '@/lib/utils';

export default function Navbar() {
    const [isOpen, setIsOpen] = useState(false);
    const pathname = usePathname();

    // Always use the light/glass theme to support Black "Algo" text
    const textColorClass = 'text-slate-600 hover:text-emerald-600';
    const logoTextClass = 'text-slate-900'; // Always Black Algo
    const navBackgroundClass = 'bg-white/90 backdrop-blur-md border-b border-slate-200 shadow-sm';

    return (
        <nav className={cn('fixed top-0 left-0 right-0 z-50 transition-all duration-300 py-4', navBackgroundClass)}>
            <div className="container mx-auto px-6 flex items-center justify-between">
                {/* Logo */}
                <Link href="/" className="flex items-center gap-2 group">
                    <div className="w-10 h-10 rounded-xl bg-gradient-to-tr from-emerald-600 to-teal-500 flex items-center justify-center text-white font-bold text-xl shadow-lg shadow-emerald-500/20 group-hover:shadow-emerald-500/40 transition-all">
                        A
                    </div>
                    <span className={cn("text-2xl font-bold tracking-tight transition-colors drop-shadow-sm", logoTextClass)}>
                        Algo<span className="text-emerald-500">Lift</span>
                    </span>
                </Link>

                {/* Desktop Navigation */}
                <div className="hidden md:flex items-center space-x-8">
                    {[
                        { name: 'Home', href: '/' },
                        { name: 'About Us', href: '/about' },
                        { name: 'Services', href: '/programs' },
                        { name: 'Projects', href: '/projects' },
                        { name: 'Careers', href: '/jobs' },
                        { name: 'Contact', href: '/contact' },
                    ].map((link) => (
                        <Link
                            key={link.name}
                            href={link.href}
                            className={cn(
                                "text-sm font-medium transition-colors relative group py-1",
                                pathname === link.href ? "text-emerald-500 font-semibold" : textColorClass
                            )}
                        >
                            {link.name}
                            {pathname === link.href && (
                                <span className="absolute -bottom-1 left-0 w-full h-0.5 bg-emerald-500 rounded-full"></span>
                            )}
                            <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-emerald-500 transition-all group-hover:w-full opacity-50"></span>
                        </Link>
                    ))}
                    <Link
                        href="/contact"
                        className="px-6 py-2.5 bg-emerald-600 text-white text-sm font-semibold rounded-full hover:bg-emerald-500 hover:shadow-lg hover:shadow-emerald-500/30 hover:-translate-y-0.5 transition-all"
                    >
                        Get Started
                    </Link>
                </div>

                {/* Mobile Menu Button */}
                <button
                    className="md:hidden p-2 text-slate-900"
                    onClick={() => setIsOpen(!isOpen)}
                >
                    {isOpen ? <X size={24} /> : <Menu size={24} />}
                </button>
            </div>

            {/* Mobile Navigation */}
            <AnimatePresence>
                {isOpen && (
                    <motion.div
                        initial={{ opacity: 0, height: 0 }}
                        animate={{ opacity: 1, height: 'auto' }}
                        exit={{ opacity: 0, height: 0 }}
                        className="md:hidden bg-white border-b border-slate-200 overflow-hidden shadow-xl"
                    >
                        <div className="px-6 py-6 space-y-4 flex flex-col">
                            {[{ name: 'Home', href: '/' }, { name: 'About Us', href: '/about' }, { name: 'Services', href: '/programs' }, { name: 'Projects', href: '/projects' }, { name: 'Careers', href: '/jobs' }, { name: 'Contact', href: '/contact' }].map((link) => (
                                <Link
                                    key={link.name}
                                    href={link.href}
                                    className={cn(
                                        "text-lg font-medium pl-2 border-l-2 transition-all",
                                        pathname === link.href ? "text-emerald-600 border-emerald-500 bg-emerald-50" : "text-slate-600 border-transparent hover:border-emerald-300 hover:bg-slate-50"
                                    )}
                                    onClick={() => setIsOpen(false)}
                                >
                                    {link.name}
                                </Link>
                            ))}
                            <Link
                                href="/contact"
                                className="w-full text-center px-5 py-3 bg-emerald-600 text-white font-semibold rounded-lg hover:bg-emerald-500 transition-all mt-4"
                                onClick={() => setIsOpen(false)}
                            >
                                Get Started
                            </Link>
                        </div>
                    </motion.div>
                )}
            </AnimatePresence>
        </nav>
    );
}
