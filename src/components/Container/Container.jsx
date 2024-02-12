import css from './Container.module.css'
const Container = ({ children }) => {
  return (
    <div className={css.container}>
      <div className={css.header}></div>
      {children}
      <div className={css.footer}></div>
    </div>
  )
}
export default Container
