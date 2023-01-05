import React from 'react';
import UseStateComponent from './Component Hooks/useState';
import UseEffectComponent from './Component Hooks/useEffect';
import UseContextComponent from './Component Hooks/UseContext';
import UseReducerComponent from './Component Hooks/UseReducer';
import UseRefComponent from './Component Hooks/useRef';
import CustomHookComponent from './Component Hooks/CustomHook';

function App() {
  return (
    <div>
      <h1>Use State Hook</h1>
      <UseStateComponent />

      <h1>Use Effect Hook</h1>
      <UseEffectComponent />

      <h1>Use Context Hook</h1>
      <UseContextComponent />

      <h1>Use Reducer Hook</h1>
      <UseReducerComponent />

      <h1>Use Ref Hook</h1>
      <UseRefComponent />

      <h1>Custom Hook</h1>
      <CustomHookComponent />
    </div>
  );
}

export default App;
