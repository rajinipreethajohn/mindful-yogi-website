import type { Metadata } from "next";
import Link from "next/link";
import YogicMark from "@/components/YogicMark";
import HomeShellAccent from "@/components/HomeShellAccent";
import styles from "../home.module.css";

export const metadata: Metadata = {
  title: "Work With Me | Mindful Yogi",
  description:
    "Explore yoga, breathwork, one-to-one guidance, and philosophy sessions with Preetha at Mindful Yogi.",
};

const offerings = [
  {
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
    name: "Stress Relief & Breathwork",
    intro:
      "A quieter space in a full day. Gentle movement, guided breathing, relaxation, and stillness can help you explore a calmer everyday rhythm.",
    details: [
      "Accessible movement and guided breath practices",
      "Simple moments of relaxation to revisit in daily life",
    ],
    note: "Practices are adapted to your comfort and experience.",
  },
  {
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
    name: "Women’s Wellbeing Yoga",
    intro:
      "Supportive movement, breath, and reflection for stress, energy, and body awareness. Sessions make space for your experience without assumptions or a one-size-fits-all approach.",
    details: [
      "Gentle movement and practices for self-awareness",
      "Time to reflect on what feels supportive to you",
    ],
    note: "A complementary wellbeing practice, not treatment for PCOS, hormonal concerns, or any medical condition.",
  },
  {
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
  name: string;
  intro: string;
  details: string[];
  note: string;
}>;

const listMotifs = ["starfish", "spiral", "fan"] as const;

function MotifBullet({
  index,
  children,
}: {
  index: number;
  children: string;
}) {
  const isLong = children.length > 58;

  return (
    <li className="flex items-start gap-3">
      <span
        aria-hidden="true"
        className={`relative mt-1 shrink-0 ${isLong ? "h-5 w-5" : "h-4 w-4"}`}
      >
        <HomeShellAccent
          kind={listMotifs[index % listMotifs.length]}
          className="inset-0 h-full w-full [&_path]:stroke-[#ad9679] [&_path]:[stroke-opacity:0.8] [&_path]:[stroke-width:2]"
        />
      </span>
      <span>{children}</span>
    </li>
  );
}

function SectionLabel({ children }: { children: string }) {
  return (
    <p className="text-xs font-medium uppercase text-[#827565]">{children}</p>
  );
}

export default function ProgrammesPage() {
  return (
    <main className={`${styles.paper} overflow-hidden bg-[#f5efe2] text-[#2d241d] antialiased [&_*]:tracking-normal`}>
      <header className="mx-auto max-w-6xl px-5 py-7 sm:px-8 lg:px-10">
        <nav className="flex items-center justify-between gap-4 border-b border-[#d8c7b6] pb-5">
          <Link
            href="/"
            className="pr-4 font-serif text-xl text-[#251d19]"
          >
            Mindful Yogi
          </Link>
          <div className="hidden items-center gap-6 text-sm font-medium text-[#4c3d33] md:flex md:gap-8">
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
              href="/#booking"
              className="px-1 transition hover:text-[#7b4f38]"
            >
              Booking
            </Link>
            <Link
              href="/#philosophy"
              className="px-1 transition hover:text-[#7b4f38]"
            >
              Philosophy
            </Link>
            <Link
              href="/#products"
              className="px-1 transition hover:text-[#7b4f38]"
            >
              Products
            </Link>
          </div>
          <a
            href="mailto:hello@mindfulyogi.com"
            className="border border-[#8c6652] bg-[#8c6652] px-4 py-2 text-sm font-semibold text-[#fffaf5] transition hover:bg-[#6f4f40]"
          >
            Send an Enquiry
          </a>
        </nav>
      </header>

      <section className="relative mx-auto max-w-6xl px-5 pb-20 pt-10 sm:px-8 lg:px-10 lg:pb-28 lg:pt-20">
        <HomeShellAccent kind="starfish" className="-left-6 top-14 h-28 w-28 rotate-[-16deg] opacity-35 sm:left-0 sm:h-36 sm:w-36 lg:h-44 lg:w-44" />
        <div className="grid items-end gap-14 lg:grid-cols-[1fr_0.82fr]">
          <div className="relative pt-24 sm:pt-32">
            <p className="mb-8 max-w-md text-xs font-medium uppercase text-[#7b5d49]">
              Work with Preetha
            </p>
            <h1 className="max-w-3xl font-serif text-5xl leading-[0.94] text-[#1d1714] sm:text-6xl lg:text-[5rem]">
              Find a practice that feels <em className="italic">like yours.</em>
            </h1>
            <p className="mt-6 max-w-2xl text-lg leading-8 text-[#574739]">
              From a first gentle yoga class to reflective philosophy sessions,
              each offering makes space for steadiness, curiosity, and your own
              pace.
            </p>
            <div className="mt-8 flex flex-col gap-4 sm:flex-row">
              <a
                href="#offerings"
                className="border border-[#8c6652] bg-[#8c6652] px-6 py-3 text-center font-semibold text-[#fffaf5] transition hover:bg-[#6f4f40]"
              >
                Explore Offerings
              </a>
              <Link
                href="/#booking"
                className="px-2 py-3 text-center font-medium text-[#3d2e27] underline decoration-[#caa98c] underline-offset-8 transition hover:text-[#7b4f38]"
              >
                Book a Session
              </Link>
            </div>
          </div>

          <aside className="relative mx-auto w-full max-w-[28rem] aspect-[4/5] rounded-t-[48%] bg-[#e8e1d2] lg:mr-0">
            <HomeShellAccent kind="spiral" className="left-5 top-[20%] h-10 w-10 rotate-[-18deg] opacity-55" />
            <HomeShellAccent kind="fan" className="bottom-5 right-6 h-10 w-10 rotate-[22deg] opacity-60" />
            <div className="absolute inset-x-0 bottom-0 px-8 pb-10 text-[#5b4d43] sm:px-12 sm:pb-14 lg:px-10">
              <p
                className="text-[10px] font-medium uppercase text-[#7b5d49]"
                style={{ letterSpacing: "0.18em" }}
              >
                Begin gently
              </p>
              <p className="mt-4 max-w-sm font-serif text-3xl leading-snug text-[#2d241d] sm:text-4xl">
                Movement, <em>breath,</em> and reflection.
              </p>
              <p className="mt-5 max-w-sm text-sm leading-6">
                Guided with warmth, care, and space for your own pace.
              </p>
            </div>
          </aside>
        </div>
      </section>

      <section
        id="offerings"
        className="relative border-y border-[#ded6c8] bg-[#ede6d7] py-20 lg:py-28"
      >
        <HomeShellAccent kind="fan" className="-left-5 top-8 h-16 w-16 rotate-[24deg] opacity-75 sm:-left-7 sm:h-20 sm:w-20" />
        <HomeShellAccent kind="starfish" className="-right-3 bottom-10 h-16 w-16 rotate-[32deg] opacity-65 sm:right-8 sm:h-20 sm:w-20" />
        <div className="relative z-10 mx-auto max-w-6xl px-5 sm:px-8 lg:px-10">
          <div className="mb-12 grid gap-8 lg:grid-cols-[0.34fr_0.66fr]">
            <SectionLabel>Ways to practise</SectionLabel>
            <div>
              <h2 className="font-serif text-4xl leading-tight text-[#221b18] sm:text-5xl">
                Six ways to work <em className="italic">together.</em>
              </h2>
              <p className="mt-5 max-w-2xl text-lg leading-8 text-[#574739]">
                Choose the doorway that feels closest to where you are now.
                Each offering can be kept soft, practical, and responsive.
              </p>
            </div>
          </div>

          <div className="grid gap-5 md:grid-cols-2 xl:grid-cols-3">
            {offerings.map((offering, index) => (
              <article
                key={offering.name}
                className="relative flex min-h-[34rem] flex-col border border-[#d9d0bf] bg-[#fcf9f1] p-6 sm:p-7"
              >
                <div className="relative mb-7 h-[15px]">
                  <YogicMark
                    symbol="mandala"
                    className="pointer-events-none absolute -top-2 left-1/2 h-8 w-8 -translate-x-1/2 text-[#a58e73]/70"
                  />
                </div>
                <h3 className="font-serif text-2xl leading-tight text-[#261d19] sm:text-3xl">
                  {offering.name}
                </h3>
                <p className="mt-4 text-base leading-7 text-[#55473e]">
                  {offering.intro}
                </p>
                <div className="mt-6">
                  <p className="text-xs font-medium uppercase text-[#7d5a49]">
                    We may explore
                  </p>
                  <ul className="mt-4 space-y-3 text-sm leading-6 text-[#51443b]">
                    {offering.details.map((detail, detailIndex) => (
                      <MotifBullet
                        key={detail}
                        index={index + detailIndex}
                      >
                        {detail}
                      </MotifBullet>
                    ))}
                  </ul>
                </div>
                <p className="mt-auto border-t border-[#e1d9cc] pt-5 text-sm leading-6 text-[#725c4d]">
                  {offering.note}
                </p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="relative mx-auto max-w-6xl px-5 py-20 sm:px-8 lg:px-10 lg:py-28">
        <HomeShellAccent kind="spiral" className="-left-8 bottom-6 h-20 w-20 rotate-[-28deg] opacity-75 sm:-left-10 sm:h-28 sm:w-28" />
        <div className="grid gap-10 lg:grid-cols-[0.34fr_0.66fr]">
          <SectionLabel>How it works</SectionLabel>
          <div>
            <h2 className="font-serif text-4xl leading-tight text-[#221b18] sm:text-5xl">
              A simple start, then a steady <em className="italic">rhythm.</em>
            </h2>
            <ul className="mt-10 space-y-7">
              {[
                "Tell me what you are looking for and what kind of support feels useful.",
                "We choose a session or package that suits your pace, schedule, and comfort.",
                "You receive a calendar invite, payment details, and a Google Meet link when online.",
              ].map((step, index) => (
                <MotifBullet key={step} index={index}>
                  {step}
                </MotifBullet>
              ))}
            </ul>
          </div>
        </div>
      </section>

      <section className="border-y border-[#d8c7b6] bg-[#fbf6ee] py-16 sm:py-20 lg:py-24">
        <div className="mx-auto max-w-6xl px-5 sm:px-8 lg:px-10">
          <div className="grid gap-12 lg:grid-cols-[1.05fr_0.95fr]">
            <div>
              <SectionLabel>Care note</SectionLabel>
              <h2 className="mt-5 font-serif text-4xl leading-tight text-[#221b18] sm:text-5xl">
                Supportive practice, held with <em className="italic">clear boundaries.</em>
              </h2>
              <p className="mt-5 text-lg leading-8 text-[#56473d]">
                These offerings support steadiness, movement, breath awareness,
                and reflection. They are not medical treatment, diagnosis, or a
                substitute for professional care.
              </p>
            </div>
            <div className="flex flex-col justify-center border-t border-[#ded6c8] py-10 lg:border-l lg:border-t-0 lg:pl-12">
              <YogicMark symbol="mandala" className="mb-8 h-16 w-16 text-[#9b8d72]/35" />
              <p className="font-serif text-3xl italic leading-relaxed text-[#4f413b]">
                Choose what feels steady, spacious, and possible for real life.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="border-b border-[#ded6c8] bg-[#eae2d2]">
        <div className="relative mx-auto max-w-6xl px-5 py-20 sm:px-8 lg:px-10 lg:py-28">
          <HomeShellAccent kind="starfish" className="bottom-3 right-2 h-14 w-14 rotate-[-22deg] sm:right-8 sm:h-16 sm:w-16" />
          <SectionLabel>Begin</SectionLabel>
          <h2 className="mt-4 font-serif text-4xl text-[#1f1714] sm:text-5xl">
            Wondering where to begin?
          </h2>
          <p className="mt-4 max-w-2xl text-lg leading-8 text-[#4f4037]">
            Share what you are looking for, and we can find a considered next
            step together.
          </p>
          <div className="mt-8 flex flex-col gap-4 sm:flex-row">
            <a
              href="mailto:hello@mindfulyogi.com"
              className="border border-[#8c6652] bg-[#8c6652] px-6 py-3 font-semibold text-[#fffaf5] transition hover:bg-[#6f4f40]"
            >
              Send an Enquiry
            </a>
            <Link
              href="/"
              className="px-2 py-3 font-medium text-[#382e2a] underline decoration-[#b68667] underline-offset-8 transition hover:text-[#8f644c]"
            >
              Return home
            </Link>
          </div>
        </div>
      </section>

      <footer className="border-t border-[#d9c3aa] bg-[#f5efe8]">
        <div className="mx-auto flex max-w-6xl flex-col gap-4 px-5 py-8 text-sm text-[#4d3f37] sm:px-8 lg:flex-row lg:items-center lg:justify-between lg:px-10">
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
