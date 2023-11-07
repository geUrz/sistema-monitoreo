import { useState, useEffect } from 'react'
import Link from 'next/link'
import { Image } from 'semantic-ui-react'
import styles from './TopBar.module.css'

export function TopBar() {

  const [hold, setHold] = useState()

  const [menu, setMenu] = useState()

  const menuClose = () => {
    setMenu(false)
  }

  const menuOpen = () => {
    if(hold === false && menu === false){
      setMenu(true)
    }
    if(hold === false && menu === true){
      setMenu(false)
    }
    if(hold === true && menu === true){
      setMenu(true)
    }
  }

  useEffect(() => {
    const holdLS = localStorage.getItem('hold')
    setHold(holdLS == 'true')
    const menuLS = localStorage.getItem('menu')
    setMenu(menuLS == 'true')

    if(holdLS == 'false'){
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
      <div  onClick={menuOpen}>
        <Image src={
          menu ? '/img/close.png' : '/img/menu.png'} />
      </div>
    </div>



    <div className= {styles.containerMenu} style={{left : menu ? '0' : '-100%'}}>
      <div className={styles.hold} onClick={menuHold}>
        <Image src={hold ? '/img/lock_red.png' : '/img/lock_wh.png' } />
      </div>
      <div className={styles.topMenu}>
        <div className={styles.logo}>
          <Image src='/img/logo.jpeg' alt='Logo' />
          <h1>Sistema de Monitoreo</h1>
        </div>
        <div className={styles.home}>
          <Link href='/home'>
            <Image 
              src='/img/home.png' alt='home' 
              onClick={menuOpen} />
          </Link>
        </div>
      </div>   
      <div className={styles.listaResidenciales}>
        <Link href='/residenciales/segovia'>
          <div>
            <div>Segovia</div>
            <div></div>
          </div>
        </Link>
        <Link href='/home'>
          <div>
            <div>San Miguel I</div>
            <div></div>
          </div>
        </Link>
        <Link href='/home'>
          <div>
            <div>San Miguel II</div>
            <div></div>
          </div>
        </Link>
        <Link href='/home'>
          <div>
            <div>San Agustin</div>
            <div></div>
          </div>
        </Link>
        <Link href='/home'>
          <div>
            <div>Laguna Azul</div>
            <div></div>
          </div>
        </Link>
        <Link href='/home'>
          <div>
            <div>El Caguamon</div>
            <div></div>
          </div>
        </Link>
        <Link href='/home'>
          <div>
            <div>El Marinero</div>
            <div></div>
          </div>
        </Link>
        <Link href='/home'>
          <div>
            <div>Salon Platino</div>
            <div></div>
          </div>
        </Link>
        <Link href='/home'>
          <div>
            <div>Los Reyes</div>
            <div></div>
          </div>
        </Link>
        <Link href='/home'>
          <div>
            <div>Transportes Pitufos</div>
            <div></div>
          </div>
        </Link>
      </div>   
    </div>
    </>
  )
}
