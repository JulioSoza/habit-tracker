import React from 'react';
import { Formik, Form, Field, ErrorMessage } from 'formik';
import * as Yup from 'yup';
import { useAppDispatch } from '../hooks/reduxHooks';
import { addHabit } from '../features/habits/habitsSlice';
import type { Habit, HabitCategory, HabitFrequency } from '../models/Habit';

const categories: HabitCategory[] = ['health', 'productivity', 'mindset', 'fitness', 'other'];
const frequencies: HabitFrequency[] = ['daily', 'weekly', 'monthly'];

interface HabitFormValues {
  name: string;
  category: HabitCategory;
  frequency: HabitFrequency;
}

const validationSchema = Yup.object({
  name: Yup.string().min(3, 'Mínimo 3 caracteres').required('Requerido'),
  category: Yup.mixed<HabitCategory>().oneOf(categories).required('Requerido'),
  frequency: Yup.mixed<HabitFrequency>().oneOf(frequencies).required('Requerido'),
});

const HabitForm: React.FC = () => {
  const dispatch = useAppDispatch();

  const initialValues: HabitFormValues = {
    name: '',
    category: 'health',
    frequency: 'daily',
  };

  return (
    <section style={{ marginBottom: 16 }}>
      <h2>Crear hábito</h2>

      <Formik<HabitFormValues>
        initialValues={initialValues}
        validationSchema={validationSchema}
        onSubmit={(values, helpers) => {
          const newHabit: Habit = {
            id: Date.now().toString(),
            name: values.name.trim(),
            category: values.category,
            frequency: values.frequency,
            completed: false,
          };

          dispatch(addHabit(newHabit));
          helpers.resetForm();
        }}
      >
        {({ isSubmitting }) => (
          <Form style={{ display: 'grid', gap: 10, maxWidth: 400 }}>
            <label>
              Nombre
              <Field name="name" placeholder="Leer 10 páginas" />
              <ErrorMessage
                name="name"
                component="div"
                style={{ color: 'red', fontSize: 12 }}
              />
            </label>

            <label>
              Categoría
              <Field as="select" name="category">
                {categories.map(cat => (
                  <option key={cat} value={cat}>
                    {cat}
                  </option>
                ))}
              </Field>
            </label>

            <label>
              Frecuencia
              <Field as="select" name="frequency">
                {frequencies.map(freq => (
                  <option key={freq} value={freq}>
                    {freq}
                  </option>
                ))}
              </Field>
            </label>

            <button type="submit" disabled={isSubmitting}>
              Añadir hábito
            </button>
          </Form>
        )}
      </Formik>
    </section>
  );
};

export default HabitForm;
