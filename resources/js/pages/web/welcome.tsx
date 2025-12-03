// resources/js/pages/welcome.tsx
import WebLayout from '@/layouts/web-layout';
import ServicesSection from '@/components/blocks/home/ServicesSection';
import TestimonialsSection from '@/components/blocks/home/TestimonialsSection';
import { Head } from '@inertiajs/react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Phone, Mail, MapPin, Clock, Award, Beaker, ShieldCheck, Truck, FileText, ChevronRight, Quote } from 'lucide-react';
import AlTexSlider from '@/components/blocks/slider/altex';
import Counters from '@/components/blocks/slider/Counters';
import FloatingWhatsApp from '@/components/blocks/slider/FloatingWhatsApp';

export default function Welcome() {
    return (
        <WebLayout title="Welcome">
            <Head>
                <link rel="canonical" href="https://altex.in" />
            </Head>

            <AlTexSlider />
            <Counters />
            <ServicesSection />
            <FloatingWhatsApp />

            {/* WHY CHOOSE US */}
            <section className="py-20 bg-muted/50">
                <div className="container px-6 mx-auto">
                    <h2 className="text-4xl font-bold text-center mb-12">Why Garment Brands Trust ALTEX</h2>
                    <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
                        {[
                            { icon: Clock, title: "3–7 Days Fast Reports", desc: "Quick turnaround without compromise" },
                            { icon: Award, title: "ISO 17025 Accredited", desc: "Globally recognized test results" },
                            { icon: Truck, title: "Free Sample Pickup", desc: "Across India & Bangladesh" },
                            { icon: ShieldCheck, title: "2000+ Happy Clients", desc: "Exporters, Brands & Buying Houses" }

                        ].map(item => (
                            <div key={item.title} className="text-center">
                                <item.icon className="h-16 w-16 text-cyan-600 mx-auto mb-4" />
                                <h3 className="font-bold text-xl">{item.title}</h3>
                                <p className="text-muted-foreground mt-2">{item.desc}</p>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* MAJOR TESTS TABLE */}
            <section className="py-20 bg-background">
                <div className="container px-6 mx-auto">
                    <h2 className="text-4xl font-bold text-center mb-12">Popular Tests & Turnaround Time</h2>
                    <div className="overflow-x-auto">
                        <table className="w-full text-left border-collapse">
                            <thead>
                            <tr className="bg-muted">
                                <th className="p-4">Test Name</th>
                                <th className="p-4 text-center">Standard</th>
                                <th className="p-4 text-center">Regular (Days)</th>
                                <th className="p-4 text-center">Express (Days)</th>
                            </tr>
                            </thead>
                            <tbody className="divide-y">
                            {[
                                ['Color Fastness to Washing', 'ISO 105 C06', '5', '2'],
                                ['Pilling Resistance', 'ASTM D3512', '4', '2'],
                                ['Tear Strength', 'ASTM D1424', '3', '1'],
                                ['Azo Free Test', 'ISO 14362-1', '7', '3'],
                                ['Formaldehyde Content', 'ISO 14184-1', '5', '2'],
                            ].map(row => (
                                <tr key={row[0]} className="hover:bg-muted/50 transition-colors">
                                    <td className="p-4 font-medium">{row[0]}</td>
                                    <td className="p-4 text-center text-muted-foreground">{row[1]}</td>
                                    <td className="p-4 text-center">{row[2]}</td>
                                    <td className="p-4 text-center font-bold text-amber-600">{row[3]}</td>
                                </tr>
                            ))}
                            </tbody>
                        </table>
                    </div>
                </div>
            </section>

            {/* CLIENT LOGOS */}
            <section className="py-20 bg-muted/50">
                <div className="container px-6 mx-auto text-center">
                    <h2 className="text-4xl font-bold mb-12">Trusted by Leading Brands & Exporters</h2>
                    <div className="grid grid-cols-3 md:grid-cols-6 gap-8 opacity-70 grayscale">
                        {['H&M', 'ZARA', 'GAP', 'Walmart', 'Target', 'Next', 'M&S', 'Primark', 'Decathlon', 'Levi\'s', 'Adidas', 'Nike'].map(brand => (
                            <div key={brand} className="text-3xl font-bold">{brand}</div>
                        ))}
                    </div>
                </div>
            </section>

            {/* TESTIMONIALS */}
            <TestimonialsSection />

            {/* CTA FORM */}
            <section className="py-20 bg-gradient-to-br from-blue-600 to-cyan-600 text-white">
                <div className="container px-6 mx-auto text-center">
                    <h2 className="text-4xl md:text-5xl font-bold mb-6">Ready to Test Your Samples?</h2>
                    <p className="text-xl mb-10">Get Free Pickup + Instant Quote in 2 Hours</p>
                    <div className="max-w-2xl mx-auto grid md:grid-cols-2 gap-4">
                        <input type="text" placeholder="Your Name" className="px-6 py-4 border border-white rounded-lg text-white" />
                        <input type="tel" placeholder="Phone / WhatsApp" className="px-6 py-4 rounded-lg  border border-white text-white" />
                        <input type="email" placeholder="Email" className="px-6 py-4 rounded-lg  border border-white text-white md:col-span-2" />
                        <Button size="lg" variant="secondary" className="md:col-span-2 text-lg py-6">
                            Get Free Quote Now <ChevronRight className="ml-2" />
                        </Button>
                    </div>
                </div>
            </section>


            {/* CONTACT */}
            <section className="py-20 bg-background">
                <div className="container px-6 mx-auto">
                    <h2 className="text-4xl font-bold text-center mb-12">Visit Our Laboratory</h2>
                    <div className="grid md:grid-cols-3 gap-8 text-center">
                        <div>
                            <MapPin className="h-12 w-12 text-cyan-600 mx-auto mb-4" />
                            <h3 className="font-bold text-xl">Location</h3>
                            <p className="text-muted-foreground">123 Textile Zone, Ludhiana, Punjab 141001, India</p>
                        </div>
                        <div>
                            <Phone className="h-12 w-12 text-cyan-600 mx-auto mb-4" />
                            <h3 className="font-bold text-xl">Call / WhatsApp</h3>
                            <p className="text-2xl font-bold">+91 98765 43210</p>
                        </div>
                        <div>
                            <Mail className="h-12 w-12 text-cyan-600 mx-auto mb-4" />
                            <h3 className="font-bold text-xl">Email Us</h3>
                            <p className="text-lg">info@altex.in</p>
                        </div>
                    </div>
                </div>
            </section>
        </WebLayout>
    );
}
