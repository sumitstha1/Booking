import React from 'react'
import styles from '../styles/Styles.module.css'
import { AiFillStar } from 'react-icons/ai'

const Testimonials = () => {
    return (
        <section className={styles.testimonialSection}>
            <div className={styles.testimonialContainer}>
                <h2>Testimonials</h2>
                <div className={styles.testimonialList}>
                    <div className={styles.testimonialCard}>
                        <div className={styles.rating}>
                            <AiFillStar />
                        </div>
                        <div className={styles.nameImage}>
                            <img src='/greeksalad.jpg' alt='Client' />
                            <h3>Name</h3>
                        </div>
                        <p>This is an client message</p>
                    </div>
                    <div className={styles.testimonialCard}>
                        <div className={styles.rating}>
                            <AiFillStar />
                        </div>
                        <div className={styles.nameImage}>
                            <img src='/greeksalad.jpg' alt='Client' />
                            <h3>Name</h3>
                        </div>
                        <p>This is an client message</p>
                    </div>
                    <div className={styles.testimonialCard}>
                        <div className={styles.rating}>
                            <AiFillStar />
                        </div>
                        <div className={styles.nameImage}>
                            <img src='/greeksalad.jpg' alt='Client' />
                            <h3>Name</h3>
                        </div>
                        <p>This is an client message</p>
                    </div>
                    <div className={styles.testimonialCard}>
                        <div className={styles.rating}>
                            <AiFillStar />
                        </div>
                        <div className={styles.nameImage}>
                            <img src='/greeksalad.jpg' alt='Client' />
                            <h3>Name</h3>
                        </div>
                        <p>This is an client message</p>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Testimonials
