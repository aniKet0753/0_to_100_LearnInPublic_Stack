import { RecoilRoot, useRecoilSnapshot, useRecoilState, useRecoilValue, useSetRecoilState } from "recoil";
import { countState, componentselector } from './atom.js'


function App() {
  return <div>
    <RecoilRoot>
      <Buttons />
      <Counter />
      <IsEven />
    </RecoilRoot>
  </div>
}

function Buttons(){


  const setcount =useSetRecoilState(countState)

  function increasing(){
  setcount(c => c +1 )
   
}

function decrease(){
  setcount (c=> c-1 )
}


  return<div>
    <button onClick={increasing}>Increase</button>
    <button onClick={decrease}>Decrease</button>

  </div>
}

function Counter(){
  const count = useRecoilValue(countState)
  return <div>
    {count}
  </div>
}

function IsEven(){
  const even = useRecoilValue(componentselector)
  return <div>
    {even ? "even" : "odd"}
  </div>
}


export default App;
