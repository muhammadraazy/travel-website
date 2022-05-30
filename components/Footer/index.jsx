import React from 'react'
import styles from "./style.module.scss"

const Footer = () => {
  return (
    <div className={`${styles.footer}`}>
        <div className={`${styles.footerLeft}`}>
            <div className={`${styles.info}`}>
                <h2> MNTN </h2>
                <p>Get out there & discover your next slope, mountain & destination!</p>
            </div>
            <p className="font-medium text-lg leading-6 text-gray-400">Copyright 2019 MNTN, Inc. Terms & Privacy</p>
        </div>
        <div className={`${styles.footerRight}`}>
            <div className={`${styles.footerRight_left}`}>
                 <h2> More on the blog </h2>
                 <ul className={styles.linksOne}>
                     <li>About MNTN</li>
                     <li>Contributors & Writers</li>
                     <li>Write For Us</li>
                     <li>Contact Us</li>
                     <li>Privacy Policy</li>
                 </ul>
            </div>
            <div className={`${styles.footerRight_right} ml-10`}>
                  <h2> More On MNTN </h2>
                  <ul className={styles.linksTwo}>
                      <li>The Team</li>
                      <li>Jobs</li>
                      <li>Press</li>
                  </ul>
            </div>
        </div>
    </div>
  )
}

export default Footer