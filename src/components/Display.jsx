import styles from "./Display.module.css"

function Display({input, operate})
{
  return(
    <>
      <input className={styles.display} type="text" placeholder="" value={input} onKeyDown={(event) => operate(event)} readOnly/>
    </>
  )
}

export default Display