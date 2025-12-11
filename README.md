# HabitTracker ✅

Aplicación web para administrar hábitos personales, desarrollada con **React + TypeScript** y **Redux Toolkit**.  
Permite crear hábitos, marcarlos como completados y ver estadísticas de progreso.

Proyecto realizado como actividad de **Habit Tracker (Formik + Yup + Redux)** del curso de Desarrollo Web.

---

## 🚀 Tecnologías utilizadas

- Vite + React + TypeScript  
- Redux Toolkit y react-redux  
- Formik para manejo de formularios  
- Yup para validación  
- Hooks personalizados de React (`useMemo`)  
- Programación genérica con TypeScript  

---

## ⚙️ Requisitos

- Node.js 18+  
- npm  

---

## 🛠️ Instalación y ejecución

Clonar el repositorio y entrar a la carpeta del proyecto:

```bash
git clone <URL_DEL_REPO>
cd habit-tracker
Instalar dependencias:


npm install
Ejecutar el servidor de desarrollo:


npm run dev
Abrir el navegador en la URL que muestra Vite, normalmente:


http://localhost:5173
📁 Estructura principal del proyecto

src/
  components/
    GenericList.tsx      # Lista genérica con TypeScript
    HabitCard.tsx        # Presentación visual de un hábito
    HabitForm.tsx        # Formulario para crear hábitos (Formik + Yup)
    HabitList.tsx        # Lista de hábitos conectada a Redux
  features/
    habits/
      habitsSlice.ts     # Slice de Redux Toolkit para hábitos
  hooks/
    reduxHooks.ts        # Hooks tipados de Redux (useAppDispatch, useAppSelector)
    useHabitStats.ts     # Hook personalizado para estadísticas de hábitos
  models/
    Habit.ts             # Tipado del modelo Habit + función formatHabit
  HabitDashboard.tsx     # Componente principal que integra todo
  App.tsx                # Renderiza HabitDashboard
  main.tsx               # Provider de Redux y punto de entrada de React
  store.ts               # Configuración del store de Redux
🧩 Funcionalidades principales
1. Tipado del modelo hábito
Archivo: src/models/Habit.ts

interface Habit con los campos:

id: string

name: string

category: "health" | "productivity" | "mindset" | "fitness" | "other"

frequency: "daily" | "weekly" | "monthly"

completed: boolean

Función utilitaria:

ts

formatHabit(h: Habit): string;
// Devuelve: "Hábito: {name} – Categoría: {category} – Frecuencia: {frequency}"
2. Slice de Redux Toolkit para hábitos
Archivo: src/features/habits/habitsSlice.ts

Maneja una lista de Habit[] como estado.

Acciones:

addHabit → agrega un hábito.

toggleCompleted → alterna el campo completed.

removeHabit → elimina un hábito por id.

