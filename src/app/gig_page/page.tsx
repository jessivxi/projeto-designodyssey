import styles from "./gig_page.module.css"

import Header_rw from "../components/header_rw/header_rw";
import Footer from "../components/footer/footer";

import Image from "next/image";;
import Link from "next/link"

import zapzap from "./../../images/icones/zapzap-branco.svg"
import casa from "./../../images/icones/casa.svg"
import user_dummy from "./../../images/icones/person_circle.svg"
import star_fill from "./../../images/icones/star_fill.svg"
import star_half from "./../../images/icones/star_half.svg"
import flag_brazil from "./../../images/bandeiras/4x3/br.svg"

export const metadata = {
    title: 'Produto'
}

export default function Product() {
    return (
        <>
            <Header_rw />
            <div className={styles.page_wrapper}>
                <div className={styles.page}>
                    <main className={styles.main}>
                        <div className={styles.main_history}>
                            <ul className={styles.history_text}>
                                <li className={styles.house_fix}>
                                    <Link href="/">
                                        <Image
                                            src={casa}
                                            height={18}
                                            width={18}
                                            alt="house.icon"
                                        />
                                    </Link>
                                </li>
                                <li>
                                    <span className={styles.slash_custom}>
                                        /
                                    </span>
                                </li>
                                <li>
                                    <Link href="/listing">
                                        <b>Listing</b>
                                    </Link>
                                </li>
                                <li>
                                    <span className={styles.slash_custom}>
                                        /
                                    </span>
                                </li>
                                <li>
                                    <Link href="/gig_page">
                                        <b>Design</b>
                                    </Link>
                                </li>
                            </ul>
                        </div>
                        <div className={styles.main_title}>
                            <p><b>Criarei um logotipo empresarial minimalista premium</b></p>
                        </div>
                        <div className={styles.main_user_info}>
                            <div className={styles.user_picture}>
                                <Image
                                    src={user_dummy}
                                    height={50}
                                    width={50}
                                    alt="user.icon"
                                />
                            </div>
                            <div className={styles.user_name_rating}>
                                <div className={styles.user_name}>
                                    Luísa M.
                                </div>
                                <div className={styles.user_rating}>
                                    <div className={styles.rating_stars}>
                                        <Image
                                            src={star_fill}
                                            height={20}
                                            width={20}
                                            alt="star.icon"
                                        />
                                        <Image
                                            src={star_fill}
                                            height={20}
                                            width={20}
                                            alt="star.icon"
                                        />
                                        <Image
                                            src={star_fill}
                                            height={20}
                                            width={20}
                                            alt="star.icon"
                                        />
                                        <Image
                                            src={star_fill}
                                            height={20}
                                            width={20}
                                            alt="star.icon"
                                        />
                                        <Image
                                            src={star_half}
                                            height={20}
                                            width={20}
                                            alt="star_half.icon"
                                        />
                                        <p className={styles.text_fix}>
                                            <b>4,5</b>
                                        </p>
                                    </div>
                                    <div className={styles.rating_reviews}>
                                        <a className={styles.rating_trans_fix}>
                                            (741 Avaliações)
                                        </a>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className={styles.separation}></div>
                        <div className={styles.main_product_picture}></div>
                        <div className={styles.what_people_like}>
                            <p>
                                <b>
                                    O que as pessoas adoram neste freelancer
                                </b>
                            </p>
                        </div>
                        <div className={styles.wpl_review}>
                            <div className={styles.wpl_review_box}>
                                <div className={styles.left_wpl_content}>
                                    <Image
                                        src={user_dummy}
                                        height={80}
                                        width={80}
                                        alt=""
                                    />
                                </div>
                                <div className={styles.right_wpl_content}>
                                    <div className={styles.wpl_upper_content}>
                                        <div className={styles.wpl_uc_name}>
                                            <b>
                                                Dandara
                                            </b>
                                        </div>
                                        <div className={styles.wpl_uc_country}>
                                            <Image
                                                src={flag_brazil}
                                                height={20}
                                                width={20}
                                                alt="flag_brazil.icon"
                                                className={styles.flag_round}
                                            />
                                            <p className={styles.wpl_country_text_fix}>
                                                Brazil
                                            </p>
                                        </div>
                                        <div className={styles.wpl_uc_separation}></div>
                                        <div className={styles.wpl_uc_rating}>
                                            <div className={styles.wpl_rating_stars}>
                                                <Image
                                                    src={star_fill}
                                                    height={15}
                                                    width={15}
                                                    alt="star.icon"
                                                />
                                                <Image
                                                    src={star_fill}
                                                    height={15}
                                                    width={15}
                                                    alt="star.icon"
                                                />
                                                <Image
                                                    src={star_fill}
                                                    height={15}
                                                    width={15}
                                                    alt="star.icon"
                                                />
                                                <Image
                                                    src={star_fill}
                                                    height={15}
                                                    width={15}
                                                    alt="star.icon"
                                                />
                                                <Image
                                                    src={star_half}
                                                    height={15}
                                                    width={15}
                                                    alt="star_half.icon"
                                                />
                                                <p className={styles.text_fix}>
                                                    <b>4,5</b>
                                                </p>
                                            </div>
                                        </div>
                                    </div>
                                    <div className={styles.wpl_middle_content}>
                                        <p>
                                            Contratar Luisa foi literalmente a melhor coisa que poderia ter acontecido ao nosso novo negócio. Sua atenção aos detalhes e apelo visual no design do logotipo EXCEDERAM... <b className={styles.underline_seemore}>Ver Mais</b>
                                        </p>
                                    </div>
                                    <div className={styles.wpl_lower_content}>
                                        <div className={styles.wpl_lc_text}>
                                            há 2 semanas
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className={styles.product_description}>
                            <div className={styles.pd_topic}>
                                <div className={styles.pd_title}>
                                    <p>
                                        <b>
                                            Apresentação
                                        </b>
                                    </p>
                                </div>
                                <div className={styles.pd_text}>
                                    <p>
                                        Ola, me chamo Luísa. Tenho 35 anos e sou Webdesigner. Comecei com o meu sonho aos meus 18 anos, quando decidi ir para faculdade. Sempre fui apaixonada por design, sempre trabalhando como freelencer desde jovem.
                                    </p>
                                </div>
                            </div>
                            <div className={styles.pd_topic}>
                                <div className={styles.pd_title}>
                                    <p>
                                        <b>
                                            Descrição do serviço
                                        </b>
                                    </p>
                                </div>
                                <div className={styles.pd_subtopic}>
                                    <div className={styles.pd_subtitle}>
                                        Conversa inicial:
                                    </div>
                                    <div className={styles.pd_text}>
                                        Primeiro, a gente vai bater um papo sobre o que sua marca representa, seu público e o que você quer transmitir. Pode ser por mensagem, e-mail ou chamada. Exemplo: se você vende produtos de luxo, vou focar em cores sóbrias e linhas elegantes.
                                    </div>
                                </div>
                                <div className={styles.pd_subtopic}>
                                    <div className={styles.pd_subtitle}>
                                        Rascunho das ideias:
                                    </div>
                                    <div className={styles.pd_text}>
                                        Com base no que você me passar, vou criar 2 a 3 opções de logo em preto e branco (pra focar na forma). Muitos designers no Fiverr fazem assim – mostram o conceito antes de colorir.
                                    </div>
                                </div>
                                <div className={styles.pd_subtopic}>
                                    <div className={styles.pd_subtitle}>
                                        Refinamento:
                                    </div>
                                    <div className={styles.pd_text}>
                                        Você escolhe a opção que mais gostou, e aí eu ajusto os detalhes: cor, fonte e espaçamento. Se precisar, faço versões simplificadas pra redes sociais ou papelaria.
                                    </div>
                                </div>
                                <div className={styles.pd_subtopic}>
                                    <div className={styles.pd_subtitle}>
                                        Entrega:
                                    </div>
                                    <div className={styles.pd_text}>
                                        Te envio o logo em vários formatos (PNG, SVG, etc.) e cores (principal, preto e branco), tudo organizadinho pra você usar onde quiser.
                                    </div>
                                </div>
                            </div>
                        </div>
                    </main>
                    <aside className={styles.sidebar_outer_wrapper}>
                        <div className={styles.sidebar_inner_wrapper}>
                            <div className={styles.sidebar_content}>
                                <div className={styles.sidebar_box}>
                                    <div className={styles.sidebar_description}>
                                        <div className={styles.description_price}>
                                            <p><b>R$ 277,22</b></p>
                                        </div>
                                        <div className={styles.description_text}>
                                            <p>
                                                Pacote de logotipo inicial 01 conceito de logotipo + arquivo PNG e JPEG + 03 revisões
                                            </p>
                                        </div>
                                        <div className={styles.description_bullets}>
                                            <ul>
                                                <li>Pacote básico</li>
                                                <li>1 conceito incluído</li>
                                                <li>Transparência do logotipo</li>
                                                <li>Incluir maquete 3D</li>
                                                <li>Entrega em 3 dias</li>
                                                <li>3 revisões</li>
                                            </ul>
                                        </div>
                                    </div>
                                    <div className={styles.sidebar_contact}>
                                        <Link href="https://api.whatsapp.com/send?phone=11945291461" className={styles.sidebar_button}>
                                            <Image
                                                src={zapzap}
                                                width={30}
                                                height={30}
                                                alt="whatsapp.icon"
                                            />
                                            <p><b>Entre em contato comigo</b></p>
                                        </Link>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </aside>
                </div>
            </div>
            <Footer />
        </>
    )
};


