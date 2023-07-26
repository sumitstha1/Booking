import React from 'react'
import styles from '../styles/LittleLemon.module.css'

const LittleLemon = () => {
    return (
        <section className={styles.littleSection}>
            <div className={styles.container}>
                <div className={styles.littleLemon}>
                    <h2>Little Lemon</h2>
                    <h3>Chicago</h3>
                    <p>Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis enim velit mollit. Exercitation veniam consequat sunt nostrud amet.
                        Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis enim velit mollit. </p>
                </div>
                <div className={styles.LemonImg}>
                    <img src='/marioandadrian.jpg' alt='mario and adrian' className={styles.upperImg} />
                    <img src='/restaurantchief.jpg' alt='Restaurant Chief' className={styles.lowerImg} />
                </div>
            </div>
        </section>
    )
}

export default LittleLemon
