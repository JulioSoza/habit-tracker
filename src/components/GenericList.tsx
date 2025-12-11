// src/components/GenericList.tsx
import React from 'react';

export interface GenericListProps<T> {
  items: T[];
  renderItem: (item: T) => React.ReactNode;
}

const GenericList = <T,>({ items, renderItem }: GenericListProps<T>) => {
  if (!items.length) {
    return <p>No hay elementos.</p>;
  }

  return (
    <ul
      style={{
        listStyle: 'none',
        padding: 0,
        display: 'grid',
        gap: 10,
      }}
    >
      {items.map(renderItem)}
    </ul>
  );
};

export default GenericList;
