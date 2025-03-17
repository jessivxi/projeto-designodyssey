"use client"
import styles from './header.module.css'

import Image from 'next/image'
import Link from 'next/link'

import logo from './../../../images/fotos/logo_cat .png'

function Header() {
    return (
        <div className={styles.header_main}>
            <Link href="/" className={styles.header_logo}>
                <Image className={styles.logo} src={logo} height={100} width={100} alt=""></Image>
            </Link>
            <div className={styles.header_list_container}>
                <ul className={styles.header_list}>
                    <Link className={styles.header_list_button} href="/">Home</Link>
                    <Link className={styles.header_list_button} href="/functioning">Como Funciona</Link>
                    <Link className={styles.header_list_button} href="/listing">Gráfico e Design</Link>
                </ul>
            </div>
            <div className={styles.header_login}>
                <Link href="/login" className={styles.header_login_button}>Login</Link>
                <Link href="/cadastro" className={styles.header_signup_button}>Cadastre-se</Link>
            </div>
        </div>
    );
}

export default Header