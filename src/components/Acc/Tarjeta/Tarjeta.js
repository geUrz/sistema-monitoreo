import styles from './Tarjeta.module.css'
import { Image } from 'semantic-ui-react'

export function Tarjeta(props) {

  const {AccName, AccImg, AccStatus} = props

  return (
    <>
      <div className={styles.accBox}>
        <div><h1>{AccName}</h1></div>
        <div>
          <Image src={`${AccImg}`} />
        </div>
        <div>
          <h1>{AccStatus}</h1>
        </div>
      </div>
    </>
  )
}
