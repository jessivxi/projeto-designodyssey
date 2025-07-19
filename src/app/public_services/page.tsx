'use client';

import { useState, ChangeEvent, FormEvent, useEffect } from 'react';
import { useRouter } from 'next/navigation';
import styles from './public._services.module.css';

export default function Public_services() {
    interface User {
        id: number;
        nome: string;
        tipo: string; // Adicionando o campo tipo
    }

    const [users, setUsers] = useState<User[]>([]);

    useEffect(() => {
        getId();
    }, []);
    const router = useRouter();

    const [formData, setFormData] = useState({
        title: '',
        description: '',
        category: '',
        basePrice: '',
        packages: '',
        idFreelancer: '', // NOVO campo aqui
    });

    const [errors, setErrors] = useState({
        title: '',
        description: '',
        category: '',
        basePrice: '',
        idFreelancer: '',
    });

    const categoryMap: Record<string, number> = {
        web: 1,
        grafico: 2,
        logotipo: 3,
        'arte digital': 4,
    };

    const handleChange = (e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
        const { name, value } = e.target;
        setFormData(prev => ({ ...prev, [name]: value }));
    };

    const validate = () => {
        const e = {
            title: '',
            description: '',
            category: '',
            basePrice: '',
            idFreelancer: '',
        };

        if (!formData.title.trim()) e.title = 'Título obrigatório';
        if (!formData.description.trim()) e.description = 'Descrição obrigatória';
        if (!formData.category) e.category = 'Categoria obrigatória';
        if (!formData.basePrice || isNaN(Number(formData.basePrice))) e.basePrice = 'Preço inválido';
        if (!formData.idFreelancer.trim() || isNaN(Number(formData.idFreelancer))) e.idFreelancer = 'ID do freelancer inválido';

        setErrors(e);
        return Object.values(e).every(err => !err);
    };

    const handleSubmit = async (e: FormEvent) => {
        e.preventDefault();
        if (!validate()) return;

        const payload = {
            id_categoria: categoryMap[formData.category],
            titulo: formData.title,
            descricao: formData.description,
            preco_base: Number(formData.basePrice),
            pacotes: formData.packages || '[]',
            id_freelancer: Number(formData.idFreelancer),
        };

        try {
            const res = await fetch('http://localhost/dashboard/api-designOdyssey/servicos/post.php', {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify(payload),
            });

            const data = await res.json();

            if (!res.ok) throw new Error(data.erro || 'Erro ao publicar');

            alert('Serviço publicado com sucesso!');
            router.push('/profile_freelancer');
        } catch (err: any) {
            alert(err.message);
        }
    };

    const getId = async () => {
        try {
            const resId = await fetch('http://localhost/dashboard/api-designOdyssey/usuarios/get.php', {
                method: 'GET'
            });

            const dataId = await resId.json();

            if (!resId.ok) throw new Error(dataId.erro || 'Erro ao obter usuários');

            // Assumindo que a API retorna um array de objetos com id e nome
            setUsers(dataId);
        } catch (err: any) {
            alert(err.message);
        }
    };


    return (
        <form onSubmit={handleSubmit} className={styles.form}>
            <span>Publique seu Serviço</span>
            <h1>Publique suas ideias e serviços para que os clientes possam visualizar e contratar.</h1>

            {/* Novo campo idFreelancer */}
            <div className={styles.formGroup}>
                <label className={styles.label}>ID do Freelancer</label>
                <select name="idFreelancer" onChange={handleChange} className={styles.input}>
                    <option value="">Selecione um freelancer...</option>
                    {users
                        .filter(user => user.tipo.toLowerCase() === 'designer')
                        .map(user => (
                            <option key={user.id} value={user.id}>
                                {user.nome}
                            </option>
                        ))
                    }
                </select>
                {errors.idFreelancer && <span className={styles.error}>{errors.idFreelancer}</span>}
            </div>

            <div className={styles.formGroup}>
                <label className={styles.label}>Título</label>
                <input
                    type="text"
                    name="title"
                    value={formData.title}
                    onChange={handleChange}
                    className={styles.input}
                />
                {errors.title && <span className={styles.error}>{errors.title}</span>}
            </div>

            <div className={styles.formGroup}>
                <label className={styles.label}>Descrição</label>
                <textarea
                    name="description"
                    value={formData.description}
                    onChange={handleChange}
                    className={`${styles.input} ${styles.textarea}`}
                    rows={5}
                />
                {errors.description && <span className={styles.error}>{errors.description}</span>}
            </div>

            <div className={styles.formGroup}>
                <label className={styles.label}>Categoria</label>
                <select
                    name="category"
                    value={formData.category}
                    onChange={handleChange}
                    className={styles.input}
                >
                    <option value="">Selecione...</option>
                    <option value="web">Web</option>
                    <option value="grafico">Gráfico</option>
                    <option value="logotipo">Logotipo</option>
                    <option value="arte digital">Arte Digital</option>
                </select>
                {errors.category && <span className={styles.error}>{errors.category}</span>}
            </div>

            <div className={styles.formGroup}>
                <label className={styles.label}>Preço</label>
                <input
                    type="text"
                    name="basePrice"
                    value={formData.basePrice}
                    onChange={handleChange}
                    className={styles.input}
                />
                {errors.basePrice && <span className={styles.error}>{errors.basePrice}</span>}
            </div>

            <div className={styles.formGroup}>
                <label className={styles.label}>Pacotes</label>
                <textarea
                    name="packages"
                    value={formData.packages}
                    onChange={handleChange}
                    className={`${styles.input} ${styles.textarea}`}
                    rows={3}
                    placeholder='[{"nome":"Básico","valor":100.00}]'
                />
            </div>


            <div className={styles.buttonGroup}>
                <button type="submit" className={`${styles.button} ${styles.secondaryButton}`}>
                    Publicar
                </button>
                <button
                    type="button"
                    onClick={() => router.push('/profile_freelancer')}
                    className={`${styles.button2} ${styles.primaryButton}`}
                >
                    Voltar
                </button>
            </div>
        </form>
    );
}
