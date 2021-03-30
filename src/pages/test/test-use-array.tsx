import React from 'react';
import { useArray } from '../../utils/hooks/useArray';

let curIdx = 0;

type A = { name: string; age: number };
const TestUseArray: React.FC = () => {
  const person: Array<A> = [];
  const { value, clear, removeIndex, add } = useArray(person);
  return (
    <div>
      <button onClick={() => add({ age: (curIdx += 1), name: 'freedom.yi' })}>add john</button>
      <button onClick={() => clear()}>Clear All</button>
      <div>
        {value.map((item, index) => (
          <div key={index}>
            <span>{index}</span>
            <span>{item.name}</span>
            <span>{item.age}</span>
            <button onClick={() => removeIndex(index)}>Remove Current</button>
          </div>
        ))}
      </div>
    </div>
  );
};

export default TestUseArray;
