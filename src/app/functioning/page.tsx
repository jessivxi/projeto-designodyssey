import styles from './functioning.module.css';
import Link from 'next/link';
import Image from 'next/image';
import taxa from '../../images/icones/taxa.svg';
import flower1 from '../../images/icones/flower1.svg';
import columns from '../../images/icones/columns.svg';
import arcoiris from '../../images/icones/rainbow.svg'
import chat from '../../images/icones/chat-fill.svg';

function Functioning() {
    return (
        <>
            <main className={styles.functioning_main}>
                {/* Seção para Freelancers - MODIFICADA */}
                <section className={styles.functioning_apresention_main}>
                    <h1 className={styles.functioning_apresention_texts}>Você quer ser<br></br> um Freelancer?</h1>
                    <div className={styles.functioning_apresention_content}>
                        <div className={styles.functiong_service_columns_container}>
                            {/* Coluna Esquerda */}
                            <div className={styles.functiong_service_vertical}>
                                <div className={styles.functiong_service_colune1}>
                                    <Image src={columns} height={60} width={60} alt="ícone-colunas" />
                                    <h2 className={styles.functiong_service_title}>Cadastro:</h2>
                                    <p className={styles.functiong_service_text}>Você cria um perfil simples no DesignOdyssey e escolhe a categoria dos serviços que oferece. (como Design de Logos, Arte Digital, Sites, Design Gráfico)</p>
                                </div>
                                <div className={styles.functiong_service_colune3}>
                                    <Image src={taxa} height={60} width={60} alt="ícone-taxa" />
                                    <h2 className={styles.functiong_service_title}>Taxa de 5%:</h2>
                                    <p className={styles.functiong_service_text}>O DesignOdyssey cobrará uma taxa de 5% sobre o valor acordado com o cliente, para manutenção e operação da plataforma.</p>
                                </div>
                                <div className={styles.functiong_service_colune2}>
                                    <Image src={flower1} height={60} width={60} alt="flower1-tela" />
                                    <h2 className={styles.functiong_service_title}>Exposição e Visibilidade:</h2>
                                    <p className={styles.functiong_service_text}>Seu serviço será exibido na categoria correspondente, facilitando para os clientes encontrarem o que precisam.</p>
                                </div>
                            </div>

                            {/* Coluna Direita */}
                            <div className={styles.functiong_service_vertical}>
                                <div className={styles.functiong_service_colune4}>
                                    <Image src={arcoiris} height={60} width={60} alt="ícone-tela" />
                                    <h2 className={styles.functiong_service_title}>Publicação dos Serviços:</h2>
                                    <p className={styles.functiong_service_text}>Após o cadastro, você posta seus serviços (não portfólio), detalhando o que oferece, incluindo descrições e os valores.</p>
                                </div>
                                <div className={styles.functiong_service_colune5}>
                                    <Image src={chat} height={60} width={60} alt="ícone-tela" />
                                    <h2 className={styles.functiong_service_title}>Contato Direto:</h2>
                                    <p className={styles.functiong_service_text}>Quando um cliente estiver interessado, ele entrará em contato diretamente via WhatsApp (linkado no seu perfil) para discutir detalhes e fechar o contrato..</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>
            </main>
        </>
    );
}

export default Functioning;