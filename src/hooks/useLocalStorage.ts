import { useState } from 'react';

/** Persisted state. Falls back to `initial` when storage is unavailable
 *  (private windows, blocked site data) instead of throwing. */
export function useLocalStorage<T>(key: string, initial: T) {
  const [value, setValue] = useState<T>(() => {
    try {
      const stored = window.localStorage.getItem(key);
      return stored !== null ? (JSON.parse(stored) as T) : initial;
    } catch {
      return initial;
    }
  });

  const store = (next: T) => {
    setValue(next);
    try {
      window.localStorage.setItem(key, JSON.stringify(next));
    } catch {
      // Non-fatal: the theme just won't persist across visits.
    }
  };

  return [value, store] as const;
}
