import React from 'react';
import Header from '../components/header/header';
import Footer from '../components/footer/footer';
import styles from './profile.module.css';
import Image from 'next/image';
import Link from 'next/link'; // Importação do Link
import chat from './../../images/icones/chat-fill.svg';

function Profile() {
    return (
        <>
            <div className={styles.profile_container}>
                <div className={styles.profile_main}>
                    <div className={styles.profile_box_photo}>
                        <div className={styles.profile_photo}></div>
                        <div className={styles.profile_name}>
                            <h1 className={styles.profile_name_user}>Jessica</h1>
                            <p className={styles.profile_name_username}>@jessivxi</p>
                        </div>
                        <div className={styles.profile_information_text}>
                            <p className={styles.profile_information_date}>Entrou em outubro de 2024</p>
                            <p className={styles.profile_information_Location}>Taubate-sp</p>
                            <p className={styles.profile_information_type}>Cliente</p>
                        </div>
                        <button className={styles.profile_button}>Editar Perfil</button>
                    </div>
                    <Link href="/" className={styles.profile_button_explorer}>Explorar DesignOdyssey</Link>
                    <Link href="/profile_freelancer" className={styles.profile_link_freelancer}>
                        Você está atualmente no seu perfil de CLIENTE. Clique para alternar para seu perfil de freelancer.
                    </Link>
                </div>
                <div className={styles.profile_right_column}>
                    <div className={styles.profile_right_column_text}>
                        <h1 className={styles.profile_right_column_text_title}>
                            Aproveite ao máximo o DesignOdyssey compartilhando um pouco mais sobre você e como você prefere trabalhar com freelancers.
                        </h1>
                    </div>
                    <div className={styles.profile_rigth_column_box_one}>
                        <p className={styles.profile_rigth_column_box_one_title}>Compartilhe como você planeja usar o DesignOdyssey</p>
                        <p className={styles.profile_rigth_column_box_one_text}>Diga-nos se você está aqui para encontrar serviços ou oferecê-los.</p>
                    </div>
                    <div className={styles.profile_rigth_column_box_one}>
                        <p className={styles.profile_rigth_column_box_one_title}>Transforme sua visão em realidade.</p>
                        <p className={styles.profile_rigth_column_box_one_text}>Encontre o designer perfeito para o seu projeto aqui.</p>
                    </div>
                    <div className={styles.profile_rigth_column_box_one}>
                        <p className={styles.profile_rigth_column_box_one_title}>Fale sobre você ou seu negócio</p>
                        <p className={styles.profile_rigth_column_box_one_text}>Descreva sua necessidade e receba soluções sob medida.</p>
                    </div>
                    <div className={styles.profile_right_column_evaluation}>
                        <h1 className={styles.profile_rigth_column_evaluation_title}>Avaliações de Freelancers</h1>
                        <Image src={chat} height={70} width={70} alt="ícone-tela" />
                        <p className={styles.profile_right_column_evaluation_text}>jessivxi ainda não tem nenhuma avaliação</p>
                    </div>
                </div>
            </div>
        </>
    );
}

export default Profile;