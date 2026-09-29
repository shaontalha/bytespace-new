import { glowEllipses } from "@/lib/data";

export default function GlowBackground({ ellipses = glowEllipses }) {
  return (
    <div aria-hidden className="pointer-events-none absolute inset-0 mx-auto max-w-[1440px]">
      {ellipses.map(({ id, size, top, left, background }) => (
        <div
          key={id}
          className="absolute rounded-full"
          style={{ width: size, height: size, top, left, background }}
        />
      ))}
    </div>
  );
}