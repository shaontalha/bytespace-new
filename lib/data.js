export const navLinks = [
  { label: "Home", href: "/" },
  { label: "Courses", href: "#courses" },
  { label: "Creators", href: "#creators" },
];

export const authLinks = [
  { label: "Sign In", href: "/login" },
  { label: "Join Us", href: "/signup" },
];

export const studentAvatars = [
  { id: 1, src: "/images/avatar-1.png", alt: "Student 1" },
  { id: 2, src: "/images/avatar-2.png", alt: "Student 2" },
  { id: 3, src: "/images/avatar-3.png", alt: "Student 3" },
  { id: 4, src: "/images/avatar-4.png", alt: "Student 4" },
  { id: 5, src: "/images/avatar-5.png", alt: "Student 5" },
  { id: 6, src: "/images/avatar-6.png", alt: "Student 6" },
  { id: 7, src: "/images/avatar-7.png", alt: "Student 7" },
];

// Decorative 3D shapes. Positions are for the 1440px design
// (left/right/top in px). Tweak the numbers to fine-tune.
export const heroShapes = [
  { src: "/images/shape-lime-squiggle.png", width: 260, height: 380, className: "left-0 top-[225px] w-[260px]" },
  { src: "/images/shape-white-squiggle.png", width: 180, height: 180, className: "left-[180px] top-[480px] w-[180px]" },
  { src: "/images/shape-white-ring.png", width: 340, height: 340, className: "left-[16px] top-[680px] w-[340px]" },
  { src: "/images/shape-lime-cylinder.png", width: 213, height: 370, className: "right-0 top-[250px] w-[213px]" },
  { src: "/images/shape-white-pyramid.png", width: 170, height: 170, className: "right-[150px] top-[470px] w-[170px]" },
  { src: "/images/shape-white-squiggle.png", width: 180, height: 180, className: "right-[20px] top-[690px] w-[240px]" },
];

export const partnerLogos = [
  { id: 1, src: "/images/logo-5.png", alt: "Logoipsum 1" },
  { id: 2, src: "/images/logo-4.png", alt: "Logoipsum 2" },
  { id: 3, src: "/images/logo-3.png", alt: "Logoipsum 3" },
  { id: 4, src: "/images/logo-2.png", alt: "Logoipsum 4" },
  { id: 5, src: "/images/logo-1.png", alt: "Logoipsum 5" },
];

export const courseCategories = [
  "Featured", "Music", "Drawing & Painting", "Marketing", "Animation",
  "Social Media", "UI/UX Design", "Creative Marketing",
  "Digital Illustration", "Film & Video", "Crafts",
  "Freelance & Entrepreneurship", "Graphic Design", "Photography",
  "Productivity", "Web Development", "Data Science", "Cooking",
];

const baseCourse = {
  author: "purepearl studio",
  lessons: 17,
  duration: "2 hours 16 mins",
  comments: 59,
  rating: 4.5,
  level: "Beginner",
  price: 25,
};

export const courses = [
  { id: 1, image: "/images/card-1.png", title: "Learn Figma from Basic" },
  { id: 2, image: "/images/card-2.png", title: "Build Digital Asset" },
  { id: 3, image: "/images/card-3.png", title: "the Power of Big Data" },
  { id: 4, image: "/images/card-4.png", title: "Balancing Productivity and Wellbeing" },
  { id: 5, image: "/images/card-5.png", title: "Mastering Money Management" },
  { id: 6, image: "/images/card-6.png", title: "From Idea to Startup Success" },
].map((c) => ({ ...baseCourse, ...c }));

export const learningCategories = [
  { id: 1, title: "Design", icon: "/images/categories-1.png" },
  { id: 2, title: "Development", icon: "/images/categories-2.png" },
  { id: 3, title: "IT & Software", icon: "/images/categories-3.png" },
  { id: 4, title: "Business", icon: "/images/categories-4.png" },
  { id: 5, title: "Marketing", icon: "/images/categories-5.png" },
  { id: 6, title: "Photography", icon: "/images/categories-6.png" },
];