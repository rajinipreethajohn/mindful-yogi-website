import YogicMark from "@/components/YogicMark";

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
    accent: "Sand",
  },
  {
    name: "Stress Relief & Breathwork",
    description:
      "Gentle movement and calming breath practices to help life feel less hurried.",
    accent: "Moss",
  },
  {
    name: "Gentle Back-Care Yoga",
    description:
      "Supported movement, posture awareness, and ease for everyday mobility.",
    accent: "Clay",
  },
  {
    name: "Women’s Wellbeing Yoga",
    description:
      "Complementary support for stress, energy, and body awareness with care and context.",
    accent: "Terracotta",
  },
  {
    name: "Private 1:1 Yoga",
    description:
      "Personal guidance in breath, confidence, and mindful practice, online or in person.",
    accent: "Oak",
  },
  {
    name: "Yoga Philosophy Sessions",
    description:
      "Thoughtful exploration of practice, attention, stillness, and living with awareness.",
    accent: "Ash",
  },
];

const bookingSteps = [
  "Choose a session or package",
  "Pick a date and time that works for you",
  "Confirm details and payment",
  "Receive your calendar invite and Google Meet link",
];

const products = [
  "Mindful Yogi flashcards and reflection prompts",
  "Printable movement and breath cards for daily practice",
  "A gentle starter kit for home practice and self-study",
];

export default function HomePage() {
  return (
    <main className="bg-[#f8f2ea] text-[#2d241d] antialiased">
      <header className="mx-auto max-w-6xl px-5 py-6 sm:px-8 lg:px-10">
        <nav className="flex items-center justify-between gap-4 rounded-full border border-[#d9c3aa] bg-[#fffaf4]/80 px-4 py-3 shadow-[0_10px_24px_rgba(88,61,47,0.05)] backdrop-blur-sm sm:px-6">
          <div className="flex items-center gap-4 pr-5">
            <span className="font-serif text-2xl tracking-tight text-[#251d19]">
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
            className="rounded-full bg-[#7f5645] px-4 py-2 text-sm font-semibold text-[#fffaf5] transition hover:bg-[#684733]"
          >
            Book a Session
          </a>
        </nav>
      </header>

      <section className="mx-auto max-w-6xl px-5 pb-12 pt-4 sm:px-8 lg:px-10 lg:pb-24">
        <div className="grid items-center gap-10 lg:grid-cols-[1.2fr_0.8fr]">
          <div className="relative">
            <div className="mb-6 inline-flex rounded-full border border-[#d9c3aa] bg-[#f3e6d8] px-3 py-1 text-[10px] font-semibold uppercase tracking-[0.24em] text-[#6d4a39]">
              Gentle movement, breathwork, and philosophy
            </div>
            <h1 className="max-w-xl font-serif text-5xl leading-[0.92] tracking-[-0.04em] text-[#1d1714] sm:text-6xl lg:text-[4.2rem]">
              Less noise. More breath.
            </h1>
            <p className="mt-6 max-w-xl text-lg leading-8 text-[#574739]">
              Gentle yoga, breathwork, and philosophy for modern life — helping
              you move with steadiness, find calm, and return to yourself.
            </p>
            <div className="mt-8 flex flex-col gap-4 sm:flex-row">
              <a
                href="#booking"
                className="rounded-full bg-[#7f5645] px-6 py-3 text-center font-semibold text-[#fffaf5] shadow-sm transition hover:bg-[#684733]"
              >
                Book a Session
              </a>
              <a
                href="/programmes"
                className="rounded-full border border-[#caa98c] bg-[#fffaf4] px-6 py-3 text-center font-semibold text-[#3d2e27] transition hover:border-[#9d7b62] hover:text-[#291d18]"
              >
                Explore Programmes
              </a>
            </div>
            <div className="mt-8 flex flex-wrap gap-6 text-sm text-[#5d473d]">
              <span>Beginner-friendly</span>
              <span>Breath + movement</span>
              <span>Reflective practice</span>
            </div>
          </div>

          <div className="relative">
            <div className="relative overflow-hidden rounded-[2rem] border border-[#d9c3aa] bg-[radial-gradient(circle_at_top,_#f7ecdf,_#ecd4b4_42%,_#d2b08e_100%)] p-4 shadow-[0_30px_80px_rgba(73,52,37,0.12)]">
              <div className="relative overflow-hidden rounded-[1.5rem] border border-[#d8c5ae] bg-[#f9f4ee] p-5">
                <div className="rounded-[1.5rem] bg-[linear-gradient(135deg,#f5ebdf,#e8d5bc)] p-5">
                  <div className="flex items-center justify-between border-b border-[#d8c2a5] pb-3 text-[10px] font-semibold uppercase tracking-[0.22em] text-[#5d473d]">
                    <span>Practice note</span>
                    <span className="flex items-center gap-2">
                      <YogicMark
                        symbol="breath"
                        className="h-5 w-10 text-[#a87835]"
                      />
                      <span>15 min</span>
                    </span>
                  </div>
                  <div className="mt-6 text-4xl font-serif leading-none text-[#1f1714]">
                    Steady breath
                  </div>
                  <div className="mt-6 grid grid-cols-2 gap-3">
                    <div className="rounded-[1.1rem] border border-[#d7c0a3] bg-[#fffaf5]/85 p-3">
                      <div className="text-[11px] uppercase tracking-[0.18em] text-[#695548]">
                        Yoga
                      </div>
                      <div className="mt-2 text-lg font-semibold text-[#1f1714]">
                        Gentle
                      </div>
                    </div>
                    <div className="rounded-[1.1rem] border border-[#d7c0a3] bg-[#fffaf5]/85 p-3">
                      <div className="text-[11px] uppercase tracking-[0.18em] text-[#695548]">
                        Breath
                      </div>
                      <div className="mt-2 text-lg font-semibold text-[#1f1714]">
                        4 rounds
                      </div>
                    </div>
                  </div>
                  <p className="mt-5 text-sm leading-6 text-[#493f39]">
                    Grounding, breath awareness, and a steadier rhythm for the
                    day.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section
        id="about"
        className="mx-auto max-w-6xl px-5 py-12 sm:px-8 lg:px-10 lg:py-20"
      >
        <div className="mb-8 max-w-2xl">
          <p className="flex items-center gap-2 text-sm font-semibold uppercase tracking-[0.25em] text-[#7d5a49]">
            <YogicMark symbol="lotus" className="h-4 w-5 text-[#a87835]" />
            Who this is for
          </p>
          <h2 className="mt-3 font-serif text-4xl text-[#221b18] sm:text-5xl">
            Supportive, grounded yoga for real life.
          </h2>
        </div>

        <div className="grid gap-4 md:grid-cols-2 xl:grid-cols-5">
          {audiences.map((item) => (
            <div
              key={item}
              className="rounded-[1.5rem] border border-[#e0c7a7] bg-[#fffaf5] p-5 shadow-[0_12px_24px_rgba(88,61,47,0.04)]"
            >
              <p className="text-base leading-7 text-[#45392f]">{item}</p>
            </div>
          ))}
        </div>
      </section>

      <section
        id="programmes"
        className="relative overflow-hidden bg-[#efe3d3] py-12 sm:py-16 lg:py-20"
      >
        <svg
          aria-hidden="true"
          className="pointer-events-none absolute right-0 top-0 h-52 w-56 text-[#a87835]/20 sm:right-8"
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
          <div className="mb-8 flex flex-col gap-4 md:flex-row md:items-end md:justify-between">
            <div>
              <p className="flex items-center gap-2 text-sm font-semibold uppercase tracking-[0.25em] text-[#7d5a49]">
                <YogicMark symbol="sprout" className="h-4 w-5 text-[#a87835]" />
                Featured programmes
              </p>
              <h2 className="mt-3 font-serif text-4xl text-[#221b18] sm:text-5xl">
                Practice that meets you where you are.
              </h2>
            </div>
            <a
              href="#booking"
              className="text-sm font-semibold text-[#6e4735] underline decoration-[#b78b6f] underline-offset-4"
            >
              Book a discovery call
            </a>
          </div>

          <div className="grid gap-5 md:grid-cols-2 xl:grid-cols-3">
            {programs.map((program) => (
              <article
                key={program.name}
                className="relative overflow-hidden rounded-[1.75rem] border border-[#dac0a2] bg-[#fffaf5] p-6 shadow-[0_12px_26px_rgba(88,61,47,0.04)]"
              >
                {program.name === "Stress Relief & Breathwork" ||
                program.name === "Yoga Philosophy Sessions" ? (
                  <YogicMark
                    symbol={
                      program.name === "Stress Relief & Breathwork"
                        ? "mandala"
                        : "plume"
                    }
                    className="pointer-events-none absolute -right-1 -top-1 h-11 w-11 text-[#a87835]/45"
                  />
                ) : null}
                <div className="mb-5 inline-flex rounded-full border border-[#d7b697] bg-[#f3e5d5] px-2.5 py-1 text-[10px] font-semibold uppercase tracking-[0.2em] text-[#6d4a39]">
                  {program.accent}
                </div>
                <h3 className="font-serif text-2xl text-[#261d19]">
                  {program.name}
                </h3>
                <p className="mt-3 text-base leading-7 text-[#55473e]">
                  {program.description}
                </p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-6xl px-5 py-12 sm:px-8 lg:px-10 lg:py-20">
        <div className="grid gap-8 lg:grid-cols-[0.8fr_1.2fr]">
          <div className="rounded-[2rem] border border-[#d9c3aa] bg-[#f0e2d2] p-6">
            <p className="flex items-center gap-2 text-sm font-semibold uppercase tracking-[0.25em] text-[#7d5a49]">
              <YogicMark
                symbol="meditation"
                className="h-4 w-5 text-[#a87835]"
              />
              Meet Preetha
            </p>
            <div className="mt-6 overflow-hidden rounded-[1.5rem] border border-[#d8c5ae] bg-[radial-gradient(circle_at_top,_#f5e8d5,_#d6b08a_55%,_#b8845c_100%)] p-4">
              <div className="h-52 rounded-[1.25rem] border border-[#e8d7c4] bg-[radial-gradient(circle_at_top,_rgba(255,255,255,0.5),_rgba(255,255,255,0)_55%)]" />
            </div>
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
            <div className="mt-8 rounded-[1.5rem] border border-[#d9c3aa] bg-[#fffaf5] p-5 text-[#433a34] shadow-[0_12px_26px_rgba(88,61,47,0.04)]">
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

      <section id="booking" className="bg-[#f6efe7] py-12 sm:py-16 lg:py-20">
        <div className="mx-auto max-w-6xl px-5 sm:px-8 lg:px-10">
          <div className="mb-8 max-w-2xl">
            <p className="flex items-center gap-2 text-sm font-semibold uppercase tracking-[0.25em] text-[#7d5a49]">
              <YogicMark symbol="breath" className="h-4 w-5 text-[#a87835]" />
              How booking works
            </p>
            <h2 className="mt-3 font-serif text-4xl text-[#221b18] sm:text-5xl">
              Simple steps from first enquiry to your session.
            </h2>
          </div>

          <div className="grid gap-4 md:grid-cols-2 xl:grid-cols-4">
            {bookingSteps.map((step, index) => (
              <div
                key={step}
                className="rounded-[1.5rem] border border-[#d9c3aa] bg-[#fffaf5] p-5 shadow-[0_12px_26px_rgba(88,61,47,0.04)]"
              >
                <div className="mb-4 text-3xl font-serif text-[#7f5645]">
                  0{index + 1}
                </div>
                <p className="text-base leading-7 text-[#45392f]">{step}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section
        id="philosophy"
        className="mx-auto max-w-6xl px-5 py-12 sm:px-8 lg:px-10 lg:py-20"
      >
        <div className="grid gap-8 lg:grid-cols-[1.1fr_0.9fr]">
          <div>
            <p className="flex items-center gap-2 text-sm font-semibold uppercase tracking-[0.25em] text-[#7d5a49]">
              <YogicMark
                symbol="meditation"
                className="h-4 w-5 text-[#a87835]"
              />
              Yoga philosophy
            </p>
            <h2 className="mt-3 font-serif text-4xl text-[#221b18] sm:text-5xl">
              Practice beyond the mat, into everyday life.
            </h2>
            <p className="mt-5 text-lg leading-8 text-[#56473d]">
              Thoughtful reflection, gentle inquiry, and accessible teachings on
              breath, attention, stillness, and the deeper meaning of practice.
            </p>
            <ul className="mt-6 space-y-3 text-base text-[#473d38]">
              <li>• Yoga Beyond Posture</li>
              <li>• Breath and Attention</li>
              <li>• What Is Practice?</li>
              <li>• Stillness in Daily Life</li>
            </ul>
          </div>

          <div className="rounded-[2rem] border border-[#d9c3aa] bg-[#efe3d3] p-6">
            <div className="aspect-video overflow-hidden rounded-[1.5rem] border border-[#d4b798] bg-[linear-gradient(135deg,#d7b18b,#c18d64_35%,#8d6b57)] p-4">
              <div className="flex h-full items-end justify-between">
                <div className="h-20 w-20 rounded-full border-4 border-[#fffaf5]/70" />
                <div className="h-14 w-14 rounded-full border-4 border-[#fffaf5]/70" />
              </div>
            </div>
            <div className="mt-5 rounded-[1.25rem] bg-[#fffaf5] p-4">
              <p className="font-semibold text-[#2d241d]">Reflection prompt</p>
              <p className="mt-2 text-base leading-7 text-[#4f413b]">
                Where in your day can you notice steadiness instead of striving?
              </p>
            </div>
          </div>
        </div>
      </section>

      <section id="products" className="bg-[#efe6dc] py-12 sm:py-16 lg:py-20">
        <div className="mx-auto max-w-6xl px-5 sm:px-8 lg:px-10">
          <div className="mb-8 max-w-2xl">
            <p className="flex items-center gap-2 text-sm font-semibold uppercase tracking-[0.25em] text-[#7d5a49]">
              <YogicMark symbol="sprout" className="h-4 w-5 text-[#a87835]" />
              Products
            </p>
            <h2 className="mt-3 font-serif text-4xl text-[#221b18] sm:text-5xl">
              Simple tools to keep the practice close.
            </h2>
          </div>

          <div className="grid gap-5 md:grid-cols-3">
            {products.map((item, index) => (
              <div
                key={item}
                className="rounded-[1.5rem] border border-[#d9c3aa] bg-[#fffaf5] p-6 shadow-[0_12px_26px_rgba(88,61,47,0.04)]"
              >
                {index === 1 ? (
                  <YogicMark
                    symbol="breath"
                    className="mb-4 h-7 w-10 text-[#a87835]/70"
                  />
                ) : null}
                <p className="text-base leading-7 text-[#45392f]">{item}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-6xl px-5 pb-16 pt-12 sm:px-8 lg:px-10 lg:pb-24 lg:pt-20">
        <div className="rounded-[2rem] border border-[#d9c3aa] bg-[linear-gradient(135deg,#f5ebdd,#e8d1ae)] p-8 text-center shadow-[0_30px_80px_rgba(73,52,37,0.12)] sm:p-12">
          <p className="flex items-center justify-center gap-2 text-sm font-semibold uppercase tracking-[0.25em] text-[#6d4a39]">
            <YogicMark symbol="diya" className="h-4 w-5 text-[#a87835]" />
            Begin your practice
          </p>
          <h2 className="mt-4 font-serif text-4xl text-[#1f1714] sm:text-5xl">
            Book a first session and begin with calm.
          </h2>
          <p className="mx-auto mt-4 max-w-2xl text-lg leading-8 text-[#4f4037]">
            Whether you are new to yoga or returning to a steadier rhythm, there
            is a place for you here.
          </p>
          <div className="mt-8 flex flex-col justify-center gap-4 sm:flex-row">
            <a
              href="#booking"
              className="rounded-full bg-[#7f5645] px-6 py-3 font-semibold text-[#fffaf5] transition hover:bg-[#684733]"
            >
              Book a Session
            </a>
            <a
              href="mailto:hello@mindfulyogi.com"
              className="rounded-full border border-[#b68667] bg-[#fffaf5] px-6 py-3 font-semibold text-[#382e2a] transition hover:border-[#8f644c]"
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
