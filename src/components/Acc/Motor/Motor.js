import { Image } from 'semantic-ui-react'
import styles from './Motor.module.css'

export function Motor(props) {

  const {
    AccName, 
    AccImg, 
    AccStatus, 
    devBoxBackground,
    ImgVolt, 
    ImgAmper, 
    ImgWatt,
    Volt,
    Amper,
    Watt
  
  } = props

  return (
    <div className={styles.accBox}>
      <div className={styles.accBox1}>
        <div><h1>{AccName}</h1></div>
        <div>
          <Image src={`${AccImg}`} />
        </div>
        <div className={styles.accBox3}>
          <div className={`${devBoxBackground}`}>
            <h1>{AccStatus}</h1>
          </div>
        </div>
      </div>
      <div className={styles.accBox2}>
        <div>
          {/* <Image src={`${ImgVolt}`} />
          <h1>{Volt}</h1> */}
        </div>
        {/* <div>
          <Image src={`${ImgAmper}`} />
          <h1>{Amper}</h1>
        </div>
        <div>
          <Image src={`${ImgWatt}`} />
          <h1>{Watt}</h1>
        </div> */}
      </div>
    </div>
  )
}
