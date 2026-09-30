export default function SectionHeading({
  title,
  description,
  align = "center",
  gap = "gap-4",
  tone = "dark",
  descWidth = "max-w-[917px]",
}) {
  const left = align === "left";
  const light = tone === "light";

  return (
    <div
      className={`flex flex-col ${gap} ${
        left ? "items-start text-left" : "items-center text-center"
      }`}
    >
      <h2
        className={`font-heading text-3xl font-semibold leading-[1.2] tracking-[-0.01em] md:text-[44px] ${
          light ? "text-white" : "text-navy"
        }`}
      >
        {title}
      </h2>
      <p
        className={`${descWidth} text-base leading-[1.6] lg:text-lg ${
          light ? "text-white" : "text-muted"
        }`}
      >
        {description}
      </p>
    </div>
  );
}