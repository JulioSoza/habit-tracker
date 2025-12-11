HabitTracker 

Aplicación web para administrar hábitos personales, desarrollada con **React + TypeScript** y **Redux Toolkit**.  
Permite crear hábitos, marcarlos como completados y ver estadísticas de progreso.

Proyecto realizado como actividad de _Habit Tracker_ (Formik + Yup + Redux) del curso de Desarrollo Web.

---

## 🚀 Tecnologías utilizadas

- **Vite + React + TypeScript**
- **Redux Toolkit** y **react-redux**
- **Formik** para manejo de formularios
- **Yup** para validación
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

## Instalar dependencias:

npm install

## Ejecutar el servidor de desarrollo:

npm run dev

""Abrir el navegador en la URL que muestra Vite, normalmente:
http://localhost:5173

## Estructura principal del proyecto
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

## Funcionalidades principales
1. Tipado del modelo hábito

Archivo: src/models/Habit.ts

interface Habit con los campos:

id: string

name: string

category: "health" | "productivity" | "mindset" | "fitness" | "other"

frequency: "daily" | "weekly" | "monthly"

completed: boolean

Función utilitaria:

formatHabit(h: Habit): string;
// Devuelve: "Hábito: {name} – Categoría: {category} – Frecuencia: {frequency}"


2. Slice de Redux Toolkit para hábitos

Archivo: src/features/habits/habitsSlice.ts

Maneja una lista de Habit[] como estado.

Acciones:

addHabit → agrega un hábito.

toggleCompleted → alterna el campo completed.

removeHabit → elimina un hábito por id.

3. Componente HabitCard

Archivo: src/components/HabitCard.tsx

Recibe un Habit y callbacks onToggle y onDelete.

Muestra:

Nombre del hábito.

Categoría y frecuencia usando formatHabit.

Botón para marcar como completado / incompleto.

Botón para eliminar el hábito.

Si completed === true:

Nombre tachado.

Badge visual verde con texto “Completado”.

4. Lista genérica con TypeScript – GenericList

Archivo: src/components/GenericList.tsx

Componente genérico GenericList<T> que recibe:

items: T[]

renderItem: (item: T) => React.ReactNode

Renderiza un <ul> con cada elemento generado por renderItem.

Se utiliza en HabitList para mostrar la lista de hábitos.

5. Hook personalizado useHabitStats (useMemo)

Archivo: src/hooks/useHabitStats.ts

Recibe un arreglo de Habit[].

Calcula usando useMemo:

total → número total de hábitos.

completed → total de hábitos completados.

progress → porcentaje de avance (0–100).

Se usa en HabitDashboard para mostrar estadísticas.

6. Formulario con Formik para crear hábitos

Archivo: src/components/HabitForm.tsx

Usa Formik para controlar el formulario y Yup para validar.

Campos:

name (string, requerido, mínimo 3 caracteres).

category (select con los valores válidos).

frequency (select con las frecuencias válidas).

Al enviar el formulario:

Crea un objeto Habit con completed: false e id generado.

Despacha addHabit al store de Redux.

Resetea el formulario con resetForm().

7. Componente de lista de hábitos con Redux – HabitList

Archivo: src/components/HabitList.tsx

Obtiene los hábitos desde Redux usando useAppSelector.

Si no existen hábitos, muestra un mensaje:

“No existen hábitos aún. Crea uno con el formulario.”

Usa GenericList<Habit> y HabitCard para mostrar cada hábito.

Pasa a cada HabitCard:

onToggle → despacha toggleCompleted.

onDelete → despacha removeHabit.

8. Componente principal – HabitDashboard

Archivo: src/HabitDashboard.tsx

Integra:

<HabitForm /> para crear hábitos.

<HabitList /> para mostrarlos.

Sección de Estadísticas que usa useHabitStats para mostrar:

Total de hábitos.

Completados.

Progreso en porcentaje.

App.tsx se encarga de renderizar HabitDashboard y main.tsx envuelve la aplicación con el <Provider store={store}>.

✅ Cómo se cumple la rúbrica

Tipado del modelo hábito
src/models/Habit.ts contiene la interfaz Habit, tipos para categoría/frecuencia y la función formatHabit.

Slice de Redux Toolkit para hábitos
src/features/habits/habitsSlice.ts maneja la lista de hábitos y las acciones addHabit, toggleCompleted, removeHabit.

Componente HabitCard
src/components/HabitCard.tsx presenta la información de un hábito y permite marcarlo como completado o eliminarlo, con estilo diferente según completed.

Lista genérica con TypeScript – GenericList
src/components/GenericList.tsx implementa una lista genérica <GenericList<T>> que recibe items y renderItem.

Hook personalizado useHabitStats (useMemo)
src/hooks/useHabitStats.ts calcula total, completados y progreso.

Formulario con Formik para crear hábitos
src/components/HabitForm.tsx usa Formik + Yup, valida longitud mínima de 3 caracteres y resetea el formulario al enviar.

Componente de lista de hábitos con Redux
src/components/HabitList.tsx usa Redux para obtener, listar y manipular los hábitos.

Componente principal HabitDashboard
src/HabitDashboard.tsx integra formulario, lista y estadísticas, funcionando como panel principal de la aplicación.
