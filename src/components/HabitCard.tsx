// src/components/HabitCard.tsx
import React from 'react';
import type { Habit } from '../models/Habit';
import { formatHabit } from '../models/Habit';

export interface HabitCardProps {
  habit: Habit;
  onToggle(): void;
  onDelete(): void;
}

const HabitCard: React.FC<HabitCardProps> = ({ habit, onToggle, onDelete }) => {
  const textDecoration = habit.completed ? 'line-through' : 'none';
  const badgeBg = habit.completed ? '#16a34a' : '#e5e7eb';
  const badgeColor = habit.completed ? '#fff' : '#111827';

  return (
    <li
      style={{
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'space-between',
        gap: 12,
        padding: '10px 12px',
        border: '1px solid #e5e7eb',
        borderRadius: 8,
      }}
    >
      <div style={{ flex: 1 }}>
        {/* Nombre del hábito, se tacha si está completado */}
        <div style={{ fontWeight: 600, textDecoration }}>{habit.name}</div>

        {/* Texto formateado: Hábito: {name} – Categoría... */}
        <div style={{ fontSize: 12, color: '#6b7280' }}>{formatHabit(habit)}</div>
      </div>

      {/* Badge que cambia si está completado */}
      <span
        style={{
          padding: '2px 8px',
          borderRadius: 999,
          backgroundColor: badgeBg,
          color: badgeColor,
          fontSize: 12,
        }}
      >
        {habit.completed ? 'Completado' : 'Pendiente'}
      </span>

      {/* Botones de acción */}
      <div style={{ display: 'flex', gap: 8 }}>
        <button type="button" onClick={onToggle}>
          {habit.completed ? 'Desmarcar' : 'Completar'}
        </button>
        <button
          type="button"
          onClick={onDelete}
          style={{ color: '#dc2626' }}
        >
          Eliminar
        </button>
      </div>
    </li>
  );
};

export default HabitCard;
