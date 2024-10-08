import React from 'react';
import Link from 'next/link'; 
import styles from "@/app/styles/styling.module.css"; 

const SEOOptimization = () => {
    return (
        <div className={styles.serviceDetailContainer}>
            <h2 className={styles.heading}>SEO Optimization</h2>
            <p className={styles.description}>
                I specialize in optimizing websites for search engines to improve visibility and drive organic traffic. My approach includes keyword research, on-page optimization, and link-building strategies tailored to your business needs.
            </p>

            <h3>Featured Projects:</h3>
            <ul className={styles.list}>
                <li>
                    <Link href="https://a-travels-website.vercel.app/" target="_blank" rel="noopener noreferrer">
                        <strong>Travel Website</strong> 🔗
                    </Link>
                    <span> An optimized travel site designed to attract visitors and boost bookings.</span>
                </li>
           
                <li>
                    <Link href="https://milestone03-e-commerce-website.vercel.app/" target="_blank" rel="noopener noreferrer">
                        <strong>E-commerce Optimization</strong> 🔗
                    </Link>
                    <span> Enhancing an e-commerce platform to improve its online presence and sales.</span>
                </li>
            </ul>
        </div>
    );
};

export default SEOOptimization;
