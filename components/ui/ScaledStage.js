// Children are positioned in px inside a width x height "stage".
// The parent sets --s (scale) per breakpoint, e.g. "[--s:0.6] md:[--s:1]".
export default function ScaledStage({ width, height, className = "", children }) {
  return (
    <div
      className={`relative ${className}`}
      style={{
        width: `calc(${width}px * var(--s))`,
        height: `calc(${height}px * var(--s))`,
      }}
    >
      <div
        className="absolute left-0 top-0 origin-top-left"
        style={{ width, height, transform: "scale(var(--s))" }}
      >
        {children}
      </div>
    </div>
  );
}