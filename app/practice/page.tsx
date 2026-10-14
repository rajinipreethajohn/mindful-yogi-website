import type { Metadata } from "next";
import Image from "next/image";
import HomeShellAccent from "@/components/HomeShellAccent";
import SiteNav from "@/components/SiteNav";
import YogicMark from "@/components/YogicMark";
import styles from "../home.module.css";

export const metadata: Metadata = {
  title: "Practice | Mindful Yogi",
  description:
    "A future Mindful Yogi practice library for asana, pranayama, meditation, and guided practices.",
};

const practiceAreas = [
  {
    name: "Asanas",
    description:
      "Educational posture pages with Sanskrit, meaning, entry and exit, alignment, modifications, and demonstration video.",
  },
  {
    name: "Pranayama",
    description:
      "Breath practices introduced carefully, with context, pacing, and clear guidance.",
  },
  {
    name: "Meditation",
    description:
      "Simple sitting, attention, and reflection practices for steady everyday use.",
  },
  {
    name: "Guided practices",
    description:
      "Short sequences combining movement, breath, rest, and mindful transitions.",
  },
];

const asanaFields = [
  "Sanskrit name",
  "English name",
  "Meaning / word breakdown",
  "How to enter and exit",
  "Key alignment cues",
  "Common mistakes",
  "Modifications",
  "Short demonstration video",
];

function SectionLabel({ children }: { children: string }) {
  return (
    <p className="text-xs font-medium uppercase text-[#827565]">{children}</p>
  );
}

export default function PracticePage() {
  return (
    <main className={`${styles.paper} overflow-hidden bg-[#f5efe2] text-[#2d241d] antialiased [&_*]:tracking-normal`}>
      <SiteNav active="practice" />

      <section className="relative mx-auto max-w-6xl px-5 pb-20 pt-10 sm:px-8 lg:px-10 lg:pb-28 lg:pt-20">
        <div className="grid items-end gap-14 lg:grid-cols-[1fr_0.82fr]">
          <div className="relative pt-40 sm:pt-48">
            <Image
              src="/mindful-yogi-line-art-downward-facing-dog.svg"
              alt=""
              width={400}
              height={400}
              priority
              aria-hidden="true"
              className="pointer-events-none absolute -left-4 top-0 h-auto w-36 opacity-80 sm:-left-6 sm:w-44 lg:w-48"
            />
            <p className="mb-8 max-w-md text-xs font-medium uppercase text-[#7b5d49]">
              Experiencing yoga
            </p>
            <h1 className="max-w-3xl font-serif text-5xl leading-[0.94] text-[#1d1714] sm:text-6xl lg:text-[5rem]">
              Practice, held with <em className="italic">context.</em>
            </h1>
            <p className="mt-6 max-w-2xl text-lg leading-8 text-[#574739]">
              A clean starting point for future asana, pranayama, meditation,
              and guided-practice resources. This page keeps practice separate
              from philosophy while letting the two stay connected.
            </p>
          </div>

          <aside className="relative mx-auto aspect-[4/5] w-full max-w-[28rem] rounded-t-[48%] bg-[#e8e1d2] lg:mr-0">
            <HomeShellAccent kind="spiral" className="left-5 top-[20%] h-10 w-10 rotate-[-18deg] opacity-55" />
            <HomeShellAccent kind="fan" className="bottom-5 right-6 h-10 w-10 rotate-[22deg] opacity-60" />
            <div className="absolute inset-x-0 bottom-0 px-8 pb-10 text-[#5b4d43] sm:px-12 sm:pb-14 lg:px-10">
              <p className="text-[10px] font-medium uppercase text-[#7b5d49]">
                Coming soon
              </p>
              <p className="mt-4 max-w-sm font-serif text-3xl leading-snug text-[#2d241d] sm:text-4xl">
                Asana, breath, <em>stillness.</em>
              </p>
              <p className="mt-5 max-w-sm text-sm leading-6">
                Future pages will teach the movement and the meaning with equal
                care.
              </p>
            </div>
          </aside>
        </div>
      </section>

      <section className="relative border-y border-[#ded6c8] bg-[#ede6d7] py-20 lg:py-28">
        <HomeShellAccent kind="fan" className="-left-5 top-8 h-16 w-16 rotate-[24deg] opacity-75 sm:-left-7 sm:h-20 sm:w-20" />
        <div className="relative z-10 mx-auto max-w-6xl px-5 sm:px-8 lg:px-10">
          <div className="mb-12 grid gap-8 lg:grid-cols-[0.34fr_0.66fr]">
            <SectionLabel>Reserved sections</SectionLabel>
            <div>
              <h2 className="font-serif text-4xl leading-tight text-[#221b18] sm:text-5xl">
                A quiet library for embodied learning.
              </h2>
              <p className="mt-5 max-w-2xl text-lg leading-8 text-[#574739]">
                This pass keeps the page introductory, with clear spaces for
                the practice areas that will be built out later.
              </p>
            </div>
          </div>

          <div className="grid gap-5 md:grid-cols-2">
            {practiceAreas.map((area) => (
              <article
                key={area.name}
                className="flex min-h-64 flex-col border border-[#d9d0bf] bg-[#fcf9f1] p-6 sm:p-7"
              >
                <div className="relative mb-7 h-[15px]">
                  <YogicMark
                    symbol="mandala"
                    className="pointer-events-none absolute -top-2 left-0 h-8 w-8 text-[#a58e73]/70"
                  />
                </div>
                <h3 className="font-serif text-3xl leading-tight text-[#261d19]">
                  {area.name}
                </h3>
                <p className="mt-4 text-base leading-7 text-[#55473e]">
                  {area.description}
                </p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-6xl px-5 py-16 sm:px-8 lg:px-10 lg:py-24">
        <div className="grid gap-12 lg:grid-cols-[0.34fr_0.66fr]">
          <SectionLabel>Future asana page</SectionLabel>
          <div>
            <h2 className="font-serif text-4xl leading-tight text-[#221b18] sm:text-5xl">
              Each posture page will teach more than a shape.
            </h2>
            <div className="mt-10 grid gap-3 sm:grid-cols-2">
              {asanaFields.map((field) => (
                <div
                  key={field}
                  className="border-t border-[#d8c7b6] py-4 text-sm leading-6 text-[#55473e]"
                >
                  {field}
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
