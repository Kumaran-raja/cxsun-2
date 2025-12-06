import React from "react";
import "animate.css";
import { useInView } from "react-intersection-observer";

type Item = {
  title?: string;
  text: string;
  icon?: React.ReactNode;
  iconImage?: string;
};

type HighlightCardProps = {
  sectionTitle: string;
  items: Item[];
  className: string;
};

export default function HighlightCardWithIcon({
  sectionTitle,
  items,
  className,
}: HighlightCardProps) {
  return (
    <section className="bg-background text-website-foreground overflow-hidden">
      {/* Section Title */}
      <h2 className="text-3xl font-bold text-center pb-8">{sectionTitle}</h2>

      {/* Cards Grid */}
      <div className={`grid ${className} gap-8`}>
        {items.map((item, idx) => {
          // eslint-disable-next-line react-hooks/rules-of-hooks
          const [ref, inView] = useInView({
            triggerOnce: true, // show animation only once
            threshold: 0.3, // show when 30% visible
          });

          return (
            <div
              key={idx}
              ref={ref}
              className={`flex flex-col gap-6 p-6 rounded-lg shadow-md border border-ring/50 transition-all duration-500
                animate__animated ${
                  inView
                    ? "animate__fadeInUp"
                    : "opacity-0 translate-y-5"
                }`}
              style={{
                animationDelay: `${idx * 0.2}s`,
                animationFillMode: "both",
              }}
            >
              {/* Icon Section */}
              <div className="flex justify-start shrink-0">
                {item.icon && (
                  <div className="text-primary text-5xl">{item.icon}</div>
                )}
                {item.iconImage && (
                  <img
                    src={item.iconImage}
                    alt={item.title || "icon"}
                    className="w-12 h-12 object-contain"
                  />
                )}
              </div>

              {/* Content Section */}
              <div>
                {item.title && (
                  <h3 className="text-xl font-bold text-primary mb-2">
                    {item.title}
                  </h3>
                )}
                <p className="text-lg text-gray-700 text-justify">{item.text}</p>
              </div>
            </div>
          );
        })}
      </div>
    </section>
  );
}
