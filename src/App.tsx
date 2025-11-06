import './App.css'
import Header from './components/Header'
import Grid from './components/Grid'
import { RecoilRoot } from 'recoil'
import ModalRoot from './components/ModalRoot'
import { QueryClientProvider, QueryClient } from '@tanstack/react-query'

const queryClient = new QueryClient();

function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <RecoilRoot>
        <Header />
        <Grid />
        <ModalRoot />
      </RecoilRoot>
    </QueryClientProvider>
  )
}

export default App
