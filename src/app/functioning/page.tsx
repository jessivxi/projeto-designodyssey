"use client"
import styles from './functioning.module.css';
import Link from 'next/link';
import Header from '../components/header/header';
import Footer from '../components/footer/footer';

function Functioning() {
    return (
        <>
            <Header />
            <main className={styles.functioning_main}>
                {/* Seção de Boas-Vindas */}
                <section className={styles.functioning_content}>
                    <div className={styles.functioning_content_box}>
                        <h1 className={styles.functioning_content_title}>Bem-vindo ao DesignOdyssey!</h1>
                        <p className={styles.functioning_content_text}>
                            O DesignOdyssey conecta freelancers de design e clientes de forma simples e eficiente. Freelancers podem divulgar seus serviços especializados, como design de logos, arte digital, design de sites e design gráfico, organizados por categorias.
                        </p>
                        <div className={styles.functioning_content_button}>
                            <Link href="/listing" className={styles.functioning_button}>
                                Encontre um freelancer
                            </Link>
                        </div>
                    </div>
                </section>

                {/* Seção para Freelancers */}
                <section className={styles.functioning_apresention_main}>
                    <h1 className={styles.functioning_apresention_texts}>Você quer ser um Freelancer?</h1>
                    <div className={styles.functioning_apresention_content}>
                        <div className={styles.functiong_service_content}>
                            <div className={styles.functiong_service_main}>
                                <div className={styles.functiong_service_colune1}>
                                    <h2 className={styles.functiong_service_title}>Cadastro:</h2>
                                    <p className={styles.functiong_service_text}>Cadastre-se gratuitamente e crie um perfil com suas habilidades e experiências.</p>
                                </div>
                                <div className={styles.functiong_service_colune2}>
                                    <h2 className={styles.functiong_service_title}>Exposição e Visibilidade</h2>
                                    <p className={styles.functiong_service_text}>Exposição e Visibilidade</p>
                                </div>
                                <div className={styles.functiong_service_colune3}>
                                    <h2 className={styles.functiong_service_title}>Pagamento Seguro</h2>
                                    <p className={styles.functiong_service_text}>Receba pagamentos de forma segura e rápida.</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>
            </main>
            <Footer />
        </>
    );
}

export default Functioning;