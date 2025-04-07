import styles from "./header_rw.module.css"

import Image from "next/image"
import Link from "next/link"

import logo from "./../../../images/fotos/logo_cat.png"

export default function header_rw() {
    return (
        <div className={styles.header_outer_wrapper}>
            <div className={styles.header_inner_wrapper}>
                <div className={styles.header_content}>
                    <div className={styles.header_logo}>
                        <Image
                            src={logo}
                            height={90}
                            width={90}
                            alt="logo.icon"
                        />
                    </div>
                    <div className={styles.header_navigation}>
                        <Link className={styles.header_navigation_item} href="/">
                            <span>
                                <b>
                                    Home
                                </b>
                            </span>
                        </Link>
                        <Link className={styles.header_navigation_item} href="/functioning">
                            <span>
                                <b>
                                    Como Funciona
                                </b>
                            </span>
                        </Link>
                        <Link className={styles.header_navigation_item} href="/listing">
                            <span>
                                <b>
                                    Gráfico e Design
                                </b>
                            </span>
                        </Link>
                    </div>
                    <div className={styles.header_login_wrapper}>
                        <div className={styles.header_login_content}>
                            <Link href="/login" className={styles.header_login_button}>
                                <span>
                                    Log In
                                </span>
                            </Link>
                            <Link href="register" className={styles.header_register_button}>
                                <span>
                                    Cadastre-se
                                </span>
                            </Link>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
};
