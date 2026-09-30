"use client";

import { useState } from "react";
import CourseCard from "@/components/ui/CourseCard";
import Section from "@/components/ui/Section";
import SectionHeading from "@/components/ui/SectionHeading";
import { courseCategories, courses } from "@/lib/data";

// Same 3 rows as the design
const rows = [
  courseCategories.slice(0, 8),
  courseCategories.slice(8, 14),
  courseCategories.slice(14),
];

export default function Courses() {
  const [active, setActive] = useState("Featured");

  return (
    <Section id="courses" className="pt-12 md:pt-[72px]">
      <SectionHeading
        title={
          <>
            Discover Your Passion,
            <br />
            Build Your Skills
          </>
        }
        description="At Bytespace Courses, we bring you closer to life-changing knowledge. Explore a variety of courses across different fields, from technology to the arts, and make a difference in your career and life."
      />

      {/* Category chips */}
      <div className="mt-10 flex flex-col items-center gap-[21px] lg:mt-12">
        {rows.map((row, i) => (
          <div key={i} className="flex flex-wrap justify-center gap-x-4 gap-y-[21px]">
            {row.map((name) => (
              <button
                key={name}
                onClick={() => setActive(name)}
                className={`cursor-pointer rounded-3xl px-4 py-3 text-sm font-medium leading-[1.35] text-ink transition ${
                  active === name ? "bg-lime" : "bg-cloud hover:bg-mist"
                }`}
              >
                {name}
              </button>
            ))}
            {i === rows.length - 1 && (
              <button className="cursor-pointer px-1 text-sm font-medium text-primary">
                + More
              </button>
            )}
          </div>
        ))}
      </div>

      {/* Course cards */}
      <div className="mt-10 grid-cols-1 grid gap-10 md:grid-cols-2 lg:mt-[77px] lg:grid-cols-3">
        {courses.map((course) => (
          <CourseCard key={course.id} course={course} />
        ))}
      </div>
    </Section>
  );
}