// ce composant sera utilisé pour afficher le champ de saisie de l'exercice à faire
import styles from './FitnessInput.module.css';
export const FitnessInput = () => {
    return (
        <div className={`box ${styles.element}`}>
            <h2>Ajoute ta prochaine activité</h2>
            <form className={styles.container}>
                <input
                    type="text"
                    className={styles.input}
                    placeholder="Indiquez un titre pour votre activité"
                />
                <button className={styles.addBtn}>Ajouter</button>
            </form>
            
        </div>
    );
};