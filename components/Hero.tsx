"use client";

import { useSession } from "next-auth/react";

export default function Hero() {
    const { data: session } = useSession();

    return (
        <section className="relative min-h-screen flex items-center justify-center overflow-hidden bg-gradient-to-br from-slate-50 via-white to-emerald-50">
            {/* Animated Background Elements */}
            <div className="absolute inset-0 overflow-hidden">
                <div className="absolute -top-40 -right-40 w-80 h-80 bg-emerald-200/30 rounded-full blur-3xl animate-pulse" />
                <div className="absolute -bottom-40 -left-40 w-96 h-96 bg-teal-200/20 rounded-full blur-3xl animate-pulse" style={{ animationDelay: "2s" }} />
                <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-gradient-to-r from-emerald-100/20 to-teal-100/20 rounded-full blur-3xl" />

                {/* Grid Pattern */}
                <div
                    className="absolute inset-0 opacity-[0.03]"
                    style={{
                        backgroundImage: `linear-gradient(rgba(0,0,0,0.1) 1px, transparent 1px), linear-gradient(90deg, rgba(0,0,0,0.1) 1px, transparent 1px)`,
                        backgroundSize: "60px 60px",
                    }}
                />
            </div>

            <div className="relative z-10 max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center pt-20">
                {/* Welcome Badge */}
                <div className="inline-flex items-center gap-2 px-4 py-2 bg-emerald-50 border border-emerald-200/60 rounded-full mb-8 shadow-sm">
                    <div className="w-2 h-2 bg-emerald-500 rounded-full animate-pulse" />
                    <span className="text-sm font-medium text-emerald-700">
                        {session
                            ? `Welcome back, ${session.user?.name}`
                            : "Secure Authentication Platform"}
                    </span>
                </div>

                {/* Main Heading */}
                <h1 className="text-5xl sm:text-6xl lg:text-7xl font-bold tracking-tight mb-6">
                    <span className="text-slate-800">Build Secure</span>
                    <br />
                    <span className="bg-gradient-to-r from-emerald-500 via-teal-500 to-cyan-500 bg-clip-text text-transparent">
                        Applications
                    </span>
                </h1>

                {/* Description */}
                <p className="text-lg sm:text-xl text-slate-500 max-w-2xl mx-auto mb-10 leading-relaxed">
                    Enterprise-grade authentication with account lockout protection.
                    Keep your users safe with automatic threat detection and
                    intelligent security measures.
                </p>

                {/* Feature Cards */}
                <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 max-w-3xl mx-auto mt-16">
                    <div className="group p-6 bg-white/60 backdrop-blur-sm border border-slate-200/60 rounded-2xl hover:shadow-xl hover:shadow-emerald-500/10 hover:border-emerald-200/60 transition-all duration-300">
                        <div className="w-12 h-12 bg-gradient-to-br from-emerald-400 to-emerald-600 rounded-xl flex items-center justify-center mx-auto mb-4 shadow-lg shadow-emerald-500/25 group-hover:scale-110 transition-transform duration-300">
                            <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z" />
                            </svg>
                        </div>
                        <h3 className="font-semibold text-slate-800 mb-1">Account Lockout</h3>
                        <p className="text-sm text-slate-500">Auto-lock after 3 failed attempts for 1 hour</p>
                    </div>

                    <div className="group p-6 bg-white/60 backdrop-blur-sm border border-slate-200/60 rounded-2xl hover:shadow-xl hover:shadow-teal-500/10 hover:border-teal-200/60 transition-all duration-300">
                        <div className="w-12 h-12 bg-gradient-to-br from-teal-400 to-teal-600 rounded-xl flex items-center justify-center mx-auto mb-4 shadow-lg shadow-teal-500/25 group-hover:scale-110 transition-transform duration-300">
                            <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                            </svg>
                        </div>
                        <h3 className="font-semibold text-slate-800 mb-1">Global Security</h3>
                        <p className="text-sm text-slate-500">Server-side lockout across all browsers</p>
                    </div>

                    <div className="group p-6 bg-white/60 backdrop-blur-sm border border-slate-200/60 rounded-2xl hover:shadow-xl hover:shadow-cyan-500/10 hover:border-cyan-200/60 transition-all duration-300">
                        <div className="w-12 h-12 bg-gradient-to-br from-cyan-400 to-cyan-600 rounded-xl flex items-center justify-center mx-auto mb-4 shadow-lg shadow-cyan-500/25 group-hover:scale-110 transition-transform duration-300">
                            <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                            </svg>
                        </div>
                        <h3 className="font-semibold text-slate-800 mb-1">Fast & Modern</h3>
                        <p className="text-sm text-slate-500">Built with Next.js, React Query & TypeScript</p>
                    </div>
                </div>

                {/* Bottom Gradient Line */}
                <div className="mt-20 mb-8">
                    <div className="h-px w-full max-w-md mx-auto bg-gradient-to-r from-transparent via-emerald-300 to-transparent" />
                </div>
            </div>
        </section>
    );
}
