import { useState, useEffect } from 'react'
import { Tarjeta, Wire } from '@/components/Acc'
import styles from '@/styles/devices/barrera.module.css'
import { ArrowBackHome } from '@/components/ArrowBackHome'

export default function Cercoelectricoleon() {

  const [devStatus, setDevStatus] = useState(true)

  useEffect(() => {
   
  }, [devStatus])

  return (
    <>
    <main className={styles.barreraEntradaMain}>

<ArrowBackHome title='cerco electrico' />

<section className={styles.barreraEntradaBox}>
  <div className={styles.devNameBack}>
    <h1>león</h1>
  </div>
  <div className={styles.accBoxMain}>
    <Tarjeta
      AccName = 'Tarjeta'
      AccImg = {devStatus ? '/img/tarjeta_wh.png' : '/img/tarjeta_red.png' }
      AccStatus = {devStatus ? 'ON' : 'OFF'}
      devBoxBackground={
        devStatus
          ? `${styles.devBoxBackgroundON}`
          : `${styles.devBoxBackgroundOFF}`
      }
    />
    <Wire 
      AccName="Cable"
      AccImg={
        devStatus ? "/img/wire_wh.png" : "/img/wire_red.png"
      }
      AccStatusImg={
        devStatus ? "/img/circuit_close.png" : "/img/circuit_open.png"
      }
      devBoxBackground={
        devStatus
          ? `${styles.devBoxBackgroundON}`
          : `${styles.devBoxBackgroundOFF}`
      }
    />
  </div>
</section>
</main>
    </>
  )
}
