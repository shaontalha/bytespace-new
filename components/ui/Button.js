import Link from "next/link";

const variants = {
  primary: "bg-lime text-ink hover:brightness-95",
  outline: "border border-white/40 text-white hover:bg-white/10",
};

export default function Button({
  children,
  variant = "primary",
  className = "",
  href,
  ...props
}) {
  const classes = `inline-flex h-[46px] cursor-pointer items-center justify-center rounded-full px-6 text-base font-medium transition ${variants[variant]} ${className}`;

  if (href) {
    return (
      <Link href={href} className={classes} {...props}>
        {children}
      </Link>
    );
  }

  return (
    <button className={classes} {...props}>
      {children}
    </button>
  );
}