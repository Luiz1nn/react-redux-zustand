import { ChevronDown } from 'lucide-react'
import { Lesson } from '../Lesson'
import * as Collapsible from '@radix-ui/react-collapsible'
import { useAppSelector, play } from '~/store'
import { useDispatch } from 'react-redux'

type Props = {
  moduleIndex: number
  title: string
  amountOfLessons: number
}

export function Module({ moduleIndex, title, amountOfLessons }: Props) {
  const dispatch = useDispatch()

  const { currentModuleIndex, currentLessonIndex } = useAppSelector(
    ({ player }) => {
      const { currentModuleIndex, currentLessonIndex } = player

      return { currentModuleIndex, currentLessonIndex }
    },
  )

  const lessons = useAppSelector(
    ({ player }) => player.course.modules[moduleIndex].lessons,
  )

  return (
    <Collapsible.Root className="group">
      <Collapsible.Trigger className="flex w-full items-center gap-3 bg-zinc-800 p-4">
        <div className="flex h-10 w-10 rounded-full items-center justify-center bg-zinc-950 text-xs">
          {moduleIndex + 1}
        </div>

        <div className="flex flex-col gap-1 text-left">
          <strong className="text-sm">{title}</strong>
          <span className="text-xs text-zinc-400">{amountOfLessons} aulas</span>
        </div>

        <ChevronDown className="w-5 h-5 ml-auto text-zinc-400 group-data-[state=open]:rotate-180 transition-transform duration-300" />
      </Collapsible.Trigger>

      <Collapsible.Content>
        <nav className="relative flex flex-col gap-4 p-6">
          {lessons.map(({ id, title, duration }, lessonIndex) => {
            const isCurrent =
              currentModuleIndex === moduleIndex &&
              currentLessonIndex === lessonIndex

            return (
              <Lesson
                key={id}
                title={title}
                duration={duration}
                onPlay={() => dispatch(play([moduleIndex, lessonIndex]))}
                isCurrent={isCurrent}
              />
            )
          })}
        </nav>
      </Collapsible.Content>
    </Collapsible.Root>
  )
}
