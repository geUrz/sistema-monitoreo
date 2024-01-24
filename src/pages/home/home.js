import { useState, useEffect } from 'react'
import { BasicLayout } from "@/layouts"
import styles from './home.module.css'
import Residenciales from '@/components/Residenciales/Residenciales'

export default function Home() {

  const [devStatus, setDevStatus] = useState()

  const encenderApagar = () => {
    //setDevStatus(devStatus => !devStatus)
    if(1 === 1 ){
      setDevStatus(true)
    } else{
      setDevStatus(false)
    }
  }

  useEffect(() => {
    encenderApagar()
  }, [])

  return (
    <BasicLayout relative title='home' arrowBack={false}>

      <div className={styles.sectionMain} style={{background : false ? 'azure' : ''}}>
        <div className={styles.containerMain}>
          <Residenciales 
            titleResidencial = 'segovia'
            link = '/residenciales/segovia'
            imgName = '/img/residencial.png'
          />
          <Residenciales 
            titleResidencial = 'san miguel i'
            link = '/residenciales/sanmiguelI'
            imgName = '/img/residencial.png'
          />
          <Residenciales 
            titleResidencial = 'san miguel ii'
            link = '/residenciales/sanmiguelII'
            imgName = '/img/residencial.png'
          />
          <Residenciales 
            titleResidencial = 'san agustin'
            link = '/residenciales/sanagustin'
            imgName = '/img/residencial.png'
          />
          <Residenciales 
            titleResidencial = 'laguna azul'
            link = '/residenciales/lagunaazul'
            imgName = '/img/residencial.png'
          />
          <Residenciales 
            titleResidencial = 'el caguamon'
            link = '/residenciales/elcaguamon'
            imgName = '/img/residencial.png'
          />
          <Residenciales 
            titleResidencial = 'el marinero'
            link = '/residenciales/elmarinero'
            imgName = '/img/residencial.png'
          />
          <Residenciales 
            titleResidencial = 'salon platino'
            link = '/residenciales/salonplatino'
            imgName = '/img/residencial.png'
          />
          <Residenciales 
            titleResidencial = 'los reyes'
            link = '/residenciales/losreyes'
            imgName = '/img/residencial.png'
          />
          <Residenciales 
            titleResidencial = 'pitufos transportes'
            link = '/residenciales/pitufostransportes'
            imgName = '/img/residencial.png'
          />
          {/* <div className={styles.containerDevBox} style={{background : false ? 'azure' : ''}}>
            <div><h1>segovia</h1></div>
            <div>
              <Devices   
                link= 'residenciales/segovia'
                imgName= {devStatus ? '/img/residencial.png' : '/img/barrera_red.png' }
                devBoxBackground= {devStatus ? `${styles.devBoxBackgroundON}` : `${styles.devBoxBackgroundOFF}` }
                onOff= {devStatus ? 'ON' : 'OFF'}
              />
            </div>
          </div>
          <div className={styles.containerDevBox}>
            <div><h1>san miguel i</h1></div>
            <div>
              <Devices 
                imgName= {devStatus ? '/img/residencial.png' : '/img/barrera_red.png' }
                devBoxBackground= {devStatus ? `${styles.devBoxBackgroundON}` : `${styles.devBoxBackgroundOFF}` }
                onOff= {devStatus ? 'ON' : 'OFF'}
              />
            </div>
          </div>
          <div className={styles.containerDevBox}>
            <div><h1>san miguel ii</h1></div>
            <div>
              <Devices 
                imgName= {devStatus ? '/img/residencial.png' : '/img/lector_red.png' }
                devBoxBackground= {devStatus ? `${styles.devBoxBackgroundON}` : `${styles.devBoxBackgroundOFF}` }
                onOff= {devStatus ? 'ON' : 'OFF'}
              />
            </div>
          </div>
          <div className={styles.containerDevBox}>
            <div><h1>san agustin</h1></div>
            <div>
              <Devices 
                imgName= {devStatus ? '/img/residencial.png' : '/img/cerco_red.png' }
                devBoxBackground= {devStatus ? `${styles.devBoxBackgroundON}` : `${styles.devBoxBackgroundOFF}` }
                onOff= {devStatus ? 'ON' : 'OFF'}
              />
            </div>
          </div>
          <div className={styles.containerDevBox}>
            <div><h1>los reyes</h1></div>
            <div>
              <Devices 
                imgName= {devStatus ? '/img/residencial.png' : '/img/cerco_red.png' }
                devBoxBackground= {devStatus ? `${styles.devBoxBackgroundON}` : `${styles.devBoxBackgroundOFF}` }
                onOff= {devStatus ? 'ON' : 'OFF'}
              />
            </div>
          </div> */}
        </div>
      </div>

    </BasicLayout>
  )
}
