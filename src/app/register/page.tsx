'use client'

import React, { useEffect, useState } from 'react'
import Image from 'next/image'
import Link from 'next/link'
import styles from './register.module.css'
import { useRouter } from 'next/navigation';

// Ícones e fotos
import foto_login from './../../images/fotos/ilustracao_login.png'
import seta_esquerda_preta from './../../images/icones/seta_esquerda_preta.svg'
import envelope from './../../images//icones/envelope.svg'
import google from './../../images/icones/google.svg'
import facebook from './../../images/icones/facebook.svg'
import cadeado from './../../images/icones/cadeado.svg'
import pessoa from './../../images/icones/pessoa.svg'

export default function Register() {
    const router = useRouter();
    const [isExternalReferrer, setIsExternalReferrer] = useState(false);

    useEffect(() => {
        if (!document.referrer || !document.referrer.includes(window.location.origin)) {
            setIsExternalReferrer(true);
        }
    }, []);

    const handleBack = () => {
        if (isExternalReferrer) {
            router.push('/');
        } else {
            router.back();
        }
    };

    return (
        <div className={styles.register_main}>
            <div className={styles.register_content}>
                <div className={styles.register_content_left}>
                    <Image src={foto_login} height={500} width={500} alt='foto-cadastro' priority />
                    <ul className={styles.register_left_list}>
                        <li className='mb-5'>Trabalho de qualidade feito mais rápido</li>
                        <li>Acesso a talentos e empresas em todo o mundo</li>
                    </ul>
                </div>
                <div className={styles.register_content_right}>
                    <div className={styles.register_right_top}>
                        <div className={styles.register_right_voltar} onClick={handleBack} style={{ cursor: 'pointer' }}>
                            <Image src={seta_esquerda_preta} height={30} width={30} alt='seta_voltar' />
                            Voltar
                        </div>
                        <div className={styles.register_right_bemvindo}>
                            <h1>Crie sua conta</h1>
                        </div>

                        {/* Opções de cadastro social */}
                        <div className={styles.social_register_options}>
                            <button className={styles.social_button}>
                                <Image src={google} height={20} width={20} alt='google' />
                                Cadastre-se com Google
                            </button>
                            <button className={styles.social_button}>
                                <Image src={facebook} height={20} width={20} alt='facebook' />
                                Cadastre-se com Facebook
                            </button>
                        </div>

                        <div className={styles.divider}>
                            <span>ou</span>
                        </div>

                        <div className={styles.register_right_bottom}>
                            <div className={styles.register_credenciais}>
                                <div className={styles.register_field}>
                                    <label className='ml-3' htmlFor="name">Nome completo</label>
                                    <div className={styles.register_input_box}>
                                        <input className={styles.register_input} type="text" placeholder='Seu nome completo' />
                                        <Image src={pessoa} height={20} width={20} alt='icone-pessoa' />
                                    </div>
                                </div>

                                <div className={styles.register_field}>
                                    <label className='ml-3' htmlFor="email">E-Mail</label>
                                    <div className={styles.register_input_box}>
                                        <input className={styles.register_input} type="email" placeholder='seu@email.com' />
                                        <Image src={envelope} height={20} width={20} alt='icone-envelope' />
                                    </div>
                                </div>

                                <div className={styles.register_field}>
                                    <label className='ml-3' htmlFor="password">Senha</label>
                                    <div className={styles.register_input_box}>
                                        <input className={styles.register_input} type="password" placeholder='••••••••' />
                                        <Image src={cadeado} height={20} width={20} alt='icone-cadeado' />
                                    </div>
                                </div>

                                <div className={styles.register_field}>
                                    <label className='ml-3' htmlFor="confirm-password">Confirmar Senha</label>
                                    <div className={styles.register_input_box}>
                                        <input className={styles.register_input} type="password" placeholder='••••••••' />
                                        <Image src={cadeado} height={20} width={20} alt='icone-cadeado' />
                                    </div>
                                </div>

                                <div className={styles.register_actions}>
                                    <button className={styles.register_button}>
                                        Cadastrar
                                    </button>

                                    <div className={styles.login_redirect}>
                                        Já tem uma conta?
                                        <Link href="/login" className={styles.login_link}>
                                            Faça login
                                        </Link>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}