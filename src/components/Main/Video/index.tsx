import { NextSeo } from 'next-seo'
import Player from 'react-player'
import { useDispatch } from 'react-redux'
import { next, useCurrentLesson } from '~/store'

export function Video() {
  const dispatch = useDispatch()

  const { currentLesson } = useCurrentLesson()

  function handlePlayNext() {
    dispatch(next())
  }

  return (
    <>
      <NextSeo title={`Assistindo ${currentLesson.title}`} />
      <div className="flex-1">
        <div className="w-full bg-zinc-950 aspect-video">
          <Player
            width="100%"
            height="100%"
            controls
            playing
            onEnded={handlePlayNext}
            url={`https://www.youtube.com/watch?v=${currentLesson.id}`}
          />
        </div>
      </div>
    </>
  )
}
