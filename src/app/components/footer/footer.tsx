"use client"

import styles from './footer.module.css'

import logo from './../../../images/fotos/logo_cat.png'

import zapzap from './../../../images/icones/zapzap.svg'
import instagram from './../../../images/icones/instagram.svg'
import facebook from './../../../images/icones/facebook.svg'
import twitter from './../../../images/icones/twitter.svg'


import Image from 'next/image'
import Link from 'next/link'

function Footer() {
    return (
        <div className={styles.main}>
            <Image src={logo} height={100} width={100} alt="logoSite" />
            <div className={styles.text}>
                <span>
                    © DesignOdyssey Ltda. 2024
                </span>
            </div>
            <div className={styles.icones}>
                <Link className={styles.iconeStyle} href="https://wa.me/11945291461">
                    <Image src={zapzap} height={100} width={100} alt="iconeWhatsapp" />
                </Link>
                <Link className={styles.iconeStyle} href="https://wa.me/11945291461">
                    <Image src={instagram} height={100} width={100} alt="iconeInstagram" />
                </Link>
                <Link className={styles.iconeStyle} href="https://wa.me/11945291461">
                    <Image src={facebook} height={100} width={100} alt="iconeFacebook" />
                </Link>
                <Link className={styles.iconeStyle} href="https://wa.me/11945291461">
                    <Image src={twitter} height={100} width={100} alt="iconeTwitter" />
                </Link>
            </div>
        </div>
    );
}

export default Footer