// resources/js/components/ServicesSection.tsx
'use client';

import { motion } from 'framer-motion';
import {
    CheckCircle2,
    Zap,
    ShieldCheck,
    Ruler,
    Flame,
    Ban,
    Droplet,
    TestTube2,
    Dna,
    BadgeCheck,
    FileCheck2,
    Tag
} from 'lucide-react';
import { Link } from '@inertiajs/react';

const services = [
    { icon: CheckCircle2, title: "Color Fastness", desc: "Washing, light, rubbing & perspiration fastness", color: "from-red-500 to-pink-500" },
    { icon: Zap, title: "Fabric Strength", desc: "Tensile, tear & burst strength testing", color: "from-orange-500 to-amber-500" },
    { icon: ShieldCheck, title: "Pilling Resistance", desc: "Martindale & ICI pilling tests", color: "from-blue-500 to-cyan-500" },
    { icon: Ruler, title: "Dimensional Stability", desc: "Shrinkage after washing & dry cleaning", color: "from-green-500 to-emerald-500" },
    { icon: Flame, title: "Flammability Test", desc: "16 CFR 1610, BS 5438 EN 1102 compliance", color: "from-yellow-500 to-orange-500" },
    { icon: Ban, title: "Azo Dye Test", desc: "Restricted azo dyes detection (EN 14362)", color: "from-purple-500 to-pink-600" },
    { icon: Droplet, title: "Formaldehyde", desc: "Free & released formaldehyde content", color: "from-teal-500 to-cyan-600" },
    { icon: TestTube2, title: "pH Value", desc: "Textile pH testing (ISO 3071)", color: "from-indigo-500 to-blue-600" },
    { icon: Dna, title: "Fiber Composition", desc: "Quantitative fiber analysis & labeling", color: "from-rose-500 to-pink-500" },
    { icon: BadgeCheck, title: "OEKO-TEX Testing", desc: "Standard 100 harmful substances screening", color: "from-emerald-500 to-teal-500" },
    { icon: FileCheck2, title: "REACH Compliance", desc: "SVHC testing & Annex XVII compliance", color: "from-violet-500 to-purple-600" },
    { icon: Tag, title: "Care Labeling", desc: "Correct care symbols & instructions verification", color: "from-fuchsia-500 to-pink-600" },
];

export default function ServicesSection() {
    return (
        <section className="py-20 bg-gradient-to-b from-gray-50 to-white dark:from-gray-900 dark:to-gray-800">
            <div className="max-w-7xl mx-auto px-6 lg:px-8">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    className="text-center mb-16"
                >
                    <h2 className="text-4xl md:text-5xl font-bold text-gray-900 dark:text-white mb-4">
                        Textile & Garment Testing Services
                    </h2>
                    <p className="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
                        Accredited laboratory testing ensuring safety, quality, and global compliance for your textiles.
                    </p>
                </motion.div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {services.map((service, i) => (
                        <motion.div
                            key={i}
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: i * 0.1 }}
                            whileHover={{ y: -8, scale: 1.02 }}
                            className="group relative overflow-hidden rounded-2xl bg-white dark:bg-gray-800 shadow-xl hover:shadow-2xl transition-all duration-300"
                        >
                            <div className={`absolute inset-0 bg-gradient-to-br ${service.color} opacity-0 group-hover:opacity-10 transition-opacity`} />
                            <div className="p-8">
                                <div className={`inline-flex p-4 rounded-2xl bg-gradient-to-br ${service.color} text-white mb-6 shadow-lg`}>
                                    <service.icon className="w-10 h-10" />
                                </div>
                                <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-3">
                                    {service.title}
                                </h3>
                                <p className="text-gray-600 dark:text-gray-300 mb-6 leading-relaxed">
                                    {service.desc}
                                </p>
                                <Link
                                    href="/web-contact"
                                    className="inline-flex items-center gap-2 text-[#f53003] font-semibold hover:gap-3 transition-all"
                                >
                                    Get Quote <span className="text-sm">→</span>
                                </Link>
                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
}
