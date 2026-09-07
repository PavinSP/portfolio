type Props = { eyebrow: string; title: string; subtitle?: string };

const SectionHeader = ({ eyebrow, title, subtitle }: Props) => (
  <header className="section-header">
    <span className="section-eyebrow">{eyebrow}</span>
    <h2 className="section-title">{title}</h2>
    {subtitle && <p className="section-subtitle">{subtitle}</p>}
  </header>
);

export default SectionHeader;
