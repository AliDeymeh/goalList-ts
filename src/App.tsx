// import { useState } from 'react'
// import reactLogo from './assets/react.svg'
// import viteLogo from '/vite.svg'
import "./App.css";

import Header from "./components/header";
import AppleImage from "./assets/apple.png";
import { useState } from "react";
import CurseGoalList from "./components/cuorseGoalList";
import NewGoal from "./components/newGoal";
type CurseGoal = {
  title: string;
  description: string;
  id: number;
};
function App() {
  const [goals, setGoals] = useState<CurseGoal[]>([]);
  
  function handlerAddGoals(goal:string,summary:string) {
    setGoals((prev) => {
      const newGoal: CurseGoal = {
        id: Math.random(),
        title: goal,
        description: summary,
      };
      return [...prev, newGoal];
    });
  }
  const handlerDeleteGoal=(id:number)=>{
    setGoals((prev)=>prev.filter((x)=>x?.id!==id))
  }

  return (
    <>
      {/* <div>
        <a href="https://vitejs.dev" target="_blank">
          <img src={viteLogo} className="logo" alt="Vite logo" />
        </a>
        <a href="https://react.dev" target="_blank">
          <img src={reactLogo} className="logo react" alt="React logo" />
        </a>
      </div>
      <h1>Vite + React</h1>
      <div className="card">
        <button onClick={() => setCount((count) => count + 1)}>
          count is {count}
        </button>
        <p>
          Edit <code>src/App.tsx</code> and save to test HMR
        </p>
      </div>
      <p className="read-the-docs">
        Click on the Vite and React logos to learn more
      </p> */}
      <main>
        <Header image={{ src: AppleImage, alt: "pic one apples" }}>
          <h1>hi my name is ali deymeh</h1>
        </Header>
        {/* <button onClick={handlerAddGoals}>plus goal</button> */}
        <NewGoal handlerAddGoals={handlerAddGoals} />
        <CurseGoalList goals={goals} onDeleteGoal={handlerDeleteGoal} />
      </main>
    </>
  );
}

export default App;
