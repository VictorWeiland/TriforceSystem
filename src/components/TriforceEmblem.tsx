import React from "react";

interface TriforceLogoSVGProps {
  className?: string;
  size?: number;
}

export function TriforceEmblem({ className = "", size = 40 }: TriforceLogoSVGProps) {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 120 104"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={className}
    >
      <defs>
        <linearGradient id="goldGradTop" x1="60" y1="4" x2="60" y2="52" gradientUnits="userSpaceOnUse">
          <stop offset="0%" stopColor="#FFF099" />
          <stop offset="45%" stopColor="#F59E0B" />
          <stop offset="100%" stopColor="#B45309" />
        </linearGradient>
        <linearGradient id="goldGradLeft" x1="34" y1="52" x2="34" y2="100" gradientUnits="userSpaceOnUse">
          <stop offset="0%" stopColor="#FDE68A" />
          <stop offset="50%" stopColor="#F59E0B" />
          <stop offset="100%" stopColor="#92400E" />
        </linearGradient>
        <linearGradient id="goldGradRight" x1="86" y1="52" x2="86" y2="100" gradientUnits="userSpaceOnUse">
          <stop offset="0%" stopColor="#FDE68A" />
          <stop offset="50%" stopColor="#D97706" />
          <stop offset="100%" stopColor="#78350F" />
        </linearGradient>
        <filter id="goldGlow" x="-20%" y="-20%" width="140%" height="140%">
          <feGaussianBlur stdDeviation="3" result="blur" />
          <feComposite in="SourceGraphic" in2="blur" operator="over" />
        </filter>
      </defs>

      {/* Top Triangle - Power */}
      <polygon
        points="60,4 32,52 88,52"
        fill="url(#goldGradTop)"
        stroke="#FDE68A"
        strokeWidth="1"
        filter="url(#goldGlow)"
      />
      {/* Inner Bevel Highlights Top */}
      <polygon points="60,4 60,36 88,52" fill="#B45309" fillOpacity="0.35" />
      <polygon points="60,4 32,52 60,36" fill="#FEF08A" fillOpacity="0.25" />

      {/* Bottom Left Triangle - Wisdom */}
      <polygon
        points="32,52 4,100 60,100"
        fill="url(#goldGradLeft)"
        stroke="#FDE68A"
        strokeWidth="1"
      />
      <polygon points="32,52 32,84 60,100" fill="#92400E" fillOpacity="0.35" />
      <polygon points="32,52 4,100 32,84" fill="#FEF08A" fillOpacity="0.25" />

      {/* Bottom Right Triangle - Courage */}
      <polygon
        points="88,52 60,100 116,100"
        fill="url(#goldGradRight)"
        stroke="#FDE68A"
        strokeWidth="1"
      />
      <polygon points="88,52 88,84 116,100" fill="#78350F" fillOpacity="0.35" />
      <polygon points="88,52 60,100 88,84" fill="#FEF08A" fillOpacity="0.25" />
    </svg>
  );
}
