import { useState } from 'react';

export const useArray = <T>(arr: Array<T>) => {
  const [value, setValue] = useState<Array<T>>(arr);
  const add = (obj: T) => {
    setValue([...value, obj]);
  };
  const clear = () => {
    setValue([]);
  };
  const removeIndex = (index: number) => {
    const ar = [...value];
    ar.splice(index, 1);
    setValue(ar);
  };
  return {
    value,
    clear,
    removeIndex,
    add,
  };
};
