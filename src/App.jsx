import 'bootstrap/dist/css/bootstrap.min.css'
import styles from "./App.module.css"
import Display from "./components/Display"
import ButtonContainer from './components/ButtonContainer'
import { useState } from 'react'

function App() {
  let [calVal, setcalVal] = useState("")

  const buttonClick = (event, button) =>
  {
    console.log(button)
    if(button === 'C')
    {
      calVal = ''
      setcalVal(calVal)
    }
    else if(button === '=')
    {
      let result
      try
      {
        result = eval(calVal)
      }
      catch(e)
      {
        result = "ERR"
      }
      
      setcalVal(result)
    }
    else
    {
      calVal = calVal + button
      setcalVal(calVal)
    }
  }

  const solveExpression = (event) => {
    console.log(event)
  }

  return (
    <>
      <div className={styles.calculator}>
        <Display input = {calVal} operate = {solveExpression}></Display>
        <ButtonContainer buttonClick = {buttonClick}></ButtonContainer>
      </div>
    </>
  )
}

export default App
