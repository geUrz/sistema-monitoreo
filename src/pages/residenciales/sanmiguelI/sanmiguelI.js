'use client'

import { useState, useEffect } from "react";
import { BasicLayout } from "@/layouts";
import styles from "@/styles/residenciales.module.css";
import Device from "@/components/Device/Device";
import { ArrowBack } from "@/components/ArrowBack";
import Head from "next/head";
import Script from "next/script";
import mqtt from 'mqtt' 


export default function SanmiguelI() {  

    const [devStatus, setDevStatus] = useState(true)

    useEffect(() => {}, [devStatus])
  

        /* const clientId = 'gera21'
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
        }) */
  

  return (
    <BasicLayout relative>

      {/* <Head>

        <Script>{`
        
        
  
        ${client.subscribe('gera/gera31/casa/#', { qos: 0 }, (error) => {
          if ( !error ){
            console.log('Suscripción Exitosa')
    
        }
        else{
          console.log('Suscripción Fallida')
        }
      })}
  
      ${client.publish('topic', 'message', (error) => {
      console.log(error || 'Mensaje Enviado')
      })}
        
    
    
    client.on('reconnect', (error) => {
      console.log('Error al Reconectar:', error)
      })
      
    ${client.on('error', (error) => {
      console.log('Error de Conexión:', error)
    })}

      ${client.on('message', (topic, message) => {
      console.log('Mensaje Recibido:', topic, '=>' , message.toString())
            
      var msj = message.toString()
    
      if(msj == "on"){
        //alert('ENCENDIDO')
        setDevStatus(true)
      }
      if(msj == "off"){
        //alert('APAGADO')
        setDevStatus(false)
      }
    
    })}
        
        `}</Script>

      </Head> */}
      
      <ArrowBack title='san miguel i' displayHome={false} />

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
              <h1>Barreras</h1>
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
              <h1>Pistones</h1>
            </div>
            <div>
              <Device
              link="/devices/segovia/barreravisitasentrada"
                devName="Entrada"
                imgName={
                  devStatus ? "/img/piston_wh.png" : "/img/piston_red.png"
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
                  devStatus ? "/img/piston_wh.png" : "/img/piston_red.png"
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
              <h1>telephone entry</h1>
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
                devName="Oeste"
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
                devName="Este"
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
