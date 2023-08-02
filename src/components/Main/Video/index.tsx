import Player from 'react-player'
import { useAppSelector } from '~/store'

export function Video() {
  const { id } = useAppSelector(({ player }) => {
    const { currentLessonIndex, currentModuleIndex } = player

    const currentLesson =
      player.course.modules[currentModuleIndex].lessons[currentLessonIndex]
    return currentLesson
  })

  return (
    <div className="flex-1">
      <div className="w-full bg-zinc-950 aspect-video">
        <Player
          width="100%"
          height="100%"
          controls
          url={`https://www.youtube.com/watch?v=${id}`}
        />
      </div>
    </div>
  )
}
