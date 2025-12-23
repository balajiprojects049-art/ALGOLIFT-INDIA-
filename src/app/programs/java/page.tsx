import Link from 'next/link';
import { Check, Calendar, Users, Trophy, Code } from 'lucide-react';
import { Metadata } from 'next';

export const metadata: Metadata = {
    title: 'Java Full Stack Program | AlgoLift India',
    description: 'Master Java Full Stack development with real-time projects in Hyderabad.',
};

export default function JavaProgramPage() {
    return (
        <div className="bg-slate-50 min-h-screen pb-20">
            {/* Dark Hero Section */}
            <section className="relative bg-[#020617] pt-32 pb-40 overflow-hidden">
                {/* Background Effects */}
                <div className="absolute inset-0 bg-[linear-gradient(to_right,#111827_1px,transparent_1px),linear-gradient(to_bottom,#111827_1px,transparent_1px)] bg-[size:4rem_4rem] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_0%,#000_70%,transparent_100%)] opacity-30"></div>
                <div className="absolute top-0 right-1/4 w-96 h-96 bg-green-500/20 blur-[120px] rounded-full pointer-events-none"></div>

                <div className="container mx-auto px-6 relative z-10">
                    <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-slate-800/50 border border-green-500/30 text-green-400 text-sm font-medium mb-6">
                        <Code size={14} /> Most Popular
                    </div>
                    <h1 className="text-4xl md:text-6xl font-bold text-white mb-6">Java Full Stack Development</h1>
                    <p className="text-xl text-slate-400 max-w-3xl leading-relaxed mb-8">
                        Become a complete software engineer. Master the entire stack from the database to the user interface, and deploy enterprise-grade applications on the cloud.
                    </p>
                    <div className="flex flex-wrap gap-6 text-sm font-medium text-slate-300">
                        <div className="flex items-center gap-2 bg-slate-800/50 px-4 py-2 rounded-lg border border-slate-700/50">
                            <Calendar className="text-green-500" size={18} />
                            <span>Duration: 6 Months</span>
                        </div>
                        <div className="flex items-center gap-2 bg-slate-800/50 px-4 py-2 rounded-lg border border-slate-700/50">
                            <Users className="text-green-500" size={18} />
                            <span>Format: Offline (Hyderabad) / Online</span>
                        </div>
                        <div className="flex items-center gap-2 bg-slate-800/50 px-4 py-2 rounded-lg border border-slate-700/50">
                            <Trophy className="text-green-500" size={18} />
                            <span>Placement Support</span>
                        </div>
                    </div>
                </div>
            </section>

            <div className="container mx-auto px-6 -mt-20 relative z-20 grid lg:grid-cols-3 gap-12">
                {/* Main Content */}
                <div className="lg:col-span-2 space-y-12">
                    <section className="bg-white rounded-2xl p-8 shadow-sm border border-slate-200">
                        <h2 className="text-3xl font-bold text-slate-900 mb-6">Program Overview</h2>
                        <p className="text-slate-600 leading-relaxed mb-4 text-lg">
                            This is not a typical classroom course. It is an industrial training program designed by Senior Architects.
                            You will start coding from Day 1 and move towards building complex, distributed systems.
                        </p>
                        <p className="text-slate-600 leading-relaxed text-lg">
                            We focus on the Spring Ecosystem (Spring Boot, Spring Cloud) and modern Frontend (React),
                            which is the dominant stack in the enterprise world today.
                        </p>
                    </section>

                    <section className="bg-white rounded-2xl p-8 shadow-sm border border-slate-200">
                        <h2 className="text-3xl font-bold text-slate-900 mb-8">What You Will Learn</h2>
                        <div className="grid sm:grid-cols-2 gap-4">
                            {[
                                'Core Java 17+ features',
                                'Advanced Data Structures',
                                'Spring Boot & REST APIs',
                                'Microservices Architecture',
                                'Hibernate / JPA',
                                'React.js & Hooks',
                                'Redux State Management',
                                'SQL & NoSQL Databases',
                                'Docker & Kubernetes',
                                'AWS Cloud Deployment',
                                'Git & CI/CD Pipelines',
                                'System Design Basics'
                            ].map((skill, i) => (
                                <div key={i} className="flex items-center gap-3 p-3 rounded-lg bg-green-50 border border-green-100 hover:border-green-300 transition-colors">
                                    <Check size={18} className="text-green-600" />
                                    <span className="text-slate-700 font-medium">{skill}</span>
                                </div>
                            ))}
                        </div>
                    </section>

                    <section className="bg-white rounded-2xl p-8 shadow-sm border border-slate-200">
                        <h2 className="text-3xl font-bold text-slate-900 mb-6">Career Outcomes</h2>
                        <p className="text-slate-600 mb-6 text-lg">Graduates of this program typically secure roles such as:</p>
                        <ul className="grid sm:grid-cols-2 gap-4">
                            {[
                                "Java Full Stack Developer", "Backend Engineer", "Software Development Engineer (SDE-1)", "Junior Architect"
                            ].map((role, i) => (
                                <li key={i} className="flex items-center gap-2 text-slate-700">
                                    <span className="w-1.5 h-1.5 rounded-full bg-green-500"></span>
                                    {role}
                                </li>
                            ))}
                        </ul>
                    </section>
                </div>

                {/* Sidebar */}
                <div className="block lg:sticky lg:top-24 h-fit">
                    <div className="bg-white border border-slate-200 rounded-2xl p-6 shadow-xl">
                        <h3 className="text-xl font-bold text-slate-900 mb-6">Upcoming Batches</h3>
                        <div className="space-y-4 mb-8">
                            <div className="flex justify-between items-center p-4 bg-slate-50 rounded-xl border border-slate-100 hover:border-green-200 transition-colors">
                                <div>
                                    <div className="font-bold text-slate-900">July 15, 2025</div>
                                    <div className="text-xs text-slate-500 font-medium uppercase mt-1">Weekday Morning</div>
                                </div>
                                <span className="text-xs font-bold text-green-700 bg-green-100 px-3 py-1.5 rounded-full">Open</span>
                            </div>
                            <div className="flex justify-between items-center p-4 bg-slate-50 rounded-xl border border-slate-100 hover:border-orange-200 transition-colors">
                                <div>
                                    <div className="font-bold text-slate-900">Aug 01, 2025</div>
                                    <div className="text-xs text-slate-500 font-medium uppercase mt-1">Weekend Batch</div>
                                </div>
                                <span className="text-xs font-bold text-orange-700 bg-orange-100 px-3 py-1.5 rounded-full">Filling Fast</span>
                            </div>
                        </div>

                        <Link
                            href="/contact"
                            className="block w-full text-center py-4 bg-emerald-600 text-white font-bold rounded-xl hover:bg-emerald-700 transition-all shadow-lg shadow-emerald-200 hover:-translate-y-1 mb-4"
                        >
                            Apply Now
                        </Link>
                        <p className="text-center text-xs text-slate-500">
                            Limited seats. Screening test required.
                        </p>
                    </div>
                </div>
            </div>
        </div>
    );
}
