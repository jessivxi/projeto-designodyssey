'use client'
import React from 'react';
import Header from '../components/header/header';
import Footer from '../components/footer/footer';
import styles from './profile_freelancer.module.css';
import Image from 'next/image';
import pincel from './../../images/icones/pencil-square.svg'
import Link from 'next/link'; // Importação do Link
import chat from './../../images/icones/chat-fill.svg';

function Profile_freelancer() {
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
                            <p className={styles.profile_information_Location}>Localização</p>
                            <p className={styles.profile_information_lenguages}>Idiomas</p>
                        </div>
                        <button className={styles.profile_button}>Editar Perfil</button>
                    </div>
                    <button className={styles.profile_button_explorer}>Explorar DesignOdyssey</button>
                    <Link href="/profile" className={styles.profile_link_freelancer}>
                        Você está atualmente no seu perfil de Freelancer. Para acessar seu perfil de comprador, clique para alterna o modo de comprador
                    </Link>
                </div>
                <div className={styles.profile_right_column}>
                    <div className={styles.profile_right_column_text}>
                        <h1 className={styles.profile_right_column_text_title}>
                            Aproveite ao máximo o DesignOdyssey compartilhando um pouco mais sobre você e como você prefere trabalhar com seus clientes.
                        </h1>
                    </div>
                    <div className={styles.profile_rigth_column_box_one}>
                        <div className={styles.profile_right_column_icone_box}>
                        <Image src={pincel} height={70} width={80} alt="ícone-tela" /> 
                        </div>
                        <p className={styles.profile_rigth_column_box_one_title}>Publique aqui seus serviços</p>
                        <p className={styles.profile_rigth_column_box_one_text}>DesignOdyssey cobra uma taxa de 5% da suas publicaçoes</p>
                    </div>
                    <div className={styles.profile_right_column_evaluation}>
                        <h1 className={styles.profile_rigth_column_evaluation_title}>Avaliações de Clientes</h1>
                        <div className={styles.profile_rigth_column_evaluation_icon}>
                        <Image src={chat} height={70} width={70} alt="ícone-tela" />
                        </div>
                        <p className={styles.profile_right_column_evaluation_text}>jessivxi ainda não tem nenhuma avaliação</p>
                    </div>
                </div>
            </div>
        </>
    );
}

export default Profile_freelancer;