import { Header } from "./header/header";
import { FitnessInput } from "./fitnessInput/fitnessInput";
import {FitnessList} from "./fitnessList/fitnessList";
import { Footer } from "./footer/footer";
import { useState } from "react";

export const FitnessContainer = () => {

    const [tasksList, setTasksList] = useState(
        localStorage.getItem("tasks") ? JSON.parse(localStorage.getItem("tasks")):[]
    );

    const addTask = (title) => {
        const newTask = {
            id :tasksList.length ?( tasksList[tasksList.length-1].id + 1) : 1,
            title : title,
            completed : false
        };
        const newTasksList=[...tasksList, newTask];
        localStorage.setItem("tasks",JSON.stringify(newTasksList))
        setTasksList(newTasksList); 
    }

    const editTask = (id, completedValue) => {
        const newTasksList=tasksList.map(
            (task) => { return task.id==id ? {...task,completed:completedValue}:task}
        )
        setTasksList(newTasksList);
        localStorage.setItem("tasks",JSON.stringify(newTasksList));
    }

    const deleteTask = (id) => {
        const newTasksList=tasksList.filter( (task)=>task.id!==id);
        localStorage.setItem("tasks",JSON.stringify(newTasksList));
        setTasksList(newTasksList);
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
            <Footer completedTasks={completedTasks} />
        </main>
    )
}





