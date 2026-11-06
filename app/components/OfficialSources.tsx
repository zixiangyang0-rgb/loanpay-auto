type SourceLink = {
  label: string;
  href: string;
  desc: string;
};

type OfficialSourcesProps = {
  gov: SourceLink;
  authority: SourceLink;
};

/**
 * Unified "Official sources" box for all auto content pages.
 * Exactly 2 outbound links: 1 x .gov + 1 x authoritative (edmunds/kbb/manufacturer).
 * Placed directly above the "Related guides" interlink nav — never inside it.
 */
export default function OfficialSources({ gov, authority }: OfficialSourcesProps) {
  return (
    <section
      aria-label="Official sources"
      className="mt-8 rounded-2xl border border-emerald-200/20 bg-emerald-200/5 p-5"
    >
      <p className="text-sm font-semibold text-emerald-100">Official sources</p>
      <ul className="mt-3 flex flex-col gap-2 text-sm leading-relaxed text-slate-300">
        <li>
          <a
            href={gov.href}
            target="_blank"
            rel="noopener noreferrer"
            className="text-amber-200 underline underline-offset-2"
          >
            {gov.label}
          </a>{" "}
          — {gov.desc}
        </li>
        <li>
          <a
            href={authority.href}
            target="_blank"
            rel="noopener noreferrer"
            className="text-amber-200 underline underline-offset-2"
          >
            {authority.label}
          </a>{" "}
          — {authority.desc}
        </li>
      </ul>
    </section>
  );
}
