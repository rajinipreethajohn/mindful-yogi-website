type YogicMarkSymbol =
  | "lotus"
  | "meditation"
  | "diya"
  | "breath"
  | "sprout"
  | "mandala"
  | "plume";

type YogicMarkProps = {
  symbol: YogicMarkSymbol;
  className?: string;
};

const paths: Record<YogicMarkSymbol, string[]> = {
  lotus: [
    "M5 29h30",
    "M7 28c2-6 7-8 13 0",
    "M20 28c-1-8 3-15 8-20 5 5 9 12 8 20",
    "M20 28c4-8 9-6 13 0",
    "M8 32c7 3 17 3 24 0",
    "M20 28v4",
  ],
  meditation: [
    "M20 5a3.5 3.5 0 1 0 0 7 3.5 3.5 0 0 0 0-7Z",
    "M13 19c1-4 4-6 7-6s6 2 7 6",
    "M13 18c-3 2-4 5-4 9m18-9c3 2 4 5 4 9",
    "M16 19v7m8-7v7",
    "M9 27c2 5 6 7 11 7s9-2 11-7c-4-3-8-4-11-4s-7 1-11 4Z",
    "M12 29c3 1 5 3 8 5m8-5c-3 1-5 3-8 5",
  ],
  diya: [
    "M20 5c-5 6-5 11 0 14 5-3 5-8 0-14Z",
    "M20 10c-2 3-2 5 0 7",
    "M8 23c5 3 19 3 24 0l-4 8H12l-4-8Z",
    "M6 34h28",
    "M11 27h18",
  ],
  breath: [
    "M3 16c5 0 5 8 10 8s5-8 10-8 5 8 10 8 5-8 4-8",
    "M3 24c5 0 5 5 10 5s5-5 10-5 5 5 10 5 5-5 4-5",
  ],
  sprout: [
    "M20 33V17",
    "M20 23C9 23 6 17 7 10c8 0 13 4 13 13Z",
    "M20 18C20 9 26 6 34 7c0 7-3 12-14 11Z",
    "M10 34h20",
    "M11 12c3 2 5 5 7 9m13-12c-4 2-7 5-10 9",
  ],
  mandala: [
    "M20 6c3 4 3 7 0 9-3-2-3-5 0-9Z",
    "M20 34c-3-4-3-7 0-9 3 2 3 5 0 9Z",
    "M6 20c4-3 7-3 9 0-2 3-5 3-9 0Z",
    "M34 20c-4 3-7 3-9 0 2-3 5-3 9 0Z",
    "M10 10c5 1 7 3 6 6-3 1-5-1-6-6Z",
    "M30 10c-1 5-3 7-6 6-1-3 1-5 6-6Z",
    "M10 30c1-5 3-7 6-6 1 3-1 5-6 6Z",
    "M30 30c-5-1-7-3-6-6 3-1 5 1 6 6Z",
    "M20 16a4 4 0 1 0 0 8 4 4 0 0 0 0-8Z",
  ],
  plume: [
    "M7 33C16 27 15 15 33 7c-2 13-8 21-20 23",
    "M10 30c6-8 11-13 19-19",
    "M14 26c-1-4-3-6-6-8m10 4c0-4-1-7-4-10m9 6c1-4 1-7 0-10m-5 19c4 0 7 1 9 4m-5-9c4-1 7-1 10 1",
  ],
};

export default function YogicMark({ symbol, className }: YogicMarkProps) {
  return (
    <svg
      aria-hidden="true"
      className={className ?? "h-5 w-5 text-[#a87835]"}
      viewBox="0 0 40 40"
      fill="none"
      focusable="false"
    >
      {paths[symbol].map((path) => (
        <path
          key={path}
          d={path}
          stroke="currentColor"
          strokeWidth="1.1"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      ))}
    </svg>
  );
}
