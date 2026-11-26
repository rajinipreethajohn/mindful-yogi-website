import type { Metadata } from "next";
import SiteNav from "@/components/SiteNav";
import styles from "../home.module.css";

export const metadata: Metadata = {
  title: "Breath & Meditation | Mindful Yogi",
  description:
    "Discover Pranayama and Yoga Nidra with Mindful Yogi. A growing space for breath awareness, guided relaxation, and meditation.",
};

export default function BreathAndMeditationPage() {
  return (
    <main className={`${styles.paper} min-h-screen bg-[#f5efe2] text-[#2d241d] antialiased [&_*]:tracking-normal`}>
      <SiteNav active="breath" />
      <section className="mx-auto max-w-6xl px-5 pb-12 pt-10 sm:px-8 lg:px-10 lg:pt-16" aria-labelledby="breath-title">
        <p className="mb-6 text-xs font-medium uppercase text-[#7b5d49]">Breath &amp; Meditation</p>
        <h1 id="breath-title" className="max-w-3xl font-serif text-5xl leading-[0.94] text-[#1d1714] sm:text-6xl lg:text-[5rem]">Pranayama &amp; <em className="italic">Yoga Nidra</em></h1>
        <p className="mt-6 max-w-2xl text-lg leading-8 text-[#574739]">
          A space to explore the breath, settle into stillness, and turn attention inward. Here, we introduce two distinct practices with care and context.
        </p>
        <div className="mt-10 max-w-3xl">
          <h2 className="font-serif text-3xl">Pranayama: from posture to breath</h2>
          <p className="mt-6 text-base leading-7 text-[#574739]">
            Pranayama is the fourth limb of Maharishi Patanjali’s eight-limbed path, following asana. In the yogic tradition, prana refers to life energy; the breath is a way of working with it consciously. This traditional understanding gives the practice a wider purpose than breathing exercises alone.
          </p>
          <p className="mt-5 text-base leading-7 text-[#574739]">The practice encompasses inhalation (puraka), exhalation (rechaka), and retention (kumbhaka). We begin with awareness and ease, developing attention to the breath as preparation for inward practice. Retention is introduced with appropriate guidance, rather than treated as a requirement for beginners.</p>
          <figure className="mt-8 border-y border-[#d8c7b6] py-6">
            <figcaption className="mb-4 text-xs font-medium uppercase text-[#7b5d49]">Maharishi Patanjali · Yoga Sutra 2.49</figcaption>
            <blockquote>
              <p lang="sa" className="font-serif text-2xl leading-relaxed">तस्मिन् सति श्वासप्रश्वासयोर्गतिविच्छेदः प्राणायामः ॥२.४९॥</p>
              <p lang="sa-Latn" className="mt-4 break-words font-serif text-lg italic leading-7 text-[#574739]">tasmin sati śvāsa-praśvāsayor gati-vicchedaḥ prāṇāyāmaḥ</p>
              <p className="mt-4 text-base leading-7">“With that established, pranayama is the interruption of the movement of inhalation and exhalation.”</p>
            </blockquote>
            <p className="mt-4 text-sm leading-6 text-[#574739]">Here, “that” refers to the preceding practice of asana. This is a philosophical definition, not an instruction to force or hold the breath.</p>
          </figure>
          <p className="mt-6 text-base leading-7 text-[#574739]">Our future library will introduce practices including Ujjayi, Nadi Shodhana, Bhastrika, and Bhramari, with the purpose and preparation for each explained separately.</p>

          <h2 className="mt-12 font-serif text-3xl">Yoga Nidra: rest with awareness</h2>
          <p className="mt-6 text-base leading-7 text-[#574739]">
            Yoga Nidra is often described as yogic sleep, or sleep with awareness: a guided practice that invites physical, mental, and emotional relaxation while maintaining a thread of awareness. The body rests as attention follows the guidance.
          </p>
          <p className="mt-5 text-base leading-7 text-[#574739]">The practice can progress from awareness of different parts of the body to a fuller practice with sankalpa — a short, positive resolve — rotation of awareness, observation of the natural breath, visualisation, and a gradual return to the surroundings.</p>
          <figure className="mt-8 border-y border-[#d8c7b6] py-6">
            <figcaption className="mb-4 text-xs font-medium uppercase text-[#7b5d49]">Maharishi Patanjali · Yoga Sutra 1.2</figcaption>
            <blockquote>
              <p lang="sa" className="font-serif text-2xl leading-relaxed">योगश्चित्तवृत्तिनिरोधः ॥१.२॥</p>
              <p lang="sa-Latn" className="mt-4 font-serif text-lg italic leading-7 text-[#574739]">yogaś citta-vṛtti-nirodhaḥ</p>
              <p className="mt-4 text-base leading-7">“Yoga is the stilling of the fluctuations of the mind.”</p>
            </blockquote>
            <p className="mt-4 text-sm leading-6 text-[#574739]">This sutra describes the wider purpose of yoga. It offers context for our inward practice; it does not specifically define Yoga Nidra or prescribe its guided sequence.</p>
          </figure>
          <p className="mt-6 text-base leading-7 text-[#574739]">Here, the invitation is to rest and remain gently aware. Future recordings will guide the practice step by step, with space to settle at the beginning and return gradually at the end.</p>

        </div>
      </section>

      <section className="mx-auto grid max-w-6xl gap-6 px-5 pb-20 sm:px-8 md:grid-cols-2 lg:px-10" aria-label="Explore the practices">
        <article className="border border-[#ded6c8] bg-white p-7 sm:p-9" aria-labelledby="pranayama-title">
          <p className="mb-5 text-xs font-medium uppercase text-[#7b5d49]">Exploring the breath</p>
          <h2 id="pranayama-title" className="font-serif text-3xl sm:text-4xl">Pranayama</h2>
          <p className="mt-3 text-lg text-[#574739]">Breath awareness and regulation</p>
          <p className="mt-6 text-base leading-7 text-[#574739]">
            An introduction to working consciously with the breath. This space will explore the meaning behind each practice, with clear guidance on preparation, pacing, and when to adapt or pause.
          </p>
          <p className="mt-8 border-t border-[#d8c7b6] pt-5 text-sm leading-6 text-[#7b5d49]">Practice guides and demonstrations are coming soon.</p>
        </article>

        <article className="border border-[#ded6c8] bg-white p-7 sm:p-9" aria-labelledby="nidra-title">
          <p className="mb-5 text-xs font-medium uppercase text-[#7b5d49]">An invitation to stillness</p>
          <h2 id="nidra-title" className="font-serif text-3xl sm:text-4xl">Yoga Nidra</h2>
          <p className="mt-3 text-lg text-[#574739]">Guided relaxation and meditative awareness</p>
          <p className="mt-6 text-base leading-7 text-[#574739]">
            A space for guided practice, with time to settle and listen. This section will introduce Yoga Nidra, explain how to prepare a comfortable resting space, and offer recordings to follow at your own pace.
          </p>
          <p className="mt-8 border-t border-[#d8c7b6] pt-5 text-sm leading-6 text-[#7b5d49]">Guided recordings and preparation notes are coming soon.</p>
        </article>
      </section>
    </main>
  );
}
