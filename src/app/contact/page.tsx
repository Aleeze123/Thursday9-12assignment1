import React from 'react'

import { FaLinkedin, FaGithub, FaEnvelope } from 'react-icons/fa';
import styles from "@/app/styles/Contact.module.css";

const Contact = () => {
  return (
    <div>
    <div className={styles.contactContainer}>
    <h2 className={styles.heading}>Contact Me</h2>
   
    <ul className={styles.contactList}>
        <li>
            <a href="https://www.linkedin.com/in/aleeza-a-i68735305" target="_blank" rel="noopener noreferrer" className={styles.contactLink}>
                <FaLinkedin className={styles.icon} /> LinkedIn
            </a>
        </li>
        <li>
            <a href="https://github.com/Aleeze123" target="_blank" rel="noopener noreferrer" className={styles.contactLink}>
                <FaGithub className={styles.icon} /> GitHub
            </a>
        </li>
        <li>
            <a href="mailto:alizey649@gmail.com" className={styles.contactLink}>
                <FaEnvelope className={styles.icon} /> Email: alizey649@gmail.com
            </a>
        </li>
    </ul>

</div>
</div>
  )
}

export default Contact

