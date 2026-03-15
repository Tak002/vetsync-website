interface BadgeProps {
  children: React.ReactNode;
}

export default function Badge({ children }: BadgeProps) {
  return (
    <span className="inline-block rounded-full bg-primary-100 px-4 py-1.5 text-sm font-semibold text-primary-700">
      {children}
    </span>
  );
}
