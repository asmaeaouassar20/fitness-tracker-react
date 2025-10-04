import { FitnessItem } from "../fitnessItem/fitnessItem"

// import styles from "./FitnessList.module.css";
export const FitnessList = () => {
    return (
        <div className="box">
            <h2> Il te reste encore x activitées à faire</h2>
            <ul>
                <FitnessItem/>
                <FitnessItem/>
                <FitnessItem/>
                <FitnessItem/>
            </ul>
        </div>
    )
}