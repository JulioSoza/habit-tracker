// src/components/HabitList.tsx
import React from 'react';
import { useAppDispatch, useAppSelector } from '../hooks/reduxHooks';
import type { Habit } from '../models/Habit';
import GenericList from './GenericList';
import HabitCard from './HabitCard';
import { toggleCompleted, removeHabit } from '../features/habits/habitsSlice';

const HabitList: React.FC = () => {
  const dispatch = useAppDispatch();
  const habits = useAppSelector(state => state.habits);

  if (!habits.length) {
    return (
      <section>
        <h2>Mis hábitos</h2>
        <p>No existen hábitos aún. Crea uno con el formulario.</p>
      </section>
    );
  }

  return (
    <section>
      <h2>Mis hábitos</h2>
      <GenericList<Habit>
        items={habits}
        renderItem={(habit) => (
          <HabitCard
            key={habit.id}
            habit={habit}
            onToggle={() => dispatch(toggleCompleted({ id: habit.id }))}
            onDelete={() => dispatch(removeHabit({ id: habit.id }))}
          />
        )}
      />
    </section>
  );
};

export default HabitList;
