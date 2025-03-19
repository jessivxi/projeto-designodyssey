"use client"
import styles from './functioning.module.css';
import Link from 'next/link';
import Header from '../components/header/header';
import Footer from '../components/footer/footer';
import Image from 'next/image';
import tela from '../../images/icones/tela.svg';
import taxa from '../../images/icones/taxa.svg';
import flower1 from '../../images/icones/flower1.svg';
import columns from '../../images/icones/columns.svg';

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
                    <h1 className={styles.functioning_apresention_texts}>Você quer ser<br></br> um Freelancer?</h1>
                    <div className={styles.functioning_apresention_content}>
                        <div className={styles.functiong_service_content}>
                            <div className={styles.functiong_service_main}>
                                <div className={styles.functiong_service_colune1}>
                                <Image src={columns} height={60} width={60} alt="ícone-colunas" />
                                    <h2 className={styles.functiong_service_title}>Cadastro:</h2>
                                    <p className={styles.functiong_service_text}>Cadastro:
                                    Você cria um perfil simples no DesignOdyssey e escolhe a categoria dos serviços que oferece. (como Design de Logos, Arte Digital, Sites, Design Gráfico)</p>
                                </div>
                                <div className={styles.functiong_service_colune2}>
                                <Image src={flower1} height={60} width={60} alt="flower1-tela" />
                                    <h2 className={styles.functiong_service_title}>Exposição e Visibilidade:</h2>
                                    <p className={styles.functiong_service_text}>Seu serviço será exibido na categoria correspondente, facilitando para os clientes encontrarem o que precisam.</p>
                                </div>
                                <div className={styles.functiong_service_colune3}>
                                <Image src={taxa} height={60} width={60} alt="ícone-taxa" />
                                    <h2 className={styles.functiong_service_title}>Taxa de 5%:</h2>
                                    <p className={styles.functiong_service_text}>O DesignOdyssey cobrará uma taxa de 
                                    5% sobre o valor acordado com o cliente, para manutenção e operação da plataforma.</p>
                                </div>
                                <div className={styles.functiong_service_colune4}></div>
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