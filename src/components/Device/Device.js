import Link from "next/link"
import { Image } from "semantic-ui-react"
import styles from "./Device.module.css"

export default function Device(props) {
  const { link, devName, imgName, devBoxBackground, onOff } =
    props

  return (
    <>
      <div className={styles.mainDeviceBox}>
        <Link href={`${link}`}>
          <div className={styles.sectionDeviceBox}>
            <div className={styles.devBox1}>
              <h1>{devName}</h1>
              <Image src={`${imgName}`} />
            </div>
            <div className={styles.devBox2}>
              <div className={`${devBoxBackground}`}>
                <h2>{onOff}</h2> 
              </div>
            </div>
          </div>
        </Link>
      </div>
    </>
  )
}
