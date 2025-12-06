import 'animate.css';
import React from 'react';
import { useInView } from 'react-intersection-observer';

interface Service {
    heading: string;
    description: string;
}

interface CardItem {
    title: string;
    image: string;
    description?: string;
    services?: Service[];
    animateImage?: string; // e.g. "animate__fadeInRight"
    animateText?: string; // e.g. "animate__fadeInLeft"
}

interface CardShowcaseProps {
    items: CardItem[];
    containerStyle?: string;
}

const CardShowcase: React.FC<CardShowcaseProps> = ({
    items,
    containerStyle = '',
}) => {
    return (
        <div className={`overflow-x-hidden ${containerStyle}`}>
            {items.map((item, index) => {
                // eslint-disable-next-line react-hooks/rules-of-hooks
                const { ref: imageRef, inView: imageInView } = useInView({
                    triggerOnce: true,
                    threshold: 0.2,
                });
                // eslint-disable-next-line react-hooks/rules-of-hooks
                const { ref: textRef, inView: textInView } = useInView({
                    triggerOnce: true,
                    threshold: 0.2,
                });

                // fallback animations if not provided
                const imageAnim =
                    item.animateImage ||
                    (index % 2 === 0
                        ? 'animate__fadeInRight'
                        : 'animate__fadeInLeft');

                const textAnim =
                    item.animateText ||
                    (index % 2 === 0
                        ? 'animate__fadeInLeft'
                        : 'animate__fadeInRight');

                return (
                    <div
                        key={index}
                        className={`mt-10 grid items-center gap-6 md:grid-cols-2 md:gap-10 ${
                            index % 2 === 0 ? 'lg:grid-flow-col-dense' : ''
                        }`}
                    >
                        {/* Image Section */}
                        <div
                            ref={imageRef}
                            style={{ animationDelay: `${index * 0.2}s` }}
                            className={`flex items-center justify-center transition-all duration-700 hover:scale-105 ${
                                imageInView
                                    ? `animate__animated ${imageAnim}`
                                    : 'opacity-0'
                            } ${index % 2 === 0 ? 'lg:order-2' : 'lg:order-1'}`}
                        >
                            <img
                                src={item.image}
                                alt={item.title}
                                className="w-full max-w-md rounded-2xl object-contain"
                                loading="lazy"
                            />
                        </div>

                        {/* Text Section */}
                        <div
                            ref={textRef}
                            style={{ animationDelay: `${index * 0.3}s` }}
                            className={`flex flex-col justify-center gap-5 transition-all duration-700 ${
                                textInView
                                    ? `animate__animated ${textAnim}`
                                    : 'opacity-0'
                            } ${index % 2 === 0 ? 'lg:order-1' : 'lg:order-2'}`}
                        >
                            <h1 className="text-2xl font-bold md:text-3xl">
                                {item.title}
                            </h1>

                            {item.description && (
                                <p className="leading-relaxed text-gray-700">
                                    {item.description}
                                </p>
                            )}

                            {item.services && item.services.length > 0 && (
                                <ul className="flex list-disc flex-col gap-2 pl-5">
                                    {item.services.map((service, i) => (
                                        <li key={i}>
                                            <span className="font-bold">
                                                {service.heading}:
                                            </span>{' '}
                                            {service.description}
                                        </li>
                                    ))}
                                </ul>
                            )}
                        </div>
                    </div>
                );
            })}
        </div>
    );
};

export default CardShowcase;
