import { useState } from 'react';
import { GitHubCalendar } from 'react-github-calendar';
import 'react-github-calendar/tooltips.css';
import { useTheme } from '../contexts/themeStore';
import { brand } from '../data/contributionTheme';

type Props = {
  username: string;
  /** Earliest year to offer as a filter; defaults to 4 years back. */
  since?: number;
};

const ContributionGraph = ({ username, since }: Props) => {
  const { theme } = useTheme();
  const [year, setYear] = useState<number | undefined>(undefined);

  const today = new Date().getFullYear();
  const from = since ?? today - 4;
  const years = Array.from({ length: today - from + 1 }, (_, i) => today - i);

  return (
    <div className="contrib">
      <div className="contrib-card card">
        <GitHubCalendar
          username={username}
          theme={brand}
          colorScheme={theme}
          blockSize={12}
          blockMargin={4}
          fontSize={13}
          year={year}
          // The API is a free third-party service; if it is down or the user
          // has no data, show a readable message instead of a broken graph.
          errorMessage="Couldn't load GitHub contributions right now."
        />
      </div>

      <div className="contrib-years">
        {years.map((y) => {
          const active = (year ?? today) === y;
          return (
            <button
              key={y}
              className={`contrib-year ${active ? 'is-active' : ''}`}
              aria-pressed={active}
              onClick={() => setYear(y === year ? undefined : y)}
            >
              {y}
            </button>
          );
        })}
      </div>
    </div>
  );
};

export default ContributionGraph;
