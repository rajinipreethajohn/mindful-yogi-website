import type { Metadata } from "next";
import Link from "next/link";
import YogicMark from "@/components/YogicMark";

export const metadata: Metadata = {
  title: "Work With Me | Mindful Yogi",
  description:
    "Explore yoga, breathwork, one-to-one guidance, and philosophy sessions with Preetha at Mindful Yogi.",
};

const offerings = [
  {
    number: "01",
    name: "Beginner Yoga Foundations",
    intro:
      "A welcoming start for anyone new to yoga or returning after time away. Build familiarity at an unhurried pace, with room to ask questions and find what feels comfortable.",
    details: [
      "Foundational postures and gentle transitions",
      "Breath awareness and simple ways to practise at home",
    ],
    note: "No previous yoga experience is needed.",
  },
  {
    number: "02",
    name: "Stress Relief & Breathwork",
    intro:
      "A quieter space in a full day. Gentle movement, guided breathing, relaxation, and stillness can help you explore a calmer everyday rhythm.",
    details: [
      "Accessible movement and guided breath practices",
      "Simple moments of relaxation to revisit in daily life",
    ],
    note: "Practices are adapted to your comfort and experience.",
    symbol: "breath",
  },
  {
    number: "03",
    name: "Gentle Back-Care Yoga",
    intro:
      "A considered, low-pressure practice exploring gentle mobility, posture awareness, and relaxation around the back. Movements are invitations, never something to push through.",
    details: [
      "Supported movement within a comfortable range",
      "Breath and body awareness at your own pace",
    ],
    note: "This is general wellbeing practice, not diagnosis or treatment for back pain or injury. Please seek advice from a qualified healthcare professional about health concerns.",
  },
  {
    number: "04",
    name: "Women’s Wellbeing Yoga",
    intro:
      "Supportive movement, breath, and reflection for stress, energy, and body awareness. Sessions make space for your experience without assumptions or a one-size-fits-all approach.",
    details: [
      "Gentle movement and practices for self-awareness",
      "Time to reflect on what feels supportive to you",
    ],
    note: "A complementary wellbeing practice, not treatment for PCOS, hormonal concerns, or any medical condition.",
    symbol: "sprout",
  },
  {
    number: "05",
    name: "Private 1:1 Yoga",
    intro:
      "Personal guidance shaped around your experience and intentions, whether you are building confidence, exploring breath and movement, or finding a regular practice that fits your life.",
    details: [
      "A conversation about your interests before we begin",
      "A session paced and adapted to your needs",
    ],
    note: "Available online or in person, subject to location.",
  },
  {
    number: "06",
    name: "Yoga Philosophy Sessions",
    intro:
      "Thoughtful, accessible conversations about yoga beyond postures, rooted in Indian yogic traditions and connected to the questions of everyday life.",
    details: [
      "Breath, attention, stillness, and the meaning of practice",
      "Ideas explored with curiosity and contemporary context",
    ],
    note: "A reflective session; no prior study is needed.",
  },
] satisfies Array<{
  number: string;
  name: string;
  intro: string;
  details: string[];
  note: string;
  symbol?: "breath" | "sprout";
}>;

export default function ProgrammesPage() {
  return (
    <main className="bg-[#f8f2ea] text-[#2d241d] antialiased">
      <header className="mx-auto max-w-6xl px-5 py-6 sm:px-8 lg:px-10">
        <nav className="flex items-center justify-between gap-4 rounded-full border border-[#d9c3aa] bg-[#fffaf4]/80 px-4 py-3 shadow-[0_10px_24px_rgba(88,61,47,0.05)] backdrop-blur-sm sm:px-6">
          <Link
            href="/"
            className="pr-4 font-serif text-2xl tracking-tight text-[#251d19]"
          >
            Mindful Yogi
          </Link>
          <div className="hidden items-center gap-6 text-sm font-medium text-[#4c3d33] md:flex lg:gap-8">
            <Link
              href="/#about"
              className="px-1 transition hover:text-[#7b4f38]"
            >
              About
            </Link>
            <a
              href="#offerings"
              className="px-1 text-[#7b4f38] transition hover:text-[#4c3d33]"
              aria-current="page"
            >
              Programmes
            </a>
            <Link
              href="/#philosophy"
              className="px-1 transition hover:text-[#7b4f38]"
            >
              Philosophy
            </Link>
          </div>
          <a
            href="mailto:hello@mindfulyogi.com"
            className="rounded-full bg-[#7f5645] px-4 py-2 text-sm font-semibold text-[#fffaf5] transition hover:bg-[#684733]"
          >
            Send an Enquiry
          </a>
        </nav>
      </header>

      <section className="mx-auto max-w-6xl px-5 pb-12 pt-8 sm:px-8 sm:pb-16 lg:px-10 lg:pb-20 lg:pt-12">
        <div className="grid items-end gap-10 lg:grid-cols-[1.2fr_0.8fr]">
          <div>
            <p className="mb-5 flex items-center gap-2 text-xs font-semibold uppercase tracking-[0.25em] text-[#7d5a49]">
              <YogicMark symbol="lotus" className="h-4 w-5 text-[#a87835]" />
              Work with Preetha
            </p>
            <h1 className="max-w-3xl font-serif text-5xl leading-[0.98] text-[#1d1714] sm:text-6xl lg:text-7xl">
              Find a practice that feels like yours.
            </h1>
            <p className="mt-6 max-w-2xl text-lg leading-8 text-[#574739]">
              From a first gentle yoga class to reflective philosophy sessions,
              each offering makes space for steadiness, curiosity, and your own
              pace.
            </p>
          </div>
          <aside className="relative overflow-hidden rounded-[1.5rem] border border-[#d9c3aa] bg-[#efe3d3] p-6 sm:p-7">
            <YogicMark
              symbol="plume"
              className="pointer-events-none absolute -right-1 -top-2 h-20 w-20 text-[#a87835]/25"
            />
            <p className="relative flex items-center gap-2 text-xs font-semibold uppercase tracking-[0.2em] text-[#7d5a49]">
              <YogicMark
                symbol="meditation"
                className="h-4 w-5 text-[#a87835]"
              />
              A thoughtful place to begin
            </p>
            <p className="relative mt-4 max-w-sm font-serif text-2xl leading-snug text-[#2d241d]">
              Movement, breath, and reflection, guided with warmth and care.
            </p>
          </aside>
        </div>
      </section>

      <section
        id="offerings"
        className="border-y border-[#e0cbb4] bg-[#f2e8dc] py-12 sm:py-16 lg:py-20"
      >
        <div className="mx-auto max-w-6xl px-5 sm:px-8 lg:px-10">
          <div className="mb-8 max-w-2xl sm:mb-10">
            <p className="flex items-center gap-2 text-xs font-semibold uppercase tracking-[0.25em] text-[#7d5a49]">
              <YogicMark symbol="breath" className="h-4 w-5 text-[#a87835]" />
              Ways to practise
            </p>
            <h2 className="mt-3 font-serif text-4xl text-[#221b18] sm:text-5xl">
              Six ways to work together.
            </h2>
          </div>

          <div className="grid gap-4 md:grid-cols-2 xl:gap-5">
            {offerings.map((offering) => (
              <article
                key={offering.name}
                className="flex h-full flex-col rounded-[1.25rem] border border-[#dac0a2] bg-[#fffaf5] p-5 shadow-[0_12px_26px_rgba(88,61,47,0.04)] sm:p-7"
              >
                <div className="mb-5 flex items-center justify-between border-b border-[#e6d6c4] pb-3">
                  <span className="text-xs font-semibold uppercase tracking-[0.2em] text-[#a87835]">
                    {offering.number}
                  </span>
                  {offering.symbol ? (
                    <YogicMark
                      symbol={offering.symbol}
                      className="h-5 w-5 text-[#a87835]/80"
                    />
                  ) : null}
                </div>
                <h3 className="font-serif text-2xl leading-tight text-[#261d19] sm:text-3xl">
                  {offering.name}
                </h3>
                <p className="mt-3 text-base leading-7 text-[#55473e]">
                  {offering.intro}
                </p>
                <div className="mt-5">
                  <p className="text-xs font-semibold uppercase tracking-[0.18em] text-[#7d5a49]">
                    We may explore
                  </p>
                  <ul className="mt-3 space-y-2 text-sm leading-6 text-[#51443b]">
                    {offering.details.map((detail) => (
                      <li key={detail} className="flex gap-2">
                        <span aria-hidden="true" className="text-[#a87835]">
                          ·
                        </span>
                        <span>{detail}</span>
                      </li>
                    ))}
                  </ul>
                </div>
                <p className="mt-5 border-t border-[#e6d6c4] pt-4 text-sm leading-6 text-[#725c4d]">
                  {offering.note}
                </p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-6xl px-5 py-12 sm:px-8 sm:py-16 lg:px-10 lg:py-20">
        <div className="flex flex-col gap-6 rounded-[1.5rem] border border-[#d9c3aa] bg-[linear-gradient(135deg,#f5ebdd,#e8d1ae)] p-6 sm:p-9 md:flex-row md:items-center md:justify-between">
          <div className="max-w-2xl">
            <p className="flex items-center gap-2 text-xs font-semibold uppercase tracking-[0.25em] text-[#6d4a39]">
              <YogicMark symbol="diya" className="h-4 w-5 text-[#a87835]" />A
              first conversation
            </p>
            <h2 className="mt-3 font-serif text-3xl text-[#1f1714] sm:text-4xl">
              Wondering where to begin?
            </h2>
            <p className="mt-3 leading-7 text-[#4f4037]">
              Share what you are looking for, and we can find a considered next
              step together.
            </p>
          </div>
          <a
            href="mailto:hello@mindfulyogi.com"
            className="inline-flex shrink-0 items-center justify-center rounded-full bg-[#7f5645] px-6 py-3 text-center font-semibold text-[#fffaf5] transition hover:bg-[#684733]"
          >
            Send an Enquiry
          </a>
        </div>
      </section>

      <footer className="border-t border-[#d9c3aa] bg-[#f5efe8]">
        <div className="mx-auto flex max-w-6xl flex-col gap-4 px-5 py-8 text-sm text-[#4d3f37] sm:px-8 md:flex-row md:items-center md:justify-between lg:px-10">
          <Link href="/" className="font-serif text-2xl text-[#221b18]">
            Mindful Yogi
          </Link>
          <div className="flex flex-wrap gap-6">
            <Link href="/#about" className="hover:text-[#7b4f38]">
              About
            </Link>
            <a href="#offerings" className="hover:text-[#7b4f38]">
              Programmes
            </a>
            <Link href="/#booking" className="hover:text-[#7b4f38]">
              Booking
            </Link>
            <Link href="/#products" className="hover:text-[#7b4f38]">
              Products
            </Link>
          </div>
        </div>
        <div className="border-t border-[#dcc5ad] bg-[#f2eadf]">
          <div className="relative mx-auto max-w-6xl px-5 py-3 sm:px-8 lg:px-10">
            <p className="max-w-5xl text-xs leading-6 text-[#5d473d]">
              Mindful Yogi offers supportive wellbeing practices. They are not
              medical treatment, diagnosis, or a substitute for professional
              care.
            </p>
            <YogicMark
              symbol="lotus"
              className="pointer-events-none absolute right-6 top-1/2 hidden h-8 w-8 -translate-y-1/2 text-[#a87835]/60 sm:block lg:right-10"
            />
          </div>
        </div>
      </footer>
    </main>
  );
}
