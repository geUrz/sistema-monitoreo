import { useState, useEffect } from 'react'
import Link from 'next/link'
import { Image } from 'semantic-ui-react'
import { FaBars, FaLock, FaLockOpen, FaTimes, FaUserCircle } from 'react-icons/fa'
import styles from './TopBar.module.css'

export function TopBar() {

  const [status, setStatus] = useState(true)

  const [hold, setHold] = useState()

  const [menu, setMenu] = useState()

  const menuClose = () => {
    setMenu(false)
  }

  const menuOpen = () => {
    if (hold === false && menu === false) {
      setMenu(true)
    }
    if (hold === false && menu === true) {
      setMenu(false)
    }
    if (hold === true && menu === true) {
      setMenu(true)
    }
  }

  useEffect(() => {
    const holdLS = localStorage.getItem('hold')
    setHold(holdLS == 'true')
    const menuLS = localStorage.getItem('menu')
    setMenu(menuLS == 'true')

    if (holdLS == 'false') {
      const menuLS = localStorage.getItem('menu')
      setMenu(menuLS == 'false')
    }

  }, [])

  const menuHold = () => {
    localStorage.setItem('hold', !hold)
    localStorage.setItem('menu', menu)
    setHold(!hold)
    setMenu(menu)
  }

  return (
    <>

      <div className={styles.topBar}>
        <div>
          <Image src='/img/logo.png' alt='Logo' />
        </div>
        <div onClick={menuOpen}>
          {menu ? (
            <FaTimes />
          ) : (
            <FaBars />
          )}
        </div>
      </div>



      <div className={styles.containerMenu} style={{ left: menu ? '0' : '-100%' }}>
        <div className={styles.hold} onClick={menuHold}>
          {hold ? (
            <FaLock className={styles.iconLockClose} />
          ) : (
            <FaLockOpen />
          )}
        </div>
        <div className={styles.topMenu}>
          <FaUserCircle />
          <h1>admin</h1>
        </div>
        <div className={styles.listResidential}>
            <Link href='/residenciales/segovia'>
              <div><h1>Segovia</h1></div>
              <div className={status ? 
                `${styles.statusON}` : 
                `${styles.statusOFF}`
                }>
              </div>
            </Link>
            <Link href='/residenciales/segovia'>
              <div><h1>San Miguel I</h1></div>
              <div className={status ? 
                `${styles.statusON}` : 
                `${styles.statusOFF}`
                }>
              </div>
            </Link>
            <Link href='/residenciales/segovia'>
              <div><h1>San Miguel II</h1></div>
              <div className={status ? 
                `${styles.statusON}` : 
                `${styles.statusOFF}`
                }>
              </div>
            </Link>
            <Link href='/residenciales/segovia'>
              <div><h1>Caguamon</h1></div>
              <div className={status ? 
                `${styles.statusON}` : 
                `${styles.statusOFF}`
                }>
              </div>
            </Link>
            <Link href='/residenciales/segovia'>
              <div><h1>Pretty Woman</h1></div>
              <div className={status ? 
                `${styles.statusON}` : 
                `${styles.statusOFF}`
                }>
              </div>
            </Link>
            <Link href='/residenciales/segovia'>
              <div><h1>Laguna Azul</h1></div>
              <div className={status ? 
                `${styles.statusON}` : 
                `${styles.statusOFF}`
                }>
              </div>
            </Link>
            <Link href='/residenciales/segovia'>
              <div><h1>Marinero</h1></div>
              <div className={status ? 
                `${styles.statusON}` : 
                `${styles.statusOFF}`
                }>
              </div>
            </Link>
            <Link href='/residenciales/segovia'>
              <div><h1>Salón Platino</h1></div>
              <div className={status ? 
                `${styles.statusON}` : 
                `${styles.statusOFF}`
                }>
              </div>
            </Link>
            <Link href='/residenciales/segovia'>
              <div><h1>Jardin Azul</h1></div>
              <div className={status ? 
                `${styles.statusON}` : 
                `${styles.statusOFF}`
                }>
              </div>
            </Link>
            <Link href='/residenciales/segovia'>
              <div><h1>Segovia</h1></div>
              <div className={status ? 
                `${styles.statusON}` : 
                `${styles.statusOFF}`
                }>
              </div>
            </Link>
            <Link href='/residenciales/segovia'>
              <div><h1>Segovia</h1></div>
              <div className={status ? 
                `${styles.statusON}` : 
                `${styles.statusOFF}`
                }>
              </div>
            </Link>
        </div>
        <div className={styles.logoBottom}>
          <Image src='/img/logo.png' alt='Logo' />
        </div>
      </div>
    </>
  )
}
