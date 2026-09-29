import Image from "next/image";
import { LevelIcon, StarIcon } from "@/components/ui/Icons";
import { studentAvatars } from "@/lib/data";

export default function CourseCard({ course }) {
  const { image, title, author, lessons, duration, comments, rating, level, price } = course;
  const badges = [`${lessons} Lessons`, duration, `${comments} Comments`];

  return (
    <article className="flex flex-col gap-[18px] rounded-3xl border border-line bg-white p-4">
      {/* Photo + badges */}
      <div className="relative aspect-[341/195] overflow-hidden rounded-xl">
        <Image
          src={image}
          alt={title}
          fill
          sizes="(min-width: 1024px) 373px, (min-width: 768px) 50vw, 100vw"
          className="object-cover"
        />
        <div className="absolute inset-x-3 bottom-3 flex flex-wrap gap-2 xl:gap-3">
          {badges.map((text) => (
            <span
              key={text}
              className="rounded-full bg-badge/80 px-3 py-1.5 text-xs font-medium leading-[1.2] text-white backdrop-blur-sm"
            >
              {text}
            </span>
          ))}
        </div>
      </div>

      {/* Title, rating, author */}
      <div className="flex flex-col gap-1">
        <div className="flex items-start justify-between gap-3">
          <h3 className="min-w-0 truncate font-heading text-xl font-semibold leading-[1.2] tracking-[-0.01em] text-black">
            {title}
          </h3>
          <p className="flex shrink-0 items-center gap-1 text-sm leading-[1.2] text-muted">
            {rating}
            <StarIcon fill="#B0B0B0" />
          </p>
        </div>
        <p className="text-xs leading-[1.6] text-muted">
          by <span className="text-primary">{author}</span>
        </p>
      </div>

      {/* Level + students */}
      <div className="flex items-center justify-between">
        <span className="inline-flex items-center gap-1.5 rounded-full bg-cloud px-3 py-1.5 text-xs font-medium text-ink">
          <LevelIcon className="text-muted" />
          {level}
        </span>
        <div className="flex items-center">
          {studentAvatars.slice(0, 4).map((a) => (
            <Image
              key={a.id}
              src={a.src}
              alt={a.alt}
              width={28}
              height={28}
              className="-ml-2 size-7 rounded-full border-2 border-white object-cover first:ml-0"
            />
          ))}
          <span className="-ml-2 flex size-7 items-center justify-center rounded-full bg-lime text-[10px] font-medium text-ink">
            26+
          </span>
        </div>
      </div>

      {/* Price */}
      <p className="font-heading text-base font-semibold text-primary">
        ${price}
        <span className="font-sans text-xs font-normal text-muted">/lifetime</span>
      </p>
    </article>
  );
}