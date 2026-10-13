type AccentKind = "fan" | "spiral" | "starfish";

const shapes: Record<AccentKind, { outline: string; detail: string }> = {
  fan: {
    outline:
      "M36 66C31 61 13 50 10 40C6 32 12 24 18 24C17 16 25 11 32 15C35 6 45 6 49 15C57 10 65 16 64 24C72 23 77 32 71 41C66 51 50 61 44 66C42 70 38 70 36 66Z",
    detail:
      "M38 64L18 25M39 64L32 16M41 64L49 16M43 64L64 25M37 64L11 39M44 64L70 40M36 66Q40 63 44 66",
  },
  spiral: {
    outline:
      "M62 59C50 72 28 73 16 59C3 44 9 22 25 13C40 4 60 9 69 24C78 39 75 51 62 59Z",
    detail:
      "M61 57C71 44 66 27 54 21C42 14 27 20 23 32C18 45 28 57 40 57C51 57 58 48 55 39C53 31 44 28 38 33C32 37 34 45 40 46C44 47 47 44 46 40M18 57Q28 66 40 64",
  },
  starfish: {
    outline:
      "M39 12C42 6 45 13 46 21L49 32C50 35 61 33 69 32C79 31 77 36 69 41L56 49C54 51 60 61 64 68C69 76 63 78 57 72L43 60C40 58 30 67 23 73C16 80 12 75 17 66L25 50C26 47 14 42 7 38C-1 33 4 29 13 32L30 36C33 36 35 24 39 12Z",
    detail:
      "M41 44L42 20M44 45L67 36M44 49L60 69M39 49L21 69M37 45L12 35",
  },
};

export default function HomeShellAccent({
  kind,
  className = "",
}: {
  kind: AccentKind;
  className?: string;
}) {
  const shape = shapes[kind];

  return (
    <svg
      aria-hidden="true"
      focusable="false"
      viewBox="0 0 80 80"
      fill="none"
      className={`pointer-events-none absolute select-none ${className}`}
    >
      <path
        d={shape.outline}
        fill="#fffdf6"
        fillOpacity="0.85"
        stroke="#d7ccba"
        strokeOpacity="0.65"
        strokeWidth="0.6"
        strokeLinejoin="round"
      />
      <path
        d={shape.detail}
        stroke="#d7ccba"
        strokeOpacity="0.6"
        strokeWidth="0.7"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}
