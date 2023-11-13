import { useState, useEffect } from "react";
import { BasicLayout } from "@/layouts";
import styles from "./segovia.module.css";
import Device from "@/components/Device/Device";
import { ArrowBack } from "@/components/ArrowBack";


export default function Segovia() {  

    const [devStatus, setDevStatus] = useState(true)

    useEffect(() => {}, [devStatus])
  
  /* client.on('message', (topic, message) => {
    console.log('Mensaje Recibido:', topic, '=>' , message.toString())
          
    var msj = message.toString()
  
    if(msj == "1"){
      //alert('ENCENDIDO')
      setDevStatus(true)
    }
    if(msj == "0"){
      //alert('APAGADO')
      setDevStatus(false)
    }
  
  })  */ 


  /* const [devStatus, setDevStatus] = useState(true)

  useEffect(() => {}, [devStatus]) */

        
  

  return (
    <BasicLayout relative>

      
      
      <ArrowBack title='segovia' displayHome={false} />

      <div
        className={styles.sectionMain}
        style={{ background: false ? "azure" : "" }}
      >
        <div className={styles.containerMain}>
          <div
            className={styles.containerDevBox}
            style={{ background: false ? "azure" : "" }}
          >
            <div>
              <h1>Barrera Residentes</h1>
            </div>
            <div>
              <Device
                link="/devices/segovia/barreraresidentesentrada"
                devName="Entrada"
                imgName={
                  devStatus ? "/img/barrera_wh.png" : "/img/barrera_red.png"
                }
                devBoxBackground={
                  devStatus
                    ? `${styles.devBoxBackgroundON}`
                    : `${styles.devBoxBackgroundOFF}`
                }
                onOff={devStatus ? "ON" : "OFF"}
              />
              <Device
              link="/devices/segovia/barreraresidentessalida"
                devName="Salida"
                imgName={
                  devStatus ? "/img/barrera_wh.png" : "/img/barrera_red.png"
                }
                devBoxBackground={
                  devStatus
                    ? `${styles.devBoxBackgroundON}`
                    : `${styles.devBoxBackgroundOFF}`
                }
                onOff={devStatus ? "ON" : "OFF"}
              />
            </div>
          </div>
          <div className={styles.containerDevBox}>
            <div>
              <h1>Barrera Visitas</h1>
            </div>
            <div>
              <Device
              link="/devices/segovia/barreravisitasentrada"
                devName="Entrada"
                imgName={
                  devStatus ? "/img/barrera_wh.png" : "/img/barrera_red.png"
                }
                devBoxBackground={
                  devStatus
                    ? `${styles.devBoxBackgroundON}`
                    : `${styles.devBoxBackgroundOFF}`
                }
                onOff={devStatus ? "ON" : "OFF"}
              />
              <Device
                link="/devices/segovia/barreravisitassalida"
                devName="Salida"
                imgName={
                  devStatus ? "/img/barrera_wh.png" : "/img/barrera_red.png"
                }
                devBoxBackground={
                  devStatus
                    ? `${styles.devBoxBackgroundON}`
                    : `${styles.devBoxBackgroundOFF}`
                }
                onOff={devStatus ? "ON" : "OFF"}
              />
            </div>
          </div>
          <div className={styles.containerDevBox}>
            <div>
              <h1>Lector Tag</h1>
            </div>
            <div>
              <Device
                link="/devices/segovia/lectortagentrada"
                devName="Entrada"
                imgName={
                  devStatus ? "/img/lector_wh.png" : "/img/lector_red.png"
                }
                devBoxBackground={
                  devStatus
                    ? `${styles.devBoxBackgroundON}`
                    : `${styles.devBoxBackgroundOFF}`
                }
                onOff={devStatus ? "ON" : "OFF"}
              />
              <Device
                link="/devices/segovia/lectortagsalida"
                devName="Salida"
                imgName={
                  devStatus ? "/img/lector_wh.png" : "/img/lector_red.png"
                }
                devBoxBackground={
                  devStatus
                    ? `${styles.devBoxBackgroundON}`
                    : `${styles.devBoxBackgroundOFF}`
                }
                onOff={devStatus ? "ON" : "OFF"}
              />
            </div>
          </div>
          <div className={styles.containerDevBox}>
            <div>
              <h1>Cerco Eléctrico</h1>
            </div>
            <div>
              <Device
                link="/devices/segovia/cercoelectricocalet"
                devName="Calet"
                imgName={devStatus ? "/img/cerco_wh.png" : "/img/cerco_red.png"}
                devBoxBackground={
                  devStatus
                    ? `${styles.devBoxBackgroundON}`
                    : `${styles.devBoxBackgroundOFF}`
                }
                onOff={devStatus ? "ON" : "OFF"}
              />
              <Device
              link="/devices/segovia/cercoelectricoleon"
                devName="Leon"
                imgName={devStatus ? "/img/cerco_wh.png" : "/img/cerco_red.png"}
                devBoxBackground={
                  devStatus
                    ? `${styles.devBoxBackgroundON}`
                    : `${styles.devBoxBackgroundOFF}`
                }
                onOff={devStatus ? "ON" : "OFF"}
              />
              <Device
              link="/devices/segovia/cercoelectricoparamo"
                devName="Paramo"
                imgName={devStatus ? "/img/cerco_wh.png" : "/img/cerco_red.png"}
                devBoxBackground={
                  devStatus
                    ? `${styles.devBoxBackgroundON}`
                    : `${styles.devBoxBackgroundOFF}`
                }
                onOff={devStatus ? "ON" : "OFF"}
              />
              <Device
              link="/devices/segovia/cercoelectricoyza"
                devName="Yza"
                imgName={devStatus ? "/img/cerco_wh.png" : "/img/cerco_red.png"}
                devBoxBackground={
                  devStatus
                    ? `${styles.devBoxBackgroundON}`
                    : `${styles.devBoxBackgroundOFF}`
                }
                onOff={devStatus ? "ON" : "OFF"}
              />
            </div>
          </div>
        </div>
      </div>
    </BasicLayout>
  );
}
