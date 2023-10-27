import Link from 'next/link'
import { Image } from 'semantic-ui-react'
import styles from './Devices.module.css'

export default function Devices(props) {

  const {link, devName, imgName, devBoxBackground, devStatusLed, onOff} = props

  return (
    <>
    <Link href={`${link}`}>
      <div className={styles.deviceBox}>
        <div className={styles.devBox1}>
          <h1>{devName}</h1>
          <Image src={`${imgName}`} />
        </div>
        <div className={styles.devBox2}>
          <div className={`${devBoxBackground}`}>
            <div className={`${devStatusLed}`}></div>
            <div><h2>{onOff}</h2></div>
          </div>
        </div>
      </div>
      </Link>
    </>
  )
}
