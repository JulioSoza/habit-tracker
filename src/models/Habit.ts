// src/models/Habit.ts

export type HabitCategory = 'health' | 'productivity' | 'mindset' | 'fitness' | 'other';

export type HabitFrequency = 'daily' | 'weekly' | 'monthly';

export interface Habit {
  id: string;
  name: string;
  category: HabitCategory;
  frequency: HabitFrequency;
  completed: boolean;
}

// Función utilitaria 
export function formatHabit(h: Habit): string {
  return `Hábito: ${h.name} – Categoría: ${h.category} – Frecuencia: ${h.frequency}`;
}
