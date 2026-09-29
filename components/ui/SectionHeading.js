export default function SectionHeading({
  title,
  description,
  align = "center",
  gap = "gap-4",
}) {
  const left = align === "left";
  return (
    <div
      className={`flex flex-col ${gap} ${
        left ? "items-start text-left" : "items-center text-center"
      }`}
    >
      <h2 className="font-heading text-3xl font-semibold leading-[1.2] tracking-[-0.01em] text-navy md:text-[44px]">
        {title}
      </h2>
      <p className="max-w-[917px] text-base leading-[1.6] text-muted lg:text-lg">
        {description}
      </p>
    </div>
  );
}