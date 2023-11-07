import { useState, useEffect } from 'react'
import { Botonera, Brazo, Fotocelda, Motor, Tarjeta } from '@/components/Acc'
import styles from '@/styles/devices/barrera.module.css'
import { ArrowBackHome } from '@/components/ArrowBackHome'

export default function Barreravisitasentrada() {

  const [devStatus, setDevStatus] = useState(true)

  

  useEffect(() => {
   
  }, [devStatus])

  return (
    <>
    <main className={styles.barreraEntradaMain}>

<ArrowBackHome title='barrera visitas' />

<section className={styles.barreraEntradaBox}>
  <div className={styles.devNameBack}>
    <h1>Entrada</h1>
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
    <Brazo
      AccName = 'Brazo'
      AccImg = {devStatus ? '/img/barrera_wh.png' : '/img/barrera_red.png' }
      AccStatusImg = {devStatus ? '/img/circuit_open.png' : '/img/circuit_close.png' }
      devBoxBackground={
        devStatus
          ? `${styles.devBoxBackgroundON}`
          : `${styles.devBoxBackgroundOFF}`
      }
    />
    <Fotocelda
      AccName = 'Fotocelda'
      AccImg = {devStatus ? '/img/fotocelda_wh.png' : '/img/fotocelda_red.png' }
      AccStatus = {devStatus ? 'OFF' : 'ON'}
      AccStatusImg = {devStatus ? '/img/circuit_open.png' : '/img/circuit_close.png' }
      devBoxBackground1={
        devStatus
          ? `${styles.devBoxBackgroundON}`
          : `${styles.devBoxBackgroundOFF}`
      }
      devBoxBackground2={
        devStatus
          ? `${styles.devBoxBackgroundON}`
          : `${styles.devBoxBackgroundOFF}`
      }
    />
    <Botonera
      AccName = 'Botonera'
      AccImg = {devStatus ? '/img/boton_wh.png' : '/img/boton_red.png' }
      AccStatusImgUp = {devStatus ? '/img/circuit_open.png' : '/img/circuit_close.png' }
      AccStatusImgDown = {devStatus ? '/img/circuit_open.png' : '/img/circuit_close.png' }
      devBoxBackground1={
        devStatus
          ? `${styles.devBoxBackgroundON}`
          : `${styles.devBoxBackgroundOFF}`
      }
      devBoxBackground2={
        devStatus
          ? `${styles.devBoxBackgroundON}`
          : `${styles.devBoxBackgroundOFF}`
      }
    />
    <Motor 
      AccName = 'Motor'
      AccImg = {devStatus ? '/img/motor_wh.png' : '/img/motor_red.png' }
      AccStatus = {devStatus ? 'ON' : 'OFF'}
      devBoxBackground={
        devStatus
          ? `${styles.devBoxBackgroundON}`
          : `${styles.devBoxBackgroundOFF}`
      }
      ImgVolt = {devStatus ? '/img/volt_wh.png' : '/img/volt_red.png' }
      Volt = '110'
      ImgAmper = {devStatus ? '/img/amper_wh.png' : '/img/amper_red.png' }
      Amper = '6.5'
      ImgWatt = {devStatus ? '/img/watt_wh.png' : '/img/watt_red.png' }
      Watt = '750'
    />
  </div>
</section>
</main>
    </>
  )
}
