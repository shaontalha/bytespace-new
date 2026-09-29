import Navbar from "@/components/layout/Navbar";
import Hero from "@/components/sections/Hero";
import Partners from "@/components/sections/Partners";
import Courses from "@/components/sections/Courses";
import Categories from "@/components/sections/Categories";

export default function Home() {
  return (
    <>
      <Navbar />
      <main>
        <Hero />
        <Partners />
        <Courses />
        <Categories />
      </main>
    </>
  );
}