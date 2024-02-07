import * as sharedStyles from './sharedStyles.module.css'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import { UIKit } from './screens/UiKit'
import { Header } from '../src/components/header/Header'
import { Container } from './components/shared/container/Container'

const HelloWorld = () => {
  return (
    <Container>
      <h1>Hello world!</h1>
      <a href='/ui-kit' className={sharedStyles.button}>
        See the UI-Kit
      </a>
    </Container>
  )
}

export function App() {
  return (
    <>
      <Router>
        <Header />
        <main>
          <Routes>
            <Route path='/' element={<HelloWorld />}></Route>
            <Route path='/ui-kit' element={<UIKit />}></Route>
          </Routes>
        </main>
      </Router>
    </>
  )
}
