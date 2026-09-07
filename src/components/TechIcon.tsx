import { COLOR_OVERRIDES, findIcon } from '../data/techIcons';
import { useTheme } from '../contexts/themeStore';

type Props = { tech: string; size?: number };

const TechIcon = ({ tech, size = 14 }: Props) => {
  const { theme } = useTheme();
  const icon = findIcon(tech);
  if (!icon) return null;

  const override = COLOR_OVERRIDES[icon.title];
  const color = theme === 'dark' && override ? override : `#${icon.hex}`;

  return (
    <svg
      className="tech-icon"
      role="img"
      aria-hidden="true"
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill={color}
    >
      <path d={icon.path} />
    </svg>
  );
};

export default TechIcon;
