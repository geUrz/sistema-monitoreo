import { Image } from 'semantic-ui-react'
import styles from './Botonera.module.css'

export function Botonera(props) {

  const {AccName, AccImg, AccStatusImg} = props

  return (
    <>
      <div className={styles.accBox}>
        <div><h1>{AccName}</h1> </div>
        <div>
          <Image src={`${AccImg}`} />
        </div>
        <div>
          <Image src={`${AccStatusImg}`} />  
        </div>
      </div>
    </>
  )
}
