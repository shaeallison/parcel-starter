import * as sharedStyles from './shared.module.css'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import { Button } from './components/Button/Button'

const SampleScreen = () => {
  return (
    <div className={sharedStyles.container}>
      <Button>Click Me!</Button>
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
          </Routes>
        </main>
      </Router>
    </>
  )
}
