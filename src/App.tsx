import './App.css'
import Header from './components/Header'
import Grid from './components/Grid'
import { RecoilRoot } from 'recoil'
import ModalRoot from './components/ModalRoot'

function App() {
  return (
    <RecoilRoot>
      <Header />
      <Grid />
      <ModalRoot />
    </RecoilRoot>
  )
}

export default App
