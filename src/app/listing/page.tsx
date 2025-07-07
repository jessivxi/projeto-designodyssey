import styles from './listing.module.css'
import Image from 'next/image';
import React from 'react'

import logo1 from '@/images/fotos/logotipo_1.gif'
import logo2 from '@/images/fotos/logotipo_2.gif'
import logo3 from '@/images/fotos/logotipo_3.gif'
import logo4 from '@/images/fotos/logotipo_4.gif'
import logo5 from '@/images/fotos/logotipo_5.gif'
import logo6 from '@/images/fotos/logotipo_6.gif'
import logo7 from '@/images/fotos/logotipo_7.gif'
import logo8 from '@/images/fotos/logotipo_8.gif'

import Link from 'next/link'

function listing() {
    return (
        <>
            <div className={styles.main}>
                <div className={styles.top}>
                    <h1>Design de Logotipo</h1>
                    <p>Deixe-nos ajudar a achar o serviço de Designer certo para você!</p>
                    <div className={styles.botoesTopMain}>
                        <div className={styles.botaoTop}>
                            <span>Design de Site</span>
                        </div>
                        <div className={styles.botaoTop}>
                            <span>Design Gráfico</span>
                        </div>
                        <div className={styles.botaoTop}>
                            <span>Design Logotipo</span>
                        </div>
                        <div className={styles.botaoTop}>
                            <span>Arte Digital</span>
                        </div>
                    </div>
                </div>
                <div className={styles.contentMain}>
                    <div className={styles.contentBoxes}>
                        <div className={styles.contentBox}>
                            <Image src={logo1} height={300} width={300} alt="logo1"/>
                            <h1>Anúncio de Luciana</h1>
                            <p>Eu criarei um logotipo empresarial minimalista premium.</p>
                            <span>A partir de R$270</span>
                        </div>
                        <div className={styles.contentBox}>
                            <Image src={logo2} height={300} width={300} alt="logo1"/>
                            <h1>Anúncio de Pedro</h1>
                            <p>Eu criarei um logotipo profissional moderno para sua marca em 24 horas.</p>
                            <span>A partir de R$270</span>
                        </div>
                        <div className={styles.contentBox}>
                            <Image src={logo3} height={300} width={300} alt="logo1"/>
                            <h1>Anúncio de Luciana</h1>
                            <p>Eu criarei um logotipo empresarial minimalista premium.</p>
                            <span>A partir de R$270</span>
                        </div>
                        <div className={styles.contentBox}>
                            <Image src={logo4} height={300} width={300} alt="logo1"/>
                            <h1>Anúncio de Luciana</h1>
                            <p>Eu criarei um logotipo empresarial minimalista premium.</p>
                            <span>A partir de R$270</span>
                        </div>
                        <div className={styles.contentBox}>
                            <Image src={logo5} height={300} width={300} alt="logo1"/>
                            <h1>Anúncio de Luciana</h1>
                            <p>Eu criarei um logotipo empresarial minimalista premium.</p>
                            <span>A partir de R$270</span>
                        </div>
                        <div className={styles.contentBox}>
                            <Image src={logo6} height={300} width={300} alt="logo1"/>
                            <h1>Anúncio de Luciana</h1>
                            <p>Eu criarei um logotipo empresarial minimalista premium.</p>
                            <span>A partir de R$270</span>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}

export default listing