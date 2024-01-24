import styles from './Options.module.css'

const Options = ({ onButton, onReset, onFeadback }) => {
    return (
        <div className={styles.option}>
            <button className={styles.button} onClick={() => onButton('good')}>Good</button>
            <button className={styles.button} onClick={() => onButton('neutral')}>Neutral</button>
            <button className={styles.button} onClick={() => onButton('bad')}>Bad</button>
            {onFeadback &&
                <button className={styles.button} onClick={onReset}>Reset</button> }
        </div>
    );
            }
export default Options