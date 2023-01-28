import styles from './MainPage.module.css'

export default function MainPageContainer({pages, current_page}){
    return <div className={styles.page_container} style={{left: current_page}}>
        {
            pages.map((page, index)=> 
                <div key={index} className={styles.page}>
                    {page}
                </div>
            )
        }
    </div>
}