import React from 'react'
import styles from '../src/styles/Styles.module.css'

const HeroSection = () => {
    return (
        <section className={styles.heroSection}>
            <div className={styles.heroContent}>
                <div className={styles.heroLeft}>
                    <h1>Little Lemon</h1>
                    <h2>Chicago</h2>
                    <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Officiis dolor molestias velit qui eius porro quod. Voluptate optio ducimus iste numquam omnis qui reprehenderit labore quo laboriosam minus, quia impedit.</p>
                    <a href='/' className={styles.heroButton}>Reserve a Table</a>
                </div>
                <div className={styles.heroRight}>
                    <img src='/restauranfood.jpg' alt='Restaurant Waiter' className={styles.heroImage} />
                </div>
            </div>
        </section>
    )
}

export default HeroSection
