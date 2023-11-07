import { useRouter } from 'next/router'
import Link from 'next/link'
import { Image } from 'semantic-ui-react'
import styles from './ArrowBackHome.module.css'

export function ArrowBackHome(props) {

  const router = useRouter()

  const {title} = props
  return (
    <>
      <div className={styles.mainArrowBack}>
        <div className={styles.arrowBack} onClick={() => router.back()}>
          <div>
            <Image src='/img/back.png' />
          </div>
          <div>
            <h1>{title}</h1>
          </div>
        </div>
        <div className={styles.home}>
          <Link href='/home'>
            <Image 
              src='/img/home.png' alt='home' />
          </Link>
        </div>
      </div>
    </>
  )
}
