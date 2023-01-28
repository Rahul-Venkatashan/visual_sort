import styles from './header.module.css'

export default function Header({nav_callback}){


    return <div className={styles.container}>
        <div className={styles.nav_container}>
            <div className={styles.home_icon} onClick={() => nav_callback('0vw')} data-text="Home"></div>
            <div className={styles.logo} onClick={() => nav_callback('-100vw')} data-text="Sorting Algorithims"></div>
        </div>
    </div>   
}