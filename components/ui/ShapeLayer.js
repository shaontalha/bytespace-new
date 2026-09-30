import Image from "next/image";

export default function ShapeLayer({ shapes, className = "hidden lg:block" }) {
  return (
    <div
      aria-hidden
      className={`pointer-events-none absolute inset-0 z-20 mx-auto max-w-[1440px] ${className}`}
    >
      {shapes.map((shape, i) => (
        <Image
          key={`${shape.src}-${i}`}
          src={shape.src}
          alt=""
          width={shape.width}
          height={shape.height}
          className={`absolute h-auto ${shape.className}`}
        />
      ))}
    </div>
  );
}