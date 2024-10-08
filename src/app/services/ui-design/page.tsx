import React from 'react';
import Link from 'next/link'; 
import styles from "@/app/styles/styling.module.css"; 

const UIUX = () => {
    return (
        <div className={styles.serviceDetailContainer}>
            <h2 className={styles.heading}>UI/UX Design</h2>
            <p className={styles.description}>
                I specialize in creating intuitive and engaging user experiences that drive customer satisfaction and loyalty. My design process focuses on understanding user needs and aligning them with business goals.
            </p>

            <h3>Featured Projects:</h3>
            <ul className={styles.list}>
                <li>
                    <Link href="https://milestone03-assignment.vercel.app/" target="_blank" rel="noopener noreferrer">
                        <strong>Blog Platform</strong> 🔗
                    </Link>
                    <span> A modern blog for sharing insights and articles.</span>
                </li>
                <li>
                    <Link href="https://day13-project-htm-lpreviewer.vercel.app/" target="_blank" rel="noopener noreferrer">
                        <strong>HTML Previewer</strong> 🔗
                    </Link>
                    <span> A tool for live HTML previewing and editing.</span>
                </li>
            </ul>
        </div>
    );
};

export default UIUX;
