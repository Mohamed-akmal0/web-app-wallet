import { Toaster } from 'sonner'
import './App.css'
import RootNavigation from './navigations/RootNavigation'

function App() {

  return (
    <>
      <Toaster richColors position='top-right' />
      <RootNavigation />
    </>
  )
}

export default App
