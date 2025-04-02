import './App.css'
import { Button } from './components/ui/button'
import { signInWithGoogle } from './lib/utils'

function App() {

  return (
    <>
      <Button onClick={signInWithGoogle} variant='outline'>Sign In with Google</Button>

    </>
  )
}

export default App
