import Navbar from "@/components/layout/Navbar";
import Hero from "@/components/sections/Hero";
import Partners from "@/components/sections/Partners";
import Courses from "@/components/sections/Courses";
import Categories from "@/components/sections/Categories";
import Growth from "@/components/sections/Growth";

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
      </main>
    </>
  );
}