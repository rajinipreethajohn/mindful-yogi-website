import YogicMark from "@/components/YogicMark";
import HomeShellAccent from "@/components/HomeShellAccent";
import styles from "./home.module.css";

const audiences = [
  "Beginners settling into a steady practice",
  "Busy adults seeking calm routines and grounding",
  "People wanting gentle mobility and breath awareness",
  "Women looking for supportive wellbeing rituals",
  "Parents, educators, and teachers inspired by mindful practice",
];

const programs = [
  {
    name: "Beginner Yoga Foundations",
    description:
      "A welcoming path into posture, breath, and confidence-building for home practice.",
  },
  {
    name: "Stress Relief & Breathwork",
    description:
      "Gentle movement and calming breath practices to help life feel less hurried.",
  },
  {
    name: "Gentle Back-Care Yoga",
    description:
      "Supported movement, posture awareness, and ease for everyday mobility.",
  },
  {
    name: "Women’s Wellbeing Yoga",
    description:
      "Complementary support for stress, energy, and body awareness with care and context.",
  },
  {
    name: "Private 1:1 Yoga",
    description:
      "Personal guidance in breath, confidence, and mindful practice, online or in person.",
  },
  {
    name: "Yoga Philosophy Sessions",
    description:
      "Thoughtful exploration of practice, attention, stillness, and living with awareness.",
  },
];

const bookingSteps = [
  "Choose a session or package",
  "Pick a date and time that works for you",
  "Confirm details and payment",
  "Receive your calendar invite and Google Meet link",
];

const listMotifs = ["starfish", "spiral", "fan"] as const;

const philosophyTopics = [
  "Yoga Beyond Posture",
  "Breath and Attention",
  "What Is Practice?",
  "Stillness in Daily Life",
];

const products = [
  "Mindful Yogi flashcards and reflection prompts",
  "Printable movement and breath cards for daily practice",
  "A gentle starter kit for home practice and self-study",
];

function MotifBullet({
  index,
  size,
}: {
  index: number;
  size: "small" | "medium" | "large";
}) {
  const dimensions = {
    small: "h-4 w-4",
    medium: "h-5 w-5",
    large: "h-7 w-7",
  };

  return (
    <span aria-hidden="true" className={`relative mt-1 shrink-0 ${dimensions[size]}`}>
      <HomeShellAccent
        kind={listMotifs[index % listMotifs.length]}
        className="inset-0 h-full w-full [&_path]:stroke-[#ad9679] [&_path]:[stroke-opacity:0.8] [&_path]:[stroke-width:2]"
      />
    </span>
  );
}

function SectionLabel({
  label,
  className = "",
}: {
  label: string;
  className?: string;
}) {
  return (
    <p
      className={`text-xs font-medium uppercase text-[#827565] ${className}`}
    >
      {label}
    </p>
  );
}

export default function HomePage() {
  return (
    <main className={`${styles.paper} overflow-hidden bg-[#f5efe2] text-[#2d241d] antialiased [&_*]:tracking-normal`}>
      <header className="mx-auto max-w-6xl px-5 py-7 sm:px-8 lg:px-10">
        <nav className="flex items-center justify-between gap-4 border-b border-[#d8c7b6] pb-5">
          <div className="flex items-center gap-4 pr-5">
            <span className="font-serif text-xl text-[#251d19]">
              Mindful Yogi
            </span>
          </div>

          <div className="hidden items-center gap-6 text-sm font-medium text-[#4c3d33] md:flex md:gap-8">
            <a href="#about" className="px-1 transition hover:text-[#7b4f38]">
              About
            </a>
            <a
              href="/programmes"
              className="px-1 transition hover:text-[#7b4f38]"
            >
              Programmes
            </a>
            <a href="#booking" className="px-1 transition hover:text-[#7b4f38]">
              Booking
            </a>
            <a
              href="#philosophy"
              className="px-1 transition hover:text-[#7b4f38]"
            >
              Philosophy
            </a>
            <a
              href="#products"
              className="px-1 transition hover:text-[#7b4f38]"
            >
              Products
            </a>
          </div>

          <a
            href="#booking"
            className="border border-[#8c6652] bg-[#8c6652] px-4 py-2 text-sm font-semibold text-[#fffaf5] transition hover:bg-[#6f4f40]"
          >
            Book a Session
          </a>
        </nav>
      </header>

      <section className="relative mx-auto max-w-6xl px-5 pb-20 pt-10 sm:px-8 lg:px-10 lg:pb-28 lg:pt-20">
        <div className="grid items-end gap-14 lg:grid-cols-[1.14fr_0.86fr]">
          <div className="relative pt-40 sm:pt-48 lg:pt-56">
            <HomeShellAccent kind="starfish" className="-left-6 top-0 h-36 w-36 rotate-[-16deg] opacity-45 sm:-left-10 sm:h-44 sm:w-44 lg:h-52 lg:w-52" />
            <p className="mb-8 max-w-md text-xs font-medium uppercase text-[#7b5d49]">
              Gentle movement, breathwork, and philosophy
            </p>
            <h1 className="max-w-3xl font-serif text-5xl leading-[0.94] text-[#1d1714] sm:text-6xl lg:text-[5rem]">
              Less noise.<br />More <em className="italic">breath.</em>
            </h1>
            <p className="mt-6 max-w-xl text-lg leading-8 text-[#574739]">
              Gentle yoga, breathwork, and philosophy for modern life — helping
              you move with steadiness, find calm, and return to yourself.
            </p>
            <div className="mt-8 flex flex-col gap-4 sm:flex-row">
              <a
                href="#booking"
                className="border border-[#8c6652] bg-[#8c6652] px-6 py-3 text-center font-semibold text-[#fffaf5] transition hover:bg-[#6f4f40]"
              >
                Book a Session
              </a>
              <a
                href="/programmes"
                className="px-2 py-3 text-center font-medium text-[#3d2e27] underline decoration-[#caa98c] underline-offset-8 transition hover:text-[#7b4f38]"
              >
                Explore Programmes
              </a>
            </div>
            <div className="mt-10 flex flex-wrap gap-x-8 gap-y-3 border-t border-[#d8c7b6] pt-5 text-sm text-[#5d473d]">
              <span>Beginner-friendly</span>
              <span>Breath + movement</span>
              <span>Reflective practice</span>
            </div>
          </div>

          <div className="relative aspect-[4/5] rounded-t-[48%] bg-[#e8e1d2]">
            <HomeShellAccent kind="fan" className="left-3 top-[48%] h-8 w-8 rotate-[-28deg] opacity-60 sm:left-5 sm:h-10 sm:w-10" />
            <HomeShellAccent kind="fan" className="bottom-3 right-4 h-8 w-8 rotate-[22deg] opacity-60 sm:bottom-4 sm:right-6 sm:h-10 sm:w-10" />
            <div className="absolute inset-0 flex flex-col items-center justify-between gap-4 px-10 pb-12 pt-[22%] text-center text-sm leading-6 text-[#695c50] sm:px-14 sm:pb-16 lg:px-12 lg:pb-14">
              <p
                className="text-[10px] font-medium uppercase text-[#7b5d49]"
                style={{ letterSpacing: "0.18em" }}
              >
                Daily practice
              </p>
              <p className="font-serif text-4xl leading-tight sm:text-5xl lg:text-4xl">
                Steady<br /><em>breath</em>
              </p>
              <p>Gentle yoga, 4 rounds, 15 minutes</p>
              <p className="max-w-64 text-xs leading-6">
                Grounding, breath awareness, and a steadier rhythm for the day
              </p>
            </div>
          </div>
        </div>
      </section>

      <section
        id="about"
        className="relative mx-auto max-w-6xl border-t border-[#d8c7b6] px-5 py-16 sm:px-8 lg:px-10 lg:py-24"
      >
        <div className="mb-12 grid gap-8 lg:grid-cols-[0.34fr_0.66fr]">
          <SectionLabel label="About" />
          <h2 className="max-w-3xl font-serif text-4xl leading-tight text-[#221b18] sm:text-5xl">
            Supportive, grounded yoga for <em className="italic">real life.</em>
          </h2>
        </div>

        <ul className="grid max-w-4xl gap-x-16 gap-y-7 sm:grid-cols-2">
          {audiences.map((item, index) => (
            <li
              key={item}
              className="flex items-start gap-3"
            >
              <MotifBullet index={index} size="medium" />
              <p className="text-base leading-7 text-[#45392f]">{item}</p>
            </li>
          ))}
        </ul>
      </section>

      <section
        id="programmes"
        className="relative border-y border-[#ded6c8] bg-[#ede6d7] py-20 lg:py-28"
      >
        <HomeShellAccent kind="fan" className="-left-5 top-2 h-16 w-16 rotate-[24deg] opacity-80 sm:-left-7 sm:h-20 sm:w-20" />
        <svg
          aria-hidden="true"
          className="pointer-events-none absolute right-0 top-0 h-52 w-56 text-[#a87835]/12 sm:right-8"
          viewBox="0 0 224 208"
          fill="none"
        >
          <path
            d="M28 208V112a84 84 0 0 1 168 0v96M48 208v-92a64 64 0 0 1 128 0v92M68 208v-88a44 44 0 0 1 88 0v88M91 208v-84a21 21 0 0 1 42 0v84M76 45a36 36 0 0 1 72 0M112 0v12m-48 6 8 8m80-8-8 8m-52-22 4 11m32-11-4 11"
            stroke="currentColor"
            strokeWidth="1"
            strokeLinecap="round"
          />
        </svg>
        <div className="relative z-10 mx-auto max-w-6xl px-5 sm:px-8 lg:px-10">
          <div className="mb-12 grid gap-8 lg:grid-cols-[0.34fr_0.66fr]">
            <SectionLabel label="Practise with me" />
            <div>
              <h2 className="font-serif text-4xl leading-tight text-[#221b18] sm:text-5xl">
                Practice that meets you <em className="italic">where you are.</em>
              </h2>
              <a
                href="#booking"
                className="mt-5 inline-flex text-sm font-semibold text-[#6e4735] underline decoration-[#b78b6f] underline-offset-4"
              >
                Book a discovery call
              </a>
            </div>
          </div>

          <div className="grid gap-5 md:grid-cols-2 xl:grid-cols-3">
            {programs.map((program) => (
              <article
                key={program.name}
                className="relative flex min-h-72 flex-col border border-[#d9d0bf] bg-[#fcf9f1] p-6 sm:p-7"
              >
                <div className="relative mb-7 h-[15px]">
                  <YogicMark
                    symbol="mandala"
                    className="pointer-events-none absolute -top-2 left-0 h-8 w-8 text-[#a58e73]/70"
                  />
                </div>
                <h3 className="font-serif text-2xl text-[#261d19]">
                  {program.name}
                </h3>
                <p className="mt-3 text-base leading-7 text-[#55473e]">
                  {program.description}
                </p>
                <div className="mt-auto pt-7">
                  <a
                    href="/programmes"
                    aria-label={`Explore ${program.name}`}
                    className="block border-t border-[#e1d9cc] pt-4 text-sm text-[#6e4735] underline underline-offset-4 hover:text-[#2d241d]"
                  >
                    Explore practice
                  </a>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="relative mx-auto max-w-6xl px-5 py-20 sm:px-8 lg:px-10 lg:py-28">
        <HomeShellAccent kind="spiral" className="-left-8 bottom-0 h-20 w-20 rotate-[-28deg] opacity-80 sm:-left-10 sm:h-28 sm:w-28" />
        <div className="grid gap-10 lg:grid-cols-[0.42fr_0.58fr]">
          <div>
            <SectionLabel label="Meet Preetha" />
            <div aria-hidden="true" className="mt-8 aspect-[4/5] bg-[#e9e2d4]" />
          </div>

          <div>
            <h2 className="font-serif text-4xl text-[#221b18] sm:text-5xl">
              A calm guide rooted in tradition and spoken in a modern way.
            </h2>
            <p className="mt-5 text-lg leading-8 text-[#56473d]">
              Preetha teaches yoga as a lived practice — one that supports
              steadiness, breath awareness, and a gentler relationship with the
              body and mind. Her approach draws from Indian yogic wisdom while
              remaining practical, approachable, and relevant to modern life.
            </p>
            <p className="mt-4 text-lg leading-8 text-[#56473d]">
              She supports beginners, returning students, and adults seeking
              more ease and focus in daily life, with a style that feels
              supportive, grounded, and deeply human.
            </p>
            <div className="mt-8 border-l border-[#c5a892] pl-5 text-[#433a34]">
              <p className="font-semibold text-[#2d241d]">Teaching style</p>
              <p className="mt-2 leading-7">
                Warm, clear, and encouraging — blending movement, breathwork,
                reflection, and simple practices students can sustain beyond the
                mat.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section
        id="booking"
        className="relative border-y border-[#d8c7b6] bg-[#fbf6ee] py-16 sm:py-20 lg:py-24"
      >
        <HomeShellAccent kind="starfish" className="-right-3 bottom-1 h-14 w-14 rotate-[32deg] opacity-75 sm:right-6 sm:bottom-2 sm:h-20 sm:w-20" />
        <div className="mx-auto max-w-6xl px-5 sm:px-8 lg:px-10">
          <div className="mb-12 grid gap-8 lg:grid-cols-[0.34fr_0.66fr]">
            <SectionLabel label="Booking" />
            <h2 className="font-serif text-4xl leading-tight text-[#221b18] sm:text-5xl">
              Simple steps from first enquiry to your session.
            </h2>
          </div>

          <ol className="max-w-2xl space-y-8 lg:ml-[34%]">
            {bookingSteps.map((step, index) => (
              <li
                key={step}
                className="flex items-start gap-3"
              >
                <MotifBullet index={index} size="large" />
                <p className="font-serif text-2xl leading-relaxed text-[#45392f]">{step}</p>
              </li>
            ))}
          </ol>
        </div>
      </section>

      <section
        id="philosophy"
        className="mx-auto max-w-6xl px-5 py-16 sm:px-8 lg:px-10 lg:py-24"
      >
        <div className="grid gap-12 lg:grid-cols-[1.05fr_0.95fr]">
          <div>
            <SectionLabel label="Philosophy" />
            <h2 className="mt-5 font-serif text-4xl leading-tight text-[#221b18] sm:text-5xl">
              Practice beyond the mat, into everyday life.
            </h2>
            <p className="mt-5 text-lg leading-8 text-[#56473d]">
              Thoughtful reflection, gentle inquiry, and accessible teachings on
              breath, attention, stillness, and the deeper meaning of practice.
            </p>
            <ul className="mt-6 space-y-3 text-base text-[#473d38]">
              {philosophyTopics.map((topic, index) => (
                <li key={topic} className="flex items-start gap-2">
                  <MotifBullet index={index} size="small" />
                  <span>{topic}</span>
                </li>
              ))}
            </ul>
          </div>

          <div className="flex flex-col justify-center border-t border-[#ded6c8] py-10 lg:border-l lg:border-t-0 lg:pl-12">
            <YogicMark symbol="mandala" className="mb-8 h-16 w-16 text-[#9b8d72]/35" />
            <div>
              <p className="text-xs uppercase text-[#756859]">Reflection prompt</p>
              <p className="mt-5 font-serif text-3xl italic leading-relaxed text-[#4f413b]">
                Where in your day can you notice steadiness instead of striving?
              </p>
            </div>
          </div>
        </div>
      </section>

      <section
        id="products"
        className="relative border-y border-[#d8c7b6] bg-[#f2e8dc] py-16 sm:py-20 lg:py-24"
      >
        <HomeShellAccent kind="fan" className="-right-5 -top-4 h-20 w-20 rotate-[-24deg] opacity-85 sm:right-8 sm:h-24 sm:w-24" />
        <div className="relative z-10 mx-auto max-w-6xl px-5 sm:px-8 lg:px-10">
          <div className="mb-12 grid gap-8 lg:grid-cols-[0.34fr_0.66fr]">
            <SectionLabel label="Products" />
            <h2 className="font-serif text-4xl leading-tight text-[#221b18] sm:text-5xl">
              Simple tools to keep the practice <em className="italic">close.</em>
            </h2>
          </div>

          <div className="grid gap-6 md:grid-cols-3">
            {products.map((item, index) => (
              <article
                key={item}
                className="flex flex-col border border-[#ddd2c2] bg-[#fcf9f1]"
              >
                <div aria-hidden="true" className="m-4 mb-0 flex aspect-[4/3] items-center justify-center bg-[#eae3d5]">
                  <div className={`aspect-[3/4] w-[38%] bg-[#f5f0e5] ${index === 1 ? "rotate-[-5deg]" : index === 2 ? "rotate-[5deg]" : ""}`} />
                </div>
                <div className="flex flex-1 flex-col p-6">
                  <p className="mb-4 text-[10px] uppercase text-[#8a6b55]">{index === 0 ? "Card deck" : index === 1 ? "Printables" : "Starter kit"}</p>
                  <h3 className="font-serif text-2xl leading-snug text-[#45392f]">{item}</h3>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="border-b border-[#ded6c8] bg-[#eae2d2]">
        <div className="relative mx-auto max-w-6xl px-5 py-20 sm:px-8 lg:px-10 lg:py-28">
          <HomeShellAccent kind="starfish" className="bottom-3 right-2 h-14 w-14 rotate-[-22deg] sm:right-8 sm:h-16 sm:w-16" />
          <SectionLabel
            label="Begin"
            className="relative z-10"
          />
          <h2 className="mt-4 font-serif text-4xl text-[#1f1714] sm:text-5xl">
            Book a first session and begin with calm.
          </h2>
          <p className="mt-4 max-w-2xl text-lg leading-8 text-[#4f4037]">
            Whether you are new to yoga or returning to a steadier rhythm, there
            is a place for you here.
          </p>
          <div className="mt-8 flex flex-col gap-4 sm:flex-row">
            <a
              href="#booking"
              className="border border-[#8c6652] bg-[#8c6652] px-6 py-3 font-semibold text-[#fffaf5] transition hover:bg-[#6f4f40]"
            >
              Book a Session
            </a>
            <a
              href="mailto:hello@mindfulyogi.com"
              className="px-2 py-3 font-medium text-[#382e2a] underline decoration-[#b68667] underline-offset-8 transition hover:text-[#8f644c]"
            >
              Send an Enquiry
            </a>
          </div>
        </div>
      </section>

      <footer className="border-t border-[#d9c3aa] bg-[#f5efe8]">
        <div className="mx-auto flex max-w-6xl flex-col gap-4 px-5 py-8 text-sm text-[#4d3f37] sm:px-8 lg:flex-row lg:items-center lg:justify-between lg:px-10">
          <div className="font-serif text-2xl text-[#221b18]">Mindful Yogi</div>
          <div className="flex gap-6">
            <a href="#about" className="hover:text-[#7b4f38]">
              About
            </a>
            <a href="/programmes" className="hover:text-[#7b4f38]">
              Programmes
            </a>
            <a href="#booking" className="hover:text-[#7b4f38]">
              Booking
            </a>
            <a href="#products" className="hover:text-[#7b4f38]">
              Products
            </a>
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
