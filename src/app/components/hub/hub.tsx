import styles from './hub.module.css'
import Image from 'next/image'
import Link from 'next/link'

import lupa from './../../../images/icones/lupa.svg'
import joinha from './../../../images/icones/joinha.svg'
import tela from './../../../images/icones/tela.svg'
import dinheiro from './../../../images/icones/dinheiro.svg'
import site from '@/images/fotos/site.jpg'
import web from '@/images/fotos/design_grafico.jpg'
import logo from '@/images/fotos/design_logo.jpg'
import artedigital from '@/images/fotos/arte_digital.jpg'


function Hub() {
    return (
        <>
            <div className={styles.main}>
                <div className={styles.searchBarMain}>
                    <h1>DesignOdyssey</h1>
                    <span>Encontre o serviço de Design ideal imediatamente</span>
                    <div className={styles.searchBar}>
                        <input placeholder='O que você está procurando?'></input>
                        <Image src={lupa} height={25} width={25} alt='lupa'></Image>
                    </div>
                </div>
                <div className={styles.topicBoxes}>
                    <Link href='/listing' className={styles.topicBox1}>
                        <span>Construa sua presença online</span>
                        <h1>Web Design</h1>
                    </Link>
                    <Link href='/listing' className={styles.topicBox2}>
                        <span>Crie um visual impactante</span>
                        <h1>Graphic Design</h1>
                    </Link>
                    <Link href='/listing' className={styles.topicBox3}>
                        <span>Defina sua identidade</span>
                        <h1>Branding</h1>
                    </Link>
                    <Link href='/listing' className={styles.topicBox4}>
                        <span>Transforme suas ideias em arte</span>
                        <h1>Digital Art</h1>
                    </Link>
                </div>
                <div className={styles.aboutContainer}>
                    <div className={styles.aboutMain}>
                        <h1>A solução rápida e fácil para você</h1>
                        <span>
                            Bem-vindo à nossa plataforma, projetada para conectar você com designers de forma prática e segura. Aqui você pode publicar gratuitamente suas necessidades de design, sejam elas para interfaces de sites, logotipos, design de interiores, ilustrações ou outros projetos criativo. 
                            <br />
                            <br />
                            Nosso modelo permite que profissionais interessados entrem em contato diretamente com você, promovendo uma comunicação transparente e objetiva. E o melhor: o pagamento só é realizado após a sua aprovação do trabalho final, garantindo que você esteja completamente satisfeito com o resultado.
                        </span>
                        <a href="login" className={styles.botao}>Experimente agora</a>
                    </div>
                </div>
                <div className={styles.positiveCards}>
                    <div className={styles.card1}>
                        <Image src={joinha} height={50} width={50} alt='joinha'></Image>
                        <span>Desfrute de uma experiência de correspondência simples e fácil de usar</span>
                    </div>
                    <div className={styles.card2}>
                        <Image src={tela} height={50} width={50} alt='tela'></Image>
                        <span>Obtenha trabalho de qualidade feito rapidamente e dentro do orçamento</span>
                    </div>
                    <div className={styles.card3}>
                        <Image src={dinheiro} height={50} width={50} alt='dinheiro'></Image>
                        <span>Pague somente quando estiver satisfeito</span>
                    </div>
                </div>
                <div className={styles.categoriesMain}>
                    <h1>Gráficos e Designs para fazer você se destacar.</h1>
                    <p>Explorar Gráficos e Design</p>
                    <div className={styles.categoriesBox}>
                        <a href="/interface" className={styles.categories}>
                            <Image src={site} height={250} width={250} alt='interface'></Image>
                            <span>Interface</span>
                        </a>
                        <a href="/design-grafico" className={styles.categories}>
                            <Image src={web} height={250} width={250} alt='design gráfico'></Image>
                            <span>Design Gráfico</span>
                        </a>
                        <a href="/listing" className={styles.categories}>
                            <Image src={logo} height={250} width={250} alt='logotipo'></Image>
                            <span>Logotipo</span>
                        </a>
                        <a href="/arte-digital" className={styles.categories}>
                            <Image src={artedigital} height={250} width={250} alt='arte digital'></Image>
                            <span>Arte Digital</span>
                        </a>
                    </div>
                </div>
            </div>
        </>
    );
}

export default Hub