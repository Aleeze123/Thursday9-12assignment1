import React from 'react'
import Link from 'next/link'; 
import styles from "@/app/styles/styling.module.css"; 

const WebDevelopment = () => {
  return (
    <div className={styles.serviceDetailContainer}>
    <h2 className={styles.heading}>Web Developer</h2>
    <p className={styles.description}>
        I am a web developer specializing in creating dynamic and responsive websites. My skills include HTML5, CSS3, JavaScript, TypeScript, Next.js, and Tailwind CSS.
    </p>

    <h3>Featured Projects:</h3>
    <ul className={styles.list}>
        <li>
            <Link href="https://aleeze123.github.io/ice-cream-website" target="_blank" rel="noopener noreferrer">
                <strong>Ice Cream Website</strong> 🔗
            </Link>
            <span> A fun site for showcasing flavors.</span>
        </li>
        <li>
            <Link href="https://aleeza-portfolio.vercel.app/" target="_blank" rel="noopener noreferrer">
                <strong>Portfolio Site</strong> 🔗
            </Link>
            <span> A platform to display my projects and skills.</span>
        </li>
       
    </ul>
</div>
  )
}

export default WebDevelopment;