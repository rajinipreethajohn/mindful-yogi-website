import type { Metadata } from "next";
import Image from "next/image";
import HomeShellAccent from "@/components/HomeShellAccent";
import SiteNav from "@/components/SiteNav";
import YogicMark from "@/components/YogicMark";
import styles from "../home.module.css";

export const metadata: Metadata = {
  title: "Philosophy | Mindful Yogi",
  description:
    "A structured yoga philosophy learning library with future lessons from Preetha.",
};

const lessons = [
  "What Is Yoga, Really?",
  "Yoga Beyond Asana",
  "Who Was Patanjali?",
  "The Eight Limbs of Yoga",
  "Yama — How We Relate to the World",
  "Niyama — How We Relate to Ourselves",
  "Asana — Why the Body Matters",
  "Pranayama — More Than Breathing",
  "Pratyahara — Turning the Senses Inward",
  "Dharana, Dhyana and Samadhi",
  "Karma and Dharma",
  "Vairagya — Detachment Without Indifference",
  "Aham, Atman and the Nature of Self",
  "Maya — What Does “Illusion” Mean?",
  "Yoga in Everyday Life",
];

const lessonFields = [
  "YouTube embed",
  "Short written summary",
  "Sanskrit term",
  "Transliteration",
  "Word/root breakdown",
  "Reflection question",
];

function SectionLabel({ children }: { children: string }) {
  return (
    <p className="text-xs font-medium uppercase text-[#827565]">{children}</p>
  );
}

export default function PhilosophyPage() {
  return (
    <main
      className={`${styles.paper} overflow-hidden bg-[#f5efe2] text-[#2d241d] antialiased [&_*]:tracking-normal`}
    >
      <SiteNav active="philosophy" />

      <section className="relative mx-auto max-w-6xl px-5 pb-20 pt-10 sm:px-8 lg:px-10 lg:pb-28 lg:pt-20">
        <div className="grid items-end gap-14 lg:grid-cols-[1fr_0.82fr]">
          <div className="relative pt-40 sm:pt-48">
            <Image
              src="/tree.png"
              alt=""
              width={400}
              height={400}
              priority
              aria-hidden="true"
              className="pointer-events-none absolute -left-4 -top-14 h-auto w-36 opacity-80 sm:-left-6 sm:w-44 lg:-top-28 lg:w-48"
            />
            <p className="mb-8 max-w-md text-xs font-medium uppercase text-[#7b5d49]">
              Understanding yoga
            </p>
            <h1 className="max-w-3xl font-serif text-5xl leading-[0.94] text-[#1d1714] sm:text-6xl lg:text-[5rem]">
              Philosophy as a living <em className="italic">library.</em>
            </h1>
            <p className="mt-6 max-w-2xl text-lg leading-8 text-[#574739]">
              A future home for Preetha’s video lessons on yoga philosophy,
              Sanskrit terms, and yogic ideas explained with clarity, cultural
              familiarity, and everyday relevance.
            </p>
          </div>

          <aside className="relative mx-auto aspect-[4/5] w-full max-w-[28rem] rounded-t-[48%] bg-[#e8e1d2] lg:mr-0">
            <HomeShellAccent
              kind="spiral"
              className="left-5 top-[20%] h-10 w-10 rotate-[-18deg] opacity-55"
            />
            <HomeShellAccent
              kind="fan"
              className="bottom-5 right-6 h-10 w-10 rotate-[22deg] opacity-60"
            />
            <div className="absolute inset-x-0 bottom-0 px-8 pb-10 text-[#5b4d43] sm:px-12 sm:pb-14 lg:px-10">
              <p className="text-[10px] font-medium uppercase text-[#7b5d49]">
                Planned lesson format
              </p>
              <p className="mt-4 max-w-sm font-serif text-3xl leading-snug text-[#2d241d] sm:text-4xl">
                Term, meaning, <em>reflection.</em>
              </p>
              <p className="mt-5 max-w-sm text-sm leading-6">
                Each lesson will hold a video, a concise summary, language
                notes, and one question to carry into life.
              </p>
            </div>
          </aside>
        </div>
      </section>

      <section className="relative border-y border-[#ded6c8] bg-[#ede6d7] py-20 lg:py-28">
        <HomeShellAccent
          kind="fan"
          className="-left-5 top-8 h-16 w-16 rotate-[24deg] opacity-75 sm:-left-7 sm:h-20 sm:w-20"
        />
        <div className="relative z-10 mx-auto max-w-6xl px-5 sm:px-8 lg:px-10">
          <div className="mb-12 grid gap-8 lg:grid-cols-[0.34fr_0.66fr]">
            <SectionLabel>Curriculum</SectionLabel>
            <div>
              <h2 className="font-serif text-4xl leading-tight text-[#221b18] sm:text-5xl">
                A sequence for learning yoga beyond asana.
              </h2>
              <p className="mt-5 max-w-2xl text-lg leading-8 text-[#574739]">
                These placeholder cards mark the planned teaching path. They are
                intentionally structured like a learning library rather than a
                simple video grid.
              </p>
            </div>
          </div>

          <div className="grid gap-5 md:grid-cols-2 xl:grid-cols-3">
            {lessons.map((lesson, index) => (
              <article
                key={lesson}
                className="flex min-h-[25rem] flex-col border border-[#d9d0bf] bg-[#fcf9f1] p-6 sm:p-7"
              >
                <div className="mb-6 flex items-start justify-between gap-4">
                  <p className="text-xs font-medium uppercase text-[#7d5a49]">
                    Lesson {String(index + 1).padStart(2, "0")}
                  </p>
                  <YogicMark
                    symbol="mandala"
                    className="h-8 w-8 shrink-0 text-[#a58e73]/70"
                  />
                </div>
                <h3 className="font-serif text-2xl leading-tight text-[#261d19]">
                  {lesson}
                </h3>
                <div className="mt-6 aspect-video border border-dashed border-[#cdbda9] bg-[#f5efe2]" />
                <ul className="mt-6 grid gap-2 text-sm leading-6 text-[#55473e]">
                  {lessonFields.map((field) => (
                    <li key={field} className="border-t border-[#e1d9cc] pt-2">
                      {field}
                    </li>
                  ))}
                </ul>
              </article>
            ))}
          </div>
        </div>
      </section>
    </main>
  );
}
