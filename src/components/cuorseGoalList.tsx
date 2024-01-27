import CourseGoals from "./courseGoals";
import InfoBox from "./infoBox";
import {type ReactNode} from "react"
type CurseGoal = {
  goals:{title: string,
  description: string,
  id: number}[];
  onDeleteGoal:(id:number)=>void;
};
const CurseGoalList = (props:CurseGoal) => {
  if(props.goals.length===0){
    return <InfoBox mode="hint">you have no course </InfoBox>;
  }
  let warningBox:ReactNode;
  if(props.goals.length>=4){
    warningBox = (
      <InfoBox mode="warning" severity={props.goals.length>=2?"medium":"high"}>you a lot of goal dot n push any more </InfoBox>
    );
  }
  return (
    <>
    {warningBox}
      <ul>
        {props.goals.map((item) => (
          <li key={item.id}>
            <CourseGoals
              title={item.title}
              id={item.id}
              des={item.description}
              onDelete={props.onDeleteGoal}
            />
          </li>
        ))}
      </ul>
    </>
  );
}
 
export default CurseGoalList;