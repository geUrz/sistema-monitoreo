"use client";

import { useState, useEffect } from "react";
import { BasicLayout } from "@/layouts";
import styles from "./segovia.module.css";
import Device from "@/components/Device/Device";
import { ArrowBack } from "@/components/ArrowBack";

import mqtt from "mqtt";

const clientId = "gera21";
const username = "emqx";
const password = "public";

export default function Segovia() {
  const [devStatus, setDevStatus] = useState(true);
  const [client, setClient] = useState(null);
  // const { socketClient } = useContext(SegoviaContext);

  //connection

  useEffect(() => {}, [devStatus]);
  useEffect(() => {
    setClient(
      mqtt.connect("ws://158.101.42.167:8073/mqtt", {
        clientId,
        username,
        password,
        clean: true,
        reconnectPeriod: 1000, // ms
        connectTimeout: 30 * 1000, // ms
        rejectUnauthorized: false,
      })
    );
  }, []);

  useEffect(() => {
    if (client) {
      client.subscribe("gera/gera31/casa/sala/#", { qos: 2 }, (error) => {
        if (error) {
          console.log("Subscribe to topics error", error);
          return;
        }
        client.publish("topic", "message", (error) => {
          if (error) {
            console.log("Publish error: ", error);
          }
          console.log("publish");
        });
        console.log("Subscribe to topics");
      });
    }
    return () => {
      if (client) {
        // Desuscribirse del tema al desmontar el componente
        client.unsubscribe("gera/gera31/casa/sala/#", (err) => {
          if (err) {
            console.error("Error al desuscribirse del tema:", err);
          }
        });
      }
    };
  }, [client]);

  useEffect(() => {
    if (client) {
      client.on("connect", () => {
        // console.log("connection successful");
      });

      // https://github.com/mqttjs/MQTT.js#event-error
      client.on("error", (err) => {
        console.error("Connection error: ", err);
        client.end();
      });

      // https://github.com/mqttjs/MQTT.js#event-reconnect
      client.on("reconnect", () => {
        // console.log("reconnecting");
      });
      client.on("message", (topic, message) => {
        console.log("Mensaje Recibido:", topic, "=>", message.toString());

        var msj = message.toString();

        if (msj == "on") {
          //alert('ENCENDIDO')
          setDevStatus(true);
        }
        if (msj == "off") {
          //alert('APAGADO')
          setDevStatus(false);
        }
      });
    }
    return () => {
      if (client) {
        client.end();
      }
    };
  }, [client]);

  return (
    <BasicLayout relative>
      <ArrowBack title="segovia" displayHome={false} />

      <div className={styles.sectionMain} style={{ background: false ? "azure" : "" }}>
        <div className={styles.containerMain}>
          <div className={styles.containerDevBox} style={{ background: false ? "azure" : "" }}>
            <div>
              <h1>Barrera Residentes</h1>
            </div>
            <div>
              <Device
                link="/devices/segovia/barreraresidentesentrada"
                devName="Entrada"
                imgName={devStatus ? "/img/barrera_wh.png" : "/img/barrera_red.png"}
                devBoxBackground={devStatus ? `${styles.devBoxBackgroundON}` : `${styles.devBoxBackgroundOFF}`}
                onOff={devStatus ? "ON" : "OFF"}
              />
              <Device
                link="/devices/segovia/barreraresidentessalida"
                devName="Salida"
                imgName={devStatus ? "/img/barrera_wh.png" : "/img/barrera_red.png"}
                devBoxBackground={devStatus ? `${styles.devBoxBackgroundON}` : `${styles.devBoxBackgroundOFF}`}
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
                imgName={devStatus ? "/img/barrera_wh.png" : "/img/barrera_red.png"}
                devBoxBackground={devStatus ? `${styles.devBoxBackgroundON}` : `${styles.devBoxBackgroundOFF}`}
                onOff={devStatus ? "ON" : "OFF"}
              />
              <Device
                link="/devices/segovia/barreravisitassalida"
                devName="Salida"
                imgName={devStatus ? "/img/barrera_wh.png" : "/img/barrera_red.png"}
                devBoxBackground={devStatus ? `${styles.devBoxBackgroundON}` : `${styles.devBoxBackgroundOFF}`}
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
                imgName={devStatus ? "/img/lector_wh.png" : "/img/lector_red.png"}
                devBoxBackground={devStatus ? `${styles.devBoxBackgroundON}` : `${styles.devBoxBackgroundOFF}`}
                onOff={devStatus ? "ON" : "OFF"}
              />
              <Device
                link="/devices/segovia/lectortagsalida"
                devName="Salida"
                imgName={devStatus ? "/img/lector_wh.png" : "/img/lector_red.png"}
                devBoxBackground={devStatus ? `${styles.devBoxBackgroundON}` : `${styles.devBoxBackgroundOFF}`}
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
                devBoxBackground={devStatus ? `${styles.devBoxBackgroundON}` : `${styles.devBoxBackgroundOFF}`}
                onOff={devStatus ? "ON" : "OFF"}
              />
              <Device
                link="/devices/segovia/cercoelectricoleon"
                devName="Leon"
                imgName={devStatus ? "/img/cerco_wh.png" : "/img/cerco_red.png"}
                devBoxBackground={devStatus ? `${styles.devBoxBackgroundON}` : `${styles.devBoxBackgroundOFF}`}
                onOff={devStatus ? "ON" : "OFF"}
              />
              <Device
                link="/devices/segovia/cercoelectricoparamo"
                devName="Paramo"
                imgName={devStatus ? "/img/cerco_wh.png" : "/img/cerco_red.png"}
                devBoxBackground={devStatus ? `${styles.devBoxBackgroundON}` : `${styles.devBoxBackgroundOFF}`}
                onOff={devStatus ? "ON" : "OFF"}
              />
              <Device
                link="/devices/segovia/cercoelectricoyza"
                devName="Yza"
                imgName={devStatus ? "/img/cerco_wh.png" : "/img/cerco_red.png"}
                devBoxBackground={devStatus ? `${styles.devBoxBackgroundON}` : `${styles.devBoxBackgroundOFF}`}
                onOff={devStatus ? "ON" : "OFF"}
              />
            </div>
          </div>
        </div>
      </div>
    </BasicLayout>
  );
}
