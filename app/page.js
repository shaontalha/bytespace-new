import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import Hero from "@/components/sections/Hero";
import Partners from "@/components/sections/Partners";
import Courses from "@/components/sections/Courses";
import Categories from "@/components/sections/Categories";
import Growth from "@/components/sections/Growth";
import Testimonials from "@/components/sections/Testimonials";
import CreatorCTA from "@/components/sections/CreatorCTA";

export default function Home() {
  return (
    <>
      <Navbar />
      <main>
        <Hero />
        <Partners />
        <Courses />
        <Categories />
        <Growth />
        <Testimonials />
        <CreatorCTA />
      </main>
      <Footer />
    </>
  );
}