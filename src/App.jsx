import { ClassificationType } from 'typescript'
import './App.css'
import Header from './components/Header/Header'
import SeccionAbove from "./components/Seccion1/SeccionAbove"
import SeccionBelow from './components/Seccion_2/SeccionBelow'

function App() {

  return (
    <div className='container'>
      <div className="container1">
          <Header />
      </div>
      <div className="container2">
        <SeccionBelow />
        <SeccionAbove />
      </div>
    </div>
  )
}

export default App
