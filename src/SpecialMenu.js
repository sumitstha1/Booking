import React from 'react'
import styles from '../src/styles/SpecialMenu.module.css'
import { MdDeliveryDining } from 'react-icons/md'

const SpecialMenu = () => {
  return (
    <section className={styles.specialMenuSection}>
      <div className={styles.specialMenuContainer}>
        <div className={styles.specialHead}>
          <h2>Specials</h2>
          <a href='/'>Online Menu</a>
        </div>
        <div className={styles.cardContainer}>
          <div className={styles.card}>
            <img src='/greeksalad.jpg' alt='This is a greek salad' className={styles.imgDiv} />
            <div className={styles.detailDiv}>
              <div className={styles.productHead}>
                <h3>Greek Salad</h3>
                <p>$15.00</p>
              </div>
              <div className={styles.productDes}>
                <p>The famous greek salad of crispy lettuce, peppers, olives and our Chicago style feta cheese, garnished with crunchy garlic and rosemary croutons.</p>
                <a href='/'>Order a delivery <MdDeliveryDining /></a>
              </div>
            </div>
          </div>
          <div className={styles.card}>
            <img src='/greeksalad.jpg' alt='This is a greek salad' className={styles.imgDiv} />
            <div className={styles.detailDiv}>
              <div className={styles.productHead}>
                <h3>Greek Salad</h3>
                <p>$15.00</p>
              </div>
              <div className={styles.productDes}>
                <p>The famous greek salad of crispy lettuce, peppers, olives and our Chicago style feta cheese, garnished with crunchy garlic and rosemary croutons.</p>
                <a href='/'>Order a delivery <MdDeliveryDining /></a>
              </div>
            </div>
          </div>
          <div className={styles.card}>
            <img src='/greeksalad.jpg' alt='This is a greek salad' className={styles.imgDiv} />
            <div className={styles.detailDiv}>
              <div className={styles.productHead}>
                <h3>Greek Salad</h3>
                <p>$15.00</p>
              </div>
              <div className={styles.productDes}>
                <p>The famous greek salad of crispy lettuce, peppers, olives and our Chicago style feta cheese, garnished with crunchy garlic and rosemary croutons.</p>
                <a href='/'>Order a delivery <MdDeliveryDining /></a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default SpecialMenu
