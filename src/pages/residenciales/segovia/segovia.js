import { useState, useEffect } from "react";
import { BasicLayout } from "@/layouts";
import styles from "./segovia.module.css";
import Device from "@/components/Device/Device";
import { ArrowBack } from "@/components/ArrowBack";

export default function Segovia() {
  /* const clientId = 'gera31'
  const username = 'emqx'
  const password = 'public'

  const client = mqtt.connect('ws://158.101.42.167:8073/mqtt', {
    clientId,
    username,
    password,
    clean: true,
    connectTimeout: 30*1000,
    reconnectPeriod: 4000,
    rejectUnauthorized: false
  })
  
  client.subscribe('gera/gera31/casa/#', { qos: 0 }, (error) => {
    if ( !error ){
        console.log('Suscripción Exitosa')
    
    }
    else{
        console.log('Suscripción Fallida')
    }
    })
  
    client.publish('topic', 'message', (error) => {
      console.log(error || 'Mensaje Enviado')
      })
        
    
    
    client.on('reconnect', (error) => {
      console.log('Error al Reconectar:', error)
      })
      
    client.on('error', (error) => {
      console.log('Error de Conexión:', error)
    }) 
  
  client.on('message', (topic, message) => {
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

  const [devStatus, setDevStatus] = useState(true)

  useEffect(() => {}, [devStatus])

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
