import WebLayout from '@/layouts/web-layout';

function TermsAndConditions() {
    return (
        <WebLayout title="Terms">
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
                        Terms and Conditions
                    </h1>
                    <p className="mb-6 text-xl text-white">
                        Trusted. Certified. Recognized for excellence.
                    </p>
                </div>
            </div>
        </WebLayout>
    );
}

export default TermsAndConditions;
