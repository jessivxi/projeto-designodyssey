'use client'

import styles from './hub.module.css'


import Image from 'next/image'
import Link from 'next/link'

import lupa from './../../../images/icones/lupa.svg'
import gato_arroba from './../../../images/fotos/gato_arroba.png'
import joinha from './../../../images/icones/joinha.svg'
import tela from './../../../images/icones/tela.svg'
import dinheiro from './../../../images/icones/dinheiro.svg'
import seta_esquerda from './../../../images/icones/seta_esquerda.svg'
import seta_direita from './../../../images/icones/seta_direita.svg'

function Hub() {
    return (
        <div className={styles.hub_main}>
            <div className={styles.hub_content}>
                <div className={styles.hero_main}>
                    <div className={styles.hub_hero}>
                        <div className={styles.hub_hero_cat}>
                            <Image src={gato_arroba} height={100} width={100} alt="gato_arroba"></Image>
                        </div>
                        <div className={styles.hub_hero_text}>
                            <span>
                                DesignOdyssey
                            </span>
                            <p className={styles.hero_text_hub}>Amplie sua força de trabalho profissional com freelancers</p>
                        </div>
                        <div className={styles.hub_hero_searchbar}>
                            <input placeholder='O que você está procurando?' className={styles.hub_hero_textinput} type="text" />
                            <Link href="/home">
                                <Image src={lupa} height={25} width={25} alt="lupa_pesquisa"></Image>
                            </Link>
                        </div>
                    </div>
                </div>
                <div className={styles.box_home_main}>
                    <div className={styles.box_home_container}>
                        <div className={styles.box_home_1}>
                            <div className={styles.box1_content_overtitle}>
                                Construa sua presença online
                            </div>
                            <div className={styles.box1_content_title}>
                                Web Design
                            </div>
                        </div>
                        <div className={styles.box_home_2}>
                            <div className={styles.box1_content_overtitle}>
                                Crie um visual impactante
                            </div>
                            <div className={styles.box1_content_title}>
                                Graphic Design
                            </div>
                        </div>
                        <div className={styles.box_home_3}>
                            <div className={styles.box1_content_overtitle}>
                                Defina sua identidade
                            </div>
                            <div className={styles.box1_content_title}>
                                Branding
                            </div>
                        </div>
                        <div className={styles.box_home_4}>
                            <div className={styles.box1_content_overtitle}>
                                Transforme suas ideias em arte
                            </div>
                            <div className={styles.box1_content_title}>
                                Digital Art
                            </div>
                        </div>
                    </div>
                </div>
                <div className={styles.about_main}>
                    <div className={styles.about_box}>
                        <div className={styles.about_box_title}>
                            <h1 className={styles.about_titulo}>
                                A solução rápida e fácil para você
                            </h1>
                        </div>
                        <div className={styles.about_box_text}>
                            <p className={styles.about_text}>
                                Bem-vindo à nossa plataforma, projetada para conectar você com designers de forma prática e segura. Aqui você pode publicar gratuitamente suas necessidades de design, sejam elas para interfaces de sites, logotipos, design de interiores, ilustrações ou outros projetos criativo.
                            </p>
                            <p className={styles.about_text}>
                                Nosso modelo permite que profissionais interessados ​​entrem em contato diretamente com você, promovendo uma comunicação transparente e objetiva. E o melhor: o pagamento só é realizado após a sua aprovação do trabalho final, garantindo que você esteja completamente satisfeito com o resultado.
                            </p>
                        </div>
                        <div>
                            <Link href="/login" className={styles.button_style}>
                                <h1>Experimente agora</h1>
                            </Link>
                        </div>
                    </div>
                </div>
                <div className={styles.box2_home_main}>
                    <div className={styles.box2_home_container}>
                        <div className={styles.box_2}>
                            <div className={styles.box2_content_icon}>
                                <Image src={joinha} height={60} width={60} alt="ícone-joinha"></Image>
                            </div>
                            <div className={styles.box2_content_text}>
                                <p>
                                    Desfrute de uma experiência de correspondência simples e fácil de usar
                                </p>
                            </div>
                        </div>
                        <div className={styles.box_2}>
                            <div className={styles.box2_content_icon}>
                                <Image src={tela} height={60} width={60} alt="ícone-tela"></Image>
                            </div>
                            <div className={styles.box2_content_text}>
                                <p>
                                    Obtenha trabalho de qualidade feito rapidamente e dentro do orçamento
                                </p>
                            </div>
                        </div>
                        <div className={styles.box_2}>
                            <div className={styles.box2_content_icon}>
                                <Image src={dinheiro} height={60} width={60} alt="ícone-dinheiro"></Image>
                            </div>
                            <div className={styles.box2_content_text}>
                                <p>
                                    Pague somente quando estiver satisfeito
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
                <div className={styles.carousel_design_main}>
                    <div className={styles.carousel_design_container}>
                        <div className={styles.carousel_title}>
                            <h1>Gráficos e Design</h1>
                            <h1>Designs para fazer você se <br />destacar.</h1>
                        </div>
                        <div className={styles.carousel_topicos}>
                            <p className={styles.carousel_topicos_botao}>Design de Site</p>
                            <p className={styles.carousel_topicos_botao}>Design Gráfico</p>
                            <Link href="/listing" className={styles.carousel_topicos_botao}>Design logo</Link>
                            <p className={styles.carousel_topicos_botao}>Arte Digital</p>
                        </div>
                        <div className={styles.carousel_carousel_container}>
                            <div className={styles.carousel_carousel_title}>
                                <h1>Explorar Gráficos e Design</h1>
                            </div>
                            <div className={styles.carousel_carousel}>
                                <div className={styles.carousel_carousel_boxes}>
                                    <Link href="/listing" className={styles.carousel_carousel_box1}>
                                        <p className={styles.text_boxes}>Renove seu site</p>
                                    </Link>
                                    <Link href="/listing" className={styles.carousel_carousel_box2}>
                                        <p className={styles.text_boxes}>Amplie seu DesignGrafico</p>
                                    </Link>
                                    <Link href="/listing" className={styles.carousel_carousel_box3}>
                                        <p className={styles.text_boxes}>Construa sua logo</p>
                                    </Link>
                                    <Link href="/listing" className={styles.carousel_carousel_box4}>
                                        <p className={styles.text_boxes}>Faça sua Artedigital</p>
                                    </Link>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Hub