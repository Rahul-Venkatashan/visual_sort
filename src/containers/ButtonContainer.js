import styles from './ButtonContainer.module.css'
import Button from '../components/btn/buttons'

export default function ButtonContainer({nav_callback}){
    const alg_titles = [
        "Bubble Sort",
        "Merge Sort",
        "Heap Sort",
        "Quick Sort",
        "Insertion Sort",
        "Radix Sort",
        "Selection Sort",
        "Counting Sort",
        "Bucket Sort"
    ]
    return <div className={styles.container}>
        <div className={styles.btn_container}>
            {alg_titles.map( (elm_title) => <Button title={elm_title} nav_callback = {nav_callback} key={elm_title}></Button>)}
        </div>

    </div>
}