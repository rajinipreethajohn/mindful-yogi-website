type ShellAccentProps = {
  className?: string;
};

export default function ShellAccent({ className }: ShellAccentProps) {
  return (
    <svg
      aria-hidden="true"
      className={className ?? "h-16 w-16 text-[#fffdf7]"}
      viewBox="0 0 80 64"
      fill="none"
      focusable="false"
    >
      <path
        d="M13 49C8 40 10 28 18 19 25 11 34 8 41 9c11 1 21 9 26 21 3 7 3 13 0 19-15 7-39 7-54 0Z"
        fill="currentColor"
        fillOpacity=".34"
      />
      <g
        stroke="currentColor"
        strokeOpacity=".82"
        strokeWidth="1.15"
        strokeLinecap="round"
      >
        <path d="M13 49C8 40 10 28 18 19 25 11 34 8 41 9c11 1 21 9 26 21 3 7 3 13 0 19-15 7-39 7-54 0Z" />
        <path d="M18 50c4-13 6-25 8-33m3 35c3-14 5-27 7-42m6 43c0-15 0-29-1-44m7 43c-2-14-4-27-7-41m13 39c-4-12-7-24-11-36m17 32c-6-9-11-19-16-29" />
        <path d="M11 51c15 6 43 6 58 0" />
      </g>
    </svg>
  );
}
