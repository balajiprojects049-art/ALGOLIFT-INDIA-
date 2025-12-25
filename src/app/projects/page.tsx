import { Code, Server, Database, Cloud, Star } from 'lucide-react';
import { Metadata } from 'next';
import ScrollReveal from '@/components/ScrollReveal';

export const metadata: Metadata = {
    title: 'Live Projects | AlgoLift India',
    description: 'Work on real-time client projects with our development team.',
};

export default function ProjectsPage() {
    const projects = [
        {
            title: 'FinTech Loan Management System',
            client: 'US-based Lending Firm',
            tech: ['Java', 'Spring Boot', 'Microservices', 'React'],
            description: 'A comprehensive loan origination and management system. Handles application processing, credit scoring, and repayment schedules.',
            role: 'Backend Developer Trainee',
            icon: <Server className="text-white" size={28} />,
            bg: 'bg-gradient-to-br from-emerald-500 to-teal-600'
        },
        {
            title: 'E-Commerce Analytics Dashboard',
            client: 'Retail Giant',
            tech: ['React.js', 'Node.js', 'MongoDB', 'AWS'],
            description: 'Real-time dashboard for tracking sales, inventory, and user behavior. Features data visualization and reporting modules.',
            role: 'Full Stack Trainee',
            icon: <Database className="text-white" size={28} />,
            bg: 'bg-gradient-to-br from-blue-500 to-indigo-600'
        },
        {
            title: 'HRMS SaaS Platform',
            client: 'Internal Product',
            tech: ['Java', 'Angular', 'PostgreSQL', 'Docker'],
            description: 'Cloud-native Human Resource Management System including payroll, attendance, and performance appraisal modules.',
            role: 'Frontend / Backend Trainee',
            icon: <Cloud className="text-white" size={28} />,
            bg: 'bg-gradient-to-br from-purple-500 to-pink-600'
        }
    ];

    return (
        <div className="min-h-screen bg-slate-50">
            {/* Dark Hero Section */}
            <section className="relative bg-[#020617] pt-32 pb-56 overflow-hidden">
                {/* Animated Background Image */}
                <div
                    className="hero-background"
                    style={{ backgroundImage: 'url(/images/hero-projects.jpg)' }}
                />

                {/* Gradient Overlay */}
                <div className="hero-overlay"></div>

                {/* Animated Particles */}
                <div className="animated-particles"></div>

                {/* Background Effects */}
                <div className="absolute inset-0 bg-[linear-gradient(to_right,#111827_1px,transparent_1px),linear-gradient(to_bottom,#111827_1px,transparent_1px)] bg-[size:4rem_4rem] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_0%,#000_70%,transparent_100%)] opacity-30 z-[3]"></div>
                <div className="absolute top-0 left-1/4 w-96 h-96 bg-blue-500/20 blur-[120px] rounded-full pointer-events-none z-[3]"></div>

                <div className="container mx-auto px-6 relative z-10 text-center hero-content">
                    <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-slate-800/50 border border-blue-500/30 text-blue-400 text-sm font-medium mb-8">
                        <Star size={14} className="fill-current" />
                        Real-World Experience
                    </div>
                    <h1 className="text-4xl md:text-6xl font-bold text-white mb-6">Live Projects</h1>
                    <p className="text-lg text-slate-400 max-w-2xl mx-auto leading-relaxed">
                        At AlgoLift India, you don't just build "To-Do" apps. You work on large-scale enterprise applications that solve real business problems.
                    </p>
                </div>
            </section>

            <div className="container mx-auto px-6 -mt-16 relative z-20 pb-20">
                <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {projects.map((project, i) => (
                        <ScrollReveal key={i} direction="up" delay={i * 100}>
                            <div className="group relative bg-white rounded-2xl p-8 shadow-xl hover:shadow-2xl transition-all duration-300 border border-slate-100 overflow-hidden">
                                {/* Gradient Border Effect on Hover */}
                                <div className="absolute inset-0 border-2 border-transparent group-hover:border-emerald-500/10 rounded-2xl transition-all pointer-events-none"></div>

                                <div className={`w-14 h-14 rounded-2xl flex items-center justify-center mb-6 shadow-lg ${project.bg} group-hover:scale-110 transition-transform duration-300`}>
                                    {project.icon}
                                </div>

                                <h3 className="text-xl font-bold text-slate-900 mb-2 group-hover:text-emerald-700 transition-colors">{project.title}</h3>
                                <p className="text-xs font-semibold text-emerald-600 uppercase tracking-wider mb-4">{project.client}</p>

                                <p className="text-slate-600 text-sm mb-6 leading-relaxed">
                                    {project.description}
                                </p>

                                <div className="mb-6">
                                    <h4 className="text-xs font-bold text-slate-900 uppercase tracking-wide mb-3">Tech Stack</h4>
                                    <div className="flex flex-wrap gap-2">
                                        {project.tech.map((t, idx) => (
                                            <span key={idx} className="px-3 py-1 bg-slate-50 text-slate-700 text-xs font-medium rounded-full border border-slate-200 group-hover:border-emerald-200 group-hover:bg-emerald-50 group-hover:text-emerald-700 transition-colors">
                                                {t}
                                            </span>
                                        ))}
                                    </div>
                                </div>

                                <div className="pt-6 border-t border-slate-100 flex items-center justify-between">
                                    <div>
                                        <div className="text-xs text-slate-400 font-medium">Your Role</div>
                                        <div className="font-bold text-slate-800 text-sm">{project.role}</div>
                                    </div>
                                    <div className={`w-2 h-2 rounded-full ${project.bg.replace('bg-gradient-to-br', 'bg')}`}></div>
                                </div>
                            </div>
                        </ScrollReveal>
                    ))}
                </div>
            </div>
        </div>
    );
}
