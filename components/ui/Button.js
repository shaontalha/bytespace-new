const variants = {
  primary: "bg-lime text-ink hover:brightness-95",
  outline: "border border-white/40 text-white hover:bg-white/10",
};

export default function Button({
  children,
  variant = "primary",
  className = "",
  ...props
}) {
  return (
    <button
      className={`inline-flex h-[46px] cursor-pointer items-center justify-center rounded-full px-6 text-lg font-medium transition ${variants[variant]} ${className}`}
      {...props}
    >
      {children}
    </button>
  );
}