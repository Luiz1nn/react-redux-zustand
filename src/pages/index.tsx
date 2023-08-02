import { Provider as ReduxProvider } from 'react-redux'
import { store } from '~/store'
import Player from './player'

export default function Home() {
  return (
    <ReduxProvider store={store}>
      <Player />
    </ReduxProvider>
  )
}
