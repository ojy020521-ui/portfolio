export default function SectionTitle({ index, children }) {
  return (
    <h2 className="mb-12 flex items-baseline gap-3.5 text-2xl font-bold tracking-tight">
      <span className="text-sm font-bold text-accent">{index}</span>
      {children}
    </h2>
  );
}
