import React from "react";
import { useInView } from "react-intersection-observer";

type HeroBannerProps = {
  badgeText: string;
  title: string;
  subtitle: string;
  buttonText?: string;
  buttonLink?: string;
  buttonHandleClick?: () => void;
  bannerStyle?: string;
};

const HeroBanner: React.FC<HeroBannerProps> = ({
  badgeText,
  title,
  subtitle,
  buttonText,
  buttonLink,
  buttonHandleClick,
  bannerStyle = "bg-gradient-to-b from-background to-primary p-10 text-center ",
}) => {
  const [addressref, inView1] = useInView({
    triggerOnce: false,
    threshold: 0.2, 
  });

  return (
    <div
      ref={addressref}
      className={`relative w-full flex justify-center items-center `}
    >
      <div
        className={`w-full rounded-3xl ${bannerStyle} shadow-xl  animate__animated ${inView1 ? "animate__fadeInLeft" : "opacity-0"}`}
      >
        {/* Badge */}
        <div className="flex justify-center">
          <span className="px-5 py-1 mb-6 text-sm font-medium bg-foreground text-background border border-primary rounded-full">
            {badgeText}
          </span>
        </div>

        {/* Title */}
        <h1 className="text-3xl md:text-5xl font-bold text-foreground leading-tight mb-4">
          {title}
        </h1>

        {/* Subtitle */}
        <p className="text-foreground mx-auto mb-8">{subtitle}</p>

        {/* Button */}
        {buttonText && (
          <a
            href={buttonLink}
            onClick={buttonHandleClick}
            className="inline-block bg-background text-foreground font-medium px-6 py-3 rounded-full shadow-md hover:shadow-lg hover:bg-hover transition hover:scale-105 duration-300"
          >
            {buttonText}
          </a>
        )}
      </div>
    </div>
  );
};

export default HeroBanner;
