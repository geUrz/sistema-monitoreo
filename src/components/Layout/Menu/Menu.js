import { useState} from 'react'
import Link from 'next/link'
import styles from './Menu.module.css'

export function Menu() {

  const [menu, setMenu] = useState(true)

  const menuToggle = () => {
    setMenu(menu => !menu)
    alert('FUNCIONA')
  }

  return (
    <div className= {menu ? `${styles.containerMenu}` : `${styles.containerMenuHide}` }>
      <div className={styles.topMenu} onClick={menuToggle}>
        <h1>X</h1>
        <Link href='/barrera'>
          <h1>HOME</h1>
        </Link>
      </div>      
    </div>
    
  )
}
