//we use recoil laberary just to minimize the number of recoil happen inside the reacr cus 
//for better or scalable react app er need to minimize the number for recoil in react 
import React from 'react';
import { RecoilRoot, atom, useRecoilValue, useSetRecoilState } from 'recoil';

const countState = atom({
  key: 'countState',
  default: 0,
});

function Increase() {
  const setCount = useSetRecoilState(countState);
  return (
    <button onClick={() => setCount(c => c + 1)}>Increase</button>
  );
}

function Decrease() {
  const setCount = useSetRecoilState(countState);
  return (
    <button onClick={() => setCount(c => c - 1)}>Decrease</button>
  );
}

function Value() {
  const count = useRecoilValue(countState);
  return <p>Count: {count}</p>;
}

function Parent() {
  return (
    <div style={{ display: 'flex', gap: '10px', alignItems: 'center' }}>
      <Increase />
      <Decrease />
      <Value />
    </div>
  );
}

export default function App() {
  return (
    <RecoilRoot>
      <Parent />
    </RecoilRoot>
  );
}
