'use client'

import { Provider as ReduxProvider } from 'react-redux'
import { TodoList, AddTodo } from '~/components'
import { store } from '~/store'

export default function Home() {
  return (
    <ReduxProvider store={store}>
      <TodoList />
      <AddTodo />
    </ReduxProvider>
  )
}
