'use client'

import React, { useEffect, useState } from 'react'
import Image from 'next/image'
import Link from 'next/link'
import styles from './login.module.css'
import { useRouter } from 'next/navigation';

// Ícones e fotos
import foto_login from './../../images/fotos/ilustracao_login.png'
import seta_esquerda_preta from './../../images/icones/seta_esquerda_preta.svg'
import google from './../../images/icones/google.svg'
import email from './../../images/icones/e-mail.svg'
import apple from './../../images/icones/apple.svg'
import facebook from './../../images/icones/facebook.svg'
import envelope from './../../images/icones/envelope.svg'
import cadeado from './../../images/icones/cadeado.svg'

export default function Login() {
    const router = useRouter();
    const [isExternalReferrer, setIsExternalReferrer] = useState(false);

    useEffect(() => {
        // Check if the user came from an external site
        if (!document.referrer || !document.referrer.includes(window.location.origin)) {
            setIsExternalReferrer(true);
        }
    }, []);

    const handleBack = () => {
        if (isExternalReferrer) {
            // No internal referrer, redirect to homepage
            router.push('/');
        } else {
            // Internal navigation history exists, go back
            router.back();
        }
    };

    return (
        <div className={styles.login_main}>
            <div className={styles.login_content}>
                <div className={styles.login_content_left}>
                    <Image src={foto_login} height={500} width={500} alt='foto-login'></Image>
                    <ul className={styles.login_left_list}>
                        <li className='mb-5'>Trabalho de qualidade feito mais rápido</li>
                        <li>Acesso a talentos e empresas em todo o mundo</li>
                    </ul>
                </div>
                <div className={styles.login_content_right}>
                    <div className={styles.login_right_top}>
                            <div className={styles.login_right_voltar} onClick={handleBack} style={{ cursor: 'Pointer' }}>
                                <Image src={seta_esquerda_preta} height={30} width={30} alt='seta_voltar'></Image>
                                Voltar
                            </div>
                            <div className={styles.login_right_bemvindo}>
                                <h1>Bem-vindo de volta!</h1>
                            </div>
                        <div className={styles.login_right_bottom}>
                                    <div className={styles.login_credenciais}>
                                        <div className={styles.login_email}>
                                            <label className='ml-3' htmlFor="">E-Mail</label>
                                            <div className={styles.login_email_box}>
                                                <input className={styles.login_email_input} type="text" placeholder='E-Mail' />
                                                <Image src={envelope} height={30} width={30} alt='icone-envelope'></Image>
                                            </div>
                                        </div>
                                        <div className={styles.login_email}>
                                            <label className='ml-3' htmlFor="">Senha</label>
                                            <div className={styles.login_email_box}>
                                                <input className={styles.login_email_input} type="text" placeholder='Senha' />
                                                <Image src={cadeado} height={30} width={30} alt='icone-envelope'></Image>
                                            </div>
                                        </div>
                                        <div className={styles.login_email}>
                                            <Link href="/perfil">
                                                <div className={styles.login_entrar_box}>
                                                    Entrar
                                                </div>
                                            </Link>
                                        </div>
                                    </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
};