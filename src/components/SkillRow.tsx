import TechIcon from './TechIcon';
import { findIcon } from '../data/techIcons';

/** Skill lines are comma-separated tool names ("PyTorch, OpenCV, NumPy"), so
 *  show a logo for each part that has one. */
const SkillRow = ({ text }: { text: string }) => {
  const parts = text.split(',').map((p) => p.trim());

  // Two names can share a mark (DistilBERT is a Hugging Face model), so
  // de-duplicate by resolved icon rather than by name.
  const seen = new Set<string>();
  const known = parts.filter((p) => {
    const icon = findIcon(p);
    if (!icon || seen.has(icon.title)) return false;
    seen.add(icon.title);
    return true;
  });

  return (
    <li>
      {known.length > 0 && (
        <span className="skill-icons">
          {known.map((p) => (
            <TechIcon key={p} tech={p} size={15} />
          ))}
        </span>
      )}
      {text}
    </li>
  );
};

export default SkillRow;
