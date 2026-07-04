export function PartnerLogos({
  groups,
}: {
  groups: Array<{ label: string; names: string[] }>;
}) {
  return (
    <div className="grid gap-8 md:grid-cols-3">
      {groups.map((g) => (
        <div key={g.label}>
          <div className="text-[10px] uppercase tracking-[0.2em] text-muted-foreground">
            {g.label}
          </div>
          <div className="mt-3 flex flex-wrap gap-3">
            {g.names.map((n) => (
              <div
                key={n}
                className="rounded-md border border-[var(--border)] bg-white px-4 py-3 text-sm font-medium text-[var(--goable-black)]"
              >
                {n}
              </div>
            ))}
          </div>
        </div>
      ))}
    </div>
  );
}
