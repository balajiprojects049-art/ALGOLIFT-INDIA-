import Link from 'next/link';
import { Facebook, Twitter, Linkedin, Instagram, Mail, MapPin, Phone } from 'lucide-react';

export default function Footer() {
    return (
        <footer className="bg-[#020617] text-slate-200 pt-16 pb-8">
            <div className="container mx-auto px-6">
                <div className="grid grid-cols-1 md:grid-cols-4 gap-12">
                    {/* Brand Column */}
                    <div className="space-y-4">
                        <Link href="/" className="text-2xl font-bold tracking-tight text-white">
                            Algo<span className="text-emerald-500">Lift</span> India
                        </Link>
                        <p className="text-slate-400 text-sm leading-relaxed">
                            Hyderabad-based IT services company bridging the gap between education and industry. Real projects, real skills, real careers.
                        </p>
                        <div className="flex space-x-4 pt-2">
                            <a href="#" className="text-slate-400 hover:text-emerald-400 transition-colors"><Linkedin size={20} /></a>
                            <a href="#" className="text-slate-400 hover:text-emerald-400 transition-colors"><Twitter size={20} /></a>
                            <a href="#" className="text-slate-400 hover:text-emerald-400 transition-colors"><Instagram size={20} /></a>
                            <a href="#" className="text-slate-400 hover:text-emerald-400 transition-colors"><Facebook size={20} /></a>
                        </div>
                    </div>

                    {/* Programs */}
                    <div>
                        <h3 className="text-white font-semibold mb-6">Programs</h3>
                        <ul className="space-y-3 text-sm text-slate-400">
                            <li><Link href="/programs/java" className="hover:text-emerald-400 transition-colors">Java Full Stack</Link></li>
                            <li><Link href="/programs/mba" className="hover:text-emerald-400 transition-colors">MBA Operations</Link></li>
                            <li><Link href="/programs/internships" className="hover:text-emerald-400 transition-colors">Corporate Internships</Link></li>
                            <li><Link href="/programs/placements" className="hover:text-emerald-400 transition-colors">Placement Support</Link></li>
                        </ul>
                    </div>

                    {/* Company */}
                    <div>
                        <h3 className="text-white font-semibold mb-6">Company</h3>
                        <ul className="space-y-3 text-sm text-slate-400">
                            <li><Link href="/about" className="hover:text-emerald-400 transition-colors">About Us</Link></li>
                            <li><Link href="/projects" className="hover:text-emerald-400 transition-colors">Live Projects</Link></li>
                            <li><Link href="/jobs" className="hover:text-emerald-400 transition-colors">Careers</Link></li>
                            <li><Link href="/contact" className="hover:text-emerald-400 transition-colors">Contact</Link></li>
                        </ul>
                    </div>

                    {/* Contact */}
                    <div>
                        <h3 className="text-white font-semibold mb-6">Contact Us</h3>
                        <ul className="space-y-4 text-sm text-slate-400">
                            <li className="flex items-start space-x-3">
                                <MapPin size={18} className="mt-0.5 text-emerald-500 shrink-0" />
                                <span>2-56D8b, Siri Towers,<br />Jai Hindh Colony, Madhapur,<br />Hyderabad, Telangana 500081</span>
                            </li>
                            <li className="flex items-center space-x-3">
                                <Phone size={18} className="text-emerald-500 shrink-0" />
                                <span>+91 85004 60333 / 70333</span>
                            </li>
                            <li className="flex items-center space-x-3">
                                <Mail size={18} className="text-emerald-500 shrink-0" />
                                <span>adm.algolift@gmail.com</span>
                            </li>
                        </ul>
                    </div>
                </div>

                <div className="border-t border-slate-800 mt-16 pt-8 text-center text-sm text-slate-500">
                    <p>&copy; {new Date().getFullYear()} AlgoLift India Pvt Ltd. All rights reserved.</p>
                </div>
            </div>
        </footer>
    );
}
