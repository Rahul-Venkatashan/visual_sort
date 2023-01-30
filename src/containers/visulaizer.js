import styles from './visulaizer.module.css'
import Bar from '../components/bars/bar'

export default function Visualizor(){
    
    // Check if the number of bars if possibility
    let max_number_bars = (number_bars) => {
        let res;

        return res
    }

    return <div className={styles.container}>
        <div className={styles.config}>
            <div className={styles.input_container}></div>
            <div className={styles.icon}>
                <i class="fa-solid fa-sliders" style={{color: "white"}}></i>
            </div>
        </div>
        <div className={styles.barContainer}>
            {[...new Array(max_number_bars)].map( (_,index)=> <Bar key={index} number_of_bars={max_number_bars} max_height={87}/>)}
        </div>
    </div>
}