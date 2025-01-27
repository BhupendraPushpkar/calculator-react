import styles from "./ButtonContainer.module.css"

function ButtonContainer({buttonClick})
{
  const buttonNames = ["C", "1", "2", "+", "3", "4", "-", "5", "6", "*", "7", "8", "/", "=", "9", "0", "." ];
  return(
    <>
      <div className={styles.buttonContainer}>
        {buttonNames.map((button) => (<button className={styles.button} key={button} onClick={(event) => buttonClick(event, button)}>{button}</button>))}
      </div>
    </>
  )
}

export default ButtonContainer