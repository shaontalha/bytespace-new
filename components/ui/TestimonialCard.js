import Image from "next/image";

export default function TestimonialCard({ item }) {
  const { avatar, name, role, quote } = item;

  return (
    <article className="flex flex-col gap-6 rounded-3xl bg-white p-6">
      <Image
        src={avatar}
        alt={name}
        width={80}
        height={80}
        className="size-20 rounded-full object-cover"
      />

      <div>
        <h3 className="font-heading text-xl font-semibold leading-[1.2] tracking-[-0.01em] text-black">
          {name}
        </h3>
        <p className="text-lg leading-[1.6] text-primary">{role}</p>
      </div>

      <p className="text-lg leading-[1.6] text-badge">{`"${quote}"`}</p>
    </article>
  );
}