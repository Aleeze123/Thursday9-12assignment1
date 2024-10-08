import styles from "@/app/styles/Home.module.css";
import React from 'react'

const Home = () => {
  return (
    <div className={styles.homeContainer}>
    <h1 className={styles.title}>Hello I&apos;m Aleeza</h1>
    <p className={styles.description}>
        I&apos;m a passionate Frontend Web Developer specializing in creating responsive and dynamic web applications.
    </p>
    <a href="https://next-js-milestone02-portfolio.vercel.app/" target="_blank" rel="noopener noreferrer" className={styles.portfolioButton}>
        View My Portfolio
    </a>
</div>
  )
}

export default Home