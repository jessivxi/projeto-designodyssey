"use client"
import styles from './functioning.module.css'
import Image from 'next/image';
import React from 'react'

import Link from 'next/link'
import { use } from 'react';
import Header from '../components/header/header';
import Footer from '../components/footer/footer';

function functioning() {
    return (
        <>
            <Header />
            <div className={styles.functioning_main}>
                <div className={styles.functioning_content}>
                    <div className={styles.functioning_content_box}>
                        <div className={styles.functioning_content_title_box}>
                           <h1 className={styles.functioning_content_title}>Bem-vindo ao DesignOdyssey!</h1>
                        </div>
                           <p className={styles.functioning_content_text}>O DesignOdyssey conecta freelancers de design e clientes de forma simples e eficiente. Freelancers podem divulgar seus serviços especializados, como design de logos, arte digital, design de sites e design gráfico, organizados por categorias</p>
                           <div className={styles.functioning_content_button}>
                        <Link href="/listing">
                            <button className={styles.functioning_button}>Encontre um freelancer</button>
                        </Link>
                    </div>
                    </div>
                </div>
            </div>
            <Footer />
        </>
    );
}

export default functioning;