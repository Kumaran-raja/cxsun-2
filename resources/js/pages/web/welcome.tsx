// resources/js/pages/welcome.tsx
import Accordion from '@/components/Accordion';
import TestimonialsSection from '@/components/blocks/home/TestimonialsSection';
import ProcessCard from '@/components/blocks/process/ProcessCard';
import AlTexSlider from '@/components/blocks/slider/altex';
import Counters from '@/components/blocks/slider/Counters';
import FloatingWhatsApp from '@/components/blocks/slider/FloatingWhatsApp';
import BlogCard from '@/components/blog/blogCard';
import BrandMarquee from '@/components/pvr/BrandMarquee';
import ServiceCard from '@/components/ServiceCard';
import { Button } from '@/components/ui/button';
import { Blogs } from '@/data/blog';
import { serviceData } from '@/data/service';
import WebLayout from '@/layouts/web-layout';
import { Head } from '@inertiajs/react';
import {
    Award,
    ChevronRight,
    Clock,
    Mail,
    MapPin,
    Phone,
    ShieldCheck,
    Truck,
} from 'lucide-react';
// import { BlogPost } from './blogs';

export default function Welcome() {
    const steps = [
        {
            number: '01',
            numberBg: '/images/home/slider/textile1.jpg',
            title: 'Send Your Samples',
            description:
                'Provide the fabric/garment/yarn along with required details (test list, quantity, standard) via our sample submission form.',
        },
        {
            number: '02',
            numberBg: '/images/home/slider/textile2.jpg',
            title: 'Testing & Analysis',
            description:
                'Our team processes your sample under controlled conditions, executes the required tests, and monitors all parameters.',
        },
        {
            number: '03',
            numberBg: '/images/home/slider/textile3.jpg',
            title: 'Report Delivery',
            description:
                'You’ll receive a branded, detailed test report indicating pass/fail, numerical results, photographic evidence (if applicable) and recommendations.',
        },
        {
            number: '04',
            numberBg: '/images/home/slider/textile4.jpg',
            title: 'Consultation & Improvement',
            description:
                'We can help interpret results, highlight improvement areas and plan retesting if required.',
        },
    ];

    const brands = [
        { name: 'H&M' },
        { name: 'ZARA' },
        { name: 'GAP' },
        { name: 'Walmart' },
        { name: 'Target' },
        { name: 'Next' },
        { name: 'M&S' },
        { name: 'Primark' },
        { name: 'Decathlon' },
        { name: "Levi's" },
        { name: 'Adidas' },
        { name: 'Nike' },
    ];
    return (
        <WebLayout title="Welcome">
            <Head>
                <link rel="canonical" href="https://altex.in" />
            </Head>

            <AlTexSlider />
            <div className="bg-background px-4 pb-15 lg:px-[10%]">
                <p className="pt-10 text-center text-3xl font-bold text-foreground">
                    How It Works
                </p>
                <ProcessCard steps={steps} />
            </div>
            {/* WHY Garments brand */}
            <section className="bg-gradient-to-br from-blue-950/95 via-blue-900/80 to-blue-800 py-20">
                <div className="container mx-auto px-6">
                    <h2 className="mb-12 text-center text-4xl font-bold text-primary-foreground">
                        Why Garment Brands Trust ALTEX
                    </h2>
                    <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-4">
                        {[
                            {
                                icon: Clock,
                                title: '3–7 Days Fast Reports',
                                desc: 'Quick turnaround without compromise',
                            },
                            {
                                icon: Award,
                                title: 'ISO 17025 Accredited',
                                desc: 'Globally recognized test results',
                            },
                            {
                                icon: Truck,
                                title: 'Free Sample Pickup',
                                desc: 'Across India & Bangladesh',
                            },
                            {
                                icon: ShieldCheck,
                                title: '2000+ Happy Clients',
                                desc: 'Exporters, Brands & Buying Houses',
                            },
                        ].map((item) => (
                            <div key={item.title} className="text-center">
                                <item.icon className="mx-auto mb-4 h-16 w-16 text-cyan-500" />
                                <h3 className="text-xl font-bold text-primary-foreground">
                                    {item.title}
                                </h3>
                                <p className="mt-2 text-primary-foreground/80">
                                    {item.desc}
                                </p>
                            </div>
                        ))}
                    </div>
                </div>
            </section>
            <div className="bg-background px-4 py-10 md:px-[10%]">
                <h1 className="text-center text-4xl font-bold tracking-wider text-foreground uppercase">
                    Our Services
                </h1>
                <p className="mx-auto mt-4 max-w-2xl pb-10 text-center text-foreground">
                    We provide a range of professional services tailored to meet
                    your exact requirements. Explore our offerings below and
                    discover how we can help your business thrive.
                </p>
                <ServiceCard services={serviceData} />
            </div>
            <div className="bg-gradient-to-r from-blue-950/95 via-blue-900/80 to-blue-900 px-4 py-16 shadow-inner lg:px-[10%]">
                <h3 className="mb-10 text-3xl font-bold text-white">
                    We Partner With
                </h3>

                <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
                    {[
                        'Textile Mills (woven, knit, non-woven)',
                        'Garment Exporters & Brands',
                        'Home Textiles / Furnishings',
                        'Technical Textiles & Industrial Fabric Suppliers',
                        'Apparel Manufacturers (activewear, children’s, uniforms)',
                    ].map((item, i) => (
                        <div
                            key={i}
                            className="rounded-xl border border-orange-200 bg-white/80 p-6 shadow-sm backdrop-blur-sm transition-all duration-300 hover:scale-[1.03] hover:shadow-xl"
                        >
                            <div className="flex items-center gap-3">
                                <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-primary text-xl font-bold text-primary-foreground shadow-sm">
                                    ✓
                                </div>
                                <p className="font-semibold text-gray-700">
                                    {item}
                                </p>
                            </div>
                        </div>
                    ))}
                </div>
            </div>

            <Counters />
            {/* MAJOR TESTS TABLE */}
            <section className="bg-background py-20">
                <div className="container mx-auto px-6">
                    <h2 className="mb-12 text-center text-4xl font-bold">
                        Popular Tests & Turnaround Time
                    </h2>
                    <div className="overflow-x-auto">
                        <table className="w-full border-collapse text-left">
                            <thead>
                                <tr className="bg-muted">
                                    <th className="p-4">Test Name</th>
                                    <th className="p-4 text-center">
                                        Standard
                                    </th>
                                    <th className="p-4 text-center">
                                        Regular (Days)
                                    </th>
                                    <th className="p-4 text-center">
                                        Express (Days)
                                    </th>
                                </tr>
                            </thead>
                            <tbody className="divide-y">
                                {[
                                    [
                                        'Color Fastness to Washing',
                                        'ISO 105 C06',
                                        '5',
                                        '2',
                                    ],
                                    [
                                        'Pilling Resistance',
                                        'ASTM D3512',
                                        '4',
                                        '2',
                                    ],
                                    ['Tear Strength', 'ASTM D1424', '3', '1'],
                                    ['Azo Free Test', 'ISO 14362-1', '7', '3'],
                                    [
                                        'Formaldehyde Content',
                                        'ISO 14184-1',
                                        '5',
                                        '2',
                                    ],
                                ].map((row) => (
                                    <tr
                                        key={row[0]}
                                        className="transition-colors hover:bg-muted/50"
                                    >
                                        <td className="p-4 font-medium">
                                            {row[0]}
                                        </td>
                                        <td className="p-4 text-center text-muted-foreground">
                                            {row[1]}
                                        </td>
                                        <td className="p-4 text-center">
                                            {row[2]}
                                        </td>
                                        <td className="p-4 text-center font-bold text-amber-600">
                                            {row[3]}
                                        </td>
                                    </tr>
                                ))}
                            </tbody>
                        </table>
                    </div>
                </div>
            </section>

            {/* CLIENT LOGOS */}
            <section className="bg-gradient-to-br from-blue-900 to-blue-800 py-10">
                <div className="container mx-auto px-6 text-center">
                    <h2 className="mb-12 text-4xl font-bold text-primary-foreground">
                        Trusted by Leading Brands & Exporters
                    </h2>
                    <div className="py-10">
                        <BrandMarquee
                            type="big-text"
                            text=""
                            brands={brands}
                            speed={30}
                            height={16}
                        />
                    </div>
                </div>
            </section>

            <div className="my-15 p-4 lg:px-[10%]">
                <BlogCard blogs={Blogs} title={'Our Latest News & Blogs'} />
            </div>

            {/* TESTIMONIALS */}
            <TestimonialsSection />

            {/* CTA FORM */}
            <section className="bg-gradient-to-br from-primary to-secondary py-20 text-white">
                <div className="container mx-auto px-6 text-center">
                    <h2 className="mb-6 text-4xl font-bold md:text-5xl">
                        Ready to Test Your Samples?
                    </h2>
                    <p className="mb-10 text-xl">
                        Get Free Pickup + Instant Quote in 2 Hours
                    </p>
                    <div className="mx-auto grid max-w-2xl gap-4 md:grid-cols-2">
                        <input
                            type="text"
                            placeholder="Your Name"
                            className="rounded-lg border border-white px-6 py-4 text-white"
                        />
                        <input
                            type="tel"
                            placeholder="Phone / WhatsApp"
                            className="rounded-lg border border-white px-6 py-4 text-white"
                        />
                        <input
                            type="email"
                            placeholder="Email"
                            className="rounded-lg border border-white px-6 py-4 text-white md:col-span-2"
                        />
                        <Button
                            size="lg"
                            variant="secondary"
                            className="py-6 text-lg text-primary-foreground md:col-span-2"
                        >
                            Get Free Quote Now <ChevronRight className="ml-2" />
                        </Button>
                    </div>
                </div>
            </section>

            {/* CONTACT */}
            <section className="bg-background py-20">
                <div className="container mx-auto px-6">
                    <h2 className="mb-12 text-center text-4xl font-bold">
                        Visit Our Laboratory
                    </h2>
                    <div className="grid gap-8 text-center md:grid-cols-3">
                        <div>
                            <MapPin className="mx-auto mb-4 h-12 w-12 text-cyan-600" />
                            <h3 className="mb-2 text-xl font-bold">Location</h3>
                            <p className="">
                                ALTEX LABS <br />
                                Textile Testing Laboratory
                                <br />
                                20/1 S.A Kathar layout main road,
                                <br />
                                Angeripalayam road ,<br />
                                Tiruppur-641602 Tamilnadu.
                            </p>
                        </div>
                        <div className="flex flex-col">
                            <Phone className="mx-auto mb-4 h-12 w-12 text-cyan-600" />
                            <h3 className="mb-2 text-xl font-bold">
                                Call / WhatsApp
                            </h3>
                            <a
                                href="tel:9566646863"
                                className="text-xl font-bold"
                            >
                                +91 95 66 64 68 63
                            </a>
                            <a
                                href="tel:9566686062"
                                className="text-xl font-bold"
                            >
                                +91 95 66 68 60 62
                            </a>
                        </div>
                        <div>
                            <Mail className="mx-auto mb-4 h-12 w-12 text-cyan-600" />
                            <h3 className="mb-2 text-xl font-bold">Email Us</h3>
                            <p className="text-lg"> info@altexlabs.in</p>
                            <p className="text-lg"> csk@altexlabs.in </p>
                            <p>Sample Submission & Logistics</p>
                            <p className="text-lg"> info@altexlabs.in </p>
                        </div>
                    </div>
                </div>
            </section>
            <div className="bg-gradient-to-r from-primary via-secondary to-secondary px-4 pb-15 lg:px-[10%]">
                <Accordion
                    title="Frequently Asked Questions"
                    type="plus"
                    items={[
                        {
                            question: 'Do you offer free cancellation?',
                            answer: 'Yes, most of our rooms include free cancellation up to 24 hours before check-in. Please check the room policy while booking.',
                        },
                        {
                            question: 'Is breakfast included with the stay?',
                            answer: 'Yes, complimentary breakfast is included with most room packages. You can also upgrade to a premium dining plan.',
                        },
                        {
                            question: 'How do I check room availability?',
                            answer: 'You can check availability instantly on our website by selecting your preferred dates and room type.',
                        },
                        {
                            question: 'What time is check-in and check-out?',
                            answer: 'Check-in starts at 2:00 PM and check-out is until 12:00 PM. Early check-in or late check-out may be available on request.',
                        },
                        {
                            question: 'Do you provide airport transfers?',
                            answer: 'Yes, we offer airport pickup and drop services. You can request this while booking or contact our front desk.',
                        },
                        {
                            question: 'Are payments secure on your website?',
                            answer: 'Absolutely! All online transactions are encrypted and processed securely. We accept UPI, cards, net banking, and wallets.',
                        },
                        {
                            question: 'Can I modify or upgrade my booking?',
                            answer: 'Yes, you can modify your booking or request an upgrade by contacting our reservations team, subject to availability.',
                        },
                        {
                            question:
                                'Do you offer group bookings or event packages?',
                            answer: 'Yes, we provide special rates for group stays, weddings, and corporate events. Please reach out to our events team.',
                        },
                    ]}
                    titleStyle={'text-2xl py-10'}
                />
            </div>
            <FloatingWhatsApp />
        </WebLayout>
    );
}
