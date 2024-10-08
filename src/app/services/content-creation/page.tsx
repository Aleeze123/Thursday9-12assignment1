import React from 'react';
import Link from 'next/link';
import styles from "@/app/styles/styling.module.css"; 

const ContentCreation = () => {
    return (
        <div className={styles.serviceDetailContainer}>
            <h2 className={styles.heading}>Content Creation Services</h2>
            <p className={styles.description}>
                We specialize in creating engaging and relevant content tailored to your audience&apos;s needs. Our services help boost your online presence and connect with your target market.
            </p>

            <h3>Featured Tools:</h3>
            <ul className={styles.list}>
                <li>
                    <Link href="https://day07-project-random-joke-generator.vercel.app/" target="_blank" rel="noopener noreferrer">
                        <strong>Joke Generator</strong> 🔗
                    </Link>
                    <span> A fun tool to generate jokes that can engage your audience and enhance your content strategy.</span>
                </li>
             
                <li>
                    <Link href="https://day10-project-password-generator.vercel.app/" target="_blank" rel="noopener noreferrer">
                        <strong>Password Generator</strong> 🔗
                    </Link>
                    <span> Generate strong and secure passwords for your online accounts.</span>
                </li>
            </ul>
        </div>
    );
};

export default ContentCreation;
