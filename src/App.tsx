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


//TODO: for wallet adapter implemtnetiaion 
//! add button in the first model with connect your wallet beside the wallet creation button
// need to setup an option for to request the airdrop after entering the wallet address
// showing user balance
// sign a message
// sending solana