import { TopBar } from '@/components/Layout'
import styles from './BasicLayout.module.css'
import classNames from 'classnames'


export function BasicLayout(props) {

  const {
    children,
    relative= false,
    title
  } = props

  return (
    <>
      <TopBar title={title}/>
      <div className={classNames({[styles.relative]: relative})}>
        {children}
      </div>
    </>
  )
}
