export default function BizConsultingAccountingAnimation({
  className = "",
  width = 600,
  height = 400,
}) {
  return (
    <div className={`relative ${className}`} style={{ width, height }}>
      {/* Card background */}
      <div className="absolute inset-0 rounded-3xl shadow-xl bg-gradient-to-br from-orange-50 to-teal-50" />

      {/* Simple, clean SVG */}
      <svg
        viewBox="0 0 600 400"
        className="absolute inset-0 w-full h-full"
        role="img"
        aria-label="Business consulting visualization"
        xmlns="http://www.w3.org/2000/svg"
        preserveAspectRatio="xMidYMid meet"
      >
        <defs>
          <linearGradient id="bgGradient" x1="0" y1="0" x2="1" y2="1">
            <stop offset="0%" stopColor="#FFF5F2" />
            <stop offset="100%" stopColor="#F0FFFC" />
          </linearGradient>
          <filter id="cardShadow">
            <feDropShadow
              dx="0"
              dy="4"
              stdDeviation="8"
              floodColor="#C0C6D0"
              floodOpacity="0.3"
            />
          </filter>
        </defs>

        {/* Main card */}
        <g filter="url(#cardShadow)" transform="translate(50,50)">
          <rect x="0" y="0" width="500" height="300" rx="20" fill="#FFFFFF" />

          {/* KPI Cards Row */}
          <g transform="translate(30,70)">
            {/* תזרים */}
            <rect x="0" y="0" width="140" height="80" rx="12" fill="#F6F9FF" />
            <circle cx="25" cy="40" r="12" fill="#2ED3BD" />
            <text
              x="70"
              y="25"
              textAnchor="middle"
              style={{ fontFamily: "Inter, system-ui", fontSize: 14 }}
              fill="#4B5563"
            >
              תזרים
            </text>
            <text
              x="70"
              y="45"
              textAnchor="middle"
              style={{
                fontFamily: "Inter, system-ui",
                fontSize: 16,
                fontWeight: 700,
              }}
              fill="#111827"
            >
              ₪ 128,400
            </text>

            {/* רווחיות */}
            <rect
              x="160"
              y="0"
              width="140"
              height="80"
              rx="12"
              fill="#FFF7F5"
            />
            <circle cx="185" cy="40" r="12" fill="#FF7E6B" />
            <text
              x="230"
              y="25"
              textAnchor="middle"
              style={{ fontFamily: "Inter, system-ui", fontSize: 14 }}
              fill="#4B5563"
            >
              רווחיות
            </text>
            <text
              x="230"
              y="45"
              textAnchor="middle"
              style={{
                fontFamily: "Inter, system-ui",
                fontSize: 16,
                fontWeight: 700,
              }}
              fill="#111827"
            >
              +18.6%
            </text>

            {/* גבייה */}
            <rect
              x="320"
              y="0"
              width="140"
              height="80"
              rx="12"
              fill="#F6FFFB"
            />
            <circle cx="345" cy="40" r="12" fill="#00A3FF" />
            <text
              x="390"
              y="25"
              textAnchor="middle"
              style={{ fontFamily: "Inter, system-ui", fontSize: 14 }}
              fill="#4B5563"
            >
              גבייה
            </text>
            <text
              x="390"
              y="45"
              textAnchor="middle"
              style={{
                fontFamily: "Inter, system-ui",
                fontSize: 16,
                fontWeight: 700,
              }}
              fill="#111827"
            >
              92% בזמן
            </text>
          </g>

          {/* Chart Area */}
          <g transform="translate(30,170)">
            <rect
              width="440"
              height="100"
              rx="12"
              fill="#FBFBFD"
              stroke="#EEF0F6"
              strokeWidth="1"
            />

            {/* Simple Bar Chart */}
            <rect x="30" y="60" width="30" height="30" fill="#DDE8FF" />
            <rect x="80" y="45" width="30" height="45" fill="#C6F7EB" />
            <rect x="130" y="35" width="30" height="55" fill="#FFDAD3" />
            <rect x="180" y="25" width="30" height="65" fill="#E9E7FF" />
            <rect x="230" y="40" width="30" height="50" fill="#D0F9F0" />
            <rect x="280" y="30" width="30" height="60" fill="#FFE4DE" />
            <rect x="330" y="20" width="30" height="70" fill="#DCE9FF" />

            {/* Growth Line */}
            <polyline
              points="45,75 95,60 145,50 195,40 245,55 295,45 345,35"
              fill="none"
              stroke="#2ED3BD"
              strokeWidth="3"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </g>
        </g>

        {/* Floating Icons */}
        <circle cx="80" cy="80" r="8" fill="#7C3AED" opacity="0.2" />
        <circle cx="520" cy="100" r="6" fill="#2ED3BD" opacity="0.3" />
        <circle cx="60" cy="320" r="5" fill="#FF7E6B" opacity="0.3" />
        <circle cx="540" cy="320" r="7" fill="#00A3FF" opacity="0.2" />
      </svg>
    </div>
  );
}
