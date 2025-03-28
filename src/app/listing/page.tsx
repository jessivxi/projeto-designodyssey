"use client"
import styles from './listing.module.css'
import Image from 'next/image';
import React from 'react'

import lupa from '../../images/icones/lupa.svg'

import Link from 'next/link'
import Header from '../components/header/header';

function listing() {
    return (
        <>
            <Header />
            <div className={styles.listing_main}>
                <div className={styles.listing_content}>
                    <div className={styles.hero_main}>
                        <div className={styles.listing_hero}>
                            <h1 className={styles.titulo_hero}>Hey, esta procurando freelancers?</h1>
                            <div className={styles.listing_hero_searchbar}>
                                <input placeholder='O que você está procurando?' className={styles.listing_hero_textinput} type="text" />
                                <Link href="/home">
                                    <Image src={lupa} height={25} width={25} alt="lupa_pesquisa"></Image>
                                </Link>
                            </div>
                        </div>
                    </div>
                    <div className={styles.listing_design_main}>
                        <div className={styles.listing_design_container}>
                            <div className={styles.carousel_title}>
                                <h1 className={styles.listing_title}>Design Logotipo</h1>
                                <p className={styles.listing_text}>Deixe-nos ajudar a achar o serviço de  Designer certo para voce.</p>
                            </div>
                            <div className={styles.listing_topicos}>
                                <p className={styles.listing_topicos_botao1}>Design de Site</p>
                                <p className={styles.listing_topicos_botao2}>Design Gráfico</p>
                                <div className={styles.listing_topicos_botao3}>Design logo</div>
                                <p className={styles.listing_topicos_botao4}>Arte Digital</p>
                            </div>
                            <div className={styles.listing_carousel_container}>
                                <div className={styles.listing_carousel_title}>
                                    <h1>Mais de 700 resultados</h1>
                                </div>
                                <div className={styles.clisting_carousel}>
                                    <div className={styles.listing_carousel_boxes}>
                                        <div className={styles.listing_carousel_box1}>
                                            <p className={styles.text_boxes_1}>Anuncio de luciana</p>
                                            <p className={styles.text_boxes_2}>Eu criarei um logotipo empresarial minimalista premium</p>
                                            <p className={styles.text_boxes_3}>A partir de 270$</p>
                                        </div>
                                        <div className={styles.listing_carousel_box2}>
                                            <p className={styles.text_boxes_1}>Anuncio de pedro</p>
                                            <p className={styles.text_boxes_2}>Eu criarei um logotipo profissional moderno para sua marca em 24 horas</p>
                                            <p className={styles.text_boxes_3}>A partir de 270$</p>
                                        </div>
                                        <div className={styles.listing_carousel_box3}>
                                            <p className={styles.text_boxes_1}>Anuncio de Jade</p>
                                            <p className={styles.text_boxes_2}>Nossa agência criará um logotipo empresarial moderno e minimalista</p>
                                            <p className={styles.text_boxes_3}>A partir de 270$</p>
                                        </div>
                                        <div className={styles.listing_carousel_box4}>
                                            <p className={styles.text_boxes_1}>Anuncio de Erick</p>
                                            <p className={styles.text_boxes_2}>Eu farei arte de linha minimalista moderna e design de logotipo de emblema</p>
                                            <p className={styles.text_boxes_3}>A partir de 270$</p>
                                        </div>
                                    </div>
                                </div>
                                <div className={styles.clisting_carousel2}>
                                    <div className={styles.listing_carousel_boxes}>
                                        <div className={styles.listing_carousel_box5}>
                                            <p className={styles.text_boxes_1}>Anuncio de luciana</p>
                                            <p className={styles.text_boxes_2}>Eu criarei um logotipo empresarial minimalista premium</p>
                                            <p className={styles.text_boxes_3}>A partir de 270$</p>
                                        </div>
                                        <div className={styles.listing_carousel_box6}>
                                            <p className={styles.text_boxes_1}>Anuncio de pedro</p>
                                            <p className={styles.text_boxes_2}>Eu criarei um logotipo profissional moderno para sua marca em 24 horas</p>
                                            <p className={styles.text_boxes_3}>A partir de 270$</p>
                                        </div>
                                        <div className={styles.listing_carousel_box7}>
                                            <p className={styles.text_boxes_1}>Anuncio de Jade</p>
                                            <p className={styles.text_boxes_2}>Nossa agência criará um logotipo empresarial moderno e minimalista</p>
                                            <p className={styles.text_boxes_3}>A partir de 270$</p>
                                        </div>
                                        <div className={styles.listing_carousel_box8}>
                                            <p className={styles.text_boxes_1}>Anuncio de Erick</p>
                                            <p className={styles.text_boxes_2}>Eu farei arte de linha minimalista moderna e design de logotipo de emblema</p>
                                            <p className={styles.text_boxes_3}>A partir de 270$</p>
                                        </div>
                                    </div>
                                    <div className={styles.listing_contador_number}>
                                        <p className={styles.listing_numero}>1</p>
                                        <p className={styles.listing_numero}>2</p>
                                        <p className={styles.listing_numero}>3</p>
                                        <p className={styles.listing_numero}>4</p>
                                        <p className={styles.listing_numero}>5</p>
                                        <p className={styles.listing_numero}>6</p>
                                        <p className={styles.listing_numero}>7</p>
                                        <p className={styles.listing_numero}>8</p>
                                        <p className={styles.listing_numero}>9</p>
                                        <p className={styles.listing_numero}>10</p>
                                        <p className={styles.listing_numero}>+</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}

export default listing