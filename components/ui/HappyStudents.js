import Image from "next/image";
import { StarIcon } from "@/components/ui/Icons";
import { studentAvatars } from "@/lib/data";

export default function HappyStudents() {
  return (
    <>
      <p className="text-base font-medium leading-[1.2] text-ink">Happy Students</p>
      <p className="mt-1 flex items-center gap-1 text-xs leading-[1.6] text-ink">
        4.5 <span className="text-muted">(240)</span>
        <StarIcon />
      </p>
      <div className="mt-2 flex items-center">
        {studentAvatars.map((a) => (
          <Image
            key={a.id}
            src={a.src}
            alt={a.alt}
            width={40}
            height={40}
            className="-ml-2 size-9 rounded-full border-2 border-white object-cover first:ml-0"
          />
        ))}
        <span className="-ml-2 flex size-10 items-center justify-center rounded-full bg-lime text-xs font-medium text-ink">
          2K+
        </span>
      </div>
    </>
  );
}