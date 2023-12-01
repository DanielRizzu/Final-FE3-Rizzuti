import React, { useContext } from 'react'
import styles from './../footer/Footer.module.css'
import { ThemeContext } from '../../contexts/ThemeContext';
import image from '../../assets/DH.png'
import icono1 from '../../assets/ico-facebook.png'
import icono2 from '../../assets/ico-instagram.png'
import icono3 from '../../assets/ico-tiktok.png'
import icono4 from '../../assets/ico-whatsapp.png'

const Footer = () => {
  const { theme } = useContext(ThemeContext);

  const stylesTheme = {
    backgroundColor: theme === 'light' ? '#D8D9D9' : '#434243',
    color: theme === 'light' ? '#434243' : '#D8D9D9',
  };


  return (
    <footer className={styles.footer} style={stylesTheme}>
      <img className={styles.image} src={image} alt="DH" />
      <a href="#"><img className={styles.icono} src={icono1} /></a>
      <a href="#"><img className={styles.icono} src={icono2} /></a>
      <a href="#"><img className={styles.icono} src={icono3} /></a>
      <a href="#"><img className={styles.icono} src={icono4} /></a>

      <h6 className={styles.name}>Final Rizzuti Daniel </h6>
    </footer>

  )
}

export default Footer