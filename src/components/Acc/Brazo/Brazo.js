import { Image } from 'semantic-ui-react'
import styles from './Brazo.module.css'

export function Brazo(props) {

  const {AccName, AccImg, AccStatusImgUp, AccStatusImgDown} = props

  return (
    <>
      <main className={styles.accBox}>
        <div><h1>{AccName}</h1> </div>
        <div>
          <Image src={`${AccImg}`} />
        </div>
        <div className={styles.accBox3}>
          <div>
            <Image src={`${AccStatusImgUp}`} /> 
          </div>
          <div>
            <Image src={`${AccStatusImgDown}`} />  
          </div>
        </div>
      </main>
    </>
  )
}
