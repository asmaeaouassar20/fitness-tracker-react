import styles from './Header.module.css';
import reactLogo from "../../assets/react.svg"
export const Header = () => {
    return (
        <div className={styles.container}>
            <div className = {styles.titreContainer}>
                <img src={reactLogo} alt='React Logo' width={50} height={50} />
                <div>
                    <h1>Fitness Tracker</h1>
                    <div className='color-gray'>
                        <code>Eliminez le chaos, suivez le flux.</code>
                    </div>
                </div>
            </div>
            <code className = "color-primary">
                v.1.0
            </code>
        </div>
    );
};