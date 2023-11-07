import { Image } from 'semantic-ui-react'
import styles from './Botonera.module.css'

export function Botonera(props) {

  const {AccName, AccImg, AccStatusImgUp, AccStatusImgDown,devBoxBackground1, devBoxBackground2} = props

  return (
    <>
      <div className={styles.accBox}>
        <div><h1>{AccName}</h1> </div>
        <div>
          <Image src={`${AccImg}`} />
        </div>
        <div className={styles.accBox3}>
          <div className={`${devBoxBackground1}`}>
            <Image src={`${AccStatusImgUp}`} /> 
          </div>
          <div className={`${devBoxBackground2}`}>
            <Image src={`${AccStatusImgDown}`} /> 
          </div>
        </div>
      </div>
    </>
  )
}
