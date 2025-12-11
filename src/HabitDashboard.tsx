// src/HabitDashboard.tsx
import React from 'react';
import HabitForm from './components/HabitForm';
import HabitList from './components/HabitList';
import { useAppSelector } from './hooks/reduxHooks';
import { useHabitStats } from './hooks/useHabitStats';

const HabitDashboard: React.FC = () => {
  const habits = useAppSelector(state => state.habits);
  const { total, completed, progress } = useHabitStats(habits);

  return (
    <main style={{ maxWidth: 800, margin: '0 auto', padding: 16 }}>
      <h1>HabitTracker</h1>

      <HabitForm />
      <HabitList />

      <section style={{ marginTop: 24 }}>
        <h2>Estadísticas</h2>
        <div
          style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(3, 1fr)',
            gap: 12,
          }}
        >
          <Stat label="Total de hábitos" value={total} />
          <Stat label="Completados" value={completed} />
          <Stat label="Progreso" value={`${progress}%`} />
        </div>
      </section>
    </main>
  );
};

interface StatProps {
  label: string;
  value: number | string;
}

const Stat: React.FC<StatProps> = ({ label, value }) => (
  <div
    style={{
      border: '1px solid #e5e7eb',
      borderRadius: 8,
      padding: 12,
    }}
  >
      <div style={{ fontSize: 12, color: '#6b7280' }}>{label}</div>
      <div style={{ fontSize: 22, fontWeight: 700 }}>{value}</div>
  </div>
);

export default HabitDashboard;
