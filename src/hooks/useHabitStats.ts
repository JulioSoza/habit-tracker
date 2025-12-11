// src/hooks/useHabitStats.ts
import { useMemo } from 'react';
import type { Habit } from '../models/Habit';

export interface HabitStats {
  total: number;
  completed: number;
  progress: number; // 0-100
}

export function useHabitStats(habits: Habit[]): HabitStats {
  return useMemo(() => {
    const total = habits.length;
    const completed = habits.filter(h => h.completed).length;
    const progress = total === 0 ? 0 : Math.round((completed / total) * 100);

    return { total, completed, progress };
  }, [habits]);
}
