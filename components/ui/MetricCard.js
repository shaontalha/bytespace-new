export default function MetricCard({ title, subtitle, value, progress, badge, className = "" }) {
  return (
    <div className={`absolute z-[5] rounded-xl bg-primary p-4 text-white ${className}`}>
      <p className="text-base font-medium leading-[1.2]">{title}</p>
      <p className="text-[10px] leading-[1.6] text-white/80">{subtitle}</p>
      <p className="mt-2 whitespace-nowrap font-heading text-xl font-semibold leading-[1.2]">
        {value}
      </p>
      {progress != null && (
        <div className="mt-2 h-2 rounded-full bg-white/90">
          <div className="h-full rounded-full bg-lime" style={{ width: `${progress}%` }} />
        </div>
      )}
      {badge && (
        <span className="mt-2 inline-block rounded-full bg-lime px-2 py-0.5 text-[10px] font-medium text-ink">
          {badge}
        </span>
      )}
    </div>
  );
}