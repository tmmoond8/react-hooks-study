import React, { useState } from 'react';
import UseEffetComponent from '../components/UseEffetComponent';

const UseEffectPage = () => {
  const [count, setCount] = useState(0);
  return (
    <div>
      <button onClick={() => (setCount(count + 1))} > click</button>
      <UseEffetComponent friend={{ id: 12 }}/>
    </div>
  );
};

export default UseEffectPage;
