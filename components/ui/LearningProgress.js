export default function LearningProgress({ value = 55 }) {
  return (
    <>
      <p className="text-sm font-medium leading-[1.2] text-ink">Learning Progress</p>
      <p className="mt-2 font-heading text-5xl font-semibold leading-[1.2] tracking-[-0.01em] text-ink">
        {value}%
      </p>
      <div className="mt-2 h-2 rounded-full bg-mist">
        <div className="h-full rounded-full bg-lime" style={{ width: `${value}%` }} />
      </div>
    </>
  );
}