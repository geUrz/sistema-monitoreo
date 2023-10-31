import { Image } from 'semantic-ui-react'
import styles from './Fotocelda.module.css'

export function Fotocelda(props) {

  const {AccName, AccImg, AccStatus, AccStatusImg} = props

  return (
    <>
      <main className={styles.accBox}>
        <div><h1>{AccName}</h1> </div>
        <div>
          <Image src={`${AccImg}`} />
        </div>
        <div className={styles.accBox3}>
          <div>
            <h1>{AccStatus}</h1> 
          </div>
          <div>
            <Image src={`${AccStatusImg}`} />  
          </div>
        </div>
      </main>
    </>
  )
}
