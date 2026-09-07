import { useCountUp } from '../hooks/useCountUp';
import { useReveal } from '../hooks/useReveal';
import { experience, projects, skills } from '../data/portfolio';

type Stat = { value: number; suffix?: string; label: string };

const Stat = ({ stat, active }: { stat: Stat; active: boolean }) => {
  const shown = useCountUp(stat.value, active);
  return (
    <div className="stat">
      <span className="stat-value">
        {shown.toLocaleString()}
        {stat.suffix}
      </span>
      <span className="stat-label">{stat.label}</span>
    </div>
  );
};

const StatsRow = () => {
  const { ref, shown } = useReveal();

  // Derived from the content config so these can never drift out of date.
  const projectCount = projects.reduce((n, group) => n + group.projects.length, 0);
  const skillCount = skills
    .filter((group) => group.title !== 'Certifications & Courses')
    .reduce((n, group) => n + group.skills.length, 0);
  const certCount =
    skills.find((group) => group.title === 'Certifications & Courses')?.skills.length ?? 0;

  const stats: Stat[] = [
    { value: projectCount, label: 'Projects & publications' },
    { value: skillCount, suffix: '+', label: 'Tools & frameworks' },
    { value: experience.length, label: 'Industry roles' },
    { value: certCount, label: 'Certifications' },
  ];

  return (
    <div ref={ref} className={`stats-row ${shown ? 'is-visible' : ''}`}>
      {stats.map((stat) => (
        <Stat key={stat.label} stat={stat} active={shown} />
      ))}
    </div>
  );
};

export default StatsRow;
