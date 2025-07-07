'use client'

import React, { useEffect, useState } from 'react'
import Image from 'next/image'
import Link from 'next/link'
import styles from './login.module.css'
import { useRouter } from 'next/navigation'
import { z } from 'zod'

// Ícones e fotos
import foto_login from './../../images/fotos/ilustracao_login.png'
import seta_esquerda_preta from './../../images/icones/seta_esquerda_preta.svg'
import google from './../../images/icones/google.svg'
import facebook from './../../images/icones/facebook.svg'
import envelope from './../../images/icones/envelope.svg'
import cadeado from './../../images/icones/cadeado.svg'

// Schema de validação com Zod
const loginSchema = z.object({
    email: z.string().email('E-mail inválido'),
    password: z.string().min(1, 'Senha é obrigatória')
})

export default function Login() {
    const router = useRouter()
    const [isExternalReferrer, setIsExternalReferrer] = useState(false)
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const [error, setError] = useState('')

    useEffect(() => {
        if (!document.referrer || !document.referrer.includes(window.location.origin)) {
            setIsExternalReferrer(true)
        }
    }, [])

    const handleBack = () => {
        if (isExternalReferrer) {
            router.push('/')
        } else {
            router.back()
        }
    }

    const handleLogin = (e: React.FormEvent) => {
        e.preventDefault()
        // Validação com Zod
        const result = loginSchema.safeParse({ email, password })
        if (!result.success) {
            setError(result.error.errors[0].message)
            return
        }
        setError('')
        router.push('/profile')
    }

    return (
        <div className={styles.login_main}>
            <div className={styles.login_content}>
                <div className={styles.login_content_left}>
                    <Image src={foto_login} height={500} width={500} alt='foto-login' priority />
                    <ul className={styles.login_left_list}>
                        <li className='mb-5'>Trabalho de qualidade feito mais rápido</li>
                        <li>Acesso a talentos e empresas em todo o mundo</li>
                    </ul>
                </div>
                <div className={styles.login_content_right}>
                    <div className={styles.login_right_top}>
                        <div className={styles.login_right_voltar} onClick={handleBack} style={{ cursor: 'pointer' }}>
                            <Image src={seta_esquerda_preta} height={30} width={30} alt='seta_voltar' />
                            Voltar
                        </div>
                        <div className={styles.login_right_bemvindo}>
                            <h1>Bem-vindo de volta!</h1>
                        </div>

                        {/* Opções de login social */}
                        <div className={styles.social_login_options}>
                            <button className={styles.social_button}>
                                <Image src={google} height={20} width={20} alt='google' />
                                Entrar com Google
                            </button>
                            <button className={styles.social_button}>
                                <Image src={facebook} height={20} width={20} alt='facebook' />
                                Entrar com Facebook
                            </button>
                        </div>

                        <div className={styles.divider}>
                            <span>ou</span>
                        </div>

                        <form className={styles.login_right_bottom} onSubmit={handleLogin}>
                            <div className={styles.login_credenciais}>
                                <div className={styles.login_field}>
                                    <label htmlFor="email">E-Mail</label>
                                    <div className={styles.input_container}>
                                        <input
                                            id="email"
                                            className={styles.login_input}
                                            type="email"
                                            placeholder='seu@email.com'
                                            value={email}
                                            onChange={e => setEmail(e.target.value)}
                                        />
                                        <Image
                                            src={envelope}
                                            height={20}
                                            width={20}
                                            alt='icone-envelope'
                                            className={styles.input_icon}
                                        />
                                    </div>
                                </div>

                                <div className={styles.login_field}>
                                    <label htmlFor="password">Senha</label>
                                    <div className={styles.input_container}>
                                        <input
                                            id="password"
                                            className={styles.login_input}
                                            type="password"
                                            placeholder='••••••••'
                                            value={password}
                                            onChange={e => setPassword(e.target.value)}
                                        />
                                        <Image
                                            src={cadeado}
                                            height={20}
                                            width={20}
                                            alt='icone-cadeado'
                                            className={styles.input_icon}
                                        />
                                    </div>
                                </div>

                                {error && (
                                    <div className={styles.login_error}>{error}</div>
                                )}

                                <div className={styles.login_actions}>
                                    <button type="submit" className={styles.login_button}>
                                        Login
                                    </button>

                                    <div className={styles.forgot_password}>
                                        <Link href="/Register" className={styles.forgot_password_link}>
                                            Ainda não tem uma conta? Registre-se agora.
                                        </Link>
                                    </div>
                                </div>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    )
}