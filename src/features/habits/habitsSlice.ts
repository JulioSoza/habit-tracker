// src/features/habits/habitsSlice.ts
import { createSlice } from '@reduxjs/toolkit';
import type { Habit } from '../../models/Habit';

export type HabitsState = Habit[];

const initialState: HabitsState = [];

// tipo auxiliar solo para no repetir
type IdPayload = { id: string };

const habitsSlice = createSlice({
  name: 'habits',
  initialState,
  reducers: {
    // Agregar un hábito a la lista
    addHabit(state, action: { payload: Habit }) {
      state.push(action.payload);
    },

    // Alternar el campo "completed" de un hábito
    toggleCompleted(state, action: { payload: IdPayload }) {
      const habit = state.find(h => h.id === action.payload.id);
      if (habit) {
        habit.completed = !habit.completed;
      }
    },

    // Eliminar un hábito por id
    removeHabit(state, action: { payload: IdPayload }) {
      const index = state.findIndex(h => h.id === action.payload.id);
      if (index !== -1) {
        state.splice(index, 1);
      }
    },
  },
});

export const { addHabit, toggleCompleted, removeHabit } = habitsSlice.actions;
export default habitsSlice.reducer;
