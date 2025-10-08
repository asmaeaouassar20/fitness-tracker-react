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
    
   if(tasksList && tasksList.length>0){
     return (
        <div className="box">
           
            <h2>
                {incompletedTasks>0 && (
                   <>Il te reste encore <span className="important">{incompletedTasks}</span> activitée à faire ...</> 
                )}
                {incompletedTasks ===0 && (
                    <>Génial ! tu as terminé tes exercices</>
                )}
            </h2>

            {tasksList && tasksList.length>0  &&  (
                <ul>
                    {tasksListUtil}
                </ul>
            )}

        </div>
    )
   }
   return (
        <div className="box">
            <h2> vous n'avez pas encore d'activités à faire</h2>
        </div>
   )
}