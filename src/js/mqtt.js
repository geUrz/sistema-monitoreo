


import mqtt from 'mqtt' 

 const clientId = 'gera31'
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
        alert('ENCENDIDO')
        //setDevStatus(true)
      }
      if(msj == "0"){
        alert('APAGADO')
        //setDevStatus(false)
      }
    
    }) 