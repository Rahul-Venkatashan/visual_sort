import styles from './buttons.module.css'

export default function Button({title, nav_callback}){
    return <div className={styles.buttonContainer} onClick={() => nav_callback('-100vw')}>
        <p>{title}</p>
    </div>
}