import Link from 'next/link';
import styles from "@/app/styles/Services.module.css"; 
import React from 'react'

const Services = () => {
  return (
    <div className={styles.servicesContainer}>
    <h2 className={styles.heading}>Services</h2>
    <div className={styles.servicesList}>
        <Link href="/services/frontend-development" className={styles.serviceBox}>
            <h3 className={styles.serviceTitle}>Frontend Development</h3>
            <p className={styles.serviceDescription}>Building responsive user interfaces with modern technologies.</p>
        </Link>
        <Link href="/services/web-development" className={styles.serviceBox}>
            <h3 className={styles.serviceTitle}>Web Development</h3>
            <p className={styles.serviceDescription}>Creating robust and scalable web applications.</p>
        </Link>
        <Link href="/services/ui-design" className={styles.serviceBox}>
            <h3 className={styles.serviceTitle}>UI/UX Design</h3>
            <p className={styles.serviceDescription}>Designing intuitive user experiences.</p>
        </Link>
        <Link href="/services/seo-optimization" className={styles.serviceBox}>
            <h3 className={styles.serviceTitle}>SEO Optimization</h3>
            <p className={styles.serviceDescription}>Enhancing your site&apos;s visibility on search engines.</p>
        </Link>
        <Link href="/services/e-commerce-solutions" className={styles.serviceBox}>
            <h3 className={styles.serviceTitle}>E-Commerce Solutions</h3>
            <p className={styles.serviceDescription}>Developing and managing online stores.</p>
        </Link>
        <Link href="/services/content-creation" className={styles.serviceBox}>
            <h3 className={styles.serviceTitle}>Content Creation</h3>
            <p className={styles.serviceDescription}>Creating engaging and relevant content for your audience.</p>
        </Link>
    </div>
</div>
  )
}

export default Services