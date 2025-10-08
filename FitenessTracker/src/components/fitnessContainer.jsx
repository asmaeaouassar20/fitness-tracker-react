import { Header } from "./header/header";
import { FitnessInput } from "./fitnessInput/fitnessInput";
import {FitnessList} from "./fitnessList/fitnessList";
import { Footer } from "./footer/footer";
import { useState } from "react";

export const FitnessContainer = () => {

    const [tasksList, setTasksList] = useState([]);


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
                task.id === id ? {...task, completed: completedValue} : task
            })
        );
    }

    const deleteTask = (id) => {
        setTasksList(tasksList.filter((task)=>task.id!==id));
    }

    return (
        <main>
            <Header />
            <FitnessInput addTask={addTask} /> 
            <FitnessList />
            <Footer/>
        </main>
    )
}





