export const navLinks = [
  { label: "Home", href: "/" },
  { label: "Courses", href: "/#courses" },
  { label: "Creators", href: "/#creators" },
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

export const growthStats = [
  { id: 1, value: "12K", label: "Students" },
  { id: 2, value: "70+", label: "Courses" },
  { id: 3, value: "16", label: "Creators" },
];

export const creatorPerks = [
  "Share Your Expertise",
  "Monetize Your Passion",
  "Flexibility and Autonomy",
  "Build a Community",
];

const glow = (rgb, a) =>
  `radial-gradient(50% 50% at 50% 50%, rgba(${rgb},${a}) 0%, rgba(${rgb},${(a * 0.23).toFixed(4)}) 53%, rgba(${rgb},${(a * 0.06).toFixed(4)}) 75%, rgba(${rgb},0) 100%)`;

const LIME = "203,252,1";
const BLUE = "0,59,226";

// Positions are from the Figma frame (1440px wide)
export const glowEllipses = [
  { id: 1, size: 1137, top: -466, left: -152, background: glow(LIME, 0.4) },
  { id: 2, size: 1137, top: -458, left: 811, background: glow(BLUE, 0.08) },
  { id: 3, size: 1137, top: 183, left: -508, background: glow(BLUE, 0.16) },
  { id: 4, size: 672, top: 946, left: -287, background: glow(LIME, 0.6) },
  { id: 5, size: 1137, top: 788, left: 722, background: glow(BLUE, 0.24) },
];


export const ctaShapes = [
  { src: "/images/cta-lime-squiggle-1.png", width: 170, height: 175, className: "left-0 top-0 w-[170px]" },
  { src: "/images/shape-white-squiggle.png", width: 125, height: 125, className: "left-[210px] top-[33px] w-[125px]" },
  { src: "/images/cta-white-cone.png", width: 115, height: 135, className: "left-0 top-[240px] w-[115px]" },
  { src: "/images/cta-lime-ring.png", width: 240, height: 135, className: "left-[70px] top-[355px] w-[240px]" },
  { src: "/images/cta-lime-pyramid.png", width: 125, height: 140, className: "right-[105px] top-[20px] w-[125px]" },
  { src: "/images/cta-white-cylinder.png", width: 170, height: 300, className: "right-0 top-[40px] w-[170px]" },
  { src: "/images/cta-lime-squiggle-2.png", width: 190, height: 165, className: "right-[70px] top-[325px] w-[190px]" },
];

export const testimonialGlows = [
  { id: 1, size: 1137, top: 149, left: -442, background: glow(BLUE, 0.24) },
  { id: 2, size: 672, top: -138, left: 395, background: glow(LIME, 0.6) },
  { id: 3, size: 1137, top: -241, left: 842, background: glow(LIME, 0.4) },
];

export const testimonials = [
  {
    id: 1,
    avatar: "/images/testimonial-1.png",
    name: "Sarah M.",
    role: "Enthusiastic Learner",
    quote:
      "ByteSpace has transformed my approach to learning. The diverse range of courses and the quality of content provided by creators have exceeded my expectations. The platform truly fosters a sense of community and lifelong learning.",
  },
  {
    id: 2,
    avatar: "/images/testimonial-2.png",
    name: "James L.",
    role: "Lifelong Learner",
    quote:
      "I've tried several online learning platforms, and ByteSpace stands out for its vibrant community and the variety of courses available. The easy navigation and engaging content make it a go-to platform for continuous skill development.",
  },
  {
    id: 3,
    avatar: "/images/testimonial-3.png",
    name: "Alex B.",
    role: "Inspired Creator",
    quote:
      "As a creator, ByteSpace has been a game-changer for me. The Course Editor is user-friendly, and the support from the community is incredible. It's fulfilling to see my courses making a positive impact on learners globally.",
  },
];

export const footerColumns = [
  ["Featured Courses", "Featured Categories", "Business", "IT", "Design"],
  ["Development", "Marketing", "Photography", "Finance", "Sport"],
  ["Become a Creator", "Affiliate Program", "Contact", "Help", "About"],
];

export const legalLinks = ["Privacy Policy", "Terms of Service", "Cookies Settings"];

export const authPages = {
  login: {
    eyebrow: "Sign In",
    title: "Welcome Back",
    side: {
      heading: "Sign in with ease",
      text: "Experience a seamless and efficient sign-in process that grants you instant access to a world of knowledge.",
    },
    fields: [
      { name: "email", label: "Email", type: "email", placeholder: "designer@example.com" },
      { name: "password", label: "Password", type: "password", placeholder: "********" },
    ],
    submit: "Sign In",
    social: true,
    footer: { text: "New user?", linkLabel: "Create an account", href: "/signup" },
  },
  signup: {
    eyebrow: "Create an Account",
    title: "Welcome to ByteSpace",
    side: {
      heading: "Sign up and come in",
      text: "The registration process is straightforward, uncomplicated, and efficient, allowing users to sign up quickly, easily, and at no cost",
    },
    fields: [
      { name: "name", label: "Full Name", type: "text", placeholder: "Jamie Davis" },
      { name: "email", label: "Email", type: "email", placeholder: "designer@example.com" },
      { name: "password", label: "Password", type: "password", placeholder: "********" },
    ],
    submit: "Continue",
    social: false,
    footer: { text: "Already have an account?", linkLabel: "Login", href: "/login" },
  },
};

export const socialButtons = [
  { id: 1, label: "Continue with Facebook", icon: "/images/icon-facebook.png" },
  { id: 2, label: "Continue with Google", icon: "/images/icon-google.png" },
];