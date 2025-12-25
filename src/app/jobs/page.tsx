import { Briefcase, MapPin, Clock, Upload, Search } from 'lucide-react';
import { Metadata } from 'next';
import HeroSlideshow from '@/components/HeroSlideshow';
import ScrollReveal from '@/components/ScrollReveal';
import ClientLogoSlideshow from '@/components/ClientLogoSlideshow';

export const metadata: Metadata = {
    title: 'Careers | AlgoLift India',
    description: 'Job openings and internship opportunities at AlgoLift India and our hiring partners.',
};

export default function JobsPage() {
    const jobs = [
        {
            title: 'Java Developer Intern',
            type: 'Internship (6 Months)',
            location: 'Hyderabad (On-site)',
            dept: 'Engineering',
            desc: 'Looking for strong Core Java conceptual knowledge. Training provided on Spring Boot.',
            color: 'emerald'
        },
        {
            title: 'Business Development Executive',
            type: 'Full Time',
            location: 'Hyderabad',
            dept: 'Sales',
            desc: 'MBA Grad with good communication skills using English and Hindi. Responsible for corporate tie-ups.',
            color: 'blue'
        },
        {
            title: 'React Frontend Developer',
            type: 'Full Time (1-2 Yrs Exp)',
            location: 'Remote / Hybrid',
            dept: 'Engineering',
            desc: 'Experience with React, Redux, and Tailwind CSS. Portfolio required.',
            color: 'purple'
        },
        {
            title: 'HR Recruiter Trainee',
            type: 'Internship',
            location: 'Hyderabad',
            dept: 'Human Resources',
            desc: 'Sourcing candidates, screening resumes, and scheduling interviews.',
            color: 'orange'
        }
    ];

    return (
        <div className="min-h-screen bg-slate-50">
            {/* Dark Hero Section */}
            <section className="relative bg-[#020617] pt-32 pb-40 overflow-hidden">
                {/* Animated Background Slideshow */}
                <HeroSlideshow
                    images={[
                        '/images/hero-careers.png',
                        '/images/hero-careers-2.png'
                    ]}
                    interval={7000}
                />

                {/* Gradient Overlay */}
                <div className="hero-overlay"></div>

                {/* Animated Particles */}
                <div className="animated-particles"></div>

                {/* Background Effects */}
                <div className="absolute inset-0 bg-[linear-gradient(to_right,#111827_1px,transparent_1px),linear-gradient(to_bottom,#111827_1px,transparent_1px)] bg-[size:4rem_4rem] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_0%,#000_70%,transparent_100%)] opacity-20 z-[3]"></div>
                <div className="absolute top-0 right-1/3 w-96 h-96 bg-purple-500/20 blur-[120px] rounded-full pointer-events-none z-[3]"></div>

                <div className="container mx-auto px-6 relative z-10 text-center hero-content">
                    <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-slate-800/70 backdrop-blur-sm border border-purple-500/30 text-purple-400 text-sm font-medium mb-8">
                        <Search size={14} />
                        We are Hiring!
                    </div>
                    <h1 className="text-4xl md:text-6xl font-bold text-white mb-6 drop-shadow-2xl">Join Our Team</h1>
                    <p className="text-lg text-slate-300 max-w-2xl mx-auto leading-relaxed drop-shadow-lg">
                        Build your career with AlgoLift India. Join a team that values innovation, growth, and continuous learning.
                    </p>

                    <div className="mt-10 flex justify-center">
                        <a href="#apply" className="px-8 py-4 bg-emerald-600 text-white font-bold rounded-xl hover:bg-emerald-500 transition-all shadow-[0_0_20px_rgba(16,185,129,0.3)] hover:shadow-[0_0_30px_rgba(16,185,129,0.5)] flex items-center gap-2 btn-glow">
                            Upload Your Resume <Upload size={18} />
                        </a>
                    </div>
                </div>
            </section>

            {/* Client Logos Section */}
            <ClientLogoSlideshow />

            <div className="container mx-auto px-6 pt-16 relative z-20 pb-20">
                <div className="grid gap-6">
                    {jobs.map((job, i) => (
                        <ScrollReveal key={i} direction="left" delay={i * 100}>
                            <div className="group bg-white rounded-2xl p-8 shadow-lg hover:shadow-2xl transition-all duration-300 border border-slate-100 flex flex-col md:flex-row justify-between items-start md:items-center gap-6">
                                <div className="flex-1">
                                    <div className={`inline-block px-3 py-1 rounded-full text-xs font-bold uppercase mb-3 bg-${job.color}-100 text-${job.color}-700 border border-${job.color}-200`}>
                                        {job.dept}
                                    </div>
                                    <h3 className="text-2xl font-bold text-slate-900 mb-2 group-hover:text-emerald-700 transition-colors">{job.title}</h3>
                                    <div className="flex flex-wrap gap-6 text-slate-500 text-sm mb-4">
                                        <span className="flex items-center gap-2"><Briefcase size={16} className="text-emerald-500" /> {job.type}</span>
                                        <span className="flex items-center gap-2"><MapPin size={16} className="text-emerald-500" /> {job.location}</span>
                                        <span className="flex items-center gap-2"><Clock size={16} className="text-emerald-500" /> Posted 2 days ago</span>
                                    </div>
                                    <p className="text-slate-600 leading-relaxed max-w-3xl">{job.desc}</p>
                                </div>
                                <button className="whitespace-nowrap px-6 py-3 border-2 border-slate-200 text-slate-700 font-bold rounded-xl hover:bg-emerald-600 hover:text-white hover:border-emerald-600 transition-all">
                                    Apply Now
                                </button>
                            </div>
                        </ScrollReveal>
                    ))}
                </div>

                {/* Application Section */}
                <ScrollReveal direction="up" delay={200}>
                    <div id="apply" className="mt-20 max-w-3xl mx-auto">
                        <div className="relative bg-[#020617] rounded-3xl p-10 md:p-14 text-white overflow-hidden shadow-2xl">
                            {/* Glow Effect */}
                            <div className="absolute top-0 right-0 w-64 h-64 bg-emerald-500/20 rounded-full blur-[80px]"></div>

                            <h2 className="text-3xl font-bold mb-4 relative z-10">General Application</h2>
                            <p className="text-slate-400 mb-8 relative z-10 text-lg">
                                Don't see a role that fits? Submit your resume and we'll contact you for future openings.
                            </p>
                            <form className="space-y-5 relative z-10">
                                <div className="grid md:grid-cols-2 gap-5">
                                    <input type="text" placeholder="Full Name" className="w-full px-5 py-4 rounded-xl bg-slate-800/50 border border-slate-700 text-white placeholder-slate-500 focus:outline-none focus:border-emerald-500 focus:bg-slate-800 transition-all" />
                                    <input type="email" placeholder="Email Address" className="w-full px-5 py-4 rounded-xl bg-slate-800/50 border border-slate-700 text-white placeholder-slate-500 focus:outline-none focus:border-emerald-500 focus:bg-slate-800 transition-all" />
                                </div>
                                <div className="flex flex-col">
                                    <label className="text-sm text-slate-400 mb-3 font-medium">Upload Resume (PDF/Docx)</label>
                                    <input type="file" className="block w-full text-sm text-slate-500
                                file:mr-4 file:py-3 file:px-6
                                file:rounded-xl file:border-0
                                file:text-sm file:font-semibold
                                file:bg-emerald-600 file:text-white
                                hover:file:bg-emerald-500
                                cursor-pointer
                              "/>
                                </div>
                                <button className="w-full py-4 bg-gradient-to-r from-emerald-600 to-teal-600 text-white font-bold rounded-xl hover:shadow-lg hover:shadow-emerald-500/30 hover:-translate-y-1 transition-all mt-4">
                                    Submit Application
                                </button>
                            </form>
                        </div>
                    </div>
                </ScrollReveal>
            </div>
        </div>
    );
}
