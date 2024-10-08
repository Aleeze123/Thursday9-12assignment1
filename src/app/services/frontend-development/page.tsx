import React from 'react';
import Link from 'next/link'; 
import styles from "@/app/styles/styling.module.css"; 

const FrontendDevelopment= () => {
    return (
        <div className={styles.serviceDetailContainer}>
            <h2 className={styles.heading}>Frontend Developer</h2>
            <p className={styles.description}>
                I am a frontend developer focused on building responsive and interactive user interfaces. My expertise includes HTML5, CSS3, JavaScript,Typescript, Next.js, and Tailwind CSS.
            </p>

            <h3>Featured Projects:</h3>
            <ul className={styles.list}>
            <li>
                    <Link href="https://day02-weather-widget-app.vercel.app/" target="_blank" rel="noopener noreferrer">
                        <strong>Weather App</strong> 🔗
                    </Link>
                    <span> A user-friendly app that provides real-time weather updates.</span>
                </li>
                <li>
                    <Link href="https://day-1-project-countdown-timer-app.vercel.app/" target="_blank" rel="noopener noreferrer">
                        <strong>Countdown Timer</strong> 🔗
                    </Link>
                    <span> A simple yet effective countdown timer for events and launches.</span>
                </li>
                <li>
                    <Link href="https://next-js-milestone02-portfolio.vercel.app/" target="_blank" rel="noopener noreferrer">
                        <strong>Portfolio Site</strong> 🔗
                    </Link>
                    <span> A showcase of my work, skills, and projects.</span>
                </li>
            </ul>
        </div>
    );
};

export default FrontendDevelopment;
