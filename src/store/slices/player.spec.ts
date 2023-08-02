import { describe, expect, it } from 'vitest'
import { player as reducer, playerSlice, play } from './player'

describe('player slice', () => {
  it('should be able to play', () => {
    const initialState = playerSlice.getInitialState()

    const { currentModuleIndex, currentLessonIndex } = reducer(
      initialState,
      play([1, 2]),
    )

    expect(currentModuleIndex).toEqual(1)
    expect(currentLessonIndex).toEqual(2)
  })
})
