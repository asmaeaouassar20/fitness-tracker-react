import { FitnessItem } from "../fitnessItem/fitnessItem"

// import styles from "./FitnessList.module.css";
export const FitnessList = (
   { tasksList,
    incompletedTasks,
    editTask,
    deleteTask,
    }
) => {
    
    const tasksListUtil = tasksList.map( (task) => (
        <FitnessItem key={task.id} task={task} editTask={editTask} deleteTask={deleteTask} />
    ));
    
    return (
        <div className="box">
            <h2> Il te reste encore {incompletedTasks} activitées à faire</h2>
            
            {tasksList && tasksList.length>0  &&  (
                <ul>
                    {tasksListUtil}
                </ul>
            )}

        </div>
    )
}