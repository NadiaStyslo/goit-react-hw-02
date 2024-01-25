import styles from './Feedback.module.css'
import Notification from '../Notification/Notification';

const Feedback = ({ number: { good, neutral, bad } }) => {
    const totalFeadback = good + neutral + bad;
    const totalProcent = Math.round(((good + neutral) / totalFeadback) * 100)
    return (
        
        <div className={styles.feedback}>
            {totalFeadback > 0 ? (
                <div>
                <p className={styles.item}> Good:{good}</p>
                <p className={styles.item}> Neutral:{neutral}</p>
                <p className={styles.item}> Bad:{bad}</p>
                <p className={styles.item}> Total:{totalFeadback}</p>
                    <p className={styles.item}> Procent:{totalProcent}%</p>
                     </div>) : (
                <Notification />
            )}
                   
        </div>
    )
}    
    

export default Feedback