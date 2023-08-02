import { Header } from '~/components'

export default function Player() {
  return (
    <div className="h-screen bg-zinc-950 text-zinc-50 flex justify-center items-center">
      <div className="flex w-[1100px] flex-col gap-6">
        <div className="flex items-center justify-between">
          <Header />
        </div>

        <main></main>
      </div>
    </div>
  )
}
