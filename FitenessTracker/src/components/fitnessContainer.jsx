import { Header } from "./header/header";
import { FitnessInput } from "./fitnessInput/fitnessInput";
import {FitnessList} from "./fitnessList/fitnessList";
import { Footer } from "./footer/footer";
import { useState } from "react";

export const FitnessContainer = () => {

    const [tasksList, setTasksList] = useState([
        {
            id : 1,
            title : "Tâche initiale pour testing",
            completed : false,
        }
    ]);

    console.log(tasksList);

    const addTask = (title) => {
        const newTask = {
            id : tasksList.length + 1,
            title : title,
            completed : false
        };
        setTasksList([...tasksList, newTask]); // l’opérateur spread ...
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





