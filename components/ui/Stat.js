export default function Stat({ value, label }) {
  return (
    <div>
      <p className="font-heading text-4xl font-medium leading-[44px] tracking-[-0.01em] text-primary">
        {value}
      </p>
      <p className="text-lg leading-[1.6] text-ink">{label}</p>
    </div>
  );
}