import { useEffect, useState } from 'react'
import classNames from 'classnames'
import styles from './barreraentrada.module.css'
import { Tarjeta, Botonera, Motor, Fotocelda, Brazo } from '@/components/Acc'
import { ArrowBack } from '@/components/ArrowBack'

export default function Barreraentrada(props) {

  const {children, display=false} = props

  const [devStatus, setDevStatus] = useState(true)

  

  useEffect(() => {
   
  }, [devStatus])

  return (
    <>

   
      <main className={styles.barreraEntradaMain}>

        <ArrowBack />

        <section className={styles.barreraEntradaBox}>
          <div className={styles.devNameBack}>
            <h1>Barrera Residentes - Entrada</h1>
          </div>
          <div className={styles.accBoxMain}>
            <Tarjeta 
              AccName = 'Tarjeta'
              AccImg = {devStatus ? '/img/tarjeta_wh.png' : '/img/tarjeta_red.png' }
              AccStatus = {devStatus ? 'ON' : 'OFF'}
            />
            <Brazo 
              AccName = 'Brazo'
              AccImg = {devStatus ? '/img/barrera_wh.png' : '/img/barrera_red.png' }
              AccStatusImgUp = {devStatus ? '/img/circuit_open.png' : '/img/circuit_close.png' }
              AccStatusImgDown = {devStatus ? '/img/circuit_open.png' : '/img/circuit_close.png' }
            />
            <Fotocelda 
              AccName = 'Fotocelda'
              AccImg = {devStatus ? '/img/fotocelda_wh.png' : '/img/fotocelda_red.png' }
              AccStatus = {devStatus ? 'OFF' : 'ON'}
              AccStatusImg = {devStatus ? '/img/circuit_open.png' : '/img/circuit_close.png' }
            />
            <Botonera 
              AccName = 'Botonera'
              AccImg = {devStatus ? '/img/boton_wh.png' : '/img/boton_red.png' }
              AccStatusImgUp = {devStatus ? '/img/circuit_open.png' : '/img/circuit_close.png' }
              AccStatusImgDown = {devStatus ? '/img/circuit_open.png' : '/img/circuit_close.png' }
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
            {/* <div className={classNames({[styles.display]: display})}>
              {children}
            </div> */}
          </div>
        </section>
      </main>
    </>
  )
}
