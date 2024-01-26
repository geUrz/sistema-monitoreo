import { createContext, useEffect, useState } from "react";
import mqtt from "mqtt";
const clientId = "gera21";
const username = "emqx";
const password = "public";

export const SegoviaContext = createContext({ hola: null });

const SegoviaProvider = ({ children }) => {
  const socketClient = mqtt.connect("ws://158.101.42.167:8073/mqtt", {
    clientId,
    username,
    password,
    clean: true,
    connectTimeout: 30 * 1000,
    reconnectPeriod: 1000 * 20,
    rejectUnauthorized: false,
  });

  socketClient.on("connect", () => {
    console.log("new connection");
  });

  socketClient.subscribe("gera/gera31/casa/sala/#", { qos: "0" }, (error) => {
    if (!error) {
      console.log("Suscripción Exitosa");
    } else {
      console.log("suscripcion fallida");
      console.log(error);
    }
  });
  socketClient.publish("gera/gera31/casa/sala/#", "Tu mensaje aquí", { qos: 0 }, (error) => {
    if (error) return console.log(error);
    console.log("Mensaje enviado");
  });
  socketClient.on("message", (topic, message) => {
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
  // socketClient.subscribe("gera/gera31/casa/sala/#", (error) => {
  //   if (!error) {
  //     console.log("Suscripción Exitosa");
  //     socketClient.publish("gera/gera31/casa/sala/#", "Tu mensaje aquí", { qos: 0 }, (error) => {
  //       console.log(error || "Mensaje Enviado");
  //     });
  //   } else {
  //     console.log(error);
  //     console.log("Suscripción Fallida");
  //   }
  // });

  //   useEffect(() => {
  //     if (!socketClient) return;
  //     socketClient.on("message", (topic, message) => {
  //       console.log("Mensaje Recibido:", topic, "=>", message.toString());

  //       var msj = message.toString();

  //       if (msj == "on") {
  //         //alert('ENCENDIDO')
  //         setDevStatus(true);
  //       }
  //       if (msj == "off") {
  //         //alert('APAGADO')
  //         setDevStatus(false);
  //       }
  //     });
  //   }, []);
  //   useEffect(() => {
  //     console.log("hola");
  //     socketClient.subscribe("gera/gera31/casa/sala/#", { qos: 0 }, (error) => {
  //       if (!error) {
  //         console.log("Suscripción Exitosa");

  //         socketClient.publish("gera/gera31/casa/sala/#", "Tu mensaje aquí", { qos: 0 }, (error) => {
  //           console.log(error || "Mensaje Enviado");
  //         });
  //       } else {
  //         console.log(error);
  //         console.log("Suscripción Fallida");
  //       }
  //     });
  //   }, []);
  //   useEffect(() => {
  //     socketClient.on("disconnect", (p) => {
  //       console.log(p);
  //     });

  //     socketClient.on("reconnect", (error) => {
  //       if (!error) return;
  //       console.log("Error al Reconectar:", error);
  //     });

  //     socketClient.on("error", (error) => {
  //       console.log("Error de Conexión:", error);
  //     });
  //     return () => socketClient.end();
  //   }, []);

  return <SegoviaContext.Provider value={{ hola: null }}>{children}</SegoviaContext.Provider>;
};

export default SegoviaProvider;
