import Link from "next/link"
import { Image } from "semantic-ui-react"
import styles from './Residenciales.module.css'


export default function Residenciales(props) {

  const {titleResidencial, link, imgName} = props

  return (
    <>
    <Link href={`${link}`}>
      <div className={styles.containerDevBox} style={{background : false ? 'azure' : ''}}>
        <div><h1>{titleResidencial}</h1></div>
        <div>
          <Image src={`${imgName}`} />
        </div>
      </div>
    </Link>
    </>
  )
}
