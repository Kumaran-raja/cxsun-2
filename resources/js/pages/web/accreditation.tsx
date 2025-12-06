// resources/js/pages/welcome.tsx
import WebLayout from '@/layouts/web-layout';

export default function AccreditationPage() {
    return (
        <WebLayout title="Accreditations">
            {/* Hero Section */}
            <div className="relative flex h-[40vh] sm:h-[50vh] xl:h-[40vh] w-full items-center justify-center">
                {/* Background Image */}
                <img
                    src="/images/home/slider/textile4.jpg"
                    alt="About hero image"
                    className="h-full w-full object-cover"
                />

                {/* Dark Overlay */}
                <div className="absolute inset-0 bg-black/40"></div>

                {/* Text Content */}
                <div className="absolute z-10 text-center text-white">
                    <h1 className="text-whit mb-4 text-4xl md:text-6xl font-bold tracking-tight">
                        Our Accreditations
                    </h1>
                    <p className="mb-6 text-xl text-white">
                        Trusted. Certified. Recognized for excellence.
                    </p>
                </div>
            </div>

            {/* Content Section */}
            <section className="bg-white px-6 py-20 dark:bg-black">
                <div className="mx-auto px-4 lg:px-[10%]">
                    {/* Intro */}
                    <p className="mb-12 text-lg leading-relaxed text-gray-700 dark:text-gray-300">
                        At CODEXSUN, we maintain the highest standards of
                        quality, safety, and professionalism. Our team is
                        trained, licensed, and certified by recognized
                        authorities, ensuring that every project we deliver
                        meets industry‑leading benchmarks. These accreditations
                        demonstrate our commitment to excellence and customer
                        trust.
                    </p>

                    {/* Cards Section */}
                    <div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3">
                        {/* Card 1 */}
                        <div className="rounded-2xl border border-gray-200 bg-white p-8 shadow-lg dark:border-gray-800 dark:bg-gray-900">
                            <h3 className="mb-3 text-xl font-semibold text-gray-900 dark:text-white">
                                Government Licensed
                            </h3>
                            <p className="text-sm leading-relaxed text-gray-600 dark:text-gray-300">
                                Fully authorized and licensed to operate under
                                national and local regulatory standards ensuring
                                safe and compliant service delivery.
                            </p>
                        </div>

                        {/* Card 2 */}
                        <div className="rounded-2xl border border-gray-200 bg-white p-8 shadow-lg dark:border-gray-800 dark:bg-gray-900">
                            <h3 className="mb-3 text-xl font-semibold text-gray-900 dark:text-white">
                                ISO Quality Standards
                            </h3>
                            <p className="text-sm leading-relaxed text-gray-600 dark:text-gray-300">
                                We follow globally recognized ISO procedures for
                                quality, safety, and performance, ensuring
                                consistent excellence.
                            </p>
                        </div>

                        {/* Card 3 */}
                        <div className="rounded-2xl border border-gray-200 bg-white p-8 shadow-lg dark:border-gray-800 dark:bg-gray-900">
                            <h3 className="mb-3 text-xl font-semibold text-gray-900 dark:text-white">
                                Certified Professionals
                            </h3>
                            <p className="text-sm leading-relaxed text-gray-600 dark:text-gray-300">
                                Our team members undergo continual skill
                                development and industry-specific certification
                                programs.
                            </p>
                        </div>

                        {/* Card 4 */}
                        <div className="rounded-2xl border border-gray-200 bg-white p-8 shadow-lg dark:border-gray-800 dark:bg-gray-900">
                            <h3 className="mb-3 text-xl font-semibold text-gray-900 dark:text-white">
                                Industry Memberships
                            </h3>
                            <p className="text-sm leading-relaxed text-gray-600 dark:text-gray-300">
                                Proud member of leading industry associations
                                that maintain and promote ethical service
                                standards.
                            </p>
                        </div>

                        {/* Card 5 */}
                        <div className="rounded-2xl border border-gray-200 bg-white p-8 shadow-lg dark:border-gray-800 dark:bg-gray-900">
                            <h3 className="mb-3 text-xl font-semibold text-gray-900 dark:text-white">
                                Authorized Service Partner
                            </h3>
                            <p className="text-sm leading-relaxed text-gray-600 dark:text-gray-300">
                                Recognized as an approved partner for delivering
                                high‑quality, compliant, and reliable solutions.
                            </p>
                        </div>

                        {/* Card 6 */}
                        <div className="rounded-2xl border border-gray-200 bg-white p-8 shadow-lg dark:border-gray-800 dark:bg-gray-900">
                            <h3 className="mb-3 text-xl font-semibold text-gray-900 dark:text-white">
                                Safety & Compliance
                            </h3>
                            <p className="text-sm leading-relaxed text-gray-600 dark:text-gray-300">
                                Our safety protocols are aligned with government
                                and industry guidelines to ensure full
                                compliance.
                            </p>
                        </div>
                    </div>

                    {/* Certificate Gallery */}
                    <div className="mt-20">
                        <h2 className="mb-6 text-center text-3xl font-bold text-gray-900 dark:text-white">
                            Certificate Gallery
                        </h2>
                        <p className="mb-10 text-center text-gray-600 dark:text-gray-300">
                            Upload your certificate images here to display them
                            professionally.
                        </p>
                        <div className="grid grid-cols-1 gap-6 md:grid-cols-3">
                            <img
                                src="/images/home/slider/textile4.jpg"
                                alt="Certificate 1"
                                className="h-48 w-full rounded-xl border border-gray-200 object-cover dark:border-gray-700"
                            />
                            <img
                                src="/images/home/slider/textile4.jpg"
                                alt="Certificate 2"
                                className="h-48 w-full rounded-xl border border-gray-200 object-cover dark:border-gray-700"
                            />
                            <img
                                src="/images/home/slider/textile4.jpg"
                                alt="Certificate 3"
                                className="h-48 w-full rounded-xl border border-gray-200 object-cover dark:border-gray-700"
                            />
                        </div>
                    </div>
                </div>
            </section>
        </WebLayout>
    );
}
