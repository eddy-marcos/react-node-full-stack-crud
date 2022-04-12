import React from 'react'
import styles from './footer.module.css'

const Footer = () => {
    return (
      <footer data-testid="footer" className={styles.footer}>
       <p>Copyright &copy; mytodos.com</p>
    </footer>
    )
}

export default Footer