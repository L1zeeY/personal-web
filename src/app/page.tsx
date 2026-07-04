"use client";
import Hero from "@/components/home/Hero";
import Highlights from "@/components/home/Highlights";
import QuoteCard from "@/components/ui/QuoteCard";

export default function Home() {
  return (
    <main>
      <Hero />
      <section className="max-w-5xl mx-auto px-4 pb-20">
        <QuoteCard />
      </section>
      <Highlights />
    </main>
  );
}
