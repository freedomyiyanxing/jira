import React from 'react';
import './App.css';
// import { useDebounce } from './utils/hooks';
import './test/index';

function App() {
  const [str, setStr] = React.useState('');
  // const debouncedValue = useDebounce(str, 1000);
  //
  // React.useEffect(() => {
  //   console.log('------>', str);
  // }, [debouncedValue]);

  return (
    <div className="App">
      <input type="text" value={str} onChange={(e) => setStr(e.target.value)} />
    </div>
  );
}

export default App;
