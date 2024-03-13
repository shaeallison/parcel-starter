import * as sharedStyles from './shared.module.scss'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import { Button } from './components/Button/Button'
import Dogs from './screens/dogs/Dogs'
import SpellFinder from './screens/spells/SpellFinder'
import Component from './components/Component/Component'

const SampleScreen = () => {
  return (
    <div className={sharedStyles.container}>
      <Button id='click-id'>Click Me!</Button>
    </div>
  )
}

export function App() {
  return (
    <>
      <Router>
        <main>
          <Routes>
            <Route path='/' element={<SampleScreen />}></Route>
            <Route path='/dogs' element={<Dogs />}></Route>
            <Route path='/spells' element={<SpellFinder />}></Route>
            <Route path='/stripe' element={<Component />}></Route>
          </Routes>
        </main>
      </Router>
    </>
  )
}
