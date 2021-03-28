import './App.css'
import Alert from './Components/Alert/Alert'
import Button from './Components/UI/Button/Button'
import {useState} from 'react'

function App() {
  const initialState = {type: null, text: ''}
  const [alert, setAlert] = useState(initialState)
  const [button, setButton] = useState({disabled: false})

  function alertShow (props) {
      setTimeout(() => {
          buttonFalse()
          setAlert({
              type: props.type,
              text: props.text
          })
          setTimeout(() => {
              setAlert({
                  ...initialState
              })
              buttonTrue()
          }, 3000)
      }, 0)
  }

  function buttonFalse() {
      setButton({
          disabled: true
      })
  }
  function buttonTrue() {
      setButton({
          disabled: false
      })
  }

  return (
      <div className="App">
        {alert.type ? <Alert type={alert.type} text={alert.text} /> : null}

        <h1 style={{marginTop: '20vh'}}>Your content</h1>

        <Button
            text={'Show danger alert'}
            type={'danger'}
            status={button.disabled}
            onClick={() => alertShow({type: 'danger', text: 'Alert danger'})}
        />
        <Button
            text={'Show success alert'}
            type={'success'}
            status={button.disabled}
            onClick={() => alertShow({type: 'success', text: 'Alert success'})}
        />
      </div>
  )
}

export default App;
