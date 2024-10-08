import React from 'react';
import styles from "@/app/styles/About.module.css"; 

const About = () => {
    return (
        <div className={styles.aboutContainer}>
            <h2 className={styles.heading}>About Me </h2>
            <p className={styles.description}>
                Hello! I&apos;m a passionate Frontend Web Developer with a strong focus on creating dynamic and user-friendly web applications. With expertise in HTML, CSS, and Tailwind CSS, I excel at building responsive designs that deliver seamless user experiences across all devices.
            </p>
            <p className={styles.description}>
                My journey in web development has led me to specialize in Next.js, where I harness the power of React for server-side rendering and optimized performance. I am also proficient in TypeScript and JavaScript, enabling me to write robust, maintainable code that scales effectively.
            </p>
            <p className={styles.description}>
                I believe in the importance of clean, efficient code and am always eager to learn new technologies and best practices in the ever-evolving landscape of web development. My goal is to bring innovative ideas to life and help businesses enhance their online presence through compelling and functional web solutions.
            </p>
        </div>
    );
};

export default About;
