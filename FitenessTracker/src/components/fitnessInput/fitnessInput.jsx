// ce composant sera utilisé pour afficher le champ de saisie de l'exercice à faire
import { useState } from 'react';
import styles from './FitnessInput.module.css';
export const FitnessInput = ({ addTask }) => {

    const [taskTitle,setTaskTitle] = useState("");
  

    const handleInputChange = (e) => {
        setTaskTitle(e.target.value);
    };
    const handleAddTask = (e) => {
        e.preventDefault();
        if(taskTitle.trim()){
            addTask(taskTitle);
            setTaskTitle("");
        }
    }

    return (
        <div className={`box ${styles.element}`}>
            <h2>Ajoute ta prochaine activité</h2>
            <form className={styles.container} onSubmit={handleAddTask}>
                <input
                    type="text"
                    className={styles.input}
                    placeholder="Indiquez un titre pour votre activité"
                    onChange={handleInputChange}
                    value={taskTitle}
                />
                <button className={styles.addBtn} type='submit'>Ajouter</button>
            </form>
            
        </div>
    );
};