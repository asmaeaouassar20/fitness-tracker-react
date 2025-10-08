import styles from "./FitnessItem.module.css";
export const FitnessItem = ( {
    task,
    editTask,
    deleteTask
}) => {
    return (
        <li 
            className={`${styles.itemStyle} ${task?.completed ? styles.succes : styles.defaut}`}
            onClick={ ()=> editTask(task.id, !task.completed) }
        >
            <div className={styles.numberAndTitle}>
                <div className={`${styles.id} ${task?.completed ? styles.idSucces : styles.idDefaut}`}>
                    {task.id}
                </div>
                <div className={task?.completed ? styles.contentsucces : styles.contentDefaut}>
                    {task.title}
                </div>
            </div>
            <button className={styles.deleteBtn}>X</button>
        </li>
    );
};