import Footer from "../components/footer/footer"
import Header from "../components/header/header"
import Header_rw from "../components/header_rw/header_rw"

import styles from "./teste.module.css"

export default function teste() {
    return (
        <>
            <Header_rw />
            <div className={styles.home}></div>
            <Footer />
        </>
    )
};
