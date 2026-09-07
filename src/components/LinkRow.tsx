import type { Link } from '../data/types';
import { resolve } from '../utils/assetUrl';
import { LinkIcon } from './Icons';

const LinkRow = ({ links }: { links?: Link[] }) => {
  if (!links?.length) return null;

  return (
    <div className="link-row">
      {links.map((link) => (
        <a
          key={link.url}
          className={link.icon === 'demo' ? 'link-demo' : undefined}
          href={resolve(link.url)}
          target="_blank"
          rel="noopener noreferrer"
        >
          <LinkIcon icon={link.icon} /> {link.label}
        </a>
      ))}
    </div>
  );
};

export default LinkRow;
