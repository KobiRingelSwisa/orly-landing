"use client";

import Link from "next/link";
import Image from "next/image";
import { useState } from "react";

const basePath = process.env.NEXT_PUBLIC_BASE_PATH || "";

export function Logo() {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <Link href="/" className="flex items-center gap-3">
      {/* Logo Image without background */}
      <div className="relative">
        <Image
          src={`${basePath}/logo.png`}
          alt="אורלי - יועצת עסקית תודעתית"
          width={96}
          height={96}
          className="h-24 w-auto object-contain"
          style={{
            filter: "brightness(1.2) contrast(1.1) saturate(1.1)",
            transition: "transform 0.3s ease",
            transform: isHovered ? "scale(1.05)" : "scale(1)",
          }}
          onMouseEnter={() => setIsHovered(true)}
          onMouseLeave={() => setIsHovered(false)}
          priority
        />
      </div>
    </Link>
  );
}
