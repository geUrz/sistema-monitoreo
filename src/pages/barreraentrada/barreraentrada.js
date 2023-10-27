import { useEffect, useState } from 'react'
import styles from './barreraentrada.module.css'
import { Tarjeta, Botonera, Motor } from '@/components/Acc'
import { ArrowBack } from '@/components/ArrowBack'

export default function Barreraentrada() {

  const [devStatus, setDevStatus] = useState()

  

  useEffect(() => {
   
  }, [devStatus])

  return (
    <>
      <div className={styles.barreraEntradaMain}>

        <ArrowBack />

        <div className={styles.barreraEntradaBox}>
          <div className={styles.devNameBack}>
            <h1>Barrera Residentes - Entrada</h1>
          </div>
          <div className={styles.accBoxMain}>
            <Tarjeta 
              AccName = 'Tarjeta'
              AccImg = {devStatus ? '/img/tarjeta_wh.png' : '/img/tarjeta_red.png' }
              AccStatus = {devStatus ? 'ON' : 'OFF'}
            />
            <Botonera 
              AccName = 'Botonera'
              AccImg = {devStatus ? '/img/boton_wh.png' : '/img/boton_red.png' }
              AccStatusImg = {devStatus ? '/img/circuit_close.png' : '/img/circuit_open.png' }
            />
            <Motor 
              AccName = 'Motor'
              AccImg = {devStatus ? '/img/motor_wh.png' : '/img/motor_red.png' }
              AccStatus = {devStatus ? 'ON' : 'OFF'}
              ImgVolt = {devStatus ? '/img/volt_wh.png' : '/img/volt_red.png' }
              Volt = '110'
              ImgAmper = {devStatus ? '/img/amper_wh.png' : '/img/amper_red.png' }
              Amper = '6.5'
              ImgWatt = {devStatus ? '/img/watt_wh.png' : '/img/watt_red.png' }
              Watt = '750'
            />
          </div>
        </div>
      </div>
    </>
  )
}
