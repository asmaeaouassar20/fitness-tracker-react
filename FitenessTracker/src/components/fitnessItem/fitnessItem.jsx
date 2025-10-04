import styles from "./FitnessItem.module.css";
export const FitnessItem = () => {
    return (
        <li className={styles.defaut}>
            <div className={styles.numberAndTitle}>
                <div className={styles.id}>
                    1
                </div>
                <div>
                    titre : activité une 0....
                </div>
            </div>
            <button className={styles.deleteBtn}>X</button>
        </li>
    );
};