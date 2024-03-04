import { FC } from 'react'
import css from './Container.module.css'

interface ContainerProps {
  children: React.ReactNode
}
const Container: FC<ContainerProps> = ({ children }) => {
  return (
    <div className={css.container}>
      <div className={css.header}></div>
      {children}
      <div className={css.footer}></div>
    </div>
  )
}
export default Container
