'use client';

import { Mail, MapPin, Phone, MessageSquare } from 'lucide-react';
import ScrollReveal from '@/components/ScrollReveal';
import { useState } from 'react';

export default function ContactPage() {
    const [formData, setFormData] = useState({
        name: '',
        phone: '',
        email: '',
        interest: 'AI Strategy & Consulting',
        message: ''
    });

    const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
        setFormData({
            ...formData,
            [e.target.id]: e.target.value
        });
    };

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        const { name, phone, email, interest, message } = formData;

        const whatsappMessage = `*New Service Request*\n\n*Name:* ${name}\n*Phone:* ${phone}\n*Email:* ${email}\n*Interested In:* ${interest}\n\n*Message:* ${message}`;

        const whatsappUrl = `https://wa.me/918500470333?text=${encodeURIComponent(whatsappMessage)}`;

        window.open(whatsappUrl, '_blank');
    };

    return (
        <div className="bg-slate-50 min-h-screen">
            {/* Dark Hero Section */}
            <section className="relative bg-[#020617] pt-32 pb-56 overflow-hidden">
                {/* Animated Background Image */}
                <div
                    className="hero-background"
                    style={{ backgroundImage: 'url(/images/hero-contact.jpg)', backgroundPosition: '60% center' }}
                />

                {/* Gradient Overlay */}
                <div className="hero-overlay"></div>

                {/* Animated Particles */}
                <div className="animated-particles"></div>

                {/* Background Effects */}
                <div className="absolute inset-0 bg-[linear-gradient(to_right,#111827_1px,transparent_1px),linear-gradient(to_bottom,#111827_1px,transparent_1px)] bg-[size:4rem_4rem] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_0%,#000_70%,transparent_100%)] opacity-30 z-[3]"></div>
                <div className="absolute bottom-0 left-1/3 w-96 h-96 bg-teal-500/20 blur-[120px] rounded-full pointer-events-none z-[3]"></div>

                <div className="container mx-auto px-6 relative z-10 text-center hero-content">
                    <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-slate-800/50 border border-teal-500/30 text-teal-400 text-sm font-medium mb-8">
                        <MessageSquare size={14} />
                        Let's Talk
                    </div>
                    <h1 className="text-4xl md:text-6xl font-bold text-white mb-6">Get in Touch</h1>
                    <p className="text-lg text-slate-400 max-w-2xl mx-auto leading-relaxed">
                        Ready to transform your business? Contact us for a free consultancy or simply to say hello.
                    </p>
                </div>
            </section>

            <div className="container mx-auto px-6 -mt-20 relative z-20 pb-20">
                <div className="grid lg:grid-cols-2 gap-0 bg-white rounded-3xl shadow-2xl overflow-hidden border border-slate-200">
                    {/* Contact Info (Dark Side) */}
                    <ScrollReveal direction="left">
                        <div className="bg-[#0f172a] text-white p-12 md:p-16 flex flex-col justify-between relative overflow-hidden h-full">
                            <div className="absolute top-0 right-0 w-64 h-64 bg-emerald-500/10 rounded-full blur-[60px]"></div>

                            <div className="relative z-10">
                                <h2 className="text-3xl font-bold mb-2">Contact Information</h2>
                                <p className="text-slate-400 mb-12">We'd love to hear from you. Our team is always here to chat.</p>

                                <div className="space-y-10">
                                    <div className="flex items-start gap-5 group">
                                        <div className="w-12 h-12 rounded-xl bg-slate-800 flex items-center justify-center text-emerald-400 group-hover:bg-emerald-500 group-hover:text-white transition-all duration-300">
                                            <MapPin size={24} />
                                        </div>
                                        <div>
                                            <h3 className="font-bold text-lg mb-1 text-white">Office Address</h3>
                                            <p className="text-slate-400 leading-relaxed text-sm">
                                                2-56D8b, Siri Towers,<br />
                                                Jai Hindh Colony, Madhapur,<br />
                                                Hyderabad, Telangana 500081
                                            </p>
                                        </div>
                                    </div>

                                    <div className="flex items-center gap-5 group">
                                        <div className="w-12 h-12 rounded-xl bg-slate-800 flex items-center justify-center text-emerald-400 group-hover:bg-emerald-500 group-hover:text-white transition-all duration-300">
                                            <Phone size={24} />
                                        </div>
                                        <div>
                                            <h3 className="font-bold text-lg mb-1 text-white">Phone</h3>
                                            <p className="text-slate-400 text-sm hover:text-emerald-400 transition-colors">+91 85004 70333</p>
                                        </div>
                                    </div>

                                    <div className="flex items-center gap-5 group">
                                        <div className="w-12 h-12 rounded-xl bg-slate-800 flex items-center justify-center text-emerald-400 group-hover:bg-emerald-500 group-hover:text-white transition-all duration-300">
                                            <Mail size={24} />
                                        </div>
                                        <div>
                                            <h3 className="font-bold text-lg mb-1 text-white">Email</h3>
                                            <p className="text-slate-400 text-sm hover:text-emerald-400 transition-colors cursor-pointer">adm.algolift@gmail.com</p>
                                        </div>
                                    </div>
                                </div>
                            </div>

                            <div className="mt-16 pt-8 border-t border-slate-800 relative z-10">
                                <p className="text-slate-500 text-sm flex items-center gap-2">
                                    <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse"></span>
                                    Global Operations Active
                                </p>
                            </div>
                        </div>
                    </ScrollReveal>

                    {/* Form (Light Side) */}
                    <ScrollReveal direction="right" delay={100}>
                        <div className="p-12 md:p-16 flex flex-col justify-center bg-slate-50/50">
                            <h2 className="text-2xl font-bold text-slate-900 mb-8">Request Free Consultancy</h2>
                            <form className="space-y-6" onSubmit={handleSubmit}>
                                <div className="grid md:grid-cols-2 gap-6">
                                    <div>
                                        <label htmlFor="name" className="block text-sm font-semibold text-slate-700 mb-2">Full Name</label>
                                        <input
                                            type="text"
                                            id="name"
                                            value={formData.name}
                                            onChange={handleChange}
                                            required
                                            className="w-full px-5 py-4 rounded-xl bg-white border border-slate-200 focus:border-emerald-500 focus:ring-4 focus:ring-emerald-500/10 outline-none transition-all"
                                        />
                                    </div>
                                    <div>
                                        <label htmlFor="phone" className="block text-sm font-semibold text-slate-700 mb-2">Phone Number</label>
                                        <input
                                            type="tel"
                                            id="phone"
                                            value={formData.phone}
                                            onChange={handleChange}
                                            required
                                            className="w-full px-5 py-4 rounded-xl bg-white border border-slate-200 focus:border-emerald-500 focus:ring-4 focus:ring-emerald-500/10 outline-none transition-all"
                                        />
                                    </div>
                                </div>

                                <div>
                                    <label htmlFor="email" className="block text-sm font-semibold text-slate-700 mb-2">Email Address</label>
                                    <input
                                        type="email"
                                        id="email"
                                        value={formData.email}
                                        onChange={handleChange}
                                        required
                                        className="w-full px-5 py-4 rounded-xl bg-white border border-slate-200 focus:border-emerald-500 focus:ring-4 focus:ring-emerald-500/10 outline-none transition-all"
                                    />
                                </div>

                                <div>
                                    <label htmlFor="interest" className="block text-sm font-semibold text-slate-700 mb-2">Interested Service</label>
                                    <select
                                        id="interest"
                                        value={formData.interest}
                                        onChange={handleChange}
                                        className="w-full px-5 py-4 rounded-xl bg-white border border-slate-200 focus:border-emerald-500 focus:ring-4 focus:ring-emerald-500/10 outline-none transition-all text-slate-600 cursor-pointer"
                                    >
                                        <option>AI Strategy & Consulting</option>
                                        <option>Custom Software Development</option>
                                        <option>Staff Augmentation</option>
                                        <option>Cloud Solutions</option>
                                        <option>Other</option>
                                    </select>
                                </div>

                                <div>
                                    <label htmlFor="message" className="block text-sm font-semibold text-slate-700 mb-2">Message</label>
                                    <textarea
                                        id="message"
                                        rows={4}
                                        value={formData.message}
                                        onChange={handleChange}
                                        required
                                        className="w-full px-5 py-4 rounded-xl bg-white border border-slate-200 focus:border-emerald-500 focus:ring-4 focus:ring-emerald-500/10 outline-none transition-all resize-none"
                                    ></textarea>
                                </div>

                                <button type="submit" className="w-full py-4 bg-emerald-600 text-white font-bold rounded-xl hover:bg-emerald-500 transition-all shadow-lg shadow-emerald-500/25 hover:-translate-y-0.5">
                                    Send Request via WhatsApp
                                </button>
                            </form>
                        </div>
                    </ScrollReveal>
                </div>
            </div>
        </div>
    );
}
