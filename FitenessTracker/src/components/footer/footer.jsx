import styles from "./footer.module.css";
export const Footer = ({completedTasks}) => {
    if(completedTasks){
        return (
        <footer >
            <code className={styles.codeFooter}>
                Avec FitnessTracker tu as éliminé {completedTasks} activité
                {completedTasks>1 ? "s " : " "} de la liste
            </code>
        </footer>
    );
    }
    
    return null;
};