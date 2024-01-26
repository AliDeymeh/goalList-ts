interface CoursePropsType {
  title: string;
  des: string;
  id:number;
  onDelete:(id:number)=>void;
}

const CourseGoals = ({ id,title, des, onDelete }: CoursePropsType) => {
  return (
    <article>
      <div>
        <h2>{title}</h2>
        <p>{des}</p>
      </div>
      <button onClick={() => onDelete(id)}>delete</button>
    </article>
  );
};
 
export default CourseGoals;