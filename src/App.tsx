import * as sharedStyles from './shared.module.scss'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import { Button } from './components/Button/Button'
import Dogs from './screens/dogs/Dogs'
import Forecast from './screens/forecast/Forecast'
import SpellFinder from './screens/spells/SpellFinder'

const SampleScreen = () => {
  return (
    <div className={sharedStyles.container}>
      <Button id='click-id'>Click Me!</Button>
    </div>
  )
}

/**
 * TODO:
 * upgrade node
 * remove snapshots?
 * use _.orderBy and other sorts/filters from lodash on dog data
 */

export function App() {
  return (
    <>
      <Router>
        <main>
          <Routes>
            <Route path='/' element={<SampleScreen />}></Route>
            <Route path='/dogs' element={<Dogs />}></Route>
            <Route path='/forecast' element={<Forecast />}></Route>
            <Route path='/spells' element={<SpellFinder />}></Route>
          </Routes>
        </main>
      </Router>
    </>
  )
}
