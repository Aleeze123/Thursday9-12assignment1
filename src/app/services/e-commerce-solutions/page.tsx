import React from 'react';
import Link from 'next/link';
import styles from "@/app/styles/styling.module.css"; 

const EcommerceServices= () => {
    return (
        <div className={styles.serviceDetailContainer}>
            <h2 className={styles.heading}>E-commerce Services</h2>
            <p className={styles.description}>
                I specialize in creating and optimizing e-commerce solutions that enhance user experience and drive sales.
            </p>

            <h3>Our E-commerce Offerings:</h3>
            <ul className={styles.list}>
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

export default EcommerceServices;
