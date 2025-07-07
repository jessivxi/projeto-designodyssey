'use client'
import Link from 'next/link'
import React, { useState } from 'react';
import styles from './public._services.module.css'

function Public_services() {
    const [formData, setFormData] = useState({
        title: '',
        description: '',
        category: '',
        basePrice: '',
        packages: '',
        featured: false,
    });
    const [previewImage, setPreviewImage] = useState<string | null>(null);
    const [errors, setErrors] = useState<Record<string, string>>({});

    const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
        const { name, value, type } = e.target as HTMLInputElement;
        const checked = type === 'checkbox' ? (e.target as HTMLInputElement).checked : undefined;

        setFormData(prev => ({
            ...prev,
            [name]: type === 'checkbox' ? checked : value
        }));
    };

    const handleImageChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const file = e.target.files?.[0];
        if (file) {
            setPreviewImage(URL.createObjectURL(file));
        }
    };

    const validateForm = () => {
        const newErrors: Record<string, string> = {};

        if (!formData.title.trim()) newErrors.title = 'Título é obrigatório';
        if (!formData.description.trim()) newErrors.description = 'Descrição é obrigatória';
        if (!formData.category) newErrors.category = 'Selecione uma categoria';
        if (!formData.basePrice || isNaN(Number(formData.basePrice))) newErrors.basePrice = 'Preço inválido';

        setErrors(newErrors);
        return Object.keys(newErrors).length === 0;
    };

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();

        if (validateForm()) {
            // Aqui você faria o submit do formulário
            console.log('Dados do formulário:', formData);
            alert('Formulário enviado com sucesso!');
        }
    };

    return (
        <>
            <form className={styles.form} onSubmit={handleSubmit}>
                <span>Publique seu Serviço</span>
                <h1>Publique suas ideias e serviços para que os clientes possam visulizar e contratar. </h1>
                {/* Campo Título */}
                <div className={styles.formGroup}>
                    <label className={styles.label}> Titulo</label>
                    <input
                        type='text'
                        name='title'
                        value={formData.title}
                        onChange={handleChange}
                        className={styles.input}
                        required
                    />
                    {errors.title && <span className={styles.error}>{errors.title}</span>}
                </div>

                {/* Campo Descrição */}
                <div className={styles.formGroup}>
                    <label className={styles.label}> Descrição </label>
                    <textarea
                        name='description'
                        value={formData.description}
                        onChange={handleChange}
                        className={`${styles.input} ${styles.textarea}`}
                        required
                        rows={5}
                    />
                    {errors.description && <span className={styles.error}>{errors.description}</span>}
                </div>

                {/* Campo Categoria */}
                <div className={styles.formGroup}>
                    <label className={styles.label}>Categoria</label>
                    <select
                        name='category'
                        value={formData.category}
                        onChange={handleChange}
                        className={styles.input}
                        required
                    >
                        <option value='' disabled selected>Selecione...</option>
                        <option value='web'>Web</option>
                        <option value='grafico'>Grafico</option>
                        <option value='logotipo'>Logotipo</option>
                        <option value='arte digital'>Arte digital</option>
                    </select>
                    {errors.category && <span className={styles.error}>{errors.category}</span>}
                </div>

                {/* Campo Preço Base */}
                <div className={styles.formGroup}>
                    <label className={styles.label}> Preço
                    </label>
                    <input
                        type='text'
                        name='basePrice'
                        value={formData.basePrice}
                        onChange={handleChange}
                        className={styles.input}
                        min='0'
                        step='0.01'
                        required
                    />
                    {errors.basePrice && <span className={styles.error}>{errors.basePrice}</span>}
                </div>

                {/* Campo Pacotes (JSON) - Opcional */}
                <div className={styles.formGroup}>
                    <label className={styles.label}> Pacotes
                    </label>
                    <textarea
                        name='packages'
                        value={formData.packages}
                        onChange={handleChange}
                        className={`${styles.input} ${styles.textarea}`}
                        rows={3}
                        placeholder='[{"nome":"Básico","valor":100.00}]'
                    />
                </div>

                <div className={styles.formGroup}>
                    <label className={styles.label}>Foto</label>
                    <div className={styles.customFileInput}>
                        <input
                            type='file'
                            accept='image/*'
                            onChange={handleImageChange}
                            className={styles.fileInput}
                            id="file-upload"
                        />
                        <label htmlFor="file-upload" className={styles.fileInputLabel}>
                            Escolher arquivo
                        </label>
                    </div>
                    {previewImage && (
                        <div className={styles.imagePreview}>
                            <img src={previewImage} alt='Preview do serviço' />
                        </div>
                    )}
                </div>

                {/* Botões de Ação */}
                <div className={styles.buttonGroup}>
                    <Link href='/profile_freelancer' type='button' className={`${styles.button} ${styles.secondaryButton}`}>
                        Publicar
                    </Link>
                    <Link href='/profile_freelancer' type='submit' className={`${styles.button2} ${styles.primaryButton}`}>
                        Voltar
                    </Link>
                </div>
            </form>
        </>
    )
}
export default Public_services;