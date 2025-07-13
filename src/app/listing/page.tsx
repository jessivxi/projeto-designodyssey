'use client';

import styles from './listing.module.css';
import Image from 'next/image';
import React, { useEffect, useState } from 'react';
import Link from 'next/link';

// Imagens locais (ajuste os caminhos conforme necessário)
import logo1 from '@/images/fotos/logotipo_1.gif';
import logo2 from '@/images/fotos/logotipo_2.gif';
import logo3 from '@/images/fotos/logotipo_3.gif';
import logo4 from '@/images/fotos/logotipo_4.gif';
import logo5 from '@/images/fotos/logotipo_5.gif';
import logo6 from '@/images/fotos/logotipo_6.gif';

interface Servico {
    id: number;
    titulo: string;
    nome: string;
    preco_base: string; 
}

export default function Listing() {
    const [servicos, setServicos] = useState<Servico[]>([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState<string | null>(null);

    // Imagens locais em ordem
    const imagensLocais = [logo1, logo2, logo3, logo4, logo5, logo6];

    useEffect(() => {
        const fetchServicos = async () => {
            try {
                const response = await fetch('http://localhost/dashboard/api-designOdyssey/servicos/index.php');

                if (!response.ok) throw new Error('Erro ao carregar serviços');

                const data = await response.json();

                // Debug: Verifique os dados recebidos
                console.log('Dados da API:', data);

                setServicos(data);
            } catch (error) {
                console.error('Erro:', error);
                setError('Não foi possível carregar os serviços. Tente novamente mais tarde.');
            } finally {
                setLoading(false);
            }
        };

        fetchServicos();
    }, []);


    if (loading) return <div className={styles.main}>Carregando serviços...</div>;
    if (error) return <div className={styles.main}>{error}</div>;

    return (
        <div className={styles.main}>
            <div className={styles.top}>
                <h1>Design de Logotipo</h1>
                <p>Deixe-nos ajudar a achar o serviço de Designer certo para você!</p>

                {/* Botões como no original */}
                <div className={styles.botoesTopMain}>
                    <div className={styles.botaoTop}>
                        <span>Design de Site</span>
                    </div>
                    <div className={styles.botaoTop}>
                        <span>Design Gráfico</span>
                    </div>
                    <div className={styles.botaoTop}>
                        <span>Design Logotipo</span>
                    </div>
                    <div className={styles.botaoTop}>
                        <span>Arte Digital</span>
                    </div>
                </div>
            </div>

            <div className={styles.contentMain}>
                <div className={styles.contentBoxes}>
                    {servicos.map((servico, index) => (
                        <Link href='/gig_page' className={styles.contentBox} key={servico.id}>
                            <Image
                                src={imagensLocais[index % imagensLocais.length]}
                                height={300}
                                width={300}
                                alt={`Serviço ${servico.titulo}`}
                            />
                            <p>Anúncio de {servico.nome}</p>
                            <h1>{servico.titulo}</h1>
                            <span>R$ {servico.preco_base}</span>
                        </Link>
                    ))}
                </div>
            </div>
        </div>
    );
}