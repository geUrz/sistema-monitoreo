import { useRouter } from 'next/router'
import { Image } from 'semantic-ui-react'
import styles from './ArrowBack.module.css'
import { FaArrowLeft } from 'react-icons/fa'

export function ArrowBack(props) {

  const {title} = props

  const router = useRouter()

  return (
    <>
      <div className={styles.arrowBack} onClick={() => router.back()}>
        <div>
          <FaArrowLeft />
        </div>
        <div>
          <h1>{title}</h1>
        </div>
      </div>
    </>
  )
}
