import { useRouter } from 'next/router'
import { Image } from 'semantic-ui-react'
import styles from './ArrowBack.module.css'

export function ArrowBack() {

  const router = useRouter()

  return (
    <>
      <div className={styles.arrowBack} onClick={() => router.back()}>
        <Image src='/img/back.png' />
      </div>
    </>
  )
}
