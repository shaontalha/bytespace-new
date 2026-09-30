export default function Section({ children, className = "", ...props }) {
  return (
    <section
      className={`mx-auto w-full max-w-[1440px] px-5 md:px-10 xl:px-16 min-[1440px]:px-[120px] ${className}`}
      {...props}
    >
      {children}
    </section>
  );
}