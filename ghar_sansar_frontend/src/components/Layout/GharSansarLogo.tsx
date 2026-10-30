import React from "react";
import { Link } from "react-router-dom";

interface GharSansarLogoProps {
  variant?: "light" | "dark";
  showSubtitle?: boolean;
  className?: string;
}

export const GharSansarIcon: React.FC<{ className?: string; color?: string }> = ({
  className = "w-7 h-7 sm:w-8 sm:h-8 shrink-0",
  color = "#C26847",
}) => (
  <svg
    viewBox="0 0 48 48"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    className={className}
    stroke={color}
    strokeWidth="2.2"
    strokeLinecap="round"
    strokeLinejoin="round"
  >
    {/* Extended pitched roof */}
    <path d="M4 17L24 5L44 17" />
    {/* Inner roof truss */}
    <path d="M10 14L24 5.5L38 14" />
    <line x1="18" y1="19" x2="24" y2="13" strokeWidth="1.8" />
    <line x1="30" y1="19" x2="24" y2="13" strokeWidth="1.8" />
    {/* Horizontal ceiling beam */}
    <line x1="7" y1="19" x2="41" y2="19" />
    {/* House walls */}
    <line x1="11" y1="19" x2="11" y2="41" />
    <line x1="37" y1="19" x2="37" y2="41" />
    {/* Floor base line */}
    <line x1="8" y1="41" x2="40" y2="41" />
    {/* Central doorway */}
    <rect x="18" y="27" width="12" height="14" strokeWidth="1.8" />
    <line x1="24" y1="27" x2="24" y2="41" strokeWidth="1.8" />
    {/* Small inner windows/handles */}
    <circle cx="21" cy="34" r="1" fill={color} stroke="none" />
    <circle cx="27" cy="34" r="1" fill={color} stroke="none" />
  </svg>
);

export const GharSansarLogo: React.FC<GharSansarLogoProps> = ({
  variant = "light",
  showSubtitle = true,
  className = "",
}) => {
  const isLight = variant === "light";

  return (
    <Link
      to="/"
      aria-label="Ghar Sansar Home"
      className={`inline-flex items-center gap-2.5 sm:gap-3 group transition-opacity hover:opacity-95 ${className}`}
    >
      <GharSansarIcon
        className="w-8 h-8 sm:w-9 sm:h-9 shrink-0 transition-transform group-hover:scale-105"
        color="#C26847"
      />
      <div className="flex flex-col text-left">
        <span
          className={`font-serif text-lg sm:text-xl font-bold tracking-[0.16em] leading-tight uppercase transition-colors ${
            isLight ? "text-white" : "text-gray-900"
          }`}
        >
          GHAR SANSAR
        </span>
        {showSubtitle && (
          <span
            className={`text-[8.5px] sm:text-[9.5px] tracking-[0.24em] font-medium uppercase mt-0.5 transition-colors ${
              isLight ? "text-white/75" : "text-gray-600"
            }`}
          >
            HOMES • DÉCOR • LIFESTYLE
          </span>
        )}
      </div>
    </Link>
  );
};

export default GharSansarLogo;

