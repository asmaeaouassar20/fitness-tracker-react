import { Header } from "./header/header";
import { FitnessInput } from "./fitnessInput/fitnessInput";
import {FitnessList} from "./fitnessList/fitnessList";
import { Footer } from "./footer/footer";
import { useState } from "react";

export const FitnessContainer = () => {

    const [tasksList, setTasksList] = useState([]);

    console.log(tasksList);

    const addTask = (title) => {
        const newTask = {
            id : tasksList.length + 1,
            title : title,
            completed : false
        };
        setTasksList([...tasksList, newTask]); // l’opérateur spread ...
    }

    const editTask = (id, completedValue) => {
        setTasksList(
            tasksList.map((task) => {
                return task.id === id ? {...task, completed: completedValue} : task
            })
        );
    }

    const deleteTask = (id) => {
        setTasksList(tasksList.filter((task)=>task.id!==id));
    }


    const getTaskCounts = () => {
        const completedTasks = tasksList.filter((task) => task.completed).length;
        const incompletedTasks = tasksList.length - completedTasks;
        return {completedTasks, incompletedTasks};
    }

    const {completedTasks, incompletedTasks} = getTaskCounts();

    return (
        <main>
            <Header />
            <FitnessInput addTask={addTask} /> 
            <FitnessList 
                tasksList={tasksList} 
                editTask={editTask} 
                deleteTask={deleteTask} 
                incompletedTasks={incompletedTasks}
            />
            <Footer/>
        </main>
    )
}





