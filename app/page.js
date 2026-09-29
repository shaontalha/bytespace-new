import Navbar from "@/components/layout/Navbar";
import Hero from "@/components/sections/Hero";
import Partners from "@/components/sections/Partners";

export default function Home() {
  return (
    <>
      <Navbar />
      <main>
        <Hero />
        <Partners />
      </main>
    </>
  );
}