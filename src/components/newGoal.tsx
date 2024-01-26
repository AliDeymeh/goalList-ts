import {useRef, type FormEvent } from "react";
type InputData = {
  handlerAddGoals: (goal:string,summary:string) => void;
};
const NewGoal = (props: InputData) => {
  const goal = useRef<HTMLInputElement>(null);
  const summary = useRef<HTMLInputElement>(null);
  const handlerSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    // new FormData(e.currentTargets)
    const goalData = goal.current!.value;
    const summaryData = summary.current!.value;
    e.currentTarget.reset()
    props.handlerAddGoals(goalData,summaryData)
  };

  return (
    <form onSubmit={handlerSubmit}>
      <p>
        <label htmlFor="goal">Your Goal</label>
        <input type="text" id="goal" ref={goal} />
      </p>
      <p>
        <label htmlFor="summary">Summary</label>
        <input type="text" id="summary" ref={summary} />
      </p>
      <p>
        <button>Add Goal</button>
      </p>
    </form>
  );
};

export default NewGoal;
