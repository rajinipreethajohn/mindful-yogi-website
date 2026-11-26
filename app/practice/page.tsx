import type { Metadata } from "next";
import Image from "next/image";
import SiteNav from "@/components/SiteNav";
import styles from "../home.module.css";
import { poses } from "./poses";

export const metadata: Metadata = {
  title: "Practice | Mindful Yogi",
  description: "Explore the Mindful Yogi asana library with photographs, Sanskrit names, and English names in their original learning sequence.",
};

export default function PracticePage() {
  return (
    <main className={`${styles.paper} min-h-screen bg-[#f5efe2] text-[#2d241d] antialiased [&_*]:tracking-normal`}>
      <SiteNav active="practice" />
      <section className="mx-auto max-w-6xl px-5 pb-12 pt-10 sm:px-8 lg:px-10 lg:pt-16" aria-labelledby="practice-title">
        <p className="mb-6 text-xs font-medium uppercase text-[#7b5d49]">Experiencing yoga</p>
        <h1 id="practice-title" className="max-w-3xl font-serif text-4xl leading-tight sm:text-5xl lg:text-6xl">A practice, one posture at a time.</h1>
        <div className="mt-6 max-w-3xl space-y-5 text-lg leading-8 text-[#574739]">
          <p>Asana is the third of the eight limbs of Patanjali’s Ashtanga Yoga. It is one part of a whole path: ethical living, personal observances, posture, breath regulation, turning the senses inward, concentration, meditation, and samadhi — meditative absorption.</p>
          <p>Here, we approach asana as a practice of self-discipline, patience, and attention. Learning to meet the body with steadiness and ease helps prepare us for sitting, breathing, and meditation. This practice belongs within the wider eight-limbed path toward samadhi.</p>
          <p>The Yoga Sutras, commonly counted as 196 aphorisms, reach far beyond physical postures. Sutra 2.46 offers a concise definition of asana, followed by two sutras on its practice and effects (2.47–2.48).</p>
        </div>
        <figure className="mt-10 max-w-3xl border-y border-[#d8c7b6] py-8 sm:py-10">
          <figcaption className="mb-5 text-xs font-medium uppercase text-[#7b5d49]">Patanjali’s Yoga Sutra 2.46</figcaption>
          <blockquote>
            <p lang="sa" className="font-serif text-3xl leading-relaxed sm:text-4xl">स्थिरसुखमासनम् ॥२.४६॥</p>
            <p lang="sa-Latn" className="mt-3 font-serif text-2xl italic text-[#574739]">sthira-sukham āsanam</p>
            <p className="mt-5 text-xl leading-8">“Posture should be steady and comfortable.”</p>
          </blockquote>
          <p className="mt-5 max-w-2xl text-base leading-7 text-[#574739]">Steadiness and ease guide our practice: a foundation for the deeper work of yoga.</p>
          <p className="mt-5 text-sm text-[#7b5d49]">Source: Krishnamacharya Yoga Mandiram</p>
        </figure>
      </section>
      <section className="mx-auto max-w-6xl px-5 pb-20 sm:px-8 lg:px-10" aria-labelledby="asana-library">
        <div className="mb-8 flex flex-wrap items-baseline justify-between gap-3 border-b border-[#d8c7b6] pb-5">
          <h2 id="asana-library" className="font-serif text-3xl">The asana library</h2>
          <p className="text-sm text-[#574739]">{poses.length} postures to explore</p>
        </div>
        <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {poses.map((pose) => (
            <article key={pose.id} className="overflow-hidden border border-[#ded6c8] bg-white" aria-labelledby={`${pose.id}-name`}>
              <div className="relative aspect-[9/16]">
                <Image src={pose.src} alt={`Preetha demonstrating ${pose.sanskrit}`} fill sizes="(max-width: 639px) calc(100vw - 40px), (max-width: 1023px) calc((100vw - 88px) / 2), 339px" className="object-contain" />
              </div>
              <div className="bg-white p-6">
                <p className="text-xs text-[#827565]">{pose.number}</p>
                <h3 id={`${pose.id}-name`} className="mt-2 font-serif text-2xl leading-snug">{pose.sanskrit}</h3>
                <p className="mt-2 text-base text-[#574739]">{pose.english}</p>
              </div>
            </article>
          ))}
        </div>
        <p className="mt-10 max-w-2xl text-base leading-7 text-[#574739]">This library is growing. Detailed pose guides with alignment, modifications, and mindful transitions are coming soon.</p>
      </section>
    </main>
  );
}
