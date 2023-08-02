import { Module } from './Module'
import { Video } from './Video'

export function Main() {
  return (
    <main className="relative flex overflow-hidden rounded-lg border border-zinc-800 bg-zinc-800 shadow pr-80">
      <Video />

      <aside className="w-80 absolute top-0 bottom-0 right-0 border-l divide-y-2 divide-zinc-900 border-zinc-800 bg-zinc-900 overflow-y-auto scrollbar scrollbar-thin scrollbar-track-zinc-950 scrollbar-thumb-zinc-800">
        <Module />
        <Module />
      </aside>
    </main>
  )
}
