import Player from 'react-player'
import { useDispatch } from 'react-redux'
import { useAppSelector } from '~/store'
import { next } from '~/store/slices'

export function Video() {
  const dispatch = useDispatch()

  const { id } = useAppSelector(({ player }) => {
    const { currentLessonIndex, currentModuleIndex } = player

    const currentLesson =
      player.course.modules[currentModuleIndex].lessons[currentLessonIndex]
    return currentLesson
  })

  function handlePlayNext() {
    dispatch(next())
  }

  return (
    <div className="flex-1">
      <div className="w-full bg-zinc-950 aspect-video">
        <Player
          width="100%"
          height="100%"
          controls
          playing
          onEnded={handlePlayNext}
          url={`https://www.youtube.com/watch?v=${id}`}
        />
      </div>
    </div>
  )
}
