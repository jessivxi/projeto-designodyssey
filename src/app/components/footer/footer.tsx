"use client"

import styles from './footer.module.css'

import logo from './../../../images/fotos/logo_cat.png'

import zapzap from './../../../images/icones/zapzap.svg'
import instagram from './../../../images/icones/instagram.svg'
import facebook from './../../../images/icones/facebook.svg'
import twitter from './../../../images/icones/twitter.svg'


import Image from 'next/image'

function Footer() {
    return (
        <div className={styles.footer_main}>
            <div className={styles.footer_logo_container}>
                <Image src={logo} height={100} width={100} alt="logo"></Image>
            </div>
            <div className={styles.footer_text}>
                <span>© DesignOdyssey Internacional Ltda. 2024</span>
            </div>
            <div className={styles.footer_social_container}>
                <div className={styles.footer_social_zapzap}>
                    <Image src={zapzap} height={30} width={30} alt="zapzap"></Image>
                </div>
                <div className={styles.footer_social_instagram}>
                    <Image src={instagram} height={30} width={30} alt="zapzap"></Image>
                </div>
                <div className={styles.footer_social_facebook}>
                    <Image src={facebook} height={30} width={30} alt="zapzap"></Image>
                </div>
                <div className={styles.footer_social_twitter}>
                    <Image src={twitter} height={30} width={30} alt="zapzap"></Image>
                </div>
            </div>
        </div>
    );
}

export default Footer