'use client'

import Image from "next/image"
import Link from "next/link"

import styles from "./header.module.css"
import logo from "./../../../images/fotos/logo_cat.png"
import person_login from "./../../../images/icones/person_login.svg"
import person_fill from "./../../../images/icones/person_fill.png"
import { useState } from 'react';

export default function Header() {
    const [isAccordionOpen, setIsAccordionOpen] = useState(false);
    const [isLoggedIn, setIsLoggedIn] = useState(false);
    const [userName, setUserName] = useState('');

    // Função simulada de login - substitua pela sua lógica real
    const handleLogin = () => {
        setIsLoggedIn(true);
        setUserName('João Silva'); // Isso viria da sua API/autenticação
    };

    const toggleAccordion = () => {
        setIsAccordionOpen(!isAccordionOpen);
    };

    return (
        <>
            <div className={styles.main}>
                <div className={styles.content}>
                    <div className={styles.logo}>
                        <Image src={logo} height={100} width={100} alt="LogoDesignOdyssey"></Image>
                    </div>
                    <div className={styles.navbar}>
                        <Link className={styles.item1} href="/">
                            Home
                        </Link>
                        <Link className={styles.item2} href="/functioning">
                            Como Funciona
                        </Link>
                        <Link className={styles.item3} href="/listing">
                            Gráfico e Design
                        </Link>
                    </div>
                    <div className={styles.login_box}>
                        {isLoggedIn ? (
                            <div className={styles.user_profile}>
                                <span className={styles.user_name}>{userName}</span>
                                <div className={styles.login_button}>
                                    <Image
                                        className={styles.login_icon_fill}
                                        src={person_fill}
                                        height={40}
                                        width={40}
                                        alt="User Profile"
                                    />
                                </div>
                            </div>
                        ) : (
                            <Link className={styles.login} href="" onClick={handleLogin}>
                                Entrar
                                <div className={styles.login_button}>
                                    <Image
                                        className={styles.login_icon}
                                        src={person_login}
                                        height={25}
                                        width={25}
                                        alt="LogoLogin"
                                    />
                                </div>
                            </Link>
                        )}
                    </div>
                    <div className={styles.accordion}>
                        <div className={styles.accordion_item}>
                            <button
                                className={`${styles.accordion_button} ${isAccordionOpen ? styles.active : ''}`}
                                onClick={toggleAccordion}
                                aria-expanded={isAccordionOpen}
                            >
                                <div className={styles.stripe1}></div>
                                <div className={styles.stripe1}></div>
                                <div className={styles.stripe1}></div>
                            </button>
                            <div
                                className={styles.accordion_content}
                                style={{ maxHeight: isAccordionOpen ? '500px' : '0' }}
                            >
                                <Link className={styles.link_accordion} href="/">Home</Link>
                                <Link className={styles.link_accordion} href="/functioning">Como Funciona</Link>
                                <Link className={styles.link_accordion} href="/listing">Gráfico e Design</Link>
                                <Link className={styles.link_accordion} href="/login">Login</Link>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
};
