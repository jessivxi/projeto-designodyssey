// Code: Profile Page
'use client'
import React from 'react';
import Header from '../components/header/header';
import Footer from '../components/footer/footer';
import styles from './profile.module.css';
import Image from 'next/image';
import chat  from './../../images/icones/chat-fill.svg'

function Profile() {
    return (
        <>
            <Header />
            <div className={styles.profile_container}>
                <div className={styles.profile_main}>
                    <div className={styles.profile_box_photo}>
                        <div className={styles.profile_photo}>
                        </div>
                        <div className={styles.profile_name}>
                            <h1 className={styles.profile_name_user}>Jessica</h1>
                            <p className= {styles.profile_name_username}> @jessivxi </p>
                        </div>
                        <div className={styles.profile_information_text}>
                            <p className={styles.profile_information_date}>Entrou em outubro de 2024</p>
                            <p className={styles.profile_information_Location}>Localização</p>
                            <p className={styles.profile_information_lenguages}>Idiomas</p>
                        </div>
                        <button className={styles.profile_button}>Editar Perfil</button>
                    </div>
                    <button className={styles.profile_button_explorer}>Explorar DesignOdyssey</button>
                </div>
                <div className={styles.profile_right_column}>
                    <div className={styles.profile_right_column_text}>
                        <h1 className={styles.profile_right_column_text_title}>Aproveite ao máximo o DesignOdyssey compartilhando um pouco mais sobre você e como você prefere trabalhar com freelancers.</h1>
                    </div>
                    <div className={styles.profile_rigth_column_box_one}>
                        <p className={styles.profile_rigth_column_box_one_title}>Compartilhe como você planeja usar o DesignOdyssey</p>
                        <p className={styles.profile_rigth_column_box_one_text}>Diga-nos se você está aqui para encontrar serviços ou oferecê-los.</p>
                    </div>
                    <div className={styles.profile_rigth_column_box_one}>
                        <p className={styles.profile_rigth_column_box_one_title}>Transforme sua visão em realidade. </p>
                        <p className={styles.profile_rigth_column_box_one_text}>Encontre o designer perfeito para o seu projeto aqui.</p>
                    </div>
                    <div className={styles.profile_rigth_column_box_one}>
                        <p className={styles.profile_rigth_column_box_one_title}>Fale sobre você ou seu negócio</p>
                        <p className={styles.profile_rigth_column_box_one_text}>Descreva sua necessidade e receba soluções sob medida.</p>
                    </div>
                    <div className={styles.profile_right_column_evaluation}>
                        <h1 className={styles.profile_rigth_column_evaluation_title}>Avaliações de Clientes</h1>
                        <Image src={chat} height={70} width={70} alt="ícone-tela" />
                        <p className={styles.profile_right_column_evaluation_text}>jessivxi ainda não tem nenhuma avaliação</p>
                    </div>
                </div>
            </div>
            <Footer />
        </>
    );
}

export default Profile;