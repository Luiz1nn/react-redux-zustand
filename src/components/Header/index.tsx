import { MessageCircle } from 'lucide-react'
import { useCurrentLesson } from '~/store'

export function Header() {
  const { currentModule, currentLesson } = useCurrentLesson()

  return (
    <>
      <div className="flex flex-col gap-1">
        <h1 className="text-2xl font-bold">{currentLesson.title}</h1>
        <span>Módulo {`"${currentModule.title}"`}</span>
      </div>

      <button className="flex items-center gap-2 rounded bg-violet-500 px-3 py-2 text-sm font-medium text-white hover:bg-violet-600 transition duration-200">
        <MessageCircle className="w-4 h-4" />
        Deixar feedback
      </button>
    </>
  )
}
