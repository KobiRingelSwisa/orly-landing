"use client";

export function Logo() {
  return (
    <div className="flex items-center gap-3">
      {/* Logo Image without background */}
      <div className="relative">
        <img
          src="/logo.png"
          alt="אורלי - יועצת עסקית תודעתית"
          className="h-24 w-auto object-contain"
          style={{
            filter: "brightness(1.2) contrast(1.1) saturate(1.1)",
            transition: "transform 0.3s ease",
          }}
          onMouseEnter={(e) => {
            e.currentTarget.style.transform = "scale(1.05)";
          }}
          onMouseLeave={(e) => {
            e.currentTarget.style.transform = "scale(1)";
          }}
        />
      </div>
    </div>
  );
}
