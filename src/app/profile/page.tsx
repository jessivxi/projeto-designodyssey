// Code: Profile Page
'use client'
import React from 'react';
import Header from '../components/header/header';
import Footer from '../components/footer/footer';
import styles from './profile.module.css';
import usuario from '../../images/fotos/usuario.jpg';
import Image from 'next/image';

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
            </div>
            <Footer />
        </>
    );
}

export default Profile;