import { useState, useEffect } from "react";
import styles from "@/styles/devices/barrera.module.css";
import { Tarjeta, Wire } from "@/components/Acc";
import { ArrowBackHome } from "@/components/ArrowBackHome";

export default function Lectortagentrada() {

  const [devStatus, setDevStatus] = useState(true)

  useEffect(() => {}, [devStatus])

  return (
    <>
      <main className={styles.barreraEntradaMain}>
        
        <ArrowBackHome title='lector tag' />

        <section className={styles.barreraEntradaBox}>
          <div className={styles.devNameBack}>
            <h1>entrada</h1>
          </div>
          <div className={styles.accBoxMain}>
            <Tarjeta
              AccName="Tarjeta"
              AccImg={
                devStatus ? "/img/tarjeta_wh.png" : "/img/tarjeta_red.png"
              }
              AccStatus={devStatus ? "ON" : "OFF"}
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
