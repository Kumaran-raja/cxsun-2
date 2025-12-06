import { serviceData } from '@/data/service';
import WebLayout from '@/layouts/web-layout';
import { usePage } from '@inertiajs/react';


interface ServicePageProps {
    services: {
        id: string;
        title: string;
        description: string;
        image: string;
        highlights: string[];
        whyChoose: string[];
        whyBest: string[];
        icon: string; // <- FIX HERE
        link: string;
    }[];
    id: string;
    [key: string]: unknown;
}

export default function Service() {
    const { id } = usePage<ServicePageProps>().props;

    const updatedServices = serviceData;


    console.log('hi');
    const activeService =
        updatedServices.find((s) => s.id === id) || updatedServices[0];

    console.log(activeService);
    return (
        <WebLayout title="Service">
            <div className="relative flex h-[40vh] w-full items-center justify-center sm:h-[50vh] xl:h-[40vh]">
                {/* Background Image */}
                <img
                    src={activeService.image}
                    alt={activeService.title}
                    className="h-[40vh] w-full object-cover sm:h-[50vh] xl:h-[40vh]"
                />

                {/* Dark Overlay */}
                <div className="absolute inset-0 bg-black/40"></div>

                {/* Text Content */}
                <div className="absolute z-10 text-center text-white">
                    <h1 className="text-whit mb-4 text-4xl font-bold tracking-tight md:text-6xl">
                        {activeService.title}
                    </h1>
                    <div
                        className="mb-6 text-xl text-gray-200"
                        dangerouslySetInnerHTML={{
                            __html: activeService.description.slice(0, 120),
                        }}
                    />
                </div>
            </div>
            <div className="px-4 pt-5 pb-10 md:px-[10%]">
                <div className="mb-6 flex items-center gap-3">
                    <activeService.icon size={32} />
                    <h1 className="text-4xl font-bold">
                        {activeService.title}
                    </h1>
                </div>

                <div
                    className="prose prose-neutral dark:prose-invert [&>h2]:text-gradient mt-5 max-w-none [&_blockquote]:my-4 [&_blockquote]:border-l-4 [&_blockquote]:border-primary/50 [&_blockquote]:pl-4 [&_blockquote]:text-foreground/70 [&_blockquote]:italic [&_code]:rounded [&_code]:bg-muted [&_code]:px-1.5 [&_code]:py-0.5 [&_code]:font-mono [&_code]:text-sm [&>a]:text-primary [&>a]:underline hover:[&>a]:text-primary/80 [&>h2]:mt-6 [&>h2]:mb-3 [&>h2]:py-2 [&>h2]:text-4xl [&>h2]:font-bold [&>h3]:mt-5 [&>h3]:mb-3 [&>h3]:py-2 [&>h3]:text-2xl [&>h3]:font-semibold [&>h3]:text-foreground/90 [&>h4]:mt-4 [&>h4]:mb-2 [&>h4]:py-2 [&>h4]:text-lg [&>h4]:font-medium [&>h4]:text-foreground/85 [&>img]:my-4 [&>img]:rounded-xl [&>img]:shadow-md [&>li]:mb-1 [&>li]:py-1 [&>li]:text-base [&>li]:leading-relaxed [&>li]:text-foreground/80 [&>p]:mb-4 [&>p]:py-2 [&>p]:text-base [&>p]:leading-relaxed [&>p]:text-foreground/80 [&>strong]:font-semibold [&>strong]:text-foreground [&>ul]:mb-4 [&>ul]:list-disc [&>ul]:py-2 [&>ul]:pl-6"
                    dangerouslySetInnerHTML={{
                        __html: activeService.description,
                    }}
                />

                {/* Highlights */}
                <div className="mb-12">
                    <h2 className="mb-4 text-2xl font-semibold text-primary">
                        Our Expertise
                    </h2>
                    <ul className="list-disc space-y-2 pl-6 text-foreground">
                        {activeService.highlights.map((item, idx) => (
                            <li key={idx}>{item}</li>
                        ))}
                    </ul>
                </div>

                {/* Why Choose Us */}
                <div className="mb-12 rounded-xl bg-background">
                    <h2 className="mb-4 text-2xl font-semibold text-primary">
                        Why Choose Us
                    </h2>
                    <ul className="list-disc space-y-2 pl-6 text-foreground">
                        {activeService.whyChoose.map((item, idx) => (
                            <li key={idx}>{item}</li>
                        ))}
                    </ul>
                </div>

                {/* Why We Are the Best */}
                <div className="mb-12 rounded-xl bg-background">
                    <h2 className="mb-4 text-2xl font-semibold text-primary">
                        What Makes Us the Best
                    </h2>
                    <ul className="list-disc space-y-2 pl-6 text-foreground">
                        {activeService.whyBest.map((item, idx) => (
                            <li key={idx}>{item}</li>
                        ))}
                    </ul>
                </div>
            </div>
        </WebLayout>
    );
}
