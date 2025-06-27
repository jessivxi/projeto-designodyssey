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
            <div className={styles.categoriesMain}></div>

        </>
    );
}

export default listing